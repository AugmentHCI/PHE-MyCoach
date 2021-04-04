import { baselineCodes, questionnaireMetadata } from './questionnaireCodes.jsx';
import moment from "moment";

export function getBaselineQuestionnaires(data) {
    let baselineQuestionnaire = {};
    data.forEach(question => {
        if (Object.keys(baselineCodes).includes(String(question.vraagId))) {
            /* Get answer, or decoded answer if coding exists */
            const answer = baselineCodes[question.vraagId].coding && baselineCodes[question.vraagId].coding[question.antwoord] !== undefined
                ? baselineCodes[question.vraagId].coding[question.antwoord] 
                : question.antwoord;
            const questionnaireDate = moment(question.datum).format("DD-MM-YYYY");
            /* Create new questionnaire for that time-period if it doesn't exist yet */
            if (!baselineQuestionnaire[questionnaireDate]) baselineQuestionnaire[questionnaireDate] = {};
            /* Add answer to corresponding time-period */
            baselineQuestionnaire[questionnaireDate][question.vraagId] = {
                value: answer, 
                date: question.datum, 
                status: question.bevragingStatus, 
                questionnaire: baselineCodes[question.vraagId].questionnaire} 
        } 
    });
    return baselineQuestionnaire;
}

export function processBaselineQuestionnaires(data) {
    const questionnaires = getBaselineQuestionnaires(data);
    /* Initialize processedQuestionnaire */
    let processedQuestionnaire = {};
    for (const [questionnaireDate,] of Object.entries(questionnaires)) { processedQuestionnaire[questionnaireDate] = {} }
    /* Populate processedQuestionnaire */
    for (const [questionnaireDate, questionnaire] of Object.entries(questionnaires)) {
        for (const [questionnaireCode, metadata] of Object.entries(questionnaireMetadata)) {
            const filteredQuestionnaire = filterQuestionnaireBy(questionnaire, questionnaireCode);
            processedQuestionnaire[questionnaireDate][questionnaireCode] = sumQuestionnaire(filteredQuestionnaire, metadata);
        }
        processedQuestionnaire[questionnaireDate]["Profile"] = calculateProfile(processedQuestionnaire[questionnaireDate]);
        processedQuestionnaire[questionnaireDate]["Date"] = questionnaireDate;
    }
    return processedQuestionnaire;
}

export function getLatestBaselineQuestionnaire(data) {
    const questionnaires = processBaselineQuestionnaires(data);
    let latestQuestionnaire = {};
    for (const [questionnaireDate, questionnaire] of Object.entries(questionnaires)) {
        if (dateComesAfter(questionnaireDate, latestQuestionnaire.date)) latestQuestionnaire = questionnaire;
    }
    console.log(latestQuestionnaire)
    return latestQuestionnaire;
}

function dateComesAfter(date1, date2) {
    if (date2 === undefined || date2 === null) return true;
    return moment(date1).diff(moment(date2)) > 0;
}


function filterQuestionnaireBy(questionnaire, filter) {
    return Object.fromEntries(Object.entries(questionnaire).filter(([,value]) => value.questionnaire === filter));
}

function sumQuestionnaire(questionnaire, metadata) {
    if (Object.keys(questionnaire).length === 0 && metadata.type !== "exists") return undefined;
    switch (metadata.type) {
        case "sum":
            return Object.keys(questionnaire).reduce((sum,key) => sum + metadata.from + questionnaire[key].value, 0);
        case "sum-inverted":
            return Object.keys(questionnaire).reduce((sum,key) => sum + (metadata.to - questionnaire[key].value), 0);
        case "value":
            return Object.keys(questionnaire).reduce((value,key) => value || (questionnaire[key].value === !metadata.value), false);
        case "exists":
            return Object.keys(questionnaire).length > 0;
    }
}

function calculateProfile(questionnaire) {
    /* No physical complaints */
    if (!questionnaire.K) {
        if (questionnaire.PCS <= 30) return 1;
        else return 2;
    }
    else {
        const PW = questionnaire["CPAQ-PW"], AE = questionnaire["CPAQ-AE"];
        if (AE <= 9 && PW <= 7) return 3;
        if (AE > 12 && PW > 11) return 4;
        if ((AE > 9 && PW <= 7) || (AE > 12 && PW <= 11)) return 5;
        if (AE <= 12 && PW > 7) return 6;
        return 0;
    }
}