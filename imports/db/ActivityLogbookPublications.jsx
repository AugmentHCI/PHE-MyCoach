import { Meteor } from 'meteor/meteor';
import { ActivityLogbookCollection } from '/imports/db/ActivityLogbookCollection.jsx';

Meteor.publish('activitylogbook', function publishActivityLogbook(userID) {
  return ActivityLogbookCollection.find({ userID: userID});
});
