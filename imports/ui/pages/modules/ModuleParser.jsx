import React, { useState, useEffect } from 'react';

/* External API */
import { FlowRouter } from 'meteor/kadira:flow-router';
import FadeIn from 'react-fade-in';
import jwt_decode from "jwt-decode";

/* Internal API */
import { getModule, getSubmodule} from '../../../api/scripts/ScriptDispatcher';
import { SHORTCUTS } from "../../../api/data/Shortcuts.js";

/* Managers */
import ProgressManager from "../../../api/managers/ProgressManager.jsx";
import ShortcutManager from "../../../api/managers/ShortcutManager.jsx";

/* UI Components */
import ActionButton from '../../components/ActionButton.jsx';
import Card from '../../components/Card.jsx';
import PillButton from '../../components/PillButton.jsx';
import Icon from "../../components/Illustrations/Icon.jsx";
import Illustration from "../../components/Illustrations/Illustration.jsx";
import NavigationBar from '../../components/NavigationBar.jsx';
import ModuleCard from '../../components/MyCoach/ModuleCard.jsx';
import ModuleTile from '../../components/MyCoach/ModuleTile.jsx';
import AppModal from '../../components/AppModal';
import LoadingScreen from '../../components/LoadingScreen.jsx';
import CoachingModal from '../../components/CoachingModal';

/* Styles */
import './ModuleParser.scss';


export default function ModuleParser(props) {

    const [moduleData, updateModuleData] = useState({});
    const [userProgress, updateUserProgress] = useState(undefined);
    const [openSubmodule, updateOpenSubmodule] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [selectedSubmodule, setSelectedSubmodule] = useState(undefined);

    const [shortcuts, setShortcuts] = useState([]);
    const [dailyCoaching, setDailyCoaching] = useState(undefined);
    const [loadingShortcuts, setLoadingShortcuts] = useState(true);
    const [loadingUserData, setLoadingUserData] = useState(true);
    const [loadingModule, setLoadingModule] = useState(true);
    const [minutesToNextCoaching, setMinutesToNextCoaching] = useState(0);

    /* Get states from URL parameters */
    const module = FlowRouter.getParam('module').toUpperCase();
    const language = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";
    const userToken = FlowRouter.getParam('token');
    const userID = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr) : 1111111;

    const progressManager = new ProgressManager({userID: userID, userToken: userToken});
    const shortcutManager = new ShortcutManager(userID);

    /**
     * Generate all submodule cards of the given module.
     */
    function renderSubmodulesList() {
        if (loadingModule) return;
        const moduleCardsHTML = [];
        moduleData.submodules.forEach(submodule => {
            const status = userProgress?.[module]?.[submodule.id];
            const isClosed = status === "COMPLETED" || status === "NOT_STARTED" ? true : false;
            const isTimeLocked = status === "IN_PROGRESS" && minutesToNextCoaching > 0 ? true : false;
            const isLocked = status === "NOT_STARTED" || status === "TO_START" ? true : isTimeLocked;
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
                timeLocked={isTimeLocked}
                minLeft={minutesToNextCoaching}
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
        if (loadingShortcuts) return;
        let shortcutButtonsHTML = [];
        shortcuts.forEach(shortcut => {
            if (["DEFAULT", "PINNED"].includes(shortcut.status)) shortcutButtonsHTML.push(<ActionButton size="small" icon={SHORTCUTS[shortcut.shortcut].icon} onClick={() =>  {FlowRouter.go(`/${language}/mycoach/${userToken}/${SHORTCUTS[shortcut.shortcut].link}`) }}>
                {SHORTCUTS[shortcut.shortcut].translation[language]}
            </ActionButton>);
            if (["LOCKED"].includes(shortcut.status)) shortcutButtonsHTML.push(<ActionButton size="small" icon="locked" color="gray-dark">
                {SHORTCUTS[shortcut.shortcut].translation[language]}
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
        if (loadingModule) return;
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
        if (loadingModule) return;
        if (!selectedSubmodule) {
            return (<AppModal 
                notifyParent={() => {setShowModal(false)}}
                defaultOption={"Begrepen"} 
                title="Module voltooid"
                show={showModal}>
                Je hebt alle modules doorlopen, goed zo! Herbekijk gerust één van de modules die jij al eens doorlopen hebt.
            </AppModal>)}

        return (<CoachingModal module={module} submodule={selectedSubmodule} showModal={showModal} setShowModal={setShowModal} userToken={userToken} language={language} checkProgress minutesToUnlock={minutesToNextCoaching}/>)
    }

    /* Fetch module data and user progress only once, avoids infinite re-rendering due to state-changes */
    useEffect(() => {
        async function fetchModuleData() {
            const moduleID = FlowRouter.getParam('module');
            const fetchedModuleData = getModule({module: moduleID});
            updateModuleData(fetchedModuleData);
            setLoadingModule(false);
        }
        /* Wrap in async function, as getModuleProgress is async */
        async function fetchUserProgress() {
            const progress = await progressManager.getModuleProgress(module);
            const minutes = await progressManager.getMinutesToNextCoaching();
            updateUserProgress(progress);
            setMinutesToNextCoaching(minutes);
            setLoadingUserData(false);
        }
        /* Wrap in async function, as getModuleProgress is async */
        async function fetchShortcuts() {
            const fetchedShortcuts = await shortcutManager.getShortcuts(module, "ANY");
            const fetchedDailyCoaching = await progressManager.getModuleDailyCoaching(module);
            setShortcuts(fetchedShortcuts);
            setDailyCoaching(fetchedDailyCoaching);
            setLoadingShortcuts(false);
        }
        fetchModuleData();
        fetchUserProgress();
        fetchShortcuts();
    }, []);

    if (!moduleData) {return <div className="container">Module "{FlowRouter.getParam('module')}" does not exist.</div>}
    
    return (
        <React.Fragment>
            <NavigationBar title={moduleData.title}></NavigationBar>
            { showModal && renderModal() }
            <div className="container" style={{paddingTop: "85px"}}>
                { (loadingModule || loadingShortcuts || loadingUserData) && <LoadingScreen/> }
                { !(loadingModule || loadingShortcuts || loadingUserData) && renderShortcuts() }
                { !(loadingModule || loadingShortcuts || loadingUserData) && renderSubmodules() }
            </div>
        </React.Fragment>
    )
};
