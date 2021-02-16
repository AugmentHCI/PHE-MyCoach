import React, { useState } from "react";
import { FlowRouter } from "meteor/kadira:flow-router";
import FadeIn from "react-fade-in";

/* Ant-Design Popover */
import Popover from 'antd/lib/popover';
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
import ModuleButton from "../components/MyCoach/ModuleButton.jsx";
import Button from "../components/Button.jsx";
import Illustration from "../components/Illustrations/Illustration.jsx";

/* Instance of React translate component, "Common" refers to the namespace of the i18n files */
const T = i18n.createComponent("Common");

export default function MyCoach(props) {

    const userData = props.data ? props.data : UserData;
    const [updatePage, setUpdatePage] = useState(false);
    const [tapCount, updateTapCount] = useState(0);
    const [language, setLanguage] = useState(FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE");

    const [showTutorial1, updateShowTutorial1] = useState(true);
    const [showTutorial2, updateShowTutorial2] = useState(true);
    const [showTutorial3, updateShowTutorial3] = useState(true);

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

    function renderTodos() {
        return (<React.Fragment>
            <h2>MIJN TODO'S</h2>
            <Popover
                content={<div className="tutorial-content">
                    <h4>Shortcuts</h4>
                    Hier zie jij je shortcuts waar je gemakkelijk<br/>toegang tot hebt. In de coaching modules<br/>kan je zelf nog shortcuts toevoegen naar<br/>interessante oefeningen, informatie en filmpjes.<br/>
                    <div className="tutorial-button-row">
                        <Button color="blue" width="fit" size="small" style={{float:"right"}} action={()=> updateShowTutorial1(false)}>Volgende</Button>
                    </div>
                </div>}
                placement="bottom"
                trigger="click"
                visible={showTutorial1}
                onVisibleChange={() => updateShowTutorial1(false)}>
            <ActionButton icon={"writing"} action={() => FlowRouter.go(`/${language}/mycoach/painlogbook`)}>Voeg toe aan je pijnlogboek</ActionButton>
            <ActionButton icon={"idea"}>Bekijk je coaching van de dag</ActionButton>
            </Popover>
        </React.Fragment>)
    }

    function renderModules() {
        return (<React.Fragment>
            <Popover
                content={<div className="tutorial-content">
                    <h4>Coaching</h4>
                    Hier zie jij je persoonlijk coachingtraject.<br/>Je kan elke dag je coaching bekijken.<br/>
                    <div className="tutorial-button-row">
                        <Button color="gray-light" width="fit" size="small" action={()=> updateShowTutorial1(true)}>Vorige</Button>
                        <Button color="blue" width="fit" size="small" style={{float:"right"}} action={()=> updateShowTutorial2(false)}>Volgende</Button>
                    </div>
                </div>}
                placement="topLeft"
                trigger="click"
                visible={!showTutorial1 && showTutorial2}
                onVisibleChange={() => updateShowTutorial2(false)}>
            <h2 style={{marginTop: '20px'}}>MIJN TRAJECT</h2>
            </Popover>
            <div className="module-container">
                <div className="module-topandbottom-row" style={{marginTop:"20px"}}>
                <Popover
                content={<div className="tutorial-content">
                    <h4>Modules</h4>
                    Voltooi je coaching om na een tijdje andere<br/>modules vrij te spelen!<br/>
                    <div className="tutorial-illustration"><Illustration image="voortgang" width={"100%"}></Illustration></div>
                    <div className="tutorial-button-row">
                        <Button color="gray-light" width="fit" size="small" action={()=> updateShowTutorial2(true)}>Vorige</Button>
                        <Button color="blue" width="fit" size="small" style={{float:"right"}} action={()=> updateShowTutorial3(false)}>Begrepen!</Button>
                    </div>
                </div>}
                placement="top"
                trigger="click"
                visible={!showTutorial2 && showTutorial3}
                onVisibleChange={() => updateShowTutorial3(false)}>
                    <ModuleButton code={"PE"} title={"Pijneduatie"} onClick={() => FlowRouter.go(`/${language}/mycoach/module/paineducation/`)} data={userData.progress.PAINEDUCATION}/>
                    </Popover>
                    <div className="line-paineducation" style={{borderLeft:calculateLineColor("PAINEDUCATION")}}/>
                </div>
                <div className="module-middle-row">
                    <ModuleButton code={"EM"} title={"Gedachten en emoties"} onClick={() => FlowRouter.go(`/${language}/mycoach/module/thoughtsemotions/`)} data={userData.progress.THOUGHTSEMOTIONS}/>
                    <div className="coaching-circle">Mijn <br/>coaching</div>
                    <ModuleButton code={"ACT"} title={"Activiteit en werk"} onClick={() => FlowRouter.go(`/${language}/mycoach/module/activitywork/`)} data={userData.progress.ACTIVITYWORK}/>
                </div>     
                <div className="module-middle-row">
                    <ModuleButton code={"MOV"} title={"Beweging"} onClick={() => FlowRouter.go(`/${language}/mycoach/module/movement/`)} data={userData.progress.MOVEMENT}/>
                    <ModuleButton code={"SOC"} title={"Sociale omgeving"} onClick={() => FlowRouter.go(`/${language}/mycoach/module/social/`)} data={userData.progress.SOCIAL}/>
                    <div className="line-emotions" style={{borderLeft:calculateLineColor("THOUGHTSEMOTIONS")}}/>
                    <div className="line-activity" style={{borderLeft:calculateLineColor("ACTIVITYWORK")}}/>
                    <div className="line-movement" style={{borderLeft:calculateLineColor("MOVEMENT")}}/>
                    <div className="line-social" style={{borderLeft:calculateLineColor("SOCIAL")}}/>
                </div>
                <div className="module-topandbottom-row">
                    <ModuleButton code={"STR"} title={"Stress en veerkracht"} onClick={() => FlowRouter.go(`/${language}/mycoach/module/stress/`)} data={userData.progress.STRESS}/>
                    <div className="line-stress" style={{borderLeft:calculateLineColor("STRESS")}}/>
                </div>    
            </div> 
        </React.Fragment>)
    }

    function renderSplashScreen() {
        return (<div className="container" style={{justifyContent: "center", textAlign: "center", margin: "0 auto"}}>
            <h2 style={{marginTop: "60px", color:"var(--idewe-blue", fontSize:"20px", fontWeight:"600"}} onClick={() => updateTapCount(tapCount+1)}>Nog even geduld</h2>
            <p style={{fontFamily:"var(--main-font)", color:"var(--idewe-blue-dark)"}}>We zijn nog even bezig aan de MyCoach.</p>
            <img src="/illustrations/working.svg" width={"70%"} style={{marginTop:"80px"}}></img>
        </div>)
    }

    return (
        <div className="container">
            {tapCount < 5 && renderSplashScreen()}
            {tapCount >= 5 && <React.Fragment>
            {handleIntroduction()}
            <FadeIn>
                <h1>My Coach</h1>
                {renderTodos()}
                {renderModules()}
            </FadeIn></React.Fragment>}
        </div>
    )
};
