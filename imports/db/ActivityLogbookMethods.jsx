import { check } from 'meteor/check';
import moment from 'moment';
import { ActivityLogbookCollection } from './ActivityLogbookCollection.jsx';

Meteor.methods({
    'activitylogbook.insert'({userID, date, startTime, endTime, title, intensity, goal}) {
        check(userID, Number);
        check(intensity, String);
        check(startTime, String);
        check(endTime,   String);
        check(title,     String);
   
        ActivityLogbookCollection.insert({
            userID: userID,
            title: title,
            startTime: startTime,
            endTime: endTime,
            intensity: intensity,
            date: date,
            goal: goal,
            done: false
        });
    },
    'activitylogbook.getLogs'({userID}) {
        check(userID, Number);
        return ActivityLogbookCollection.find({ userID: userID }, {sort: ({timestamp: -1})}).fetch();
    },
    'activitylogbook.getWeekLogs'({userID, offset}) {
        check(userID, Number);
        check(offset, Number);
        const fromDate = moment(new Date()).subtract(offset, "weeks").startOf("isoWeek").toDate();
        const toDate = moment(new Date()).subtract(offset, "weeks").endOf("isoWeek").toDate();
        return ActivityLogbookCollection.find({ userID: userID, date:{'$lte':toDate,'$gte':fromDate}}, {sort: ({timestamp: -1})}).fetch();
    },
    'activitylogbook.toggleDone'({userID, activityID, newStatus}) {
        check(userID, Number);
        check(newStatus, Boolean);
        ActivityLogbookCollection.upsert({
            // Selector
            userID: userID,
            _id: activityID,
        }, {
            // Modifier
            $set: {
                userID: userID,
                _id: activityID,
                done: newStatus
            }
        });
    },
    'activitylogbook.updateActivity'({userID, activityID, title, startTime, endTime, intensity, goalID}) {
        check(userID, Number);
        check(startTime, String);
        check(endTime, String);
        check(intensity, String);
        console.log(goalID);

        ActivityLogbookCollection.upsert({
            // Selector
            userID: userID,
            _id: activityID,
        }, {
            // Modifier
            $set: {
                userID: userID,
                _id: activityID,
                title: title,
                startTime: startTime,
                endTime: endTime,
                intensity: intensity,
                goal: goalID
            }
        });
    }
});