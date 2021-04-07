import "../db/MyCoachMethods.jsx";

export default class ProgressManager {
    constructor(userID, profile=3) {
        this.userID = userID;
        this.profile = profile;
        this.hasToWait = [3, 4].includes(profile); /* TODO: navragen */
    }

    /**
     * Gets the user coaching progress.
     * @returns A dictionary with the modules, and submodule progress
     */
    async getUserProgress() {
        const moduleUserData = await Meteor.callPromise('mycoachprogress.getUserProgress', {userID: this.userID});
        return parseProgress(moduleUserData);
    }

    /**
     * Gets the user progress template, with the specific module filled in.
     * @param {String} module The module of which the progress needs to be retreived.
     * @returns A dictionary with the modules, and submodule progress
     */
    async getModuleProgress(module) {
        const moduleUserData = await Meteor.callPromise('mycoachprogress.getModuleProgress', {userID: this.userID, moduleID: module});
        return parseProgress(moduleUserData);
    }

    /**
     * [DB] Marks a submodule as completed for a given user, and unlocks the subsequent module(s).
     * @param {String}  module    The module that the submodule belongs to.
     * @param {String}  submodule The submodule that is completed.
     * @param {String}  status    The new status of the given submodule (e.g. "COMPLETED").
     */
    async finishSubmodule(module, submodule, status) {
        await Meteor.callPromise('mycoachprogress.setProgress', {userID: this.userID, moduleID: module, submoduleID: submodule, status: status});
        const allUserData = await Meteor.callPromise('mycoachprogress.getUserProgress', {userID: this.userID});
        const progress = parseProgress(allUserData);
        if (getModuleStatus(progress[module]) !== "COMPLETED") {
            console.log("Unlocking submodule");
            /* Unlock subsequent submodule within same module */
            const nextSubmodule = submodule.split("_")[0] + "_" + submodule.split("_")[1] + "_" + String(parseInt(submodule.split("_")[2]) + 1);
            const nextStatus = this.hasToWait ? "TO_START" : "IN_PROGRESS";
            await Meteor.callPromise('mycoachprogress.setProgress', {userID: this.userID, moduleID: module, submoduleID: nextSubmodule, status: nextStatus});
        }
        else {
            /* Unlock next module(s), depending on status and profile */
            switch (this.profile) {
                case 1:
                case 4:
                    if (getModuleStatus(progress["MOVEMENT"]) === "NOT_STARTED") this.unlockModules(["MOVEMENT"], progress);
                    else if (getModuleStatus("MOVEMENT") === "COMPLETED") this.unlockModules(["THOUGHTSEMOTIONS", "ACTIVITYWORK", "STRESS", "SOCIAL"], progress);
                    break;
                case 2:
                    if (getModuleStatus(progress["MOVEMENT"]) === "NOT_STARTED" || getModuleStatus(progress["THOUGHTSEMOTIONS"]) === "NOT_STARTED") this.unlockModules(["MOVEMENT", "THOUGHTSEMOTIONS"], progress);
                    else if (getModuleStatus(progress["MOVEMENT"]) === "COMPLETED" && getModuleStatus(progress["THOUGHTSEMOTIONS"]) === "COMPLETED") this.unlockModules(["ACTIVITYWORK", "STRESS", "SOCIAL"], progress);
                    break; 
                case 3:
                    if (getModuleStatus(progress["THOUGHTSEMOTIONS"]) === "NOT_STARTED") 
                        { this.unlockModules(["THOUGHTSEMOTIONS"], progress); }
                    else if (getModuleStatus(progress["THOUGHTSEMOTIONS"]) === "COMPLETED" && (getModuleStatus(progress["ACTIVITYWORK"]) === "NOT_STARTED" || getModuleStatus(progress["STRESS"]) === "NOT_STARTED" || getModuleStatus(progress["SOCIAL"]) === "NOT_STARTED")) 
                        { this.unlockModules(["ACTIVITYWORK", "STRESS", "SOCIAL"], progress); }
                    else if (getModuleStatus(progress["ACTIVITYWORK"]) === "COMPLETED" && getModuleStatus(progress["STRESS"]) === "COMPLETED" && getModuleStatus(progress["SOCIAL"]) === "COMPLETED") 
                        { this.unlockModules(["MOVEMENT"], progress); }
                    break; 
                case 5:
                case 6:
                    if (getModuleStatus(progress["ACTIVITYWORK"]) === "NOT_STARTED" || getModuleStatus(progress["THOUGHTSEMOTIONS"]) === "NOT_STARTED") 
                        { this.unlockModules(["ACTIVITYWORK", "THOUGHTSEMOTIONS"], progress); }
                    else if (getModuleStatus(progress["ACTIVITYWORK"]) === "COMPLETED" && getModuleStatus(progress["THOUGHTSEMOTIONS"]) === "COMPLETED" && (getModuleStatus(progress["STRESS"]) === "NOT_STARTED" || getModuleStatus(progress["SOCIAL"]) === "NOT_STARTED")) 
                        { this.unlockModules(["STRESS", "SOCIAL"], progress); }
                    else if (getModuleStatus(progress["STRESS"]) === "COMPLETED" && getModuleStatus(progress["SOCIAL"]) === "COMPLETED") 
                        { this.unlockModules(["MOVEMENT"], progress); }
                    break;
                default:
                    console.log("No profile provided for user.")
                    break;
            }
        }
    }

    /**
     * Unlocks the given array of modules for the user (and does nothing for already unlocked modules).
     * @param {[String]} modules The array of module-codes that need to be unlocked
     */
    unlockModules(modules, progress) {
        modules.forEach(module => {
            if (getModuleStatus(progress[module]) === "NOT_STARTED") {
                switch (module) {
                    case "PAINEDUCATION": 
                        Meteor.call('mycoachprogress.setProgress', {userID: this.userID, moduleID: "PAINEDUCATION", submoduleID: "PE_MOD_1", status: "IN_PROGRESS"}); 
                        break;
                    case "THOUGHTSEMOTIONS": 
                        Meteor.call('mycoachprogress.setProgress', {userID: this.userID, moduleID: "THOUGHTSEMOTIONS", submoduleID: "TE_MOD_1", status: "IN_PROGRESS"}); 
                        break;
                    case "ACTIVITYWORK": 
                        Meteor.call('mycoachprogress.setProgress', {userID: this.userID, moduleID: "ACTIVITYWORK", submoduleID: "ACT_MOD_1", status: "IN_PROGRESS"}); 
                        break;
                    case "MOVEMENT": 
                        Meteor.call('mycoachprogress.setProgress', {userID: this.userID, moduleID: "MOVEMENT", submoduleID: "MOV_MOD_1", status: "IN_PROGRESS"}); 
                        break;
                    case "STRESS": 
                        Meteor.call('mycoachprogress.setProgress', {userID: this.userID, moduleID: "STRESS", submoduleID: "STR_MOD_1", status: "IN_PROGRESS"}); 
                        break;
                    case "SOCIAL": 
                        Meteor.call('mycoachprogress.setProgress', {userID: this.userID, moduleID: "SOCIAL", submoduleID: "SOC_MOD_1", status: "IN_PROGRESS"}); 
                        break;
                }
            }
        });
    }
}

function getModuleStatus(submodules) {
    let completed = true, notStarted = true;
    for (const [, status] of Object.entries(submodules)) {
        if (status !== "COMPLETED")   completed  = false;
        if (status !== "NOT_STARTED") notStarted = false;
    }
    if (completed) return "COMPLETED";
    if (notStarted) return "NOT_STARTED";
    return "IN_PROGRESS"
}

function parseProgress(userData) {
    let progress = JSON.parse(JSON.stringify(template));
    userData.forEach(data => {
        /* Only (re)assign with higher priorities (e.g. do not override "COMPLETED" with "IN_PROGRESS" */
        switch (progress[data.moduleID][data.submoduleID]) {
            case undefined:
                progress[data.moduleID][data.submoduleID] = data.status;
                break;
            case "NOT_STARTED":
                if (["TO_START", "IN_PROGRESS", "COMPLETED"].includes(data.status)) progress[data.moduleID][data.submoduleID] = data.status;
                break;
            case "TO_START":
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

const template = {
        "PAINEDUCATION":    {"PE_MOD_1": "NOT_STARTED", "PE_MOD_2": "NOT_STARTED", "PE_MOD_3": "NOT_STARTED", "PE_MOD_4": "NOT_STARTED", "PE_MOD_5": "NOT_STARTED"},
        "THOUGHTSEMOTIONS": {"TE_MOD_1": "NOT_STARTED", "TE_MOD_2": "NOT_STARTED", "TE_MOD_3": "NOT_STARTED", "TE_MOD_4": "NOT_STARTED", "TE_MOD_5": "NOT_STARTED"},
        "ACTIVITYWORK":     {"ACT_MOD_1": "NOT_STARTED", "ACT_MOD_2": "NOT_STARTED", "ACT_MOD_3": "NOT_STARTED", "ACT_MOD_4": "NOT_STARTED", "ACT_MOD_5": "NOT_STARTED"},
        "MOVEMENT": {},
        "STRESS": {},
        "SOCIAL": {}
}
