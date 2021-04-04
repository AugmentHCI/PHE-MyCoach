import { check } from 'meteor/check';
import { MyCoachQuestionCollection, MyCoachProgressCollection } from './MyCoachCollection';

Meteor.methods({
    /* PROGRESS */
    'mycoachprogress.setProgress'({userID, moduleID, submoduleID, status}) {
        if (userID) check(userID, Number);
        check(moduleID, String);
        check(submoduleID, String);
   
        const isProgress = MyCoachProgressCollection.findOne({userID: userID, moduleID: moduleID, submoduleID: submoduleID, status: status});
        if (!isProgress) MyCoachProgressCollection.insert({
            userID: userID,
            moduleID: moduleID,
            submoduleID: submoduleID,
            status: status,
            timestamp: new Date
        });
    },
    /* Gets all of a users proress*/
    'mycoachprogress.getUserProgress'({userID}) {
        if (userID) check(userID, Number);
        return MyCoachProgressCollection.find({userID: userID}).fetch();
    },
    /* Gets a users progress of a given module */
    'mycoachprogress.getModuleProgress'({userID, moduleID}) {
        if (userID) check(userID, Number);
        check(moduleID, String);
        return MyCoachProgressCollection.find({userID: userID, moduleID: moduleID,}).fetch();
    },
    /* Gets a users progress of a given submodule */
    'mycoachprogress.getSubmoduleProgress'({userID, submoduleID}) {
        if (userID) check(userID, Number);
        check(submoduleID, String);
        return MyCoachProgressCollection.find({userID: userID, submoduleID: submoduleID}).fetch();
    },
    
    /* QUESTIONS */
    'mycoachquestion.setQuestion'({userID, questionID, answer}) {
        if (userID) check(userID, Number);
        check(questionID, String);
   
        MyCoachQuestionCollection.insert({
            userID: userID,
            questionID: questionID,
            answer: answer,
            timestamp: new Date,
        });
    },
    'mycoachquestion.getQuestion'({userID, questionID}) {
        if (userID) check(userID, Number);
        check(questionID, String);
        return MyCoachQuestionCollection.find({userID: userID, questionID: questionID}).fetch();
    }
});