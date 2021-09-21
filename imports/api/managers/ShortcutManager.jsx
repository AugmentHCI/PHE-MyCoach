import "../../db/MyCoachMethods.jsx";

export default class ShortcutManager {
    constructor(userID) {
        this.userID = userID;
    }

    /**
     * Gets the user shortcuts on the main progress screen.
     * @returns A list of shortcut titles.
     */
    async getShortcuts(screen, status) {
        const shortcuts = await Meteor.callPromise('mycoachshortcut.getShortcuts', {userID: this.userID, screen: screen, status: status});
        return shortcuts;
    }

    /**
     * Sets a new status of a given shortcut.
     */
    async upsertShortcut(shortcut, screen, status) {
        console.log("Unlocking " + shortcut)
        await Meteor.callPromise('mycoachshortcut.upsertShortcut', {userID: this.userID, shortcut: shortcut, screen: screen, status: status});
    }

    /**
     * Resets (deletes) all shortcut settings of this user.
     */
    async resetUserShortcuts() {
        await Meteor.callPromise('mycoachshortcut.deleteUserShortcuts', {userID: this.userID});
    }
}
