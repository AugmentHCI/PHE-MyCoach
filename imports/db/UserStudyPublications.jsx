import { Meteor } from 'meteor/meteor';
import { UserStudyCollection } from '/imports/db/UserStudyCollection.jsx';

Meteor.publish('userstudy', function publishUserStudy(mail) {
  return UserStudyCollection.find({ mail: mail});
});
