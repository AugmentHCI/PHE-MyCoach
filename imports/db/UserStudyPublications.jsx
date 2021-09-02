import { Meteor } from 'meteor/meteor';
import { UserStudyCollection } from '/imports/db/UserStudyCollection.jsx';
import { ProlificStudyCollection } from '/imports/db/UserStudyCollection.jsx';

Meteor.publish('userstudy', function publishUserStudy(mail) {
  return UserStudyCollection.find({ mail: mail});
});


Meteor.publish('prolificstudy', function publishProlificStudy(id) {
  return ProlificStudyCollection.find({ id: id});
});
