import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import moment from "moment";
import { FlowRouter } from 'meteor/kadira:flow-router';
import FadeIn from 'react-fade-in';

// Import internationalization files
import i18n from 'meteor/universe:i18n';
import "../../../i18n/nl.i18n.json"
import "../../../i18n/fr.i18n.json"
import "../../../i18n/en.i18n.json"

// Import data processing functions
import { setDataParserLocale } from '../../api/dataparser';
import { getWeeklyDummyData, getMonthlyDummyData } from '../../api/dummydata.jsx';
import fitData from '../../api/dummydata.jsx';

import jwt_decode from "jwt-decode";

// Import components
import './MyProgress.css';
import '../components/MyProgress/Input/Dropdown.css';

import DayPicker from '../components/MyProgress/Input/DayPicker';
import WeekPicker from '../components/MyProgress/Input/WeekPicker';
import MonthPicker from '../components/MyProgress/Input/MonthPicker';
import ParameterPicker from '../components/MyProgress/Input/ParameterPicker.jsx';

import LineGraph from '../components/MyProgress/Graphs/LineGraph.jsx';
import ActivityGraph from '../components/MyProgress/Graphs/ActivityGraph.jsx';
import MonthlyActivityGraph from '../components/MyProgress/Graphs/MonthlyActivityGraph.jsx';
import CalendarGraph from '../components/MyProgress/Graphs/CalendarGraph.jsx';
import { StepsGraph } from '../components/MyProgress/Graphs/StepsGraph.jsx';

import '../../db/LogMethods.jsx';

import AppModal from '../components/AppModal.jsx';
import NotificationAlert from '../components/Notification.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Illustrations/Icon.jsx';
import Illustration from '../components/Illustrations/Illustration.jsx';

// Instance of React translate component, "Common" refers to the namespace of the i18n files
const T = i18n.createComponent("Common");

export default class MyProgress extends Component {
  constructor(props) {
    super(props);

    /* Bind date change coming from datepicker components to MyProgress page */
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleFitbitDateChange = this.handleFitbitDateChange.bind(this);
    this.handleParameterChange = this.handleParameterChange.bind(this);
    this.handleCompareParameterChange = this.handleCompareParameterChange.bind(this);
    this.handleDidSeeFitBitPopup = this.handleDidSeeFitBitPopup.bind(this);

    /* State contains some default settings when first loading MyProgress page */
    this.state = {
      timeFrame: "weekly",
      selectedDate: new Date(),
      selectedPeriod: this.getSelectedPeriod(moment(), "weekly"),
      data: null,
      fitData: null,
      stepsDay: new Date(),
      stepsData: null,
      userToken: "",
      userID: null,
      gebruikerId: null,
      parameter: "painIntensity",
      compareParameter: "",
      callError: "",
      devEnvironment: false,
      tap_count: 0,
      didSeeFitBitPopup: null
    };
  }

  /* Is called when initializing MyProgress component */
  componentDidMount(){
    /* Get user token from URL routing (see also routes.jsx file) */
    let token = FlowRouter.getParam('token') === undefined ? this.props.token : FlowRouter.getParam('token');
    this.setState({userToken: token});
    this.setLocale();
    this.fetchData(this.state.selectedPeriod, token, this.state.timeFrame, "Questionnaire");
    this.fetchData(this.state.selectedPeriod, token, this.state.timeFrame, "FitBit");
    this.fetchFitbitDayData(this.state.stepsDay, token);

    try {
      this.setState({
        userID: jwt_decode(token).rrnr,
        gebruikerId: jwt_decode(token).gebruikerId
      })
      if (token === 'demo') {Meteor.call('logs.insert', 1111111, "MyProgress", "ACCESS"); }
      else { 
        Meteor.call('logs.insert', {userID: jwt_decode(token).gebruikerId, context: "MyProgress", action: "ACCESS"}, (error, result) => {
          if (error) console.log("[MyProgress] - Could not log ACCESS");
        });
       }
       Meteor.call('logs.didSeeFitBit', {userID: jwt_decode(token).gebruikerId, context: "MyProgress"}, (error, result) => {
        if (error) console.log("[MyProgress] - Could not get 'didSeeFitBit' log");
        else {console.log(`Has seen: ${result}`); this.setState({didSeeFitBitPopup: result})}
      });
    }
    catch { console.log("ERROR [MyProgress] - Could not infer user-rrnr or participantID number from JWT token.") }
  }

  setLocale() {
    /* Get locale from URL routing (see also routes.jsx file) */
    let language = FlowRouter.getParam('language');
    if (!language) return;
    i18n.setLocale(language);
    setDataParserLocale(language);
  }

  /* Called when you switch between weekly and monthly -> update data */
  updateTimeFrame = (newTimeFrame) => {
    this.setState({timeFrame: newTimeFrame})
    
    const newPeriod = this.getSelectedPeriod(this.state.selectedDate, newTimeFrame);
    this.setState({selectedPeriod: newPeriod});
    this.fetchData(newPeriod, this.state.userToken, newTimeFrame, "Questionnaire");
    this.fetchData(newPeriod, this.state.userToken, newTimeFrame, "FitBit");
  }

  /* Called when date changes -> update data */
  handleDateChange(newDate) {
    const newPeriod = this.getSelectedPeriod(newDate, this.state.timeFrame);

    this.setState({selectedDate: newDate, selectedPeriod: newPeriod});
    this.fetchData(newPeriod, this.state.userToken, this.state.timeFrame, "Questionnaire");
    this.fetchData(newPeriod, this.state.userToken, this.state.timeFrame, "FitBit");
  }

  /* Called when StepsGraph day changes */
  handleFitbitDateChange(newDate) {
    this.setState({stepsDay: newDate});
    this.fetchFitbitDayData(newDate, this.state.userToken);
  }

  /* Passed to ParameterPicker to change the selected parameter */
  handleParameterChange(newParameter) {
    this.setState({parameter: newParameter});
  }

  /* Passed to ParameterPicker to change the selected comparison parameter */
  handleCompareParameterChange(newParameter) {
    this.setState({compareParameter: newParameter});
  }

  /* Turns a date into a period that contains the input date, defined by a start and end date: week or month depending on selected timeframe */
  /* Date en timeFrame meegeven ipv uit state te halen, want state werkt asynchroon -> is soms te laat geupdate */
  getSelectedPeriod(date, timeFrame){
    let period = "week";
    let dateClone = moment(date);
    if(this.state && timeFrame == "weekly"){
      period = 'week';
    } else if (this.state && timeFrame == "monthly"){
      period = 'month';
    }
    return [dateClone.startOf(period).format("YYYY-MM-DD"), dateClone.endOf(period).format("YYYY-MM-DD")];
  }

  /* Can be used to get the correct language parameter to give to the API, currently not used/necesarry, data is always collected in Dutch */
  getLanguage(){
    let locale = i18n.getLocale();
    switch (locale) {
      case 'nl-BE':
        return "DUTCH"
      case 'fr-BE':
        return "FRENCH"
      case 'en':
        return "ENGLISH"
    }
  }

  fetchData(selectedPeriod, token, timeFrame, dataType) {
    let url = dataType === "FitBit" ? 
      `https://connector.idewe.be/healthempower/phe/api/fit-data?van=${selectedPeriod[0]}&tot=${selectedPeriod[1]}` :
      `https://connector.idewe.be/healthempower/jobstudenten/api/antwoorden/export?van=${selectedPeriod[0]}&tot=${selectedPeriod[1]}&taal=DUTCH`;

    let devUrl = dataType === "FitBit" ? 
      `https://connector-dev.idewe.be/healthempower/phe/api/fit-data?van=${selectedPeriod[0]}&tot=${selectedPeriod[1]}` :
      `https://connector-dev.idewe.be/healthempower/jobstudenten/api/antwoorden/export?van=${selectedPeriod[0]}&tot=${selectedPeriod[1]}&taal=DUTCH`;
    
    if (typeof token !== 'undefined' && token !== "demo") {
      console.log(`${dataType} - Retreiving FitBit data ...`)
      Meteor.call("getData", {
        url: url,
        userToken: token
      }, (error, result) => {
        if (error) {
          Meteor.call("getData", {
            url: devUrl,
            userToken: token
          }, (error, result) => {
            // OPTION 1.1.1: DEVELOPMENT environment failed as well -> No data was fetched (Possibly an incorrect token)
            if (error) {
              this.setState({callError: error.message})
              console.log(`${dataType} - Development environment failed as well: ${error.message}.`)
            } 
            // OPTION 1.1.2: DEVELOPMENT environment successful -> Data is fetched (means that token was a DEV token)
            else {
              console.log(`${dataType} -  Successful fallback to development environment.`)
              dataType === "FitBit" ? this.setState({fitData: result.data}) : this.setState({data: result.data, devEnvironment: true}); 
            }
          }); 
        } else {
          if (!result.data) {console.log(`${dataType} - Successfully retreived FitBit data (Statuscode ${result.statusCode}). Data empty however.`); this.setState({fitData: []}); }
          else {
            console.log(`${dataType} - Successfully retreived FitBit data (Statuscode ${result.statusCode}).`); 
            dataType === "FitBit" ? this.setState({fitData: result.data}) : this.setState({data: result.data});
          }
        }
      });
    } 
    // OPTION 2: Demo data
    else if (token === "demo") {
      console.log("Displaying demo data.")
      if (timeFrame == "weekly"){
        this.setState({data: getWeeklyDummyData(), fitData: fitData}); 
      } else if (timeFrame == "monthly"){
        this.setState({data: getMonthlyDummyData()}); 
      }
    }
    // OPTION 3: No valid token whatsoever, do nothing.
    else {
      console.log("No valid token has been provided.")
    }
  }

  fetchFitbitDayData(date, token) {
    const propsmonth = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    const propsday = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let dateString = date.getFullYear() + "-" + propsmonth + "-" + propsday;
    // Now try to fetch FitBit data as well
    if (typeof token !== 'undefined' && token !== "demo") {
      const urlFit = `https://connector.idewe.be/healthempower/phe/api/fit-data?van=${dateString}&tot=${dateString}`;
      console.log('FITBIT-DAILY - Retreiving FitBit data ...')
      Meteor.call("getData", {
        url: urlFit,
        userToken: token
      }, (error, result) => {
        if (error) {
          const devUrl = `https://connector-dev.idewe.be/healthempower/phe/api/fit-data?van=${dateString}&tot=${dateString}`;
          Meteor.call("getData", {
            url: devUrl,
            userToken: token
          }, (error, result) => {
            // OPTION 1.1.1: DEVELOPMENT environment failed as well -> No data was fetched (Possibly an incorrect token)
            if (error) {
              this.setState({callError: error.message})
              console.log(`FITBIT-DAILY - Development environment failed as well: ${error.message}.`)
            } 
            // OPTION 1.1.2: DEVELOPMENT environment successful -> Data is fetched (means that token was a DEV token)
            else {
              console.log("FITBIT-DAILY - Successful fallback to development environment.")
              this.setState({stepsData: result.data});
            }
          }); 
        } else {
          if (!result.data) {console.log(`FITBIT-DAILY - Successfully retreived FitBit data (Statuscode ${result.statusCode}). Data empty however.`);}
          // Save fitbit data also to state
          else {console.log(`FITBIT-DAILY - Successfully retreived FitBit data (Statuscode ${result.statusCode}).`); this.setState({stepsData: result.data}); }
        }
      }); 
    }
    else {
      console.log("FITBIT-DAILY - Getting demo data"); 
      let demoDayIndex = fitData.fitData.length - 1 - ((new Date()).getDay() - this.state.stepsDay.getDay());
      this.setState({stepsData: fitData.fitData[demoDayIndex < 0 ? 0 : demoDayIndex]}); 
      return;}
  }

  updateFitDay(direction) {
    if (direction === "forward") {
      const date = this.state.stepsDay;
      date.setDate(date.getDate() + 1)
      this.setState({stepsDay: date})
    }
    else {
      const date = this.state.stepsDay;
      date.setDate(date.getDate() - 1)
      this.setState({stepsDay: date})
    }
    this.fetchFitbitDayData(this.state.stepsDay, this.state.userToken);
  }

  handleDidSeeFitBitPopup() {
    Meteor.call('logs.insert', {userID: this.state.gebruikerId, context: "MyProgress", action: "FITBIT_POPUP"}, (error, result) => {
      if (error) console.log("[MyProgress] - Could not log FITBIT_POPUP");
    });
    this.setState({didSeeFitBitPopup: true});
  }

/***
* UI Elements
*/
  renderFitBitModal() {
    if (!this.state.didSeeFitBitPopup) {
      return (<FadeIn>
        <AppModal show={true} translate title={'myProgress.fitbitpopupTitle'} defaultOption={"myProgress.fitbitpopupConfirmation"} notifyParent={() => this.handleDidSeeFitBitPopup()}>
        <div style={{justifyContent:"center", alignContent: "center", width: "100%"}}>
          <Illustration image="fitbit" width="60%" style={{margin: "0 auto", display: "block", marginBottom: "20px"}}></Illustration>
        </div>
        <T>{`myProgress.fitbitpopupText`}</T>
      </AppModal>
      </FadeIn>)
    }
    return <React.Fragment/>
  }

  renderTimePicker() {
    return (<React.Fragment>
        {this.state.timeFrame == "daily" &&
        <DayPicker 
          selectedDate = {this.state.selectedDate}
          onDateChange = {this.handleDateChange}
          locale = {i18n.getLocale()}
        />}
        {this.state.timeFrame == "weekly" &&
          <WeekPicker 
            selectedDate = {this.state.selectedDate}
            onDateChange = {this.handleDateChange}
            locale = {i18n.getLocale()}
          />}
        {this.state.timeFrame == "monthly" &&
          <MonthPicker 
            selectedDate = {this.state.selectedDate}
            onDateChange = {this.handleDateChange}
            locale = {i18n.getLocale()}
        />}
    </React.Fragment>)
  }

  renderConnectFitbitMessage() {
    return (<NotificationAlert 
              messageTitle={"myProgress.notifications.errorFitbitTitle"} 
              messageContent={"myProgress.notifications.errorFitbitMessage"}>
            </NotificationAlert>)
  }

  renderNoDataMessage() {
    return (<NotificationAlert 
              messageTitle={"myProgress.notifications.errorNoDataTitle"} 
              messageContent={"myProgress.notifications.errorNoDataMessage"}
              information={this.state.callError}>
            </NotificationAlert>)
  }

  // Renders top input card for the user to choose time-frame and parameters
  renderInsightsCard() {
    const compareWidth = this.state.compareParameter === "" ? "100%" : "70%";
    return (
      <FadeIn delay="200"><Card title="myProgress.insights.title" underline>
          <p className="subtitle"><T>myProgress.insights.showMe</T></p>
          <ParameterPicker 
            currentParameter={this.state.parameter} 
            dontDisplay={this.state.compareParameter} 
            onChange={this.handleParameterChange}>
          </ParameterPicker>
          <p className="subtitle"><T>myProgress.insights.period</T></p>
          <div style={{display:"flex", width: "100%"}}>
          {this.renderTimePicker()}
          <DropdownButton variant="dropdown" title={<T>{`myProgress.timeFrames.${this.state.timeFrame}`}</T>}>
              <Dropdown.Item key={"weekly"} onClick={() => this.updateTimeFrame("weekly")}><T>myProgress.timeFrames.weekly</T></Dropdown.Item>
              <Dropdown.Item key={"monthly"} onClick={() => this.updateTimeFrame("monthly")}><T>myProgress.timeFrames.monthly</T></Dropdown.Item>
          </DropdownButton></div>
          <p className="subtitle"><T>myProgress.insights.compare</T></p>
          <div style={{display:"flex"}}>
            <div style={{width:compareWidth}}>
              <ParameterPicker 
                currentParameter={this.state.compareParameter} 
                dontDisplay={this.state.parameter} 
                onChange={this.handleCompareParameterChange}
                style={{width: compareWidth}}>
              </ParameterPicker>
            </div>
            {this.state.compareParameter !== "" && 
              <div style={{width:'30%'}}>
              <button 
                className="close-button" 
                style={{display: "inline"}} 
                onClick={() => this.setState({compareParameter: ""})}><T>myProgress.insights.delete</T>
              </button>
            </div>}
          </div>
      </Card></FadeIn>)
  }

  // Renders weekly overviews: LineGraph Card and ActivityDots Card
  renderOverviewWeekly() {
    return (
      <React.Fragment>
        <FadeIn delay="300">
        <Card title="myProgress.insights.insights" bodyStyle={{padding: '0', paddingBottom: '15px'}} underline>
            <LineGraph 
              parameter = {this.state.parameter}
              data = {this.state.data}
              fitData = {this.state.fitData}
              comparison = {this.state.compareParameter}
              locale = {i18n.getLocale()}
            />
        </Card>
        <Card title="myProgress.activities.activities" underline>
          <ActivityGraph 
            data = {this.state.data}
            locale = {i18n.getLocale()}
          />
        </Card>
        </FadeIn>
      </React.Fragment>)
  }

  /* Renders monthly overview: CalendarGraph card and ActivityBar Card */
  renderOverviewMonthly() {
    return (
      <React.Fragment>
        <Card title="myProgress.insights.insights" bodyStyle={{padding: '10px 5px'}} underline>
          <CalendarGraph 
            parameter = {this.state.parameter}
            data = {this.state.data}
            date = {this.state.selectedDate}
            fitData = {this.state.fitData}
            comparison = {this.state.compareParameter}
            locale = {i18n.getLocale()}
          />
        </Card>
        <Card title="myProgress.activities.activities" bodyStyle={{paddingBottom: '0', paddingRight: '0'}} underline>
          <MonthlyActivityGraph
            data = {this.state.data}
            locale = {i18n.getLocale()}
          />
        </Card>
      </React.Fragment>
  )};

  renderFitBitCard() {
    let steps = this.state.stepsData ? (this.state.stepsData.length > 0 ? this.state.stepsData[0].steps : this.state.stepsData.steps) : 0;
    let distance = this.state.stepsData ? (this.state.stepsData.length > 0 ? this.state.stepsData[0].distance : this.state.stepsData.distance) : 0;
    distance = distance < 1 ? Math.round(distance * 1000) + " m" : (Math.round(distance * 100)/100) + " km";
    let infostyle = {
      padding:"4px 20px 0 20px", 
      height: "30px", 
      backgroundColor:"var(--idewe-background-solid)", 
      borderRadius:"10px", 
      margin:"0 30px 5px 30px",
      fontWeight:"500"};
      
    if (steps === 0) infostyle["textAlign"] = "center";

    return <FadeIn delay="50"><Card title="myProgress.insights.steps" bodyStyle={{padding: '10px 5px'}} underline>
      <div style={{width: "100%", display: "flex", paddingLeft: "10px", paddingRight: "10px", marginBottom:"20px"}}>
        <button className="day-button-left" onClick={() => this.updateFitDay("backward")}>
          <Icon width="18px" image={"next"} color={"white"} style={{marginTop: "2px", transform:"rotate(-180deg)"}}/>
        </button>
        <DayPicker 
            selectedDate = {this.state.stepsDay}
            onDateChange = {this.handleFitbitDateChange}
            locale = {i18n.getLocale()}
          />
          <button className="day-button-right" onClick={() => this.updateFitDay("forward")}>
            <Icon width="18px" image={"next"} color={"white"} style={{marginTop: "2px"}}/>
          </button>
        </div>
        {steps > 0 && <div style={infostyle}>
          <div style={{float:"left"}}>
            <T>{`myProgress.mysteps.steps`}</T>: <div style={{display:"inline", color:"var(--idewe-blue)"}}>{steps}</div>
          </div>
          <div style={{float:"right"}}>
          <T>{`myProgress.mysteps.distance`}</T>: <div style={{display:"inline", color:"var(--idewe-blue)"}}>{distance.split(".")[0] >= 10 ? distance.split(".")[0] + " km": distance}</div>
          </div>
        </div>}
        {(steps === 0) && <div style={infostyle}><T>{`myProgress.mysteps.noSteps`}</T></div>}
      <StepsGraph data={this.state.stepsData}></StepsGraph>
    </Card></FadeIn>
  }

  renderDevModal() {
    if (this.state.tap_count >= 5) {
      return (<FadeIn>
        <AppModal show={true} title={"Opties"} defaultOption={"Sluit"} notifyParent={() => this.setState({tap_count: 0})}>
          <Button color="blue" onClick={() => navigator.clipboard.writeText(this.state.userToken)}>Kopieer JWT Token</Button>
          <Button color="blue" onClick={() => navigator.clipboard.writeText(jwt_decode(this.state.userToken).gebruikerId)}>Kopieer GebruikerID</Button>
          <Button color="blue" onClick={() => navigator.clipboard.writeText(jwt_decode(this.state.userToken).rrnr)}>Kopieer RRNR-Nummer</Button>
        </AppModal>
      </FadeIn>)
    }
    else { return <React.Fragment/>} 
  }
      
  render() {
    // OPTION 1: If no data is loaded and an error occured while retrieving data, display error screen
    if (!this.state.data && this.state.callError !== "") {
      return (<div className="container" style={{height:"100vh"}}>
        <p className="screen-title">My Progress</p>
        {this.renderNoDataMessage()}
      </div>)
    }
    // OPTION 2: If no data is available, display empty screen
    else if (!this.state.data) {
      return <div className="container"/>
    }
    // OPTION 3: If call is succesful, display MyProgress screen
    else return (
      <div className="container">
        {this.renderFitBitModal()}
        {this.renderDevModal()}
        <div>
          <FadeIn><h1 onClick={() => this.setState({tap_count: this.state.tap_count+1})}>My Progress {this.state.devEnvironment && <b className="dev-icon">DEV</b>}</h1></FadeIn>
        </div>
        <React.Fragment>
          <h2><FadeIn><T>{`myProgress.mysteps.mySteps`}</T></FadeIn></h2>
          {this.renderFitBitCard()}
        </React.Fragment>
        <h2><FadeIn delay="150"><T>{`myProgress.myinsights`}</T></FadeIn></h2>
        {this.renderInsightsCard()}
        {this.state.timeFrame == "weekly" && this.renderOverviewWeekly()}
        {this.state.timeFrame == "monthly" && this.renderOverviewMonthly()}
      </div>
    )
  }
};
