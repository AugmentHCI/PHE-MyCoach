import React, { useState, useEffect } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import FadeIn from 'react-fade-in';

/* Import internationalization files */
import i18n from 'meteor/universe:i18n';
import "../../../../i18n/nl.i18n.json"
import "../../../../i18n/fr.i18n.json"
import "../../../../i18n/en.i18n.json"

/* [TEMP] Use dummy user data */
import { UserData } from '../../../api/dummydata.jsx';
import PainEducationScript from './ModuleScripts/PainEducationScript.js';
import ThoughtsEmotionsScript from './ModuleScripts/ThoughtsEmotionsScript.js';
import ProgressManager from "../../../api/ProgressManager.jsx";

/* Import components */
import ActionButton from '../../components/ActionButton.jsx';
import Card from '../../components/Card.jsx';
import NavigationBar from '../../components/NavigationBar.jsx';
import ModuleCard from '../../components/MyCoach/ModuleCard.jsx';
import './ModuleParser.scss';



// Instance of React translate component, "Common" refers to the namespace of the i18n files
const T = i18n.createComponent("Common");

export default function ModuleParser(props) {

    const [moduleData, updateModuleData] = useState({});
    const [userProgress, updateUserProgress] = useState(undefined);
    const [openSubmodule, updateOpenSubmodule] = useState("");
    /* Get states from URL parameters */
    const [module, setModule] = useState(FlowRouter.getParam('module').toUpperCase());
    const [language, setLanguage] = useState(FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE");
    const [userID, setUserID] = useState(FlowRouter.getParam('token') ? jwt_decode(FlowRouter.getParam('token')).rrnr : 1111111);


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
            default:
                updateModuleData(undefined);
        }
    }

    /**
     * Generate all submodule cards of the given module.
     */
    function renderSubmodules() {
        const moduleCardsHTML = [];
        moduleData.submodules.forEach(submodule => {
            const status = userProgress[module][submodule.id];
            const isClosed = status === "COMPLETED" || status === "NOT_STARTED" ? true : false;
            const isLocked = status === "NOT_STARTED" ? true : false;
            if (!isClosed && openSubmodule !== submodule.id && openSubmodule === "") { updateOpenSubmodule(submodule.id) }
            moduleCardsHTML.push(<ModuleCard 
                key={submodule.id}
                id={submodule.id}
                title={submodule["title-markup"]}
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

    /**
     * Routes to the corresponding submodule
     * @param {String} submodule Corresponding submodule
     */
    function routeToSubmodule(submodule) {
        FlowRouter.go(`/${language}/mycoach/module/${FlowRouter.getParam('module')}/${submodule}`);
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
            <div className="container" style={{paddingTop: "85px"}}>
                <FadeIn>
                    <Card title="MIJN SHORTCUTS" noTranslate>
                        <FadeIn delay="80">
                            <ActionButton size="small">Voeg toe aan je pijnlogboek</ActionButton>
                            <ActionButton size="small">Bekijk je coaching van de dag</ActionButton>
                        </FadeIn>
                    </Card>

                    <Card title="MIJN TRAJECT" noTranslate>
                        {renderSubmodules()}
                    </Card>
                </FadeIn>
            </div>
        </React.Fragment>
    )
};
