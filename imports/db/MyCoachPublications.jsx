import { Meteor } from 'meteor/meteor';
import { MyCoachQuestionCollection, MyCoachProgressCollection } from '/imports/db/MyCoachCollection.jsx';

Meteor.publish('mycoachquestion', function publishMyCoachQuestions(userID) {
  return MyCoachQuestionCollection.find({ userID: userID });
});

Meteor.publish('mycoachprogress', function publishMyCoachProgress(userID) {
  return MyCoachProgressCollection.find({ userID: userID });
});