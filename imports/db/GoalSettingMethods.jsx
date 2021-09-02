import { check } from 'meteor/check';
import { GoalSettingCollection } from './GoalSettingCollection.jsx';

Meteor.methods({
    'goalsetting.insertGoal'({userID, title, description, values, quantifier, quantity, days, trust, threshold, thresholdDescription, reward, buildupScheme}) {
        check(userID, Number);
        check(title, String);
        check(description, String);
        check(values, String);
        check(quantifier, String);
        check(quantity, Number);
        check(days, String);
        check(trust, Number);
        check(threshold, String);
        check(thresholdDescription, String);
        check(reward, String);
   
        GoalSettingCollection.insert({
            userID: userID,
            title: title, 
            description: description, 
            values: values,
            quantifier: quantifier, 
            quantity: quantity, 
            days: days, 
            trust: trust, 
            threshold: threshold, 
            thresholdDescription: thresholdDescription, 
            reward: reward,
            buildupScheme: buildupScheme,
            timestamp: new Date,
        });
    },
    'goalsetting.updateGoal'({userID, goalID, title, description, values, quantifier, quantity, days, trust, threshold, thresholdDescription, reward, buildupScheme}) {
        check(userID, Number);
        check(title, String);
        check(description, String);
        check(values, String);
        check(quantifier, String);
        check(quantity, Number);
        check(days, String);
        check(trust, Number);
        check(threshold, String);
        check(thresholdDescription, String);
        check(reward, String);
   
        GoalSettingCollection.update(
            /* Selector*/
            {
            userID: userID, 
            _id: goalID},
            /* Update query*/ 
            {$set: {
                title: title, 
                description: description, 
                values: values,
                quantifier: quantifier, 
                quantity: quantity, 
                days: days, 
                trust: trust, 
                threshold: threshold, 
                thresholdDescription: thresholdDescription, 
                reward: reward,
                buildupScheme: buildupScheme,
                timestamp: new Date,
            }});
    },
    'goalsetting.getGoals'({userID}) {
        check(userID, Number);
        return GoalSettingCollection.find({ userID: userID }, {sort: ({timestamp: -1})}).fetch();
    },
    'goalsetting.getGoal'({userID, goalID}) {
        check(userID, Number);
        let newMongoObjectId = new Mongo.Collection.ObjectID();
        newMongoObjectId._str = goalID;
        return GoalSettingCollection.findOne({ _id: newMongoObjectId._str });
    },
    'goalsetting.removeGoal'({userID, goalID}) {
        check(userID, Number);
        return GoalSettingCollection.remove({ userID: userID, _id: goalID });
    },
});