import React, { useState, useEffect } from "react";
import { FlowRouter } from "meteor/kadira:flow-router";
import FadeIn from "react-fade-in";

import "./MyCoach.scss";
import UserData from "../../api/userdata_dummy.js";

// Import internationalization files
import i18n from 'meteor/universe:i18n';
import "../../../i18n/nl.i18n.json";
import "../../../i18n/fr.i18n.json";
import "../../../i18n/en.i18n.json";

// Import components
import ActionButton from "../components/ActionButton.jsx";
import AppModal from "../components/AppModal.jsx";
import ModuleButton from "../components/ModuleButton.jsx";

// Instance of React translate component, "Common" refers to the namespace of the i18n files
const T = i18n.createComponent("Common");

export default function MyCoach(props) {

    const userData = UserData;
    const [updatePage, setUpdatePage] = useState(false);

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

    return (
        <div className="container">
            {handleIntroduction()}
            <FadeIn>
                <h1>My Coach</h1>
                <h2>MIJN TODO'S</h2>
                <ActionButton icon={"writing"} action={() => FlowRouter.go(`/mycoach/painlogbook`)}>Voeg toe aan je pijnlogboek</ActionButton>
                <ActionButton icon={"idea"}>Bekijk je coaching van de dag</ActionButton>

                <h2 style={{marginTop: '20px'}}>MIJN TRAJECT</h2>
                <div className="module-container">
                    <div style={{position: "relative", width: "100%", minHeight: "150px", display: "flex", justifyContent: "center", marginTop:"20px"}}>
                        <ModuleButton  code={"PE"} title={"Pijneduatie"} onClick={() => FlowRouter.go(`/mycoach/paineducation/`)} data={userData.progress.PAINEDUCATION}></ModuleButton>
                        <div style={{borderLeft:"3px solid var(--idewe-blue)", height: "100px", position: "absolute", top: "150px"}}/>
                    </div>
                    <div style={{position: "relative", width: "100%", minHeight: "100px", display: "flex", textAlign:"center"}}>
                        <ModuleButton  code={"EM"} title={"Gedachten en emoties"} onClick={() => FlowRouter.go(`/mycoach/thoughtsemotions/`)} data={userData.progress.THOUGHTSEMOTIONS}></ModuleButton>
                        <div style={{margin:"0 auto", paddingTop:"20px", fontFamily:"var(--main-font", fontSize:"24px", fontWeight: "600", color:"var(--idewe-blue-dark)", backgroundColor:"var(--idewe-white", height:"120px", width: "120px", borderRadius: "60px", marginTop: "35px", zIndex: "2"}}>Mijn <br/>coaching</div>
                        <ModuleButton code={"ACT"} title={"Activiteit en werk"} onClick={() => FlowRouter.go(`/mycoach/activitywork/`)} data={userData.progress.THOUGHTSEMOTIONS}></ModuleButton>
                    </div>     
                    <div style={{position: "relative", width: "100%", minHeight: "100px", display: "flex", textAlign:"center"}}>
                        <ModuleButton  code={"MOV"} title={"Beweging"} onClick={() => FlowRouter.go(`/mycoach/movement/`)} data={userData.progress.THOUGHTSEMOTIONS}></ModuleButton>
                        <ModuleButton code={"SOC"} title={"Sociale omgeving"} onClick={() => FlowRouter.go(`/mycoach/social/`)} data={userData.progress.THOUGHTSEMOTIONS}></ModuleButton>
                        <div style={{borderLeft:"3px solid var(--idewe-gray-dark)", height: "100px", position: "absolute", left: "150px", top: "-140px", transform: "rotate(-55deg)", zIndex:"0"}}/>
                        <div style={{borderLeft:"3px solid var(--idewe-gray-dark)", height: "100px", position: "absolute", right: "150px", top: "-140px", transform: "rotate(55deg)", zIndex:"0"}}/>
                        <div style={{borderLeft:"3px solid var(--idewe-gray-dark)", height: "100px", position: "absolute", right: "150px", top: "-60px", transform: "rotate(125deg)", zIndex:"0"}}/>
                        <div style={{borderLeft:"3px solid var(--idewe-gray-dark)", height: "100px", position: "absolute", left: "150px", top: "-60px", transform: "rotate(-125deg)", zIndex:"0"}}/>
                    </div>
                    <div style={{position: "relative", width: "100%", minHeight: "150px", display: "flex", justifyContent: "center"}}>
                        <ModuleButton  code={"STR"} title={"Stress en veerkracht"} onClick={() => FlowRouter.go(`/mycoach/stress/`)} data={userData.progress.THOUGHTSEMOTIONS}></ModuleButton>
                        <div style={{borderLeft:"3px solid var(--idewe-gray-dark)", height: "150px", position: "absolute", top: "-150px"}}/>
                    </div>    
                </div> 
            </FadeIn>
        </div>
    )
};
