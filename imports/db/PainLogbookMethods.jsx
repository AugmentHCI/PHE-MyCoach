import { check } from 'meteor/check';
import { PainLogbookCollection } from './PainLogbookCollection.jsx';

Meteor.methods({
    'painlogbook.insert'({userID, context, activity, intensity, thoughts, emotions, reactions}) {
        check(userID, Number);
        check(context, String);
        check(activity, String);
        check(intensity, String);
        check(thoughts, String);
        check(emotions, String);
        check(reactions, String);
   
        PainLogbookCollection.insert({
            userID: userID,
            context: context,
            activity: activity,
            intensity: intensity,
            thoughts: thoughts,
            emotions: emotions,
            reactions: reactions,
            timestamp: new Date,
        });
    },
    'painlogbook.getLogs'({userID}) {
        check(userID, Number);
        return PainLogbookCollection.find({ userID: userID }, {sort: ({timestamp: -1})}).fetch();
    },
    'painlogbook.getLog'({userID, logID}) {
        check(userID, Number);
        return PainLogbookCollection.find({ userID: userID, _id: Mongo.ObjectID(logID) }).fetch();
    }
});