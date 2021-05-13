import React, { useState, useEffect } from 'react';
import PainLogbookManager from '../../../api/PainLogbookManager';
import "./PainLogbook.scss";
import moment from "moment";
import 'moment/locale/nl';
import 'moment/locale/fr';
import { emotions } from "./PainLogbookData.js";

import jwt_decode from "jwt-decode";

import NavigationBar from '../../components/NavigationBar';
import ActionButton from '../../components/ActionButton';

export default function PainLogbook() {

    moment.locale('nl');
    const language = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";
    const userID   = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr) : 1111111;
    const painLogbookManager = new PainLogbookManager(userID);

    const [painLogs, setPainLogs] = useState([]);

    useEffect(() => { 
        async function fetchPainLogs() {
            const fetchedPainLogs = await painLogbookManager.getPainLogs();
            setPainLogs(fetchedPainLogs);
        }
        fetchPainLogs();
    }, []);

    function renderPainLogs() {
        if (painLogs.length === 0) {
            return (<div className="painlogbook-emptylogs">
                Nog geen pijnlogs
            </div>)
        }
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
                <p><b>Datum:</b> {moment(painLog.timestamp).format("DD MMMM")}</p>
                <p><b>Activiteit:</b> {painLog.context} - {painLog.activity}</p>
                <p><b>Intensiteit:</b> {painLog.intensity}</p>
                <p><b>Emoties:</b> {emotionsHTML}</p>
            </div>)
        })
        return painLogsHTML;
    }

    return (<React.Fragment>
        <NavigationBar title="Pijnlogboek" back={`/${language}/mycoach/${FlowRouter.getParam('token')}`}/>
        <div className="painlogbook-body">
            <div>
                <div className="painlogbook-explanation">Heb je momenteel of recent last van een pijnscheut of aanzienlijk meer pijn? Neem een momentje om hierover te reflecteren en krijg persoonlijke tips.</div>
                <ActionButton icon={"writing"} onClick={() => FlowRouter.go(`/${language}/mycoach/${FlowRouter.getParam('token')}/painlogbook/newentry`)}>Voeg toe aan je pijnlogboek</ActionButton>
            </div>
            <hr/>
            <h3>Jouw pijnlogs</h3>
            {renderPainLogs()}
        </div>
    </React.Fragment>);
}