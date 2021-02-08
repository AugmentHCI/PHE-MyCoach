import { check } from 'meteor/check';
import { LogCollection } from './LogCollection.jsx';

Meteor.methods({
    'logs.insert'(userID, action) {
        if (userID) check(userID, Number);
        check(action, String);
   
        LogCollection.insert({
            action: action,
            timestamp: new Date,
            userID: userID,
        });
    }
});