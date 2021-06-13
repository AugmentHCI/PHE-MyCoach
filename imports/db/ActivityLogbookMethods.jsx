import { check } from 'meteor/check';
import { ActivityLogbookCollection } from './ActivityLogbookCollection.jsx';

Meteor.methods({
    'activitylogbook.insert'({userID}) {
        check(userID, Number);
   
        ActivityLogbookCollection.insert({
            userID: userID,
            timestamp: time ? new Date(time) : new Date,
        });
    },
    'activitylogbook.getLogs'({userID}) {
        check(userID, Number);
        return ActivityLogbookCollection.find({ userID: userID }, {sort: ({timestamp: -1})}).fetch();
    },
});