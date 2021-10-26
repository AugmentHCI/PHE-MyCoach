import "../../db/PainLogbookMethods.jsx";

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

    async removePainLog({logID}) {
        return await Meteor.callPromise('painlogbook.removeLog', {userID: this.userID, logID: logID});
    }

    async addPainLog(context, activity, intensity, thoughts, emotions, reactions, logs, time=undefined) {
        console.log(logs);
        await Meteor.callPromise('painlogbook.insert', {userID: this.userID, context: context, activity: activity, intensity: intensity, thoughts: thoughts, emotions: emotions, reactions: reactions, logs: logs, time:time,});
    }

    async deleteUserLogs() {
        await Meteor.callPromise('painlogbook.deleteUserLogs', {userID: this.userID});
    }
}