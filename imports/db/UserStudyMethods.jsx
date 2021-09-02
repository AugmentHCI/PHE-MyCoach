import { check } from 'meteor/check';
import { ProlificStudyCollection, UserStudyCollection } from './UserStudyCollection.jsx';

Meteor.methods({
    'userstudy.insert'({mail, settings, type, content}) {
        check(mail, String);
        check(settings, String);
        check(type, String);
        check(content, String);
   
        UserStudyCollection.insert({
            mail: mail,
            settings: settings,
            type: type,
            content: content,
            timestamp: new Date,
        });
    }
});

Meteor.methods({
    'prolificstudy.insert'({id, settings, type, content}) {
        check(settings, String);
        check(type, String);
        check(content, String);
   
        ProlificStudyCollection.insert({
            id: id,
            settings: settings,
            type: type,
            content: content,
            timestamp: new Date,
        });
    }
});