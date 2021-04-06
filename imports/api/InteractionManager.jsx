import "../db/MyCoachMethods.jsx";

export default class InteractionManager {
    constructor(userID) {
        this.userID = userID;
    }

    async getInteractionStatuses(interactionID) {
        const statuses = await Meteor.callPromise('mycoachinteraction.getInteractionStatuses', {userID: this.userID, interactionID: interactionID});
        return statuses;
    }

    async getMultipleInteractionStatuses(interactionIDs) {
        let promises = {};
        let results = {}
        /* Generate promises that retrieve statuses for each interactionID */
        interactionIDs.forEach(interactionID => {
            promises[interactionID] = Meteor.callPromise('mycoachinteraction.getInteractionStatuses', {userID: this.userID, interactionID: interactionID});
        });
        /* Wait until all promises are resolved, then map their results onto the respective interactionID */
        await Promise.all(Object.values(promises)).then((values) => {
            values.forEach((value, index) => {
                results[interactionIDs[index]] = value;
            })
        });
        return results;
    }

    setInteractionStatus(interactionID, status) {
        Meteor.call('mycoachinteraction.setInteractionStatus', {userID: this.userID, interactionID: interactionID, status: status});
    }
}
