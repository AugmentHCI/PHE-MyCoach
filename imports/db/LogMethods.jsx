import { check } from 'meteor/check';
import { LogCollection } from './LogCollection.jsx';

Meteor.methods({
    'logs.insert'({userID, context, action}) {
        if (userID) check(userID, Number);
        check(action, String);
        check(context, String);
   
        LogCollection.insert({
            action: action,
            context: context,
            timestamp: new Date,
            userID: userID,
        });
    },
    'logs.didSeeFitBit'({userID, context}) {
        if (userID) check(userID, Number);
        check(context, String);
        const logs = LogCollection.find({
            action: "FITBIT_POPUP",
            context: context,
            userID: userID,
        }).fetch();
        return logs.length > 0;
    }
});