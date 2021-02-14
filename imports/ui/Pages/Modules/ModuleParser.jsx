import React, { useState, useEffect } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import FadeIn from 'react-fade-in';

/* Import internationalization files */
import i18n from 'meteor/universe:i18n';
import "../../../../i18n/nl.i18n.json"
import "../../../../i18n/fr.i18n.json"
import "../../../../i18n/en.i18n.json"

/* [TEMP] Use dummy user data */
import UserData from '../../../api/userdata_dummy.js';
import PainEducationScript from './ModuleScripts/PainEducationScript.js';

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

    const [openSubmodule, updateOpenSubmodule] = useState("");

    /**
     * Fetches and sets the correct module data, depending on the 
     */
    function fetchModuleData() {
        switch (FlowRouter.getParam('module')) {
            case "paineducation":
                updateModuleData(PainEducationScript);
                break;
            default:
                updateModuleData("invalid");
        }
    }

    /**
     * Generate all submodule cards of the given module.
     */
    function renderSubmodules() {
        const moduleCardsHTML = [];
        moduleData.submodules.forEach(submodule => {
            const moduleProgress = UserData.progress.PAINEDUCATION[submodule.id];
            const isClosed = moduleProgress === "COMPLETED" || moduleProgress === "NOT_STARTED" ? true : false;
            const isLocked = moduleProgress === "NOT_STARTED" ? true : false;
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
                status={UserData.progress.PAINEDUCATION[submodule.id]}>
            </ModuleCard>)
        });
        return <FadeIn delay="80">{moduleCardsHTML}</FadeIn>;
    }

    /**
     * Routes to the corresponding submodule
     * @param {String} submodule Corresponding submodule
     */
    function routeToSubmodule(submodule) {
        FlowRouter.go(`/mycoach/paineducation/${submodule}`);
    }

    /* Fetch module data only once, avoids infinite re-rendering due to state-changes */
    useEffect(() => {fetchModuleData()}, []);

    if (moduleData === "invalid") {return <div className="container">Module "{FlowRouter.getParam('module')}" does not exist.</div>}
    if (Object.keys(moduleData).length === 0) {return <div className="container"><div className="module-loading-message">Loading</div></div>}

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
