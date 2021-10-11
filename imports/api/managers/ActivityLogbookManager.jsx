import "../../db/ActivityLogbookMethods.jsx";

export default class ActivityLogbookManager {
    constructor(userID) {
        this.userID = parseInt(userID);
    }

    async insertActivity({date, startTime, endTime, title, intensity, wholeDay, goalId=null}) {
        await Meteor.callPromise('activitylogbook.insert', 
            {userID: this.userID, date: date, startTime: startTime, endTime: endTime, title: title, intensity: intensity, wholeDay: wholeDay, goal: goalId});
    }

    async fetchWeekActivity(offset) {
        return Meteor.callPromise('activitylogbook.getWeekLogs', {userID: this.userID, offset: offset});
    }

    async toggleActivityDone(activityID, newStatus) {
        return Meteor.callPromise('activitylogbook.toggleDone', {userID: this.userID, activityID: activityID, newStatus: newStatus});
    }

    async updateActivity({activityID, title, startTime, endTime, intensity, wholeDay, goalID=null}) {
        return Meteor.callPromise('activitylogbook.updateActivity', 
            {userID: this.userID, activityID: activityID, title: title, startTime: startTime, endTime: endTime, intensity: intensity, wholeDay: wholeDay, goalID: goalID});
    }
}
