import "../db/MyCoachMethods.jsx";

export default class ShortcutManager {
    constructor(userID) {
        this.userID = userID;
    }

    /**
     * Gets the user shortcuts on the main progress screen.
     * @returns A list of shortcut titles.
     */
    async getShortcuts(screen, status) {
        return await Meteor.callPromise('mycoachshortcut.getShortcuts', {userID: this.userID, screen: screen, status: status});
    }

    /**
     * Gets the user shortcuts on the main progress screen.
     * @returns A list of shortcut titles.
     */
         async upsertShortcut(shortcut, screen, status) {
            return await Meteor.callPromise('mycoachshortcut.upsertShortcut', {userID: this.userID, shortcut: shortcut, screen: screen, status: status});
        }

}
