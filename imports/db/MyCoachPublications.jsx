import { Meteor } from 'meteor/meteor';
import { MyCoachQuestionCollection, 
         MyCoachProgressCollection, 
         MyCoachInteractionCollection,
         MyCoachProfileCollection,
         MyCoachShortcutCollection } from '/imports/db/MyCoachCollection.jsx';

Meteor.publish('mycoachquestion', function publishMyCoachQuestions(userID) {
  return MyCoachQuestionCollection.find({ userID: userID });
});

Meteor.publish('mycoachprogress', function publishMyCoachProgress(userID) {
  return MyCoachProgressCollection.find({ userID: userID });
});

Meteor.publish('mycoachinteraction', function publishMyCoachProgress(userID) {
  return MyCoachInteractionCollection.find({ userID: userID });
});

Meteor.publish('mycoachprofile', function publishMyCoachProfile(userID) {
  return MyCoachProfileCollection.find({ userID: userID });
});

Meteor.publish('mycoachshortcut', function publishMyCoachShortcut(userID) {
  return MyCoachShortcutCollection.find({ userID: userID });
});