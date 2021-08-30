import "../db/ActivityLogbookMethods.jsx";

export default class ActivityLogbookManager {
    constructor(userID) {
        console.log(userID)
        this.userID = parseInt(userID);
    }

    async insertActivity({date, startTime, endTime, title, intensity, goal={}, quantity}) {
        await Meteor.callPromise('activitylogbook.insert', 
            {userID: this.userID, date: date, startTime: startTime, endTime: endTime, title: title, intensity: intensity, goal: goal, quantity: quantity});
    }

    async fetchWeekActivity(offset) {
        return Meteor.callPromise('activitylogbook.getWeekLogs', {userID: this.userID, offset: offset});
    }

    async toggleActivityDone(activityID, newStatus) {
        return Meteor.callPromise('activitylogbook.toggleDone', {userID: this.userID, activityID: activityID, newStatus: newStatus});
    }

    async updateActivity(activityID, activityTitle, startTime, endTime, intensity, goal={}, quantity) {
        return Meteor.callPromise('activitylogbook.updateActivity', 
            {userID: this.userID, activityID: activityID, activityTitle: activityTitle, startTime: startTime, endTime: endTime, intensity: intensity, goal: goal, quantity: quantity});
    }
}
