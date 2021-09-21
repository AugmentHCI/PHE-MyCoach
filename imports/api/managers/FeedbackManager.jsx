import "../../db/MyCoachMethods.jsx";

export default class FeedbackManager {
    constructor(userID) {
        this.userID = userID;
    }

    /**
     * Inserts user feedback into the database.
     */
    async insertFeedback(feedback, screen) {
        await Meteor.callPromise('mycoachfeedback.insertFeedback', {userID: this.userID, feedback: feedback, screen: screen});
    }

    /**
     * Fetches all user feedback from database.
     */
    async getAllFeedback() {
        return await Meteor.callPromise('mycoachfeedback.getAllFeedback', {});
    }
}
