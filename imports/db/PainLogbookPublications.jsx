import { Meteor } from 'meteor/meteor';
import { PainLogbookCollection } from '/imports/db/PainLogbookCollection.jsx';

Meteor.publish('painlogbook', function publishPainLogbook(userID) {
  return PainLogbookCollection.find({ userID: userID});
});
