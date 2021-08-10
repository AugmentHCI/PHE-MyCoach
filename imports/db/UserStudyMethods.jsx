import { check } from 'meteor/check';
import { UserStudyCollection } from './UserStudyCollection.jsx';

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