import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http'


// API methode definiëren op server side, parameters = URL en user token
Meteor.methods({
  'getData'({url, userToken}) {
    //let url2 = "https://jobstudenten-dev.idewe.be/api/antwoorden/export?van=2020/02/01&tot=2020/02/07&taal=DUTCH";

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
