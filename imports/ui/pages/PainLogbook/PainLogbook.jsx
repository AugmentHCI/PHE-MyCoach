import React, { useState, useEffect } from 'react';
import PainLogbookManager from '../../../api/PainLogbookManager';
import "./PainLogbook.scss";
import moment from "moment";
import 'moment/locale/nl';
import 'moment/locale/fr';
import { emotions } from "./PainLogbookData.js";
import FadeIn from "react-fade-in";

import jwt_decode from "jwt-decode";

import Icon from '../../components/Illustrations/Icon';

import NavigationBar from '../../components/NavigationBar';
import ActionButton from '../../components/ActionButton';
import LoadingScreen from '../LoadingScreen';

export default function PainLogbook() {

    moment.locale('nl');
    const language = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";
    const userID   = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr) : 1111111;
    const painLogbookManager = new PainLogbookManager(userID);

    const [painLogs, setPainLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
        async function fetchPainLogs() {
            const fetchedPainLogs = await painLogbookManager.getPainLogs();
            setPainLogs(fetchedPainLogs);
            setLoading(false);
        }
        fetchPainLogs();
    }, []);

    function renderPainLogs() {
        /* Still fetching data */
        if (loading) return <LoadingScreen height='45%'/>
        /* Data fetched but no painlogs available */
        if (painLogs.length === 0) return (<div className="painlogbook-emptylogs"> Nog geen pijnlogs </div>)
        /* Data fetched, render painlogs */
        let painLogsHTML = [];
        let month = undefined;
        painLogs.forEach(painLog => {
            let logDate = moment(painLog.timestamp).format("MMMM YYYY");
            logDate = logDate.charAt(0).toUpperCase() + logDate.slice(1);
            if (logDate !== month) { month = logDate; painLogsHTML.push(<h4 key={month}>{month}</h4>)}
            let emotionsHTML = painLog.emotions.split("|").length === 0 ? "Geen" : "";
            painLog.emotions.split("|").forEach(emotion => {
                if (emotionsHTML.length > 0) emotionsHTML += ", ";
                emotionsHTML += emotions[emotion].translation[language];
            });
            painLogsHTML.push(<div key={painLog._id} className="painlogbook-entry">
                <div className="painlogbook-entry-button" onClick={() => FlowRouter.go(`/${language}/mycoach/${FlowRouter.getParam('token')}/painlogbook/${painLog._id}`)}><Icon image="next" color="white"/></div>
                <h3>{weekdays[language][moment(painLog.timestamp).isoWeekday()] + " " + moment(painLog.timestamp).format("D MMMM")}</h3>
                <p><b>Activiteit:</b> {painLog.context} - {painLog.activity}</p>
                <p><b>Intensiteit:</b> {painLog.intensity}</p>
                <p><b>Emoties:</b> {emotionsHTML}</p>
            </div>)
        })
        return <FadeIn>{painLogsHTML}</FadeIn>;
    }

    
    return (<React.Fragment>
        <NavigationBar title="Pijnlogboek" back={`/${language}/mycoach/${FlowRouter.getParam('token')}`}/>
        <div className="painlogbook-body">
        <FadeIn>
            <div>
                <div className="painlogbook-explanation">Heb je momenteel of recent last van een pijnscheut of aanzienlijk meer pijn? Neem een momentje om hierover te reflecteren en krijg persoonlijke tips.</div>
                <ActionButton icon={"writing"} onClick={() => FlowRouter.go(`/${language}/mycoach/${FlowRouter.getParam('token')}/painlogbook/newentry`)}>Voeg toe aan je pijnlogboek</ActionButton>
            </div>
            <hr/>
            <h3>Jouw pijnlogs</h3>
            </FadeIn>
            {renderPainLogs()}
        </div>
    </React.Fragment>);
}

const weekdays = {
    "nl-BE": {1: "Maandag", 2: "Dinsdag", 3: "Woensdag", 4: "Donderdag", 5: "Vrijdag", 6: "Zaterdag", 7: "Zondag"},
    "nl-FR": {1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: ""},
    "en-EN": {1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday", 7: "Sunday"}
}