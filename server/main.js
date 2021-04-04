import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import '../imports/db/LogMethods.jsx';
import '../imports/db/MyCoachMethods.jsx';


// API methode definiëren op server side, parameters = URL en user token
Meteor.methods({
  'getData'({url, userToken}) {
    if (!Meteor.settings.XKEY) {console.log("Make sure you provide a valid X-KEY for communication in the settings.json file")}
    this.unblock();
    let call = HTTP.call("GET", url, {
      headers: {
        "X-KEY": Meteor.settings.XKEY,
        "Authorization": `Bearer ${userToken}`
      }
    });
    return call;
  }
});

// API methode definiëren op server side, parameters = URL en user token
Meteor.methods({
  'getProfile'({url, userToken}) {
    if (!Meteor.settings.XKEY) {console.log("Make sure you provide a valid X-KEY for communication in the settings.json file")}
    this.unblock();
    let call = HTTP.call("GET", url, {
      headers: {
        "X-KEY": Meteor.settings.XKEY,
        "Authorization": `Bearer ${userToken}`
      }
    });
    return call;
  }
});