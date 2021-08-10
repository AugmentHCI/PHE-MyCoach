import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import '../imports/db/LogMethods.jsx';
import '../imports/db/MyCoachMethods.jsx';
import '../imports/db/PainLogbookMethods.jsx';
import '../imports/db/GoalSettingMethods.jsx';
import '../imports/db/ActivityLogbookMethods.jsx';
import '../imports/db/UserStudyMethods.jsx';
import moment from 'moment';


// API methode definiëren op server side, parameters = URL en user token
Meteor.methods({
  'getData'({url, userToken}) {
    if (!Meteor.settings.XKEY) {console.log("Make sure you provide a valid X-KEY for communication in the settings.json file")}
    this.unblock();
    return HTTP.call("GET", url, { headers: { "X-KEY": Meteor.settings.XKEY, "Authorization": `Bearer ${userToken}` } });
  },

  'getSMSCode'() {
    const env = "vragenlijst.idewe.be";
    const uuid = "a29d6509-5888-4f46-8fa0-7ef1a2c023b6";
    const url = `https://${env}/api/uitnodigingen/${uuid}/verificatieCode`;

    this.unblock();
    return HTTP.call("POST", url, { headers: { "X-KEY": Meteor.settings.XKEY } });
  },

  'getAnalistToken'({smsCode}) {
    const env = "vragenlijst.idewe.be";
    const uuid = "a29d6509-5888-4f46-8fa0-7ef1a2c023b6";
    const url = `https://${env}/api/vragenlijst/dataanalist/verify-code?uuidUitnodiging=${uuid}&verificatieCode=${smsCode}`;

    this.unblock();
    try { return HTTP.call("POST", url, { headers: { "X-KEY": Meteor.settings.XKEY } }) }
    catch (error) { return error }
  },

  'getUserIds'({analistToken}) {
    const env = "connector.idewe.be";
    const url = `https://${env}/healthempower/jobstudenten/api/deelnemers/export`;

    this.unblock();
    try { return HTTP.call("GET", url, { headers: { "X-KEY": Meteor.settings.XKEY, "Authorization": `Bearer ${analistToken}` } }) }
    catch (error) { return error }
  },

  'getUserData'({userId, analistToken, from="start", to="now"}) {
    const env = "connector.idewe.be";
    const fromDate = from !== "start" ? from : "2020-01-01"  ;
    const toDate =   to   !== "now"   ? to   : moment(new Date()).format("YYYY-MM-DD")  ;
    const url = `https://${env}/healthempower/jobstudenten/api/antwoorden/export?van=${fromDate}&tot=${toDate}&taal=DUTCH&gebruiker=${userId}`;

    this.unblock();
    return HTTP.call("GET", url, { headers: { "X-KEY": Meteor.settings.XKEY, "Authorization": `Bearer ${analistToken}` } });
  },

  'getFitBitData'({userId, analistToken, from="start", to="now"}) {
    const env = "connector.idewe.be";
    const fromDate = from !== "start" ? from : "2020-01-01"  ;
    const toDate =   to   !== "now"   ? to   : moment(new Date()).format("YYYY-MM-DD")  ;
    const url = `https://${env}/healthempower/phe/api/fit-data?van=${fromDate}&tot=${toDate}&gebruiker=${userId}`;

    this.unblock();
    return HTTP.call("GET", url, { headers: { "X-KEY": Meteor.settings.XKEY, "Authorization": `Bearer ${analistToken}` } });
  }
});