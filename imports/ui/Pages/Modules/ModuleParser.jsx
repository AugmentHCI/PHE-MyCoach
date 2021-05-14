import React, { useState, useEffect } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import FadeIn from 'react-fade-in';

/* Import internationalization files */
import i18n from 'meteor/universe:i18n';
import "../../../../i18n/nl.i18n.json"
import "../../../../i18n/fr.i18n.json"
import "../../../../i18n/en.i18n.json"

import jwt_decode from "jwt-decode";

import PainEducationScript from './ModuleScripts/PainEducationScript.js';
import ThoughtsEmotionsScript from './ModuleScripts/ThoughtsEmotionsScript.js';
import ActivityWorkScript from './ModuleScripts/ActivityWorkScript';
import ProgressManager from "../../../api/ProgressManager.jsx";

/* Import components */
import ActionButton from '../../components/ActionButton.jsx';
import Card from '../../components/Card.jsx';
import PillButton from '../../components/PillButton.jsx';
import Icon from "../../components/Illustrations/Icon.jsx";
import Illustration from "../../components/Illustrations/Illustration.jsx";
import NavigationBar from '../../components/NavigationBar.jsx';
import ModuleCard from '../../components/MyCoach/ModuleCard.jsx';
import ModuleTile from '../../components/MyCoach/ModuleTile.jsx';
import './ModuleParser.scss';
import AppModal from '../../components/AppModal';



// Instance of React translate component, "Common" refers to the namespace of the i18n files
const T = i18n.createComponent("Common");

export default function ModuleParser(props) {

    const [moduleData, updateModuleData] = useState({});
    const [userProgress, updateUserProgress] = useState(undefined);
    const [openSubmodule, updateOpenSubmodule] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [selectedSubmodule, setSelectedSubmodule] = useState(undefined);

    /* Get states from URL parameters */
    const module = FlowRouter.getParam('module').toUpperCase();
    const language = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";
    const userToken = FlowRouter.getParam('token');
    const userID = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr) : 1111111;

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
            const status = userProgress[module][submodule.id];
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
            const moduleTile = <ModuleTile 
                key={submodule.id}
                id={submodule.id}
                title={submodule.shortTitle}
                icon={submodule.icon}
                onClick={() => showSubmoduleModal(submodule.id)}
                status={status}>
            </ModuleTile>
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
        return (<Card title="MIJN SHORTCUTS" noTranslate>
            <FadeIn delay="80">
                <ActionButton size="small">Voeg toe aan je pijnlogboek</ActionButton>
                <ActionButton size="small">Bekijk je coaching van de dag</ActionButton>
            </FadeIn>
        </Card>)
    }

    function renderSubmodules() {
        if (module === "ACTIVITYWORK") return (<div>
            <hr color="var(--idewe-blue)"/>
            <h3>MIJN TRAJECT</h3>
            <div className="category-scale-text">Belasting</div>
            <Icon image="scale" width="10%" color="blue-dark"/>
            <div className="category-scale-text">Belastbaarheid</div>
            { renderSubmodulesTiles() }
        </div>);
        return (<FadeIn>
            <Card title="MIJN TRAJECT" noTranslate>
                { renderSubmodulesList() }
            </Card>
        </FadeIn>)
    }

    function renderModal() {
        const settings = {"TO_START": {text: "Vergrendeld", color: "gray-dark"}, 
                          "NOT_STARTED": {text: "Vergrendeld", color: "gray-dark"}, 
                          "IN_PROGRESS": {text: "Bekijk", color: "blue"}, 
                          "COMPLETED": {text: "Herbekijk", color: "blue"}}
        const submodule = moduleData.submodules.filter(submoduleData => submoduleData.id === selectedSubmodule)[0];
        const locked = ["NOT_STARTED", "TO_START"].includes(userProgress[module][submodule.id]);

        return (<AppModal 
            backOption="Terug" 
            notifyBack={() => setShowModal(false)} 
            notifyParent={() => {if (!locked) routeToSubmodule(selectedSubmodule)}}
            defaultOption={settings[userProgress[module][submodule.id]].text} 
            defaultColor={settings[userProgress[module][submodule.id]].color} 
            show={showModal}>
            <div className="modalpopup-top">
                <Illustration image={submodule.image} width={props.imageWidth ? props.imageWidth : "160px"} style={{position: "absolute", bottom: "0px", right: "20px", zIndex: "1"}}/>
                <div className={"module-card-number"}>Onderdeel {submodule.part}</div>
                <div className={"modalpopup-card-title"}>{submodule.titleMarkup[0]}</div>
                {submodule.titleMarkup.length > 1 && <div className={"modalpopup-card-title"}>{submodule.titleMarkup[1]}</div>}
            </div>
            <div className="modalpopup-body">
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
            const progressManager = new ProgressManager(userID);
            const progress = await progressManager.getModuleProgress(module);
            updateUserProgress(progress);
        }
        fetchUserProgress();
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
