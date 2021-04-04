import "../db/MyCoachMethods.jsx";

export default class ProgressManager {
    constructor(userID) {
        this.userID = userID;
    }

    /**
     * 
     * @param {String} module The module of which the progress needs to be retreived.
     * @returns A dictionary with the modules, and submodule progress
     */
    async getModuleProgress(module) {
        let progress = JSON.parse(JSON.stringify(template));
        const result = await Meteor.callPromise('mycoachprogress.getModuleProgress', {userID: this.userID, moduleID: module});
        result.forEach(data => {
            /* Only reassign with higher priorities (e.g. do not override "COMPLETED" with "IN_PROGRESS" */
            switch (progress[data.moduleID][data.submoduleID]) {
                case undefined:
                    progress[data.moduleID][data.submoduleID] = data.status;
                    break;
                case "NOT_STARTED":
                    if (["IN_PROGRESS", "COMPLETED"].includes(data.status)) progress[data.moduleID][data.submoduleID] = data.status;
                    break;
                case "IN_PROGRESS":
                    if (data.status === "COMPLETED") progress[data.moduleID][data.submoduleID] = data.status;
                    break;
                case "COMPLETED":
                    break;
                default:
                    break;
            }
        });
        return progress;
    }

    /**
     * [DB] Marks a submodule as completed for a given user, and unlocks the subsequent module(s).
     * @param {String}  module    The module that the submodule belongs to.
     * @param {String}  submodule The submodule that is completed.
     * @param {String}  status    The new status of the given submodule (e.g. "COMPLETED").
     * @param {Boolean} isLast    Boolean indicating if this is the last submodule of the module or not (to unlock new modules).
     */
    finishSubmodule(module, submodule, status, isLast) {
        Meteor.call('mycoachprogress.setProgress', {userID: this.userID, moduleID: module, submoduleID: submodule, status: status});
        if (!isLast) {
            const nextSubmodule = submodule.split("_")[0] + "_" + submodule.split("_")[1] + "_" + String(parseInt(submodule.split("_")[2]) + 1);
            Meteor.call('mycoachprogress.setProgress', {userID: this.userID, moduleID: module, submoduleID: nextSubmodule, status: "IN_PROGRESS"});
        }  
        else {
            /* Implement Module unlocking mechanism */
        }
    }
}

const template = {
        "PAINEDUCATION":    {"PE_MOD_1": "NOT_STARTED", "PE_MOD_2": "NOT_STARTED", "PE_MOD_3": "NOT_STARTED", "PE_MOD_4": "NOT_STARTED", "PE_MOD_5": "NOT_STARTED"},
        "THOUGHTSEMOTIONS": {"TE_MOD_1": "NOT_STARTED", "TE_MOD_2": "NOT_STARTED", "TE_MOD_3": "NOT_STARTED", "TE_MOD_4": "NOT_STARTED", "TE_MOD_5": "NOT_STARTED"},
        "ACTIVITYWORK":     {"ACT_MOD_1": "NOT_STARTED", "ACT_MOD_2": "NOT_STARTED", "ACT_MOD_3": "NOT_STARTED", "ACT_MOD_4": "NOT_STARTED", "ACT_MOD_5": "NOT_STARTED"},
        "MOVEMENT": {},
        "STRESS": {},
        "SOCIAL": {}

}