import { Mongo } from 'meteor/mongo';
 
export const MyCoachQuestionCollection    = new Mongo.Collection('mycoachquestion');
export const MyCoachProgressCollection    = new Mongo.Collection('mycoachprogress');
export const MyCoachInteractionCollection = new Mongo.Collection('mycoachinteraction');
