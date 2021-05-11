import { Mongo } from 'meteor/mongo';
 
export const MyCoachProfileCollection     = new Mongo.Collection('mycoachprofile');
export const MyCoachQuestionCollection    = new Mongo.Collection('mycoachquestion');
export const MyCoachProgressCollection    = new Mongo.Collection('mycoachprogress');
export const MyCoachShortcutCollection    = new Mongo.Collection('mycoachshortcut');
export const MyCoachInteractionCollection = new Mongo.Collection('mycoachinteraction');
