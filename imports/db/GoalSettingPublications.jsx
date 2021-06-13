import { Meteor } from 'meteor/meteor';
import { GoalSettingCollection } from '/imports/db/GoalSettingCollection';

Meteor.publish('goalsetting', function publishGoalSetting(userID) {
  return GoalSettingCollection.find({ userID: userID});
});
