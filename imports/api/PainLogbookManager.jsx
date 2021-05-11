import "../db/PainLogbookMethods.jsx";

export default class PainLogbookManager {
    constructor(userID) {
        this.userID = userID;
    }

    async getPainLogs() {
        return await Meteor.callPromise('painlogbook.getLogs', {userID: this.userID});
    }

    async getPainLog(logID) {
        return await Meteor.callPromise('painlogbook.getLog', {userID: this.userID, logID: logID});
    }

    async addPainLog(context, activity, intensity, thoughts, emotions, reactions, time=undefined) {
        await Meteor.callPromise('painlogbook.insert', {userID: this.userID, context: context, activity: activity, intensity: intensity, thoughts: thoughts, emotions: emotions, reactions: reactions, time:time});
    }

    async deleteUserLogs() {
        await Meteor.callPromise('painlogbook.deleteUserLogs', {userID: this.userID});
    }
}