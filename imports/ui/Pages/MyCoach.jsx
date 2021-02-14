import React, { useState, useEffect } from "react";
import { FlowRouter } from "meteor/kadira:flow-router";
import FadeIn from "react-fade-in";

/* Ant-Design Popover */
import { Popover } from 'antd';
import 'antd/dist/antd.css';

import UserData from "../../api/userdata_dummy.js";
import "./MyCoach.scss";

/* Import internationalization files */
import i18n from 'meteor/universe:i18n';
import "../../../i18n/nl.i18n.json";
import "../../../i18n/fr.i18n.json";
import "../../../i18n/en.i18n.json";

/* Import components */
import ActionButton from "../components/ActionButton.jsx";
import AppModal from "../components/AppModal.jsx";
import ModuleButton from "../components/ModuleButton.jsx";
import Button from "../components/Button.jsx";

/* Instance of React translate component, "Common" refers to the namespace of the i18n files */
const T = i18n.createComponent("Common");

export default function MyCoach(props) {

    const userData = UserData;
    const [updatePage, setUpdatePage] = useState(false);

    const [showTutorial1, updateShowTutorial1] = useState(true);
    const [showTutorial2, updateShowTutorial2] = useState(true);

    // Get locale from URL routing (see also routes.jsx file)
    function setLocale() {
        /*
        let language = FlowRouter.getParam('language');
        i18n.setLocale(language);
        setDataParserLocale(language);*/
    }

    function handleIntroduction() {
        if (!userData.interactions.INTRODUCTION) 
        return (
            <AppModal show={true} title={"Welkom!"} defaultOption={"Naar het filmpje"} notifyParent={handleIntroductionSeen}>
            Welkom bij de HealthEmpower coaching. Heb je momenteel pijn? Dan ben je niet alleen. Eén op vier werknemers ervaart dagelijks pijn. Meest voorkomend zijn nek- en rugklachten. Dat kan een grote impact hebben op je functioneren, thuis maar ook op het werk. Met deze coaching willen we je inzicht geven in hoe pijn werkt. Je leert hoe  je op een goede manier kan omgaan met je pijn. Dit heeft een positieve impact op je functioneren. Je krijgt ook een aantal handvaten aangereikt om actief aan je gezondheid te werken. Bekijk hier alvast het introductiefilmpje.
        </AppModal>
        )
        if (!userData.interactions.INTRODUCTION_VIDEO) 
        return (
            <AppModal show={true} title={"Introduciefilmpje"} defaultOption={"Klaar"} notifyParent={handleIntroductionVideoSeen}>
                Bekijk het introductiefilmpje over de HealthEmpower coaching.
                <iframe src={"https://player.vimeo.com/video/485835694"} width="100%" style={{marginTop:"20px", borderRadius: "10px"}} frameBorder="0" allow="autoplay; fullscreen"></iframe>
            </AppModal>
        )
        return (<React.Fragment/>);
    }

    function handleIntroductionSeen() {
        userData.interactions.INTRODUCTION = true;
        setUpdatePage(!updatePage);
    }

    function handleIntroductionVideoSeen() {
        userData.interactions.INTRODUCTION_VIDEO = true;
        setUpdatePage(!updatePage);
    }

    function calculateLineColor(activity) {
        switch (userData.progress[activity].OVERALL) {
            case "NOT_STARTED": return "3px solid var(--idewe-gray-dark)";
            case "IN_PROGRESS": return "3px solid var(--idewe-blue)";
            case "COMPLETED":   return "3px solid var(--idewe-blue-dark)";
        }
    }

    return (
        <div className="container">
            {handleIntroduction()}
            <FadeIn>
                <h1>My Coach</h1>
                <h2>MIJN TODO'S</h2>
                <Popover
                    content={<div style={{fontFamily: "var(--main-font)", fontSize:"14px", color:"var(--idewe-black)"}}><h4 style={{color:"var(--idewe-blue)"}}>Shortcuts</h4>Hier zie jij je shortcuts waar je gemakkelijk<br/>toegang tot hebt. In de coaching modules<br/>kan je zelf nog shortcuts toevoegen naar<br/>interessante oefeningen, informatie en filmpjes.<br/><Button color="blue" width="fit" size="small" action={()=> updateShowTutorial1(false)}>Volgende</Button></div>}
                    placement="bottom"
                    trigger="click"
                    visible={showTutorial1}
                    onVisibleChange={() => updateShowTutorial1(false)}>
                <ActionButton icon={"writing"} action={() => FlowRouter.go(`/mycoach/painlogbook`)}>Voeg toe aan je pijnlogboek</ActionButton>
                <ActionButton icon={"idea"}>Bekijk je coaching van de dag</ActionButton>
                </Popover>

                <h2 style={{marginTop: '20px'}}>MIJN TRAJECT</h2>
                <Popover
                    content={<div style={{fontFamily: "var(--main-font)", fontSize:"14px", color:"var(--idewe-black)"}}><h4 style={{color:"var(--idewe-blue)"}}>Coaching</h4>Hier zie jij je persoonlijk coachingtraject.<br/>Hoe vaker jij je dagelijse coaching<br/>bekijkt, hoe meer modules je vrijspeelt.<br/>Probeer dus elke dag je coaching te voltooien<br/><Button color="blue" width="fit" size="small" action={()=> updateShowTutorial2(false)}>Begrepen</Button></div>}
                    placement="bottom"
                    trigger="click"
                    visible={!showTutorial1 && showTutorial2}
                    onVisibleChange={() => updateShowTutorial2(false)}>
                <div className="module-container">
                    <div style={{position: "relative", width: "100%", minHeight: "150px", display: "flex", justifyContent: "center", marginTop:"20px"}}>
                        <ModuleButton  code={"PE"} title={"Pijneduatie"} onClick={() => FlowRouter.go(`/mycoach/paineducation/`)} data={userData.progress.PAINEDUCATION}></ModuleButton>
                        <div style={{borderLeft:calculateLineColor("PAINEDUCATION"), height: "100px", position: "absolute", top: "50px"}}/>
                    </div>
                    <div style={{position: "relative", width: "100%", minHeight: "100px", display: "flex", textAlign:"center"}}>
                        <ModuleButton  code={"EM"} title={"Gedachten en emoties"} onClick={() => FlowRouter.go(`/mycoach/thoughtsemotions/`)} data={userData.progress.THOUGHTSEMOTIONS}></ModuleButton>
                        <div style={{margin:"0 auto", paddingTop:"25px", fontFamily:"var(--main-font", fontSize:"18px", fontWeight: "700", color:"var(--idewe-blue-dark)", backgroundColor:"var(--idewe-white", height:"110px", width: "110px", borderRadius: "60px", marginTop: "-10px", zIndex: "2"}}>Mijn <br/>coaching</div>
                        <ModuleButton code={"ACT"} title={"Activiteit en werk"} onClick={() => FlowRouter.go(`/mycoach/activitywork/`)} data={userData.progress.ACTIVITYWORK}></ModuleButton>
                    </div>     
                    <div style={{position: "relative", width: "100%", minHeight: "100px", display: "flex", textAlign:"center"}}>
                        <ModuleButton  code={"MOV"} title={"Beweging"} onClick={() => FlowRouter.go(`/mycoach/movement/`)} data={userData.progress.MOVEMENT}></ModuleButton>
                        <ModuleButton code={"SOC"} title={"Sociale omgeving"} onClick={() => FlowRouter.go(`/mycoach/social/`)} data={userData.progress.SOCIAL}></ModuleButton>
                        <div style={{borderLeft:calculateLineColor("THOUGHTSEMOTIONS"), height: "100px", position: "absolute", left: "120px", top: "-130px", transform: "rotate(-55deg)", zIndex:"0"}}/>
                        <div style={{borderLeft:calculateLineColor("ACTIVITYWORK"), height: "100px", position: "absolute", right: "120px", top: "-130px", transform: "rotate(55deg)", zIndex:"0"}}/>
                        <div style={{borderLeft:calculateLineColor("MOVEMENT"), height: "100px", position: "absolute", right: "130px", top: "-90px", transform: "rotate(125deg)", zIndex:"0"}}/>
                        <div style={{borderLeft:calculateLineColor("SOCIAL"), height: "100px", position: "absolute", left: "130px", top: "-90px", transform: "rotate(-125deg)", zIndex:"0"}}/>
                    </div>
                    <div style={{position: "relative", width: "100%", minHeight: "150px", display: "flex", justifyContent: "center"}}>
                        <ModuleButton  code={"STR"} title={"Stress en veerkracht"} onClick={() => FlowRouter.go(`/mycoach/stress/`)} data={userData.progress.STRESS}></ModuleButton>
                        <div style={{borderLeft:calculateLineColor("STRESS"), height: "150px", position: "absolute", top: "-150px"}}/>
                    </div>    
                </div> 
                </Popover>
            </FadeIn>
        </div>
    )
};
