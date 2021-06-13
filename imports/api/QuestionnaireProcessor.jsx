import moment from "moment";
import { questionnaireCodes, fillerQuestionCodes } from "./questionnaireCodes";


export function parseUserQuestions(questions) {
    let parsedQuestions = [];
    questions.forEach(question => {
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
                answer: processAnswer(question.antwoord, question.mogelijkAntwoordId, definition.coding)
            })
        }
    });
    return parsedQuestions;
}

function processAnswer(answer, answerId, coding) {
    if (!coding) { console.log(`No coding provided`); return answer; }
    else if (coding.time) return (parseInt(answer.split(':')[1]) + parseInt(answer.split(':')[0]) * 60);
    else if (coding.value) return parseInt(answer);
    else if (!coding[answerId]) { console.log(`No answerId in coding provided`); return answer; }
    return coding[answerId].code;
}

export function groupUserQuestions(questions) {
    let questionnaires = { "profiel": {}, "baseline": {}, "followup": {}, "daily": {} }
    questions.forEach(question => { addQuestionToQuestionnaire(question, questionnaires[question.questionnaire]) });
    return questionnaires;
}

function addQuestionToQuestionnaire(question, questionnaire) {
    if (questionnaire[question.date] && questionnaire[question.date][question.subquestionnaire]) 
        questionnaire[question.date][question.subquestionnaire].push({questioncode: question.questioncode, answer: question.answer});
    else if (questionnaire[question.date]) 
        questionnaire[question.date][question.subquestionnaire] = [{questioncode: question.questioncode, answer: question.answer}];
    else { questionnaire[question.date] = {[question.subquestionnaire]: [{questioncode: question.questioncode, answer: question.answer}]} }
}