import moment from "moment";
import { questionnaireCodes, fillerQuestionCodes } from "../questionnaireCodes/questionnaireCodes";
import { dateComesAfter, dateComesBefore, daysBetween } from "../Moment";

export class UserQuestions {

    constructor(questions) {
        this.questions = questions;
        console.log(questions);
        this.parsedQuestions = undefined;
        this.groupedQuestions = undefined;
        /* Result contains the most recent operation */
        this.result = questions;
    }
    
    parseUserQuestions() {
        let parsedQuestions = [];
        for (const question of this.questions) {
            /* Set date and answer */
            if (question.vraag.split("_").length === 0 || question.vraag.split("_")[1] !== "f") parsedQuestions.push({
                questionnaire: question.vragenlijstNaam,
                questioncode: question.vraag,
                subquestionnaire: this.#getSubquestionnaire(question.vraag),
                date: moment(question.datum).subtract(2, 'hours').format("DD-MM-YYYY"),
                answer: this.#processAnswer(question.mogelijkAntwoord)
            })
        }
        this.parsedQuestions = parsedQuestions;
        this.result = parsedQuestions;
        return this;
    }

    groupUserQuestions() {
        /* Pre-requisite - Raw question data has to be parsed */
        if (!this.parsedQuestions) this.parseUserQuestions();
        /* Group user questions */
        let questionnaires = { "phe-profiel": {}, "phe-voorgeschiedenis": {}, "phe-6-wekelijks": {}, "phe-dagelijks": {} }
        this.parsedQuestions?.forEach(question => { this.#addQuestionToQuestionnaire(question, questionnaires[question.questionnaire]) });
        questionnaires["phe-6-wekelijks"] = this.#groupFollowup(questionnaires["phe-6-wekelijks"]);
        /* Save result */
        this.groupedQuestions = questionnaires;
        this.result = questionnaires;
        return this;
    }

    getQuestionData(questionnaire, subquestionnaire, question, from, to) {
        /* Pre-requisite - Raw question data has to be parsed and grouped */
        if (!this.groupedQuestions) this.groupUserQuestions();
        /* Get subquestionnaire */
        const userQuestionnaire = this.groupedQuestions?.[questionnaire];
        console.log(this.groupedQuestions)
        if (!userQuestionnaire) { 
            console.error(`QuestionnaireProcessor - getSubquestionnaireData: questionnaire ${questionnaire} is not valid.`); 
            this.result = undefined;
            return this;
        }

        let result = [];
        let date = moment(from, "DD-MM-YYYY");
        do {
            const dateQuestionnaire = userQuestionnaire[date.format("DD-MM-YYYY")];
            if (!dateQuestionnaire) result.push({date: date.format("ddd").replace(".", ""), value: 0});
            else {
                Object.entries(dateQuestionnaire).forEach(([subquestionnaire_q, questions]) => {
                    if (subquestionnaire_q === subquestionnaire) {
                        questions.forEach(question_q => { if (question_q.questioncode === question) result.push({date: date.format("ddd").replace(".", ""), value: question_q.answer})})
                    }
                })
            }
            date = date.add(1, "days");
        }
        while (!dateComesAfter(date.format("DD-MM-YYYY"), to, "DD-MM-YYYY"))
        /* Save result */
        this.result = result;
        return this;
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
        //const followupsPercent = Math.round(Object.keys(this.result.followup).length / Math.floor(period / 42) * 10000 ) / 100;
        this.result["info"] = {
            rrnr: rrnr, 
            user: userId, 
            from: earliestDate, 
            to: latestDate, 
            period: period, 
            //dailiesDone: Object.keys(this.result.daily).length,
            //dailiesPercent: Math.round(Object.keys(this.result.daily).length / period * 10000) / 100,
            //followupsReceived: Math.floor(period / 42),
            //followupsDone: Object.keys(this.result.followup).length,
            //followupsPercent: isNaN(followupsPercent) ? 0 : followupsPercent
        }
        return this;
    }

    #processAnswer = function(answer) {
        if (!answer) return answer;
        let processedAnswer = answer.replaceAll(" ", "");
        /* Fix for vas including "suggesties." */
        processedAnswer = answer.replaceAll("suggesties.", "");
        /* Fix for VAS-slider values (map values to 0 or 100) */
        if (["bb11_a", "bb21_a", "t1_a", "vas1_a"].includes(processedAnswer)) return 0;
        if (["bb12_a", "bb22_a", "t2_a", "vas2_a"].includes(processedAnswer)) return 100;
        return isNaN(processedAnswer) ? processedAnswer : parseInt(processedAnswer);
    }

    #getSubquestionnaire = function(questionCode) {
        return questionCode.split(/(\d+)/)[0];
    }

    #groupFollowup = function(followup) {
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

    #addQuestionToQuestionnaire = function(question, questionnaire) {
        if (questionnaire[question.date] && questionnaire[question.date][question.subquestionnaire]) 
            questionnaire[question.date][question.subquestionnaire].push({questioncode: question.questioncode, answer: question.answer});
        else if (questionnaire[question.date]) 
            questionnaire[question.date][question.subquestionnaire] = [{questioncode: question.questioncode, answer: question.answer}];
        else { questionnaire[question.date] = {[question.subquestionnaire]: [{questioncode: question.questioncode, answer: question.answer}]} }
    }
}


export class UserQuestionsOld {

    constructor(questions) {
        this.result = questions;
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
