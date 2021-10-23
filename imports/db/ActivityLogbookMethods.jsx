import { check } from 'meteor/check';
import moment from 'moment';
import { ActivityLogbookCollection } from './ActivityLogbookCollection.jsx';

Meteor.methods({
    'activitylogbook.insert'({userID, date, startTime, endTime, title, intensity, wholeDay, goal}) {
        check(userID, Number);
        check(intensity, String);
        check(startTime, String);
        check(endTime,   String);
        check(wholeDay,  Boolean);
        check(title,     String);
   
        ActivityLogbookCollection.insert({
            userID: userID,
            title: title,
            startTime: startTime,
            endTime: endTime,
            intensity: intensity,
            date: date,
            wholeDay: wholeDay,
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
    'activitylogbook.removeActivity'({userID, activityID}) {
        check(userID, Number);
        return ActivityLogbookCollection.remove({ userID: userID, _id: activityID });
    },
    'activitylogbook.updateActivity'({userID, activityID, title, startTime, endTime, intensity, wholeDay, goalID}) {
        check(userID, Number);
        check(startTime, String);
        check(endTime, String);
        check(wholeDay, Boolean);
        check(intensity, String);

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
                wholeDay: wholeDay,
                goal: goalID
            }
        });
    }
});