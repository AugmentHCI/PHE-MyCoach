import React, { Component } from 'react';
import moment from "moment";
import { FlowRouter } from 'meteor/kadira:flow-router';

//import internationalization files
import i18n from 'meteor/universe:i18n';
import "../../../i18n/nl.i18n.json"
import "../../../i18n/fr.i18n.json"
import "../../../i18n/en.i18n.json"

//import data processing functions
import { setDataParserLocale } from '../../api/dataparser';

//instance of React translate component, "Common" refers to the namespace of the i18n files
const T = i18n.createComponent("Common");

export default class MyCoach extends Component {

    constructor(props) {
        super(props);

        //state contains some default settings when first loading MyProgress page
        this.state = {
            timeFrame: "weekly",
            tab: "overview",
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
        /*
        let token = FlowRouter.getParam('token');
        this.setState({userToken: token});
        this.setLocale();
        this.fetchData(this.state.selectedPeriod, token, this.state.timeFrame);*/
    }

    // Get locale from URL routing (see also routes.jsx file)
    setLocale() {
        /*
        let language = FlowRouter.getParam('language');
        i18n.setLocale(language);
        setDataParserLocale(language);*/
    }

    render() {
        return (
        <div className="container">
            <h1>MyCoach</h1>
            {this.state.userToken}
        </div>)
    }
};
