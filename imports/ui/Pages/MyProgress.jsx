import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import moment from "moment"
import { FlowRouter } from 'meteor/kadira:flow-router';

// Import internationalization files
import i18n from 'meteor/universe:i18n';
import "../../../i18n/nl.i18n.json"
import "../../../i18n/fr.i18n.json"
import "../../../i18n/en.i18n.json"

// Import data processing functions
import { setDataParserLocale } from '../../api/dataparser';
import { getWeeklyDummyData, getMonthlyDummyData } from '../../api/dummydata';

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

import NotificationAlert from '../components/Notification.jsx';
import Card from '../components/Card.jsx';

// Instance of React translate component, "Common" refers to the namespace of the i18n files
const T = i18n.createComponent("Common");

export default class MyProgress extends Component {
  constructor(props) {
    super(props);

    //bind date change coming from datepicker components to MyProgress page
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleParameterChange = this.handleParameterChange.bind(this);
    this.handleCompareParameterChange = this.handleCompareParameterChange.bind(this);

    // State contains some default settings when first loading MyProgress page
    this.state = {
      timeFrame: "weekly",
      selectedDate: new Date(),
      selectedPeriod: this.getSelectedPeriod(moment(), "weekly"),
      data: null,
      userToken: "",
      fitbitConnected: false,
      parameter: "painIntensity",
      compareParameter: "",
      callError: "",
      devEnvironment: false
    };
  }

  // Is called when initializing MyProgress component
  componentDidMount(){
    // Get user token from URL routing (see also routes.jsx file)
    let token = FlowRouter.getParam('token');
    this.setState({userToken: token});
    this.setLocale();
    this.fetchData(this.state.selectedPeriod, token, this.state.timeFrame);
  }

  setLocale(){
    // Get locale from URL routing (see also routes.jsx file)
    let language = FlowRouter.getParam('language');
    if (!language) return;
    i18n.setLocale(language);
    setDataParserLocale(language);
  }

  // Called when you switch between weekly and monthly -> update data
  updateTimeFrame = (newTimeFrame) => {
    this.setState({timeFrame: newTimeFrame})
    
    const newPeriod = this.getSelectedPeriod(this.state.selectedDate, newTimeFrame)
    this.setState({selectedPeriod: newPeriod})
    this.fetchData(newPeriod, this.state.userToken, newTimeFrame)
  }

  // Called when date changes -> update data
  handleDateChange(newDate) {
    const newPeriod = this.getSelectedPeriod(newDate, this.state.timeFrame)

    this.setState({selectedDate: newDate})
    this.setState({selectedPeriod: newPeriod})
    this.fetchData(newPeriod, this.state.userToken, this.state.timeFrame)
  }

  // Passed to ParameterPicker to change the selected parameter
  handleParameterChange(newParameter) {
    this.setState({parameter: newParameter});
  }

  // Passed to ParameterPicker to change the selected comparison parameter
  handleCompareParameterChange(newParameter) {
    this.setState({compareParameter: newParameter});
  }

  // Turns a date into a period that contains the input date, defined by a start and end date: week or month depending on selected timeframe
  // Date en timeFrame meegeven ipv uit state te halen, want state werkt asynchroon -> is soms te laat geupdate
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

  // Can be used to get the correct language parameter to give to the API, currently not used/necesarry, data is always collected in Dutch
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

  fetchData(selectedPeriod, token, timeFrame){
    // OPTION 1: Token given, try to fetch data
    if (typeof token !== 'undefined' && token !== "demo"){
      // Data altijd in NL ophalen, vertalen indien nodig (keys zijn sowieso altijd NL)
      // const url = `https://jobstudenten-dev.idewe.be/api/antwoorden/export?van=${selectedPeriod[0]}&tot=${selectedPeriod[1]}&taal=DUTCH`;
	    const url = `https://connector.idewe.be/healthempower/jobstudenten/api/antwoorden/export?van=${selectedPeriod[0]}&tot=${selectedPeriod[1]}&taal=DUTCH`;

      // Server side methode gebruiken (zoals gedefinieerd in main.js)
      console.log('QUESTIONNAIRE - Retreiving questionnaire data ...')
      Meteor.call("getData", {
        url: url,
        userToken: token
      }, (error, result) => {
        // OPTION 1.1: Could not connect to PRODUCTION environment, try DEVELOPMENT enviroment instead
        if (error) {
          console.log(`QUESTIONNAIRE - Could not load data from production environment: ${error.message}. Trying development environment instead ...`)
          const devUrl = `https://connector-dev.idewe.be/healthempower/jobstudenten/api/antwoorden/export?van=${selectedPeriod[0]}&tot=${selectedPeriod[1]}&taal=DUTCH`;
          Meteor.call("getData", {
            url: devUrl,
            userToken: token
          }, (error, result) => {
            // OPTION 1.1.1: DEVELOPMENT environment failed as well -> No data was fetched (Possibly an incorrect token)
            if (error) {
              this.setState({callError: error.message})
              console.log(`QUESTIONNAIRE - Development environment failed as well: ${error.message}.`)
            } 
            // OPTION 1.1.2: DEVELOPMENT environment successful -> Data is fetched (means that token was a DEV token)
            else {
              console.log("QUESTIONNAIRE - Successful fallback to development environment.")
              this.setState({data: result.data, devEnvironment: true}); 
            }
          }); 
        } 
        // OPTION 1.2: PRODUCTION environment successful -> Data is fetched
        else {
          console.log("QUESTIONNAIRE - Successfully retreived questionnaire data.")
          this.setState({data: result.data}); 
        }
      }); 

      // Now try to fetch FitBit data as well
      const urlFit = `https://connector.idewe.be/healthempower/jobstudenten/api/fit-data?van=${selectedPeriod[0]}&tot=${selectedPeriod[1]}&taal=DUTCH`;

      console.log('FITBIT - Retreiving FitBit data ...')
      Meteor.call("getData", {
        url: urlFit,
        userToken: token
      }, (error, result) => {
        if (error) {
          console.log(`FITBIT - Unable to retreive FitBit Data: ${error.message}.`)
        } else {
          if (!result.data) {console.log(`FITBIT - Successfully retreived FitBit data (Statuscode ${result.statusCode}). Data empty however.`); this.setState({fitbitConnected: false}); }
          // Save fitbit data also to state
          else {console.log(`FITBIT - Successfully retreived FitBit data (Statuscode ${result.statusCode}).`); this.setState({fitbitConnected: true}); }
        }
      }); 
    } 
    // OPTION 2: Demo data
    else if (token === "demo") {
      console.log("Displaying demo data.")
      if (timeFrame == "weekly"){
        this.setState({data: getWeeklyDummyData()}); 
      } else if (timeFrame == "monthly"){
        this.setState({data: getMonthlyDummyData()}); 
      }
    }
    // OPTION 3: No valid token whatsoever, do nothing.
    else {
      console.log("No valid token has been provided.")
    }
  }

  /***
   * UI Elements
   */

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
      <Card title="myProgress.insights.title" underline>
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
                onChange={this.handleCompareParameterChange}>
                style={{width: compareWidth}}
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
      </Card>)
  }

    // Renders weekly overviews: LineGraph Card and ActivityDots Card
    renderOverviewWeekly() {
      return (
        <React.Fragment>
          <Card title="myProgress.insights.insights" bodyStyle={{padding: '0', paddingBottom: '15px'}} underline>
            <LineGraph 
              parameter = {this.state.parameter}
              data = {this.state.data}
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
        </React.Fragment>)
    }

    // Renders monthly overview: CalendarGraph card and ActivityBar Card
    renderOverviewMonthly() {
      return (
        <React.Fragment>
          <Card title="myProgress.insights.insights" bodyStyle={{padding: '10px 5px'}} underline>
            <CalendarGraph 
              parameter = {this.state.parameter}
              data = {this.state.data}
              date = {this.state.selectedDate}
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
        {!this.state.fitbitConnected && this.renderConnectFitbitMessage()}
        <div>
          <h1>My Progress {this.state.devEnvironment && <b className="dev-icon">DEV</b>}</h1>
        </div>
        {this.renderInsightsCard()}
        {this.state.timeFrame == "weekly" && this.renderOverviewWeekly()}
        {this.state.timeFrame == "monthly" && this.renderOverviewMonthly()}
      </div>
    )
  }
};
