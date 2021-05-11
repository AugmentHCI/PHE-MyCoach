import { check } from 'meteor/check';
import { 
    MyCoachQuestionCollection, 
    MyCoachProgressCollection, 
    MyCoachInteractionCollection, 
    MyCoachProfileCollection,  
    MyCoachShortcutCollection
} from './MyCoachCollection';

/* PROGRESS */
Meteor.methods({
    'mycoachprogress.setProgress'({userID, moduleID, submoduleID, status}) {
        check(userID, Number);
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
        check(userID, Number);
        return MyCoachProgressCollection.find({userID: userID}).fetch();
    },
    /* Gets a users progress of a given module */
    'mycoachprogress.getModuleProgress'({userID, moduleID}) {
        check(userID, Number);
        check(moduleID, String);
        return MyCoachProgressCollection.find({userID: userID, moduleID: moduleID,}).fetch();
    },
    /* Gets a users progress of a given submodule */
    'mycoachprogress.getSubmoduleProgress'({userID, submoduleID}) {
        check(userID, Number);
        check(submoduleID, String);
        return MyCoachProgressCollection.find({userID: userID, submoduleID: submoduleID}).fetch();
    }
});

/* QUESTIONS */
Meteor.methods({
    'mycoachquestion.setQuestion'({userID, module, questionID, answer}) {
        check(userID, Number);
        check(module, String);
        check(questionID, String);
   
        MyCoachQuestionCollection.insert({
            userID: userID,
            module: module,
            questionID: questionID,
            answer: answer,
            timestamp: new Date,
        });
    },
    'mycoachquestion.upsertQuestion'({userID, module, questionID, answer}) {
        check(userID, Number);
        check(module, String);
        check(questionID, String);
   
        MyCoachQuestionCollection.upsert({
            // Selector
            userID: userID,
            module: module,
            questionID: questionID,
        }, {
            // Modifier
            $set: {
                userID: userID,
                module: module,
                questionID: questionID,
                answer: answer,
                timestamp: new Date,
            }
        });
    },
    'mycoachquestion.getQuestion'({userID, questionID}) {
        check(userID, Number);
        check(questionID, String);

        return MyCoachQuestionCollection.find({userID: userID, questionID: questionID}).fetch();
    },
    'mycoachquestion.getModuleQuestions'({userID, module}) {
        check(userID, Number);
        check(module, String);

        return MyCoachQuestionCollection.find({userID: userID, module: module}).fetch();
    }
});

/* INTERACTIONS */
Meteor.methods({
    'mycoachinteraction.getInteractionStatuses'({userID, interactionID}) {
        check(userID, Number);
        check(interactionID, String);
   
        const statusList = MyCoachInteractionCollection.find({userID: userID, interactionID: interactionID}).fetch();
        let statuses = [];
        for (const [, value] of Object.entries(statusList)) {
            if (!statuses.includes(value.status)) statuses.push(value.status);
        }
        return statuses;
    },
    'mycoachinteraction.setInteractionStatus'({userID, interactionID, status}) {
        check(userID, Number);
        check(interactionID, String);
        check(status, String);

        MyCoachInteractionCollection.insert({
            userID: userID,
            interactionID: interactionID,
            status: status,
            timestamp: new Date,
        });
    }
});

/* PROFILE */
Meteor.methods({
    'mycoachprofile.getLatestProfile'({userID}) {
        check(userID, Number);

        const profiles = MyCoachProfileCollection.find({userID: userID}, {sort: ({timestamp: -1}), limit: 1}).fetch();
        return profiles.length > 0 ? profiles[0].profile : undefined;
    },
    'mycoachprofile.getQuestionnaires'({userID}) {
        check(userID, Number);

        const questionnaires = MyCoachProfileCollection.find({userID: userID}).fetch();
        return questionnaires;
    },
    'mycoachprofile.addQuestionnaire'({ userID, date, type, status, profile, CPAQ_AE, CPAQ_PW, K, K_eph, K_ns, K_rug, PCS}) {
        check(userID, Number);
        check(profile, Number);

        MyCoachProfileCollection.insert({
            userID: userID, 
            date: date, 
            type: type, 
            status: status,
            profile: profile,
            CPAQ_AE: CPAQ_AE,
            CPAQ_PW: CPAQ_PW,
            K: K,
            K_eph: K_eph,
            K_ns: K_ns,
            K_rug: K_rug,
            PCS: PCS
        });
    }
});

/* SHORTCUTS */
Meteor.methods({
    'mycoachshortcut.getShortcuts'({userID, screen, status}) {
        check(userID, Number);
        check(screen, String);
        check(status, String);
        if (status === "ANY") return MyCoachShortcutCollection.find({userID: userID, screen: screen}).fetch();
        return MyCoachShortcutCollection.find({userID: userID, screen: screen, status: status}).fetch();
    },
    'mycoachshortcut.upsertShortcut'({userID, shortcut, screen, status}) {
        check(userID, Number);
        check(shortcut, String);
        check(screen, String);
        check(status, String);

        MyCoachQuestionCollection.upsert({
            // Selector
            userID: userID,
            shortcut: shortcut,
            screen: screen,
            status: status,
        }, {
            // Modifier
            $set: {
                userID: userID,
                shortcut: shortcut,
                screen: screen,
                status: status,
            }
        });
    },
});