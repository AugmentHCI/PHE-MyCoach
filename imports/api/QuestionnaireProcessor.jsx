import moment from "moment";
import { questionnaireCodes, fillerQuestionCodes } from "./questionnaireCodes";

export class UserQuestions {

    constructor(questions) {
        this.result = questions;
        console.log(questions)
    }
    
    parseUserQuestions() {
        let parsedQuestions = [];
        this.result.forEach(question => {
            const definition = questionnaireCodes[question.vraagId];
            /* Question ID not in our list of IDs */
            if (!(definition || fillerQuestionCodes[question.vraagId])) console.log(`Error - Did not find question with id: ${question.vraagId}`)
            else if (definition) {
                /* Handle errors / warnings */
                if (!definition.coding) console.log(`No coding provided for question ${question.vraagVertaling}`)
                if (!definition.questioncode) console.log(`No questioncode provided for question ${question.vraagVertaling}`)
                /* Set date and answer */
                parsedQuestions.push({
                    questionnaire: definition.questionnaire,
                    questioncode: definition.questioncode,
                    subquestionnaire: definition.subquestionnaire ? definition.subquestionnaire : "undefined",
                    date: moment(question.datum).subtract(2, 'hours').format("DD-MM-YYYY"),
                    answer: this.processAnswer(question.antwoord, question.mogelijkAntwoordId, definition.coding, definition.questioncode)
                })
            }
        });
        this.result = parsedQuestions;
        return this;
    }

    processAnswer(answer, answerId, coding, qcode) {
        if (!coding) { console.log(`No coding provided`); return answer; }
        else if (coding.time) return (parseInt(answer.split(':')[1]) + parseInt(answer.split(':')[0]) * 60);
        else if (coding.value) return parseInt(answer);
        else if (!coding[answerId]) { console.log(`No answerId in coding provided for question code: ${qcode} (answerId: ${answerId}, answer: ${answer})`); return answer; }
        return coding[answerId].code;
    }

    groupUserQuestions() {
        let questionnaires = { "profiel": {}, "baseline": {}, "followup": {}, "daily": {} }
        this.result.forEach(question => { this.addQuestionToQuestionnaire(question, questionnaires[question.questionnaire]) });
        questionnaires.followup = this.#groupFollowup(questionnaires.followup);
        this.result = questionnaires;
        return this;
    }

    #groupFollowup = function(followup) {
        console.log(followup);
        let newFollowup = {};
        let dates = Object.keys(followup);
        while (dates.length > 0) {
            console.log(`At start: ${JSON.stringify(dates)}`);
            const date = dates.pop(); /* Date currently checking */
            console.log(`Popped: ${date} Current: ${JSON.stringify(dates)}`);
            let questionnaire = followup[date]; /* Corresponding questionnaire */
            for (let i = 0; i < dates.length; i++) {
                const otherDate = dates[i];
                if (daysBetween(date, otherDate, true, "DD-MM-YYYY") < 10) {
                    console.log(dates);
                    console.log(`Removing ${otherDate}`)
                    dates.splice(i, 1); /* Remove date */
                    i--;
                    console.log(dates);
                    questionnaire = this.#mergeQuestionnaires(questionnaire, followup[otherDate]) /* Merge questionnaires */
                }
            }
            console.log(`Adding date ${date}`)
            newFollowup[date] = questionnaire; /* Add (merged) questionnaire to new dictionary */
        }
        return newFollowup;
    }

    #mergeQuestionnaires = function(q1, q2) {
        const newQuestionnaire = {...q1};
        Object.keys(q2).forEach(q => {
            if (Object.keys(newQuestionnaire).includes(q)) newQuestionnaire[q] = newQuestionnaire[q].concat(q2[q]);
            else { newQuestionnaire[q] = q2[q] }
        })
        return newQuestionnaire;
    }

    tagUserQuestions(userId, rrnr) {
        let earliestDate = undefined;
        let latestDate = undefined;
        for (const questionnaireType of Object.keys(this.result)) {
            for (const questionnaireDate of Object.keys(this.result[questionnaireType])) {
                if (dateComesAfter(questionnaireDate, latestDate, "DD-MM-YYYY"))    latestDate   = questionnaireDate;
                if (dateComesBefore(questionnaireDate, earliestDate, "DD-MM-YYYY")) earliestDate = questionnaireDate;
            }
        }
        const period = daysBetween(earliestDate, latestDate, true, "DD-MM-YYYY");
        const followupsPercent = Math.round(Object.keys(this.result.followup).length / Math.floor(period / 42) * 10000 ) / 100;
        this.result["info"] = {
            rrnr: rrnr, 
            user: userId, 
            from: earliestDate, 
            to: latestDate, 
            period: period, 
            dailiesDone: Object.keys(this.result.daily).length,
            dailiesPercent: Math.round(Object.keys(this.result.daily).length / period * 10000) / 100,
            followupsReceived: Math.floor(period / 42),
            followupsDone: Object.keys(this.result.followup).length,
            followupsPercent: isNaN(followupsPercent) ? 0 : followupsPercent
        }
        return this;
    }

    addQuestionToQuestionnaire(question, questionnaire) {
        if (questionnaire[question.date] && questionnaire[question.date][question.subquestionnaire]) 
            questionnaire[question.date][question.subquestionnaire].push({questioncode: question.questioncode, answer: question.answer});
        else if (questionnaire[question.date]) 
            questionnaire[question.date][question.subquestionnaire] = [{questioncode: question.questioncode, answer: question.answer}];
        else { questionnaire[question.date] = {[question.subquestionnaire]: [{questioncode: question.questioncode, answer: question.answer}]} }
    }
}

/**
 * Returns true if date1 comes strictly after date2, false otherwise.
 * @param {String} date1 The first date
 * @param {String} date2 The second date, or undefined
 * @returns 
 */
function dateComesAfter(date1, date2, format=undefined) {
    if (date2 === undefined || date2 === null) return true;
    if (format) return moment(date1, format).diff(moment(date2, format)) > 0;
    return moment(date1).diff(moment(date2)) > 0;
}

/**
 * Returns true if date1 comes strictly before date2, false otherwise.
 * @param {String} date1 The first date
 * @param {String} date2 The second date, or undefined
 * @returns 
 */
 function dateComesBefore(date1, date2, format=undefined) {
    if (date2 === undefined || date2 === null) return true;
    if (format) return moment(date1, format).diff(moment(date2, format)) < 0;
    return moment(date1).diff(moment(date2)) < 0;
}

/**
 * Returns the days between two days (as either an absolute or relative value).
 * @param {String} date1     The first date
 * @param {String} date2     The second date
 * @param {Boolean} absolute Whether the days between needs to be absolute or relative (negative if date2 comes before date1).
 * @param {String} format    Format of the date objects to be interpreted by moment.
 * @returns 
 */
function daysBetween(date1, date2, absolute=true, format=undefined) {
    let difference = format ? moment(date1, format).diff(moment(date2, format)) : moment(date1).diff(moment(date2));
    let daysBetweenDates = Math.round(moment.duration(difference).asDays());
    if (absolute) return Math.abs(daysBetweenDates)+1;
    return daysBetweenDates+1;
}