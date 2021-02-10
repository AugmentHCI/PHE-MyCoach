import { Meteor } from 'meteor/meteor';
import { LogCollection } from '/imports/db/LogCollection.jsx';

Meteor.publish('logs', function publishMyProgressLogs(userID) {
  return LogCollection.find({ userID: userID, context: "MyProgress"});
});
