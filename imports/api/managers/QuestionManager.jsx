import "../../db/MyCoachMethods.jsx";

export default class QuestionManager {
    constructor(userID) {
        this.userID = userID;
    }

    async getModuleQuestions(module) {
        const questions = await Meteor.callPromise('mycoachquestion.getModuleQuestions', {userID: this.userID, module: module.toUpperCase()});
        let questionDict = {};
        questions.forEach(question => {
            questionDict[question.questionID] = question.answer;
        });
        return questionDict;
    }

    async resetUserQuestions() {
       await Meteor.callPromise('mycoachquestion.deleteUserQuestions', {userID: this.userID});
    }

    /* TODO: Fix */
    async getLatestAnswerOnQuestion(questionID) {
        let answers = await Meteor.callPromise('mycoachquestion.getQuestion', {userID: this.userID, questionID: questionID});
        if (answers.length > 0) return answers[answers.length-1].answer;
        return undefined;
    }

    async setModuleQuestion(module, questionID, answer, allowMultiple=true) {
        if (!allowMultiple) { await Meteor.callPromise('mycoachquestion.upsertQuestion', {userID: this.userID, module: module.toUpperCase(), questionID: questionID, answer: answer}) }
        else { await Meteor.callPromise('mycoachquestion.setQuestion', {userID: this.userID, module: module.toUpperCase(), questionID: questionID, answer: answer}) }
    }
}