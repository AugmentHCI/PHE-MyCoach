import "../db/ActivityLogbookMethods.jsx";

export default class ActivityLogbookManager {
    constructor(userID) {
        this.userID = userID;
    }

    async insertActivity(date, startTime, endTime, title, intensity) {
        await Meteor.callPromise('activitylogbook.insert', {userID: this.userID, date: date, startTime: startTime, endTime: endTime, title: title, intensity: intensity});
    }

    async fetchWeekActivity(offset) {
        return Meteor.callPromise('activitylogbook.getWeekLogs', {userID: this.userID, offset: offset});
    }

    async toggleActivityDone(activityID, newStatus) {
        return Meteor.callPromise('activitylogbook.toggleDone', {userID: this.userID, activityID: activityID, newStatus: newStatus});
    }

    async updateActivity(activityID, activityTitle, startTime, endTime, intensity) {
        return Meteor.callPromise('activitylogbook.updateActivity', {userID: this.userID, activityID: activityID, activityTitle: activityTitle, startTime: startTime, endTime: endTime, intensity: intensity});
    }
}
