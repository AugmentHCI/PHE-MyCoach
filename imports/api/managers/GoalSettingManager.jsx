import "../../db/GoalSettingMethods";

export default class GoalSettingManager {
    constructor(userID) {
        this.userID = userID;
    }

    /**
     * Inserts a new goal into the database.
     */
    async insertGoal({title, description, values, quantifier, quantity, wholeDay, days, trust, threshold, thresholdDescription, reward, buildupScheme}) {
        await Meteor.callPromise('goalsetting.insertGoal', {
            userID: this.userID,
            title: title, 
            description: description, 
            values: values,
            quantifier: quantifier, 
            quantity: quantity, 
            wholeDay: wholeDay,
            days: days, 
            trust: trust, 
            threshold: threshold, 
            thresholdDescription: thresholdDescription, 
            reward: reward,
            buildupScheme: buildupScheme,
            timestamp: new Date()
        });
    }

    /**
     * Updates an existing goal with the given goalID into the database.
     */
    async updateGoal({goalID, title, description, values, quantifier, quantity, wholeDay, days, trust, threshold, thresholdDescription, reward, buildupScheme}) {
        await Meteor.callPromise('goalsetting.updateGoal', {
            userID: this.userID,
            goalID: goalID,
            title: title, 
            description: description, 
            values: values,
            quantifier: quantifier, 
            quantity: quantity, 
            wholeDay: wholeDay,
            days: days, 
            trust: trust, 
            threshold: threshold, 
            thresholdDescription: thresholdDescription, 
            reward: reward,
            buildupScheme: buildupScheme,
            timestamp: new Date()
        });
    }

    /**
     * Updates an existing goal's buildupScheme with the given goalID into the database.
     */
         async updateGoalScheme({goalID, buildupScheme}) {
            await Meteor.callPromise('goalsetting.updateGoalScheme', {
                userID: this.userID,
                goalID: goalID,
                buildupScheme: buildupScheme,
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

    /**
     * Removes a specific goal with the given goalID.
     */
    async removeGoal(goalID) {
        return Meteor.callPromise('goalsetting.removeGoal', { userID: this.userID, goalID: goalID });
    }
}
