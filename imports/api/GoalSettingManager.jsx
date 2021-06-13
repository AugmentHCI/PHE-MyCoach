import "../db/GoalSettingMethods";

export default class GoalSettingManager {
    constructor(userID) {
        this.userID = userID;
    }

    /**
     * Inserts a new goal into the database.
     */
    async insertGoal(title, description, values, quantifier, quantity, days, trust, threshold, thresholdDescription, reward) {
        await Meteor.callPromise('goalsetting.insertGoal', {
            userID: this.userID,
            title: title, 
            description: description, 
            values: values,
            quantifier: quantifier, 
            quantity: quantity, 
            days: days, 
            trust: trust, 
            threshold: threshold, 
            thresholdDescription: thresholdDescription, 
            reward: reward,
            timestamp: new Date()
        });
    }

    /**
     * Updates an existing goal with the given goalID into the database.
     */
         async updateGoal(goalID, title, description, values, quantifier, quantity, days, trust, threshold, thresholdDescription, reward) {
            await Meteor.callPromise('goalsetting.updateGoal', {
                userID: this.userID,
                goalID: goalID,
                title: title, 
                description: description, 
                values: values,
                quantifier: quantifier, 
                quantity: quantity, 
                days: days, 
                trust: trust, 
                threshold: threshold, 
                thresholdDescription: thresholdDescription, 
                reward: reward,
                timestamp: new Date()
            });
        }

    /**
     * Retrieves all goals associated to the given user.
     */
    async getUserGoals() {
        return await Meteor.callPromise('goalsetting.getGoals', { userID: this.userID });
    }

    /**
     * Retrieves a specific goal with the given goalID.
     */
    async getUserGoal(goalID) {
        return await Meteor.callPromise('goalsetting.getGoal', { userID: this.userID, goalID: goalID });
    }
}
