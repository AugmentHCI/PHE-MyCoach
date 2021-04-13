import "../db/MyCoachMethods.jsx";
import { baselineCodes, questionnaireMetadata, questionnaireCodes, fillerQuestionCodesNew } from './questionnaireCodes.jsx';
import { userDataLong } from "./dummydata.jsx";
import moment from "moment";
import id from "date-fns/esm/locale/id/index.js";


/* TODO: Test PW AND AW Questionnaires */

export default class ProfileManager {
    constructor(userID, userToken) {
        this.userID = userID;
        this.userToken = userToken;
    }

    /* MongoDB Calls */

    async getLatestProfile() {
        return await Meteor.callPromise('mycoachinteraction.getLatestProfile', {userID: this.userID});
    }

    setProfile() {

    }

    /* External Calls */

    async initializeUser() {
        const fromDate = "2020-01-01", toDate = moment().format("YYYY-MM-DD");
        const url = `https://connector.idewe.be/healthempower/jobstudenten/api/antwoorden/export?van=${fromDate}&tot=${toDate}&taal=DUTCH`;
        const data = await Meteor.callPromise("getData", { url: url, userToken: this.userToken });
        let baselineQuestionnaires = this.processBaselineQuestionnaires(this.getBaselineQuestionnaires(data.data));
        for (const [date, questionnaire] of Object.entries(baselineQuestionnaires)) {
            Meteor.call('mycoachprofile.addBaselineQuestionnaire', {
                userID: this.userID, 
                date: new Date(date), 
                profile: questionnaire.profile,
                CPAQ_AE: questionnaire.CPAQ_AE,
                CPAQ_PW: questionnaire.CPAQ_PW,
                K: questionnaire.K,
                K_eph: questionnaire.K_eph,
                K_ns: questionnaire.K_ns,
                K_rug: questionnaire.K_rug,
                PCS: questionnaire.PCS
            });
        }
        console.log(baselineQuestionnaires)
        return baselineQuestionnaires;
    }

    /**
     * Fetches user-data from IDEWE over time-periods of 7 weeks, until at least 1 baseline questionnaire is found.
     * @param {Int} number The minimum number of baseline questionnaires that needs to be found.
     * @returns 
     */
    async getExternalBaselineData(number=1) {
        let baselineQuestionnaires = {};
        let data = [];
        let weekOffset = -1;
        while (Object.keys(baselineQuestionnaires).length < number) {
            weekOffset++;
            const fromDate = moment().subtract(7 + (weekOffset * 7), "weeks").add(1, "day").format("YYYY-MM-DD");
            if (dateComesAfter("2020-01-01", fromDate)) { break; }
            const toDate = moment().subtract((weekOffset * 7), "weeks").format("YYYY-MM-DD");
            const url = `https://connector.idewe.be/healthempower/jobstudenten/api/antwoorden/export?van=${fromDate}&tot=${toDate}&taal=DUTCH`;
            const fetchedData = await Meteor.callPromise("getData", { url: url, userToken: this.userToken });
            data = data.concat(fetchedData.data);
            baselineQuestionnaires = this.getBaselineQuestionnaires(data);
        }
        console.log(this.processBaselineQuestionnaires(baselineQuestionnaires))
        return baselineQuestionnaires;
    }

    getBaselineQuestionnaires(dataX) {
        let data = userDataLong;
        let baselineQuestionnaire = {};
        data.forEach(question => {
            if (Object.keys(questionnaireCodes).includes(String(question.vraagId)) && ["followup", "baseline"].includes(questionnaireCodes[question.vraagId].questionnaire)) {
                /* Get answer, or decoded answer if coding exists */
                const answer = questionnaireCodes[question.vraagId].coding 
                    && questionnaireCodes[question.vraagId].coding?.[question.mogelijkAntwoordId]?.code !== undefined 
                    && questionnaireCodes[question.vraagId].coding?.[question.mogelijkAntwoordId]?.code !== ""
                    ? questionnaireCodes[question.vraagId].coding[question.mogelijkAntwoordId].code
                    : question.antwoord;
                const questionnaireDate = moment(question.datum).format("YYYY-MM-DD");
                /* Create new questionnaire for that time-period if it doesn't exist yet */
                if (!baselineQuestionnaire[questionnaireDate]) baselineQuestionnaire[questionnaireDate] = {};
                /* Add answer to corresponding time-period */
                baselineQuestionnaire[questionnaireDate][question.vraagId] = {
                    value: answer, 
                    date: question.datum, 
                    status: question.bevragingStatus, 
                    type: questionnaireCodes[question.vraagId].questionnaire,
                    questionnaire: questionnaireCodes[question.vraagId].subquestionnaire} 
            } 
            else {
                if (question.vragenlijstId !== 3 && question.vragenlijstId !== 5 && Object.keys(fillerQuestionCodesNew).includes(question.vraagId)) console.log(question);
            }
        });
        console.log(baselineQuestionnaire)
        return baselineQuestionnaire;
    }
    
    processBaselineQuestionnaires(baselineQuestionnaires) {
        console.log(baselineQuestionnaires);
        /* Initialize processedQuestionnaire */
        let processedQuestionnaire = {};
        for (const [questionnaireDate,] of Object.entries(baselineQuestionnaires)) { processedQuestionnaire[questionnaireDate] = {} }
        /* Populate processedQuestionnaire */
        for (const [questionnaireDate, questionnaire] of Object.entries(baselineQuestionnaires)) {
            for (const [questionnaireCode, metadata] of Object.entries(questionnaireMetadata)) {
                const filteredQuestionnaire = this.filterQuestionnaireBy(questionnaire, questionnaireCode);
                processedQuestionnaire[questionnaireDate][questionnaireCode] = this.sumQuestionnaire(filteredQuestionnaire, metadata);
            }
            processedQuestionnaire[questionnaireDate]["date"]    = questionnaireDate;
            processedQuestionnaire[questionnaireDate]["profile"] = this.calculateProfile(processedQuestionnaire[questionnaireDate]);
            processedQuestionnaire[questionnaireDate]["type"]    = this.reduceQuestionnaireValue(questionnaire, "type");
            processedQuestionnaire[questionnaireDate]["status"]  = this.reduceQuestionnaireValue(questionnaire, "status");
        }
        return processedQuestionnaire;
    }
    
    getLatestBaselineQuestionnaire(data) {
        const questionnaires = processBaselineQuestionnaires(data);
        let latestQuestionnaire = {};
        for (const [questionnaireDate, questionnaire] of Object.entries(questionnaires)) {
            if (dateComesAfter(questionnaireDate, latestQuestionnaire.date)) latestQuestionnaire = questionnaire;
        }
        return latestQuestionnaire;
    }
    
    filterQuestionnaireBy(questionnaire, filter) {
        return Object.fromEntries(Object.entries(questionnaire).filter(([,value]) => value.questionnaire === filter));
    }
    
    sumQuestionnaire(questionnaire, metadata) {
        if (Object.keys(questionnaire).length === 0 && metadata.type !== "exists") return undefined;
        switch (metadata.type) {
            case "sum":
                return Object.keys(questionnaire).reduce((sum,key) => sum + metadata.from + questionnaire[key].value, 0);
            case "sum-inverse":
                return Object.keys(questionnaire).reduce((sum,key) => sum + (metadata.to - questionnaire[key].value), 0);
            case "value":
                return Object.keys(questionnaire).reduce((value,key) => value || (questionnaire[key].value !== metadata.value), false);
            case "exists":
                return Object.keys(questionnaire).length > 0;
        }
    }

    reduceQuestionnaireValue(questionnaire, type) {
        let distinctValues = [];
        for (const [, data] of Object.entries(questionnaire)) {
            if (!distinctValues.includes(data[type])) distinctValues.push(data[type]);
        }
        if (distinctValues.length === 0) return "";
        if (distinctValues.length === 1) return distinctValues[0].toUpperCase();
        return distinctValues.map(value => value.toUpperCase());
    }
    
    calculateProfile(questionnaire) {
        /* No physical complaints */
        if (!questionnaire.K) {
            if (questionnaire.PCS <= 30) return 1;
            else return 2;
        }
        else {
            const PW = questionnaire["CPAQ_PW"], AE = questionnaire["CPAQ_AE"];
            if (AE <= 9 && PW <= 7) return 3;
            if (AE > 12 && PW > 11) return 4;
            if ((AE > 9 && PW <= 7) || (AE > 12 && PW <= 11)) return 5;
            if (AE <= 12 && PW > 7) return 6;
            return 0;
        }
    }
}

function daysBetween(date1, date2, absolute=true) {
    let daysBetweenDates = Math.round(moment.duration(moment(date1).diff(moment(date2))).asDays());
    if (absolute) return Math.abs(daysBetweenDates);
    return daysBetweenDates;
}


function dateComesAfter(date1, date2) {
    if (date2 === undefined || date2 === null) return true;
    return moment(date1).diff(moment(date2)) > 0;
}