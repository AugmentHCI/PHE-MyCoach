import React, { useState, useEffect } from 'react';

/* External API */
import FadeIn from "react-fade-in";
import jwt_decode from "jwt-decode";
import moment from "moment";
import 'moment/locale/nl';
import 'moment/locale/fr';

/* Internal API */
import { emotions, thoughts, reactions } from "./PainLogbookData.js";

/* Managers */
import PainLogbookManager from '../../../api/managers/PainLogbookManager';

/* UI Components */
import NavigationBar from '../../components/NavigationBar';
import Illustration from '../../components/Illustrations/Illustration';
import ActionButton from '../../components/ActionButton';

/* Styles */
import "./PainLogbook.scss";


export default function PainLogbookDetail() {

    moment.locale('nl');

    const [painLog, setPainLog] = useState(undefined);

    const language = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";
    const userID   = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr) : 1111111;
    const painlogID = FlowRouter.getParam('id');
    const painLogbookManager = new PainLogbookManager(userID);
    const title = painLog ? " - " + weekdays[language][moment(painLog.timestamp).isoWeekday()] + " " + moment(painLog.timestamp).format("D MMMM") : "";

    useEffect(() => { 
        async function fetchPainLogs() {
            const fetchedPainLog = await painLogbookManager.getPainLog(painlogID);
            setPainLog(fetchedPainLog);
        }
        fetchPainLogs();
    }, []);

    function renderPainlogActivity() {
        let activityHTML = [];
        activityHTML.push(<h3>Mijn activiteit</h3>);
        activityHTML.push(<div className="chatbubble-overview-rounded">{painLog.activity}</div>);
        activityHTML.push(<div className="chatbubble-overview-rounded">{painLog.intensity}</div>);
        return activityHTML;
    }

    function renderPainlogEmotions() {
        let emotionsHTML = [];
        emotionsHTML.push(<h3>Mijn emoties</h3>);
        painLog.emotions.split("|").forEach(emotion => {
            emotionsHTML.push(<div className="chatbubble-overview-rounded">{emotions[emotion].translation[language]}</div>);
        });
        return emotionsHTML;
    }

    function renderPainlogThoughts() {
        let thoughtsHTML = [];
        thoughtsHTML.push(<h3>Mijn gedachten</h3>);
        painLog.thoughts.split("|").forEach(thought => {
            thoughtsHTML.push(<div className="chatbubble-overview">{thoughts[thought].translation[language]}</div>);
        });
        return thoughtsHTML;
    }
    function renderPainlogReactions() {
        let reactionsHTML = [];
        reactionsHTML.push(<h3>Mijn reacties</h3>);
        painLog.reactions.split("|").forEach(reaction => {
            reactionsHTML.push(<div className="chatbubble-overview">{reactions[reaction].translation[language]}</div>);
        });
        return reactionsHTML;
    }

    return (<React.Fragment>
        <NavigationBar title={"Pijnlog" + title}/>
        <div className="painlogbook-body" style={{paddingTop: "90px"}}>
        <FadeIn>
            { painLog && renderPainlogActivity() }
            { painLog && renderPainlogEmotions() }
            { painLog && renderPainlogThoughts() }
            { painLog && renderPainlogReactions() }
            </FadeIn>
        </div>
    </React.Fragment>);
}

const weekdays = {
    "nl-BE": {1: "Maandag", 2: "Dinsdag", 3: "Woensdag", 4: "Donderdag", 5: "Vrijdag", 6: "Zaterdag", 7: "Zondag"},
    "nl-FR": {1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: ""},
    "en-EN": {1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday", 7: "Sunday"}
}