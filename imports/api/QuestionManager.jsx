import "../db/MyCoachMethods.jsx";

export default class QuestionManager {
    constructor(userID) {
        this.userID = userID;
    }

    async getModuleQuestions(module) {
        const questions = await Meteor.callPromise('mycoachquestion.getModuleQuestions', {userID: this.userID, module: module});
        let questionDict = {};
        questions.forEach(question => {
            questionDict[question.questionID] = question.answer;
        });
        return questionDict;
    }

    /* TODO: Fix */
    async getLatestAnswerOnQuestion(questionID) {
        let answers = await Meteor.callPromise('mycoachquestion.getQuestion', {userID: this.userID, questionID: questionID});
        if (answers.length > 0) return answers[0].answer;
        return undefined;
    }

    setModuleQuestion(module, questionID, answer) {
        Meteor.call('mycoachquestion.setQuestion', {userID: this.userID, module: module, questionID: questionID, answer: answer});
    }
}