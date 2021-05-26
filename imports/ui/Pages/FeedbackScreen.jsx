import React, { useState } from 'react';

import NavigationBar from "../components/NavigationBar";
import Button from '../components/Button';

import jwt_decode from "jwt-decode";
import "./AdminSettings.scss";
import FeedbackManager from '../../api/FeedbackManager';
import Input from '../components/Input';
import FadeIn from 'react-fade-in';

export default function FeedbackScreen(props) {

    const feedbackManager = new FeedbackManager(parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr));
    const [valueScreen, updateValueScreen] = useState("");
    const [valueProblem, updateValueProblem] = useState("");
    const [sent, setSent] = useState(false);

    function sendFeedback() {
        feedbackManager.insertFeedback(valueProblem, valueScreen);
        updateValueScreen("");
        updateValueProblem(""); 
        setSent(true)
    }

    return (<div>
        <NavigationBar title="Feedback"/>
        <div className="settings-body">
            <FadeIn>
            <div className="painlogbook-explanation">Geef hier feedback over bijvoorbeeld een scherm dat fouten geeft, een module dat niet laadt, een oefening binnen een onderdeel dat fout werkt, enz. Wij zullen jou feedback dan gebruiken om eventuele fouten op te sporen en op te lossen!</div>
            {!sent && <div><h3 style={{fontSize:"18px", marginTop:"15px"}}>Waar deed het probleem zich voor?</h3>
            <Input 
                type="text" value={valueScreen} onChange={updateValueScreen}
                style={{width: "100%", fontSize: "16px", fontWeight: 500, flexGrow: 1}} 
                placeholder={"Bv. 'Pijneducatie onderdeel 2'"}/> 
            <h3 style={{fontSize:"18px"}}>Wat was het probleem?</h3>
            <Input 
                type="text" value={valueProblem} onChange={updateValueProblem}
                style={{width: "100%", fontSize: "16px", fontWeight: 500, flexGrow: 1}} 
                placeholder={"Beschrijf gedetailleerd het probleem"}/> 
            <Button center color="blue" disabled={!valueProblem || !valueScreen} onClick={() => sendFeedback()}>Verstuur</Button>
            </div>}
            {sent && <div>
                <div style={{fontFamily:"var(--main-font)", color:"var(--idewe-blue-dark)", margin:"20px 0", fontSize:"16px"}}>Wij hebben jouw feedback goed ontvangen, en gaan er spoedig naar kijken! Bedankt om hier even jouw tijd voor te nemen.</div>
                <Button center color="blue" onClick={() => setSent(false)}>Stuur nieuwe feedback</Button>
                <Button center color="blue" style={{marginTop:"10px"}} onClick={() => history.back()}>Terug naar startscherm</Button>
            </div>}
            </FadeIn>
        </div>
    </div>)
}