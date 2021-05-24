import React, { useState, useEffect } from "react";
import { FlowRouter } from "meteor/kadira:flow-router";
import FadeIn from "react-fade-in";

/* Ant-Design Popover */
import Popover from 'antd/lib/popover';
import 'antd/dist/antd.css';

import ProgressManager from "../../api/ProgressManager.jsx";
import ProfileManager from "../../api/ProfileManager.jsx";
import InteractionManager from "../../api/InteractionManager.jsx";
import ShortcutManager from "../../api/ShortcutManager.jsx";
import { UserData } from "../../api/dummydata.jsx";
import "../../db/MyCoachMethods.jsx";
import "./MyCoach.scss";

import jwt_decode from "jwt-decode";

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
import Icon from "../components/Illustrations/Icon.jsx";
import PillButton from "../components/PillButton.jsx";

/* Import coaching modules */
import PainEducationScript from './Modules/ModuleScripts/PainEducationScript.js';
import ThoughtsEmotionsScript from './Modules/ModuleScripts/ThoughtsEmotionsScript.js';
import ActivityWorkScript from './Modules/ModuleScripts/ActivityWorkScript.js';

import { shortcuts } from "../Pages/Modules/ModuleScripts/Shortcuts"

/* Instance of React translate component, "Common" refers to the namespace of the i18n files */
const T = i18n.createComponent("Common");

export default function MyCoach(props) {

    const language  = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";
    const userID    = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr) : 1111111;
    const userToken = FlowRouter.getParam('token') ? FlowRouter.getParam('token') : "demo";

    /* Instantiate managers for progress and interaction retrieval/handling */
    const interactionManager = new InteractionManager(userID);
    const progressManager    = new ProgressManager(userID);
    const profileManager     = new ProfileManager(userID, userToken);
    const shortcutManager    = new ShortcutManager(userID, userToken);

    /* STATES */
    const [tapCount, updateTapCount] = useState(0);

    const [userProgress, setUserProgress] = useState(undefined);
    const [userShortcuts, setUserShortcuts] = useState(undefined);
    const [userDailyCoaching, setUserDailyCoaching] = useState(undefined);
    const [userData, setUserData] = useState(props.data ? (Object.entries(props.data).length === 0 ? UserData : props.data) : undefined);

    const [showIntroductionModal, setShowIntroductionModal] = useState(false);
    const [showIntroductionVideo, setShowIntroductionVideo] = useState(false);
    const [showCoachingModal, setShowCoachingModal] = useState(false);
    const [showTutorial1, updateShowTutorial1] = useState(undefined);
    const [showTutorial2, updateShowTutorial2] = useState(undefined);
    const [showTutorial3, updateShowTutorial3] = useState(undefined);

    function handleIntroduction() {
        if (!userData) return;
        const introText = userData.K ? "Welkom bij de HealthEmpower coaching. Heb je momenteel pijn? Dan ben je niet alleen. Eén op vier werknemers ervaart dagelijks pijn. Meest voorkomend zijn nek- en rugklachten. Dat kan een grote impact hebben op je functioneren, thuis maar ook op het werk. Met deze coaching willen we je inzicht geven in hoe pijn werkt. Je leert hoe  je op een goede manier kan omgaan met je pijn. Dit heeft een positieve impact op je functioneren. Je krijgt ook een aantal handvaten aangereikt om actief aan je gezondheid te werken. Bekijk hier alvast het introductiefilmpje." : "Welkom bij de Health Empower coaching. Heb jij momenteel geen pijn? Gelukkig! 1 op de 4 werknemers ervaart dagelijks pijn. Meest voorkomend zijn nek- en rugklachten. Dat kan een grote impact hebben op je functioneren, thuis maar ook op het werk. Met deze coaching willen we je inzicht geven in hoe pijn werkt. Je leert hoe je het risico op pijn in de toekomst kan beperken. Je krijgt ook een aantal handvaten aangereikt om actief aan je gezondheid te werken. Bekijk hier alvast het introductiefilmpje."
        if (showIntroductionModal) {
            return (
                <AppModal show={true} title={"Welkom!"} defaultOption={"Naar het filmpje"} notifyParent={handleIntroductionSeen}>
                    {introText}
                </AppModal>)}
        if (showIntroductionVideo) {
        return (
            <AppModal show={true} title={"Introduciefilmpje"} defaultOption={"Klaar"} notifyParent={handleIntroductionVideoSeen}>
                Bekijk het introductiefilmpje over de HealthEmpower coaching.
                <iframe src={"https://player.vimeo.com/video/485835694"} width="100%" style={{marginTop:"20px", borderRadius: "10px"}} frameBorder="0" allow="autoplay; fullscreen"></iframe>
            </AppModal>)}
        return (<React.Fragment/>);
    }

    function handleIntroductionSeen() {
        setShowIntroductionModal(false)
    }

    async function handleIntroductionVideoSeen() {
        interactionManager.setInteractionStatus("GENERAL_INTRODUCTIONMODAL", "CONFIRM");
        await progressManager.unlockModules(["PAINEDUCATION"], userProgress);
        const newProgress = await progressManager.getUserProgress();
        setUserProgress(newProgress);
        setShowIntroductionVideo(false);
    }

    function calculateLineColor(module) {
        if (Object.keys(userProgress[module]).length === 0) return "3px solid var(--idewe-gray-dark)";
        let completed = true, notStarted = true;
        for (const [, status] of Object.entries(userProgress[module])) {
            if (status !== "COMPLETED")   completed  = false;
            if (status !== "NOT_STARTED") notStarted = false;
        }
        if (completed) return "3px solid var(--idewe-blue-dark)";
        if (notStarted) return "3px solid var(--idewe-gray-dark)";
        return "3px solid var(--idewe-blue)";
    }

    function renderTodos() {
        return (<React.Fragment>
            <h2>MIJN SHORTCUTS</h2>
            <Popover1>
                <React.Fragment>
                    <ActionButton icon={shortcuts["DAILY-COACHING"].icon} onClick={() => setShowCoachingModal(true)}>{shortcuts["DAILY-COACHING"].translation[language]}</ActionButton>
                    {userShortcuts && userShortcuts.map(shortcut => {
                        return <ActionButton icon={shortcuts[shortcut.shortcut].icon} 
                                             onClick={() => {
                                                 if (shortcuts[shortcut.shortcut].link) { FlowRouter.go(`/${language}/mycoach/${userToken}/${shortcuts[shortcut.shortcut].link}`) } 
                                                 else { setShowCoachingModal(true) } }}>
                                    {shortcuts[shortcut.shortcut].translation[language]}
                                </ActionButton>})}
                </React.Fragment>
            </Popover1>
        </React.Fragment>)
    }

    function renderModules() {
        return (<React.Fragment>
           <Popover2>
            <h2 style={{marginTop: '20px'}}>MIJN TRAJECT</h2>
            </Popover2>
            <div className="module-container">
                <div className="module-topandbottom-row" style={{marginTop:"20px"}}>
                    <Popover3>
                        <ModuleButton code={"PE"} title={"Pijneduatie"} onClick={() => FlowRouter.go(`/${language}/mycoach/${userToken}/module/paineducation/`)} data={userProgress.PAINEDUCATION}/>
                    </Popover3>
                    <div className="line-paineducation" style={{borderLeft:calculateLineColor("PAINEDUCATION")}}/>
                </div>
                <div className="module-middle-row">
                    <ModuleButton code={"EM"} title={"Gedachten en emoties"} onClick={() => FlowRouter.go(`/${language}/mycoach/${userToken}/module/thoughtsemotions/`)} data={userProgress.THOUGHTSEMOTIONS}/>
                    <div className="coaching-circle">Mijn <br/>coaching</div>
                    <ModuleButton code={"ACT"} title={"Activiteit en werk"} onClick={() => FlowRouter.go(`/${language}/mycoach/${userToken}/module/activitywork/`)} data={userProgress.ACTIVITYWORK}/>
                </div>     
                <div className="module-middle-row">
                    <ModuleButton code={"MOV"} title={"Beweging"} onClick={() => FlowRouter.go(`/${language}/mycoach/${userToken}/module/movement/`)} data={userProgress.MOVEMENT}/>
                    <ModuleButton code={"SOC"} title={"Sociale omgeving"} onClick={() => FlowRouter.go(`/${language}/mycoach/module/social/`)} data={userProgress.SOCIAL}/>
                    <div className="line-emotions" style={{borderLeft:calculateLineColor("THOUGHTSEMOTIONS")}}/>
                    <div className="line-activity" style={{borderLeft:calculateLineColor("ACTIVITYWORK")}}/>
                    <div className="line-movement" style={{borderLeft:calculateLineColor("MOVEMENT")}}/>
                    <div className="line-social" style={{borderLeft:calculateLineColor("SOCIAL")}}/>
                </div>
                <div className="module-topandbottom-row">
                    <ModuleButton code={"STR"} title={"Stress en veerkracht"} onClick={() => FlowRouter.go(`/${language}/mycoach/${userToken}/module/stress/`)} data={userProgress.STRESS}/>
                    <div className="line-stress" style={{borderLeft:calculateLineColor("STRESS")}}/>
                </div>    
            </div> 
        </React.Fragment>)
    }

    function renderDailyCoachingModal() {
        if (!userDailyCoaching) return <React.Fragment/>;
        let submodule = [], module = "";
        switch (userDailyCoaching.split("_")[0]) {
            case "PE":
                submodule = PainEducationScript.submodules.filter(submoduleData => submoduleData.id === userDailyCoaching)[0];
                module = "paineducation";
                break;
            case "TE":
                submodule = ThoughtsEmotionsScript.submodules.filter(submoduleData => submoduleData.id === userDailyCoaching)[0];
                module = "thoughtsemotions";
                break;
            case "ACT":
                submodule = ActivityWorkScript.submodules.filter(submoduleData => submoduleData.id === userDailyCoaching)[0];
                module = "activitywork";
                break;
        }

        return (<AppModal
            backOption="Sluit" 
            notifyBack={() => setShowCoachingModal(false)} 
            notifyParent={() => {FlowRouter.go(`/${language}/mycoach/${userToken}/module/${module}/${userDailyCoaching}`)}}
            defaultOption="Bekijk" 
            defaultColor="blue"
            noPadding
            show={showCoachingModal}>
            <div className="modalpopup-top">
                <Illustration image={submodule.image} width={props.imageWidth ? props.imageWidth : "160px"} style={{position: "absolute", bottom: "0px", right: "20px", zIndex: "1"}}/>
                <div className={"module-card-number"}>Onderdeel {submodule.part}</div>
                <div className={"modalpopup-card-title"}>{submodule.titleMarkup[0]}</div>
                {submodule.titleMarkup.length > 1 && <div className={"modalpopup-card-title"}>{submodule.titleMarkup[1]}</div>}
            </div>
            <div className={"modalpopup-body"}>
                <div>
                    <PillButton contentColor="white" fillColor={"blue"} icon="time">{submodule.duration}</PillButton>
                    <PillButton contentColor="white" fillColor={"blue"} icon="information">{submodule.type}</PillButton>
                </div>
                {submodule.description}
            </div>
        </AppModal>)
    }

    function Popover1(popoverProps) {
        return (<Popover
            content={<div className="tutorial-content">
                <h4>Je shortcuts</h4>
                Hier zie jij je snelkoppelingen waar je gemakkelijk<br/>toegang tot hebt. In de coaching modules<br/>kan je zelf nog snelkoppelingen toevoegen naar<br/>interessante oefeningen, informatie en filmpjes.<br/>
                <div className="tutorial-button-row">
                    <Button center color="blue" width="fit" size="small" style={{float:"right"}} onClick={()=> updateShowTutorial1(false)}>Volgende</Button>
                </div>
            </div>}
            placement="bottom"
            trigger="click"
            visible={showTutorial1}>
                {popoverProps.children}
        </Popover>)
    }

    function Popover2(popoverProps) {
        return (<Popover
            content={<div className="tutorial-content">
                <h4>Coaching</h4>
                Hier zie jij je persoonlijk coachingtraject.<br/>Je kan elke dag je coaching bekijken.<br/>
                <div className="tutorial-button-row">
                    <Button center color="gray-light" width="fit" size="small" onClick={()=> updateShowTutorial1(true)}>Vorige</Button>
                    <Button center color="blue" width="fit" size="small" style={{float:"right"}} onClick={()=> updateShowTutorial2(false)}>Volgende</Button>
                </div>
            </div>}
            placement="topLeft"
            trigger="click"
            visible={!showTutorial1 && showTutorial2}>
            {popoverProps.children}
        </Popover>)
    }

    function Popover3(popoverProps) {
        return (<Popover
            content={<div className="tutorial-content">
                <h4>Modules</h4>
                Voltooi je coaching om na een tijdje andere<br/>modules vrij te spelen!<br/>
                <div className="tutorial-illustration"><Illustration image="voortgang" width={"100%"}></Illustration></div>
                <div className="tutorial-button-row">
                    <Button center color="gray-light" width="fit" size="small" onClick={()=> updateShowTutorial2(true)}>Vorige</Button>
                    <Button center color="blue" width="fit" size="small" style={{float:"right"}} onClick={()=> {updateShowTutorial3(false); interactionManager.setInteractionStatus("GENERAL_INTRODUCTIONPOPUPS", "CONFIRM");}}>Begrepen!</Button>
                </div>
            </div>}
            placement="top"
            trigger="click"
            visible={!showTutorial2 && showTutorial3}>
                {popoverProps.children}
        </Popover>)
    }

    function renderSplashScreen() {
        return (<div className="container" style={{justifyContent: "center", textAlign: "center", margin: "0 auto"}}>
            <h2 style={{marginTop: "60px", color:"var(--idewe-blue", fontSize:"20px", fontWeight:"600"}} onClick={() => updateTapCount(tapCount+1)}>Nog even geduld</h2>
            <p style={{fontFamily:"var(--main-font)", color:"var(--idewe-blue-dark)"}}>We zijn nog even bezig aan de MyCoach.</p>
            <img src="/illustrations/working.svg" width={"70%"} style={{marginTop:"80px"}}></img>
        </div>)
    }

    /* Fetch user progress only once, avoids infinite re-rendering due to state-changes */
    useEffect(() => {
        /* Wrap in async function, as getModuleProgress is async */
        async function fetchUserProgress() {
            let progress = await progressManager.getUserProgress();
            if (progress["PAINEDUCATION"]["PE_MOD_1"] === "NOT_STARTED") {
                progress["PAINEDUCATION"]["PE_MOD_1"] = "IN_PROGRESS";
                await progressManager.setSubmoduleStatus("PAINEDUCATION", "PE_MOD_1", "IN_PROGRESS");
            }
            const dailyCoaching = await progressManager.getDailyCoaching();
            setUserProgress(progress);
            setUserDailyCoaching(dailyCoaching);
        }
        async function fetchUserData() {
            const latestUserData = await profileManager.getLatestQuestionnaire();
            setUserData(latestUserData.data);
            progressManager.setProfile(latestUserData.data.profile);
        }
        async function fetchUserShortcuts() {
            const fetchedShortcuts = await shortcutManager.getShortcuts("MAIN", "ANY");
            setUserShortcuts(fetchedShortcuts);
        }
        async function fetchUserInteractionStatus() {
            const result = await interactionManager.getMultipleInteractionStatuses(["GENERAL_INTRODUCTIONPOPUPS", "GENERAL_INTRODUCTIONMODAL"]);
            if (!result.GENERAL_INTRODUCTIONPOPUPS.includes("CONFIRM")) 
                {interactionManager.setInteractionStatus("GENERAL_INTRODUCTIONPOPUPS", "SHOW")}
            updateShowTutorial1(!result.GENERAL_INTRODUCTIONPOPUPS.includes("CONFIRM"));
            updateShowTutorial2(!result.GENERAL_INTRODUCTIONPOPUPS.includes("CONFIRM"));
            updateShowTutorial3(!result.GENERAL_INTRODUCTIONPOPUPS.includes("CONFIRM"));
            if (!result.GENERAL_INTRODUCTIONMODAL.includes("CONFIRM"))
                {interactionManager.setInteractionStatus("GENERAL_INTRODUCTIONMODAL", "SHOW");}
            setShowIntroductionModal(!result.GENERAL_INTRODUCTIONMODAL.includes("CONFIRM"));
            setShowIntroductionVideo(!result.GENERAL_INTRODUCTIONMODAL.includes("CONFIRM"));
        }
        fetchUserProgress();
        fetchUserData();
        fetchUserShortcuts();
        fetchUserInteractionStatus();
    }, []);

    return (
        <div className="container">
            {(tapCount < 5 && !props.noSplash && !coachRRNRs.includes(userID)) && renderSplashScreen()}
            {(tapCount >= 5 || props.noSplash || coachRRNRs.includes(userID)) && <React.Fragment>
            {handleIntroduction()}
            {showCoachingModal && renderDailyCoachingModal()}
            {userProgress && <FadeIn>
                <div style={{display: "flex"}}>
                    <h1>My Coach</h1>
                    <button className="settings-button" onClick={() => FlowRouter.go(`/${language}/mycoach/${userToken}/adminsettings`)}> <Icon width="24px" image={"settings"} color={"blue-dark"}/></button>
                </div>
                {renderTodos()}
                {renderModules()}
            </FadeIn>}</React.Fragment>}
        </div>
    )
}

const coachRRNRs = [1111111, 4862876, 3381097, 4018425, 4799179, 3237616, 4557583, 4013945, 3475505, 2988321, 3604510, 3731886];
/* The module priorities per profile */
const modulePriorities = {
    1: []
}