import { Meteor } from 'meteor/meteor';
import { MyCoachQuestionCollection, MyCoachProgressCollection, MyCoachInteractionCollection } from '/imports/db/MyCoachCollection.jsx';

Meteor.publish('mycoachquestion', function publishMyCoachQuestions(userID) {
  return MyCoachQuestionCollection.find({ userID: userID });
});

Meteor.publish('mycoachprogress', function publishMyCoachProgress(userID) {
  return MyCoachProgressCollection.find({ userID: userID });
});

Meteor.publish('mycoachinteraction', function publishMyCoachProgress(userID) {
  return MyCoachInteractionCollection.find({ userID: userID });
});