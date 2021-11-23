import React, { useState, useEffect } from "react";

/* External API */
import { FlowRouter } from "meteor/kadira:flow-router";
import FadeIn from "react-fade-in";
import jwt_decode from "jwt-decode";
import Popover from 'antd/lib/popover';
import i18n from 'meteor/universe:i18n';
import "../../../i18n/nl.i18n.json";
import "../../../i18n/fr.i18n.json";
import "../../../i18n/en.i18n.json";

/* Internal API */
import "../../db/MyCoachMethods.jsx"; // TODO
import { UserData } from "../../api/questionnaireCodes/dummydata.jsx";
import { SHORTCUTS } from "../../api/data/Shortcuts.js"
import { DEV_RRNRS, MODULEORDER } from "../../api/data/Coaching";

/* Managers */
import ProgressManager from "../../api/managers/ProgressManager.jsx";
import ProfileManager from "../../api/managers/ProfileManager.jsx";
import InteractionManager from "../../api/managers/InteractionManager.jsx";
import ShortcutManager from "../../api/managers/ShortcutManager.jsx";

/* UI Components */
import ActionButton from "../components/ActionButton.jsx";
import AppModal from "../components/AppModal.jsx";
import ModuleButton from "../components/MyCoach/ModuleButton.jsx";
import Button from "../components/Button.jsx";
import Illustration from "../components/Illustrations/Illustration.jsx";
import Icon from "../components/Illustrations/Icon.jsx";
import CoachingModal from "../components/CoachingModal";

/* Styles */
import 'antd/dist/antd.css';
import "./MyCoach.scss";


/* Instance of React translate component, "Common" refers to the namespace of the i18n files */
const T = i18n.createComponent("Common");


export default function MyCoach(props) {

    const language  = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";
    const userID    = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token'))?.rrnr) : 1111111;
    const userToken = FlowRouter.getParam('token') ? FlowRouter.getParam('token') : "demo";

    /* Instantiate managers for progress and interaction retrieval/handling */
    const interactionManager = new InteractionManager(userID);
    const progressManager    = new ProgressManager({userID: userID, userToken: userToken});
    const profileManager     = new ProfileManager(userID, userToken);
    const shortcutManager    = new ShortcutManager(userID, userToken);

    /* STATES */
    const [userProgress, setUserProgress] = useState(undefined);
    const [userShortcuts, setUserShortcuts] = useState(undefined);
    const [userDailyCoaching, setUserDailyCoaching] = useState(undefined);
    const [userData, setUserData] = useState(props.data ? (Object.entries(props.data).length === 0 ? UserData : props.data) : {});
    const [userProfile, setUserProfile] = useState(UserData?.profile ? UserData?.profile : 1);
    const [minutesToNextCoaching, setMinutesToNextCoaching] = useState(0);

    const [showIntroductionModal, setShowIntroductionModal] = useState(false);
    const [showIntroductionVideo, setShowIntroductionVideo] = useState(false);
    const [showFinishPainEducationModal, setShowFinishPainEducationModal] = useState(false);
    const [showCoachingModal, setShowCoachingModal] = useState(false); 
    const [showTutorial1, updateShowTutorial1] = useState(false);
    const [showTutorial2, updateShowTutorial2] = useState(false);
    const [showTutorial3, updateShowTutorial3] = useState(false);
    const [showTutorial4, updateShowTutorial4] = useState(false);


    function handleIntroduction() {
        if (!userData) return;
        // const introText = userData?.K ? "Welkom bij de HealthEmpower coaching. Heb je momenteel pijn? Dan ben je niet alleen. Eén op vier werknemers ervaart pijn. Meest voorkomend zijn nek- en rugklachten. Dat kan een grote impact hebben op je functioneren, thuis maar ook op het werk. Met deze coaching willen we je inzicht geven in hoe pijn werkt. Je leert hoe  je op een goede manier kan omgaan met je pijn. Dit heeft een positieve impact op je functioneren. Je krijgt ook een aantal handvaten aangereikt om actief aan je gezondheid te werken. Daarom is de app ook interessant voor mensen die nu geen pijn ervaren. Bekijk hier alvast het introductiefilmpje." : "Welkom bij de Health Empower coaching. Heb jij momenteel geen pijn? Gelukkig! 1 op de 4 werknemers ervaart pijn. Meest voorkomend zijn nek- en rugklachten. Dat kan een grote impact hebben op je functioneren, thuis maar ook op het werk. Met deze coaching willen we je inzicht geven in hoe pijn werkt. Je leert hoe je het risico op pijn in de toekomst kan beperken. Je krijgt ook een aantal handvaten aangereikt om actief aan je gezondheid te werken. Daarom is de app ook interessant voor mensen die nu geen pijn ervaren. Bekijk hier alvast het introductiefilmpje."
        const introText ="Welkom bij de HealthEmpower coaching. Heb je momenteel pijn? Dan ben je niet alleen. Eén op vier werknemers ervaart pijn. Meest voorkomend zijn nek- en rugklachten. Dat kan een grote impact hebben op je functioneren, thuis maar ook op het werk. Met deze coaching willen we je inzicht geven in hoe pijn werkt. Je leert hoe  je op een goede manier kan omgaan met je pijn. Dit heeft een positieve impact op je functioneren. Je krijgt ook een aantal handvaten aangereikt om actief aan je gezondheid te werken. Daarom is de app ook interessant voor mensen die nu geen pijn ervaren. Bekijk hier alvast het introductiefilmpje.";

        if (showIntroductionModal) {
            return (
                <AppModal show={true} title={"Welkom!"} defaultOption={"Naar het filmpje"} notifyParent={handleIntroductionSeen}>
                    {introText}
                </AppModal>)}
        if (showIntroductionVideo) {
        return (
            <AppModal show={true} title={"Introduciefilmpje"} defaultOption={"Klaar"} notifyParent={handleIntroductionVideoSeen}>
                Bekijk het introductiefilmpje over de HealthEmpower coaching. Hierin kom je meer te weten over de verschillende domeinen die belangrijk zijn bij pijn. Rond ieder domein hebben we coaching uitgewerkt, zo weet je waaraan je je mag verwachten.
                <iframe src={"https://player.vimeo.com/video/485835694"} width="100%" style={{marginTop:"20px", borderRadius: "10px"}} frameBorder="0" allow="autoplay; fullscreen"></iframe>
            </AppModal>)}
        return (<React.Fragment/>);
    }

    function handleIntroductionSeen() {
        setShowIntroductionModal(false);
    }

    async function handleIntroductionVideoSeen() {
        interactionManager.setInteractionStatus("GENERAL_INTRODUCTIONMODAL", "CONFIRM");
        await progressManager.unlockModules(["PAINEDUCATION"], userProgress);
        const newProgress = await progressManager.getUserProgress();
        setUserProgress(newProgress);
        setShowIntroductionVideo(false);
        updateShowTutorial1(true);
        updateShowTutorial2(true);
        updateShowTutorial3(true);
        updateShowTutorial4(true);
    }

    function calculateLineColor(module) {
        if (!userProgress || !userProgress[module]) return "3px solid var(--idewe-gray-dark)";
        if (Object.keys(userProgress?.[module]).length === 0) return "3px solid var(--idewe-gray-dark)";
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
            <Popover
            content={<div className="tutorial-content">
                <h4>Je shortcuts</h4>
                Hier zie jij je snelkoppelingen waar je gemakkelijk<br/>toegang tot hebt. In de coaching modules<br/>kan je zelf nog snelkoppelingen toevoegen naar<br/>interessante oefeningen, informatie en filmpjes.<br/>
                <div className="tutorial-button-row">
                <Button center color="gray-light" size="small" style={{flex: 1, marginRight: "10px"}} onClick={()=> updateShowTutorial1(true)}>Vorige</Button>
                    <Button center color="blue" size="small" style={{flex: 1}} onClick={()=> updateShowTutorial2(false)}>Volgende</Button>
                </div>
            </div>}
            placement="bottom"
            trigger="click"
            visible={showTutorial2 && !showTutorial1}>
                <ActionButton icon={SHORTCUTS["DAILY-COACHING"].icon} onClick={() => setShowCoachingModal(true)}>{SHORTCUTS["DAILY-COACHING"].translation[language]}</ActionButton>
                {userShortcuts && userShortcuts.map(shortcut => {
                 return <ActionButton key={shortcut.shortcut} icon={SHORTCUTS[shortcut.shortcut].icon} 
                                            onClick={() => {
                                                if (SHORTCUTS[shortcut.shortcut].link) { FlowRouter.go(`/${language}/mycoach/${userToken}/${SHORTCUTS[shortcut.shortcut].link}`) } 
                                                else { setShowCoachingModal(true) } }}>
                                {SHORTCUTS[shortcut.shortcut].translation[language]}
                            </ActionButton>})}
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
                    <Button center color="blue" size="small" style={{flex: 1}} onClick={()=> updateShowTutorial1(false)}>Volgende</Button>
                </div>
            </div>}
            placement="topLeft"
            trigger="click"
            visible={showTutorial1 && !showIntroductionVideo}>
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
                            <Button center color="gray-light" size="small" style={{flex: 1, marginRight: "10px"}} onClick={()=> updateShowTutorial2(true)}>Vorige</Button>
                            <Button center color="blue" size="small" style={{flex: 1}} onClick={()=> {updateShowTutorial3(false);}}>Volgende</Button>
                        </div>
                    </div>}
                    placement="top"
                    trigger="click"
                    visible={!showTutorial2 && showTutorial3}>
                        <ModuleButton position={"TOP"} token={userToken} language={language} module={MODULEORDER[userProfile][0]} data={userProgress?.[MODULEORDER[userProfile][0]]}/>
                    </Popover>
                    <div className="line-paineducation" style={{borderLeft:calculateLineColor(MODULEORDER[userProfile][0])}}/>
                </div>
                <div className="module-middle-row">
                    <ModuleButton position={"TOPRIGHT"} token={userToken} language={language} module={MODULEORDER[userProfile][1]} data={userProgress?.[MODULEORDER[userProfile][1]]}/>
                    <div className="coaching-circle">Mijn <br/>coaching</div>
                    <ModuleButton position={"TOPLEFT"} token={userToken} language={language} module={MODULEORDER[userProfile][2]} data={userProgress?.[MODULEORDER[userProfile][2]]}/>
                </div>     
                <div className="module-middle-row">
                    <ModuleButton position={"BOTTOMLEFT"} token={userToken} language={language} module={MODULEORDER[userProfile][3]} data={userProgress?.[MODULEORDER[userProfile][3]]}/>
                    <ModuleButton position={"BOTTOMRIGHT"} token={userToken} language={language} module={MODULEORDER[userProfile][4]} data={userProgress?.[MODULEORDER[userProfile][4]]}/>
                    <div className="line-emotions" style={{borderLeft:calculateLineColor(MODULEORDER[userProfile][1])}}/>
                    <div className="line-activity" style={{borderLeft:calculateLineColor(MODULEORDER[userProfile][2])}}/>
                    <div className="line-movement" style={{borderLeft:calculateLineColor(MODULEORDER[userProfile][3])}}/>
                    <div className="line-social" style={{borderLeft:calculateLineColor(MODULEORDER[userProfile][4])}}/>
                </div>
                <div className="module-topandbottom-row">
                    <ModuleButton position={"BOTTOM"} token={userToken} language={language} module={MODULEORDER[userProfile][5]} data={userProgress?.[MODULEORDER[userProfile][5]]}/>
                    <div className="line-stress" style={{borderLeft:calculateLineColor(MODULEORDER[userProfile][5])}}/>
                </div>    
            </div> 
        </React.Fragment>)
    }

    function renderDailyCoachingModal() {
        if (!userDailyCoaching) {
            return (<AppModal 
                notifyParent={() => {setShowCoachingModal(false)}}
                defaultOption={"Begrepen"} 
                title="Coaching voltooid"
                show={showCoachingModal}>
                Je hebt alle modules doorlopen, goed zo! Herbekijk gerust één van de modules die jij al eens doorlopen hebt. Denk af en toe ook aan jouw logboeken!
            </AppModal>)
        }
       
        const module = userDailyCoaching.split("_")[0];
        return (<CoachingModal module={module} submodule={userDailyCoaching} showModal={showCoachingModal} setShowModal={setShowCoachingModal} userToken={userToken} language={language} checkProgress minutesToUnlock={minutesToNextCoaching}/>)
    }

    function renderFinishPainEducationModal() {
        return <AppModal
        notifyParent={() => {setShowFinishPainEducationModal(false); interactionManager.setInteractionStatus("GENERAL_PAINEDUCATIONFINISHEDMODAL", "CONFIRM");}}
        defaultOption="Begrepen" 
        defaultColor="blue"
        title="Proficiat!"
        show={userProgress?.["PAINEDUCATION"]?.["PE_MOD_5"] === "COMPLETED" && showFinishPainEducationModal}>
            Je hebt de module pijneducatie doorlopen, super! Je kan nu vrij de overige modules bekijken, of je dagelijkse coaching volgen via de snelkoppeling bovenaan. Wij hebben ook een snelkoppeling naar je pijnlogboek toegevoegd, neem daar zeker ook eens een kijkje!
    </AppModal>
    }

    function renderSplashScreen() {
        return (<div className="container" style={{justifyContent: "center", textAlign: "center", margin: "0 auto"}}>
            <h2 style={{marginTop: "60px", color:"var(--idewe-blue", fontSize:"20px", fontWeight:"600"}}>Still in the works</h2>
            <p style={{fontFamily:"var(--main-font)", color:"var(--idewe-blue-dark)"}}>We are still working on translating some parts of MyCoach. Come back in two weeks!</p>
            <img src="/illustrations/working.svg" width={"70%"} style={{marginTop:"80px"}}></img>
        </div>)
    }

    /* Fetch user progress only once, avoids infinite re-rendering due to state-changes */
    useEffect(() => {
        /* Wrap in async function, as getModuleProgress is async */
        async function fetchUserProgressAndShortcuts() {
            let progress = await progressManager.getUserProgress();
            /* Unlock Paineducation if not unlocked yet */
            if (progress?.PAINEDUCATION && progress["PAINEDUCATION"]["PE_MOD_1"] === "NOT_STARTED") {
                progress["PAINEDUCATION"]["PE_MOD_1"] = "IN_PROGRESS";
                await progressManager.setSubmoduleStatus("PAINEDUCATION", "PE_MOD_1", "IN_PROGRESS");
            }
            /* Unlock last 3 modules if applicable */
            if (progress?.["ACTIVITYWORK"]?.["ACT_MOD_9"] === "COMPLETED" && progress?.["THOUGHTSEMOTIONS"]?.["TE_MOD_6"] === "COMPLETED") {
                progress["STRESS"]["STR_MOD_1"] = "IN_PROGRESS";
                progress["MOVEMENT"]["MOV_MOD_1"] = "IN_PROGRESS";
                progress["SOCIAL"]["SOC_MOD_1"] = "IN_PROGRESS";
                progressManager.setSubmoduleStatus("STRESS", "STR_MOD_1", "IN_PROGRESS");
                progressManager.setSubmoduleStatus("MOVEMENT", "MOV_MOD_1", "IN_PROGRESS");
                progressManager.setSubmoduleStatus("SOCIAL", "SOC_MOD_1", "IN_PROGRESS");
                console.log("Unlocking");
                //await progressManager.setSubmoduleStatus("PAINEDUCATION", "PE_MOD_1", "IN_PROGRESS");
            }
            const dailyCoaching = await progressManager.getDailyCoaching();
            setUserProgress(progress);
            setUserDailyCoaching(dailyCoaching);

            await shortcutManager.removeShortcut("THOUGHTEXERCISES"); /* Remove old THOUGHTEXERCISES shortcut if present*/
            const fetchedShortcuts = await shortcutManager.getShortcuts("MAIN", "ANY");
            /* Unlock EXERCISES shortcut if applicable */
            const unlockedThoughtShortcut = progress?.THOUGHTSEMOTIONS && progress["THOUGHTSEMOTIONS"]["TE_MOD_2"] === "COMPLETED";
            const unlockedStressShortcut = progress?.STRESS && progress["STRESS"]["STR_MOD_4"] === "COMPLETED";
            const unlockedActivityShortcut = progress?.ACTIVITYWORK && progress["ACTIVITYWORK"]["ACT_MOD_4"] === "COMPLETED";
            const unlockedMovementShortcut = progress?.MOVEMENT && progress["MOVEMENT"]["MOV_MOD_3"] === "COMPLETED";
            const unlockedSocialShortcut = progress?.SOCIAL && progress["SOCIAL"]["SOC_MOD_2"] === "COMPLETED";

            if ((unlockedThoughtShortcut ||  unlockedStressShortcut || unlockedActivityShortcut || unlockedMovementShortcut || unlockedSocialShortcut) && fetchedShortcuts.filter(shortcut => shortcut.shortcut === "EXERCISES").length === 0) {
                shortcutManager.upsertShortcut("EXERCISES", "MAIN", "DEFAULT");
                shortcutManager.upsertShortcut("EXERCISES", "THOUGHTSEMOTIONS", "DEFAULT");
                fetchedShortcuts.push({screen: "MAIN", shortcut: "EXERCISES"});
            }
            setUserShortcuts(fetchedShortcuts);
            const minutes = await progressManager.getMinutesToNextCoaching();
            setMinutesToNextCoaching(minutes);
        }
        async function fetchUserData() {
            const latestUserData = await profileManager.getLatestQuestionnaire();
            latestUserData?.data ? setUserData(latestUserData.data) : setUserData({profile: 1, K: false});
            latestUserData?.data?.profile ? progressManager.setProfile(latestUserData.data.profile) : progressManager.setProfile(1);
        }
        async function fetchUserInteractionStatus() {
            const result = await interactionManager.getMultipleInteractionStatuses(["GENERAL_INTRODUCTIONPOPUPS", "GENERAL_INTRODUCTIONMODAL", "GENERAL_PAINEDUCATIONFINISHEDMODAL"]);
            if (!result.GENERAL_INTRODUCTIONPOPUPS.includes("CONFIRM")) 
                {interactionManager.setInteractionStatus("GENERAL_INTRODUCTIONPOPUPS", "SHOW")}
            updateShowTutorial1(!result.GENERAL_INTRODUCTIONPOPUPS.includes("CONFIRM"));
            updateShowTutorial2(!result.GENERAL_INTRODUCTIONPOPUPS.includes("CONFIRM"));
            updateShowTutorial3(!result.GENERAL_INTRODUCTIONPOPUPS.includes("CONFIRM"));
            updateShowTutorial4(!result.GENERAL_INTRODUCTIONPOPUPS.includes("CONFIRM"));
            if (!result.GENERAL_INTRODUCTIONMODAL.includes("CONFIRM"))
                {interactionManager.setInteractionStatus("GENERAL_INTRODUCTIONMODAL", "SHOW");}
            setShowIntroductionModal(!result.GENERAL_INTRODUCTIONMODAL.includes("CONFIRM"));
            setShowIntroductionVideo(!result.GENERAL_INTRODUCTIONMODAL.includes("CONFIRM"));
            setShowFinishPainEducationModal(!result.GENERAL_PAINEDUCATIONFINISHEDMODAL.includes("CONFIRM"));
        }
        fetchUserProgressAndShortcuts();
        fetchUserData();
        fetchUserInteractionStatus();
    }, []);

    return (
        <div className="container">
            {(!props.noSplash && language !== "nl-BE") && renderSplashScreen()}
            {(props.noSplash || language === "nl-BE") && <React.Fragment>
            {handleIntroduction()}
            {showCoachingModal && renderDailyCoachingModal()}
            {userProgress && showFinishPainEducationModal && userProgress?.["PAINEDUCATION"]?.["PE_MOD_5"] === "COMPLETED" && renderFinishPainEducationModal()}
            {userProgress && <FadeIn>
                <div style={{display: "flex", position: "relative"}}>
                <Popover
                    content={<div className="tutorial-content">
                        <h4>Geef feedback</h4>
                        Je kan op elk moment op deze knop drukken om feedback te geven over de app (als er iets niet correct werkt, of niet werkt zoals verwacht). Deze feedback nemen wij dan mee bij het verbeteren van de coaching!
                        <div className="tutorial-button-row">
                            <Button center color="gray-light" size="small" style={{flex: 1, marginRight: "10px"}} onClick={()=> updateShowTutorial3(true)}>Vorige</Button>
                            <Button center color="blue" size="small" style={{flex: 1}} onClick={()=> {updateShowTutorial4(false); interactionManager.setInteractionStatus("GENERAL_INTRODUCTIONPOPUPS", "CONFIRM");}}>Begrepen!</Button>
                        </div>
                    </div>}
                    placement="bottomRight"
                    trigger="click"
                    visible={!showTutorial3 && showTutorial4}>
                    <div className="mycoach-feedback-button" 
                         onClick={() => { DEV_RRNRS.includes(userID) ? 
                                            FlowRouter.go(`/${language}/mycoach/${userToken}/adminsettings`) : 
                                            FlowRouter.go(`/${language}/mycoach/${userToken}/feedback`) }}>
                        { DEV_RRNRS.includes(userID) ? 
                            <Icon color="white" image="settings" width="22px"/> :
                            <Icon color="white" image="add-text" width="26px" style={{marginTop:"-4px"}}/> }
                    </div>
                    </Popover>
                    <h1 style={{marginBottom:0}}>My Coach</h1>
                </div>
                { renderTodos() }
                { renderModules() }
            </FadeIn>}</React.Fragment>}
        </div>
    )
}