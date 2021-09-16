import React, { useState, useEffect } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import FadeIn from 'react-fade-in';

import jwt_decode from "jwt-decode";

import PainEducationScript from './ModuleScripts/PainEducationScript.js';
import ThoughtsEmotionsScript from './ModuleScripts/ThoughtsEmotionsScript.js';
import ActivityWorkScript from './ModuleScripts/ActivityWorkScript';
import StressResilienceScript from './ModuleScripts/StressResilienceScript';
import MovementScript from './ModuleScripts/MovementScript.js';
import SocialScript from './ModuleScripts/SocialScript.js';

import ProgressManager from "../../../api/ProgressManager.jsx";
import ShortcutManager from "../../../api/ShortcutManager.jsx";

/* Import components */
import ActionButton from '../../components/ActionButton.jsx';
import Card from '../../components/Card.jsx';
import PillButton from '../../components/PillButton.jsx';
import Icon from "../../components/Illustrations/Icon.jsx";
import Illustration from "../../components/Illustrations/Illustration.jsx";
import NavigationBar from '../../components/NavigationBar.jsx';
import ModuleCard from '../../components/MyCoach/ModuleCard.jsx';
import ModuleTile from '../../components/MyCoach/ModuleTile.jsx';
import AppModal from '../../components/AppModal';

import { shortcuts as shortcutData } from "./ModuleScripts/Shortcuts";

import './ModuleParser.scss';

export default function ModuleParser(props) {

    const [moduleData, updateModuleData] = useState({});
    const [userProgress, updateUserProgress] = useState(undefined);
    const [openSubmodule, updateOpenSubmodule] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [selectedSubmodule, setSelectedSubmodule] = useState(undefined);

    const [shortcuts, setShortcuts] = useState([]);
    const [dailyCoaching, setDailyCoaching] = useState(undefined);

    /* Get states from URL parameters */
    const module = FlowRouter.getParam('module').toUpperCase();
    const language = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";
    const userToken = FlowRouter.getParam('token');
    const userID = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr) : 1111111;

    const progressManager = new ProgressManager(userID);
    const shortcutManager = new ShortcutManager(userID);

    /**
     * Fetches and sets the correct module data, depending on the 
     */
    function fetchModuleData() {
        switch (FlowRouter.getParam('module')) {
            case "paineducation":
                updateModuleData(PainEducationScript);
                break;
            case "thoughtsemotions":
                updateModuleData(ThoughtsEmotionsScript);
                break;
            case "activitywork":
                updateModuleData(ActivityWorkScript);
                break;
            case "stressresilience":
                updateModuleData(StressResilienceScript);
                break;
            case "movement":
                updateModuleData(MovementScript);
                break;
            case "social":
                updateModuleData(SocialScript);
                break;
            default:
                updateModuleData(undefined);
        }
    }

    /**
     * Generate all submodule cards of the given module.
     */
    function renderSubmodulesList() {
        const moduleCardsHTML = [];
        moduleData.submodules.forEach(submodule => {
            const status = userProgress?.[module]?.[submodule.id];
            const isClosed = status === "COMPLETED" || status === "NOT_STARTED" ? true : false;
            const isLocked = status === "NOT_STARTED" || status === "TO_START" ? true : false;
            if (!isClosed && openSubmodule !== submodule.id && openSubmodule === "") { updateOpenSubmodule(submodule.id) }
            moduleCardsHTML.push(<ModuleCard 
                key={submodule.id}
                id={submodule.id}
                title={submodule.titleMarkup}
                number={submodule.part}
                duration={submodule.duration}
                description={submodule.description}
                type={submodule.type}
                image={submodule.image}
                imageWidth={submodule.imageWidth}
                onClick={() => routeToSubmodule(submodule.id)}
                onToggleClosed={updateOpenSubmodule}
                closed={openSubmodule !== submodule.id}
                locked={isLocked}
                status={status}>
            </ModuleCard>)
        });
        return <FadeIn delay="80">{moduleCardsHTML}</FadeIn>;
    }

    function showSubmoduleModal(submodule) {
        setShowModal(true);
        setSelectedSubmodule(submodule);
    }

    /**
     * Generate all submodule cards of the given module.
     */
    function renderSubmodulesTiles() {
        const moduleCardsCol1HTML = [];
        const moduleCardsCol2HTML = [];
        moduleData.submodules.forEach(submodule => {
            const status = userProgress[module][submodule.id];
            const moduleTile = <FadeIn><ModuleTile 
                key={submodule.id}
                id={submodule.id}
                title={submodule.shortTitle}
                icon={submodule.icon}
                onClick={() => showSubmoduleModal(submodule.id)}
                status={status}/></FadeIn>;
            if (submodule.part < 5) moduleCardsCol1HTML.push(moduleTile);
            else { moduleCardsCol2HTML.push(moduleTile); }
        });
        return <div className="tiles-row"><div className="tiles-column">{moduleCardsCol1HTML}</div><div className="tiles-column">{moduleCardsCol2HTML}</div></div>;
    }

    /**
     * Routes to the corresponding submodule
     * @param {String} submodule Corresponding submodule
     */
    function routeToSubmodule(submodule) {
        FlowRouter.go(`/${language}/mycoach/${userToken}/module/${FlowRouter.getParam('module')}/${submodule}`);
    }

    function renderShortcuts() {
        let shortcutButtonsHTML = [];
        shortcuts.forEach(shortcut => {
            if (["DEFAULT", "PINNED"].includes(shortcut.status)) shortcutButtonsHTML.push(<ActionButton size="small" icon={shortcutData[shortcut.shortcut].icon} onClick={() =>  {FlowRouter.go(`/${language}/mycoach/${userToken}/${shortcutData[shortcut.shortcut].link}`) }}>
                {shortcutData[shortcut.shortcut].translation[language]}
            </ActionButton>);
            if (["LOCKED"].includes(shortcut.status)) shortcutButtonsHTML.push(<ActionButton size="small" icon="locked" color="gray-dark">
                {shortcutData[shortcut.shortcut].translation[language]}
            </ActionButton>);
        })
        return (<Card title="MIJN SHORTCUTS" noTranslate>
            <FadeIn delay="80">
                <ActionButton icon={"idea"} size="small" onClick={() => showSubmoduleModal(dailyCoaching)}>Bekijk je dagelijkse coaching</ActionButton>
                { shortcutButtonsHTML }
            </FadeIn>
        </Card>)
    }

    function renderSubmodules() {
        if (module === "ACTIVITYWORK") return (<div>
            <hr style={{borderTop:"var(--idewe-blue) 1px solid", width:"85%"}}/>
            <h3>MIJN TRAJECT</h3>
            <div className="category-scale-text">Belasting</div>
            <Icon image="scale" width="10%" color="blue-dark"/>
            <div className="category-scale-text-last">Belastbaarheid</div>
            { renderSubmodulesTiles() }
        </div>);
        return (<FadeIn>
            <Card title="MIJN TRAJECT" noTranslate>
                { renderSubmodulesList() }
            </Card>
        </FadeIn>)
    }

    function renderModal() {
        if (!selectedSubmodule) {
            return (<AppModal 
                notifyParent={() => {setShowModal(false)}}
                defaultOption={"Begrepen"} 
                title="Module voltooid"
                show={showModal}>
                Je hebt alle modules doorlopen, goed zo! Herbekijk gerust één van de modules die jij al eens doorlopen hebt.
            </AppModal>)}

        const settings = {"TO_START": {text: "Vergrendeld", color: "gray-dark"}, 
                          "NOT_STARTED": {text: "Vergrendeld", color: "gray-dark"}, 
                          "IN_PROGRESS": {text: "Bekijk", color: "blue"}, 
                          "COMPLETED": {text: "Herbekijk", color: "blue"}}
        const submodule = moduleData.submodules.filter(submoduleData => submoduleData.id === selectedSubmodule)[0];
        const locked = ["NOT_STARTED", "TO_START"].includes(userProgress[module][submodule.id]);

        return (<AppModal 
            backOption="Sluit" 
            notifyBack={() => setShowModal(false)} 
            notifyParent={() => {if (!locked) routeToSubmodule(selectedSubmodule)}}
            defaultOption={settings[userProgress[module][submodule.id]].text} 
            defaultColor={settings[userProgress[module][submodule.id]].color} 
            noPadding
            show={showModal}>
            <div className="modalpopup-top">
                <Illustration image={submodule.image + (locked ? "-locked" : "")} width={submodule.imageWidth ? submodule.imageWidth : "160px"} style={{position: "absolute", bottom: "0px", right: "10px", zIndex: "1"}}/>
                <div className={"module-card-number" + (locked ? "-locked" : "")}>Onderdeel {submodule.part}</div>
                <div className={"modalpopup-card-title" + (locked ? "-locked" : "")}>{submodule.titleMarkup[0]}</div>
                {submodule.titleMarkup.length > 1 && <div className={"modalpopup-card-title" + (locked ? "-locked" : "")}>{submodule.titleMarkup[1]}</div>}
            </div>
            <div className={"modalpopup-body" + (locked ? "-locked" : "")}>
                <div>
                    <PillButton contentColor="white" fillColor={locked ? "gray-light" : "blue"} icon="time">{submodule.duration}</PillButton>
                    <PillButton contentColor="white" fillColor={locked ? "gray-light" : "blue"} icon="information">{submodule.type}</PillButton>
                </div>
                {submodule.description}
            </div>
        </AppModal>)
    }

    /* Fetch module data and user progress only once, avoids infinite re-rendering due to state-changes */
    useEffect(() => {
        fetchModuleData();
        /* Wrap in async function, as getModuleProgress is async */
        async function fetchUserProgress() {
            const progress = await progressManager.getModuleProgress(module);
            updateUserProgress(progress);
        }
        /* Wrap in async function, as getModuleProgress is async */
        async function fetchShortcuts() {
            const fetchedShortcuts = await shortcutManager.getShortcuts(module, "ANY");
            const fetchedDailyCoaching = await progressManager.getModuleDailyCoaching(module);
            setShortcuts(fetchedShortcuts);
            setDailyCoaching(fetchedDailyCoaching);
        }
        fetchUserProgress();
        fetchShortcuts();
    }, []);

    if (!moduleData) {return <div className="container">Module "{FlowRouter.getParam('module')}" does not exist.</div>}
    if (Object.keys(moduleData).length === 0 || !userProgress) {
        return (<React.Fragment> 
            <NavigationBar title={moduleData.title}></NavigationBar>
            <div className="container" style={{paddingTop: "85px"}}>
                <div className="module-loading-message">Loading</div>
            </div>
        </React.Fragment>)}

    return (
        <React.Fragment>
            <NavigationBar title={moduleData.title}></NavigationBar>
            { showModal && renderModal() }
            <div className="container" style={{paddingTop: "85px"}}>
                { renderShortcuts() }
                { renderSubmodules() }
            </div>
        </React.Fragment>
    )
};
