import React, { useState, useEffect } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Import internationalization files
import i18n from 'meteor/universe:i18n';
import "../../../../i18n/nl.i18n.json"
import "../../../../i18n/fr.i18n.json"
import "../../../../i18n/en.i18n.json"

// [TEMP] Use dummy user data
import UserData from '../../../api/userdata_dummy.js';
import PainEducationScript from './PainEducation/PainEducationScript.js';

// Import components
import ActionButton from '../../components/ActionButton.jsx';
import Card from '../../components/Card.jsx';
import NavigationBar from '../../components/NavigationBar.jsx';
import ModuleCard from '../../components/ModuleCard.jsx';



// Instance of React translate component, "Common" refers to the namespace of the i18n files
const T = i18n.createComponent("Common");

export default function ModuleParser(props) {

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
            const isClosed = UserData.progress.PAINEDUCATION[submodule.id] === "COMPLETED" ? true : false;
            const isLocked = UserData.progress.PAINEDUCATION[submodule.id] === "NOT_STARTED" ? true : false;

            moduleCardsHTML.push(<ModuleCard title={submodule["title-markup"]}
                number={submodule.part}
                duration={submodule.duration}
                description={submodule.description}
                type={submodule.type}
                image={submodule.image}
                onClick={() => routeToSubmodule(submodule.id)}
                closed={isClosed}
                locked={isLocked}>
            </ModuleCard>)
        });
        return moduleCardsHTML;
    }

    /**
     * Routes to the corresponding submodule
     * @param {String} submodule Corresponding submodule
     */
    function routeToSubmodule(submodule) {
        FlowRouter.go(`/mycoach/paineducation/${submodule}`);
    }

    const [moduleData, updateModuleData] = useState({});

    /* Fetch module data only once, avoids infinite re-rendering due to state-changes */
    useEffect(() => {fetchModuleData()}, []);

    if (moduleData === "invalid") {return <div className="container">Module "{FlowRouter.getParam('module')}" does not exist.</div>}
    if (Object.keys(moduleData).length === 0) {return <div className="container">Loading</div>}

    return (
        <React.Fragment>
            <NavigationBar title={moduleData.title}></NavigationBar>
            <div className="container" style={{paddingTop: "85px"}}>
                <Card title="MIJN SHORTCUTS" noTranslate>
                    <ActionButton size="small">Voeg toe aan je pijnlogboek</ActionButton>
                    <ActionButton size="small">Bekijk je coaching van de dag</ActionButton>
                </Card>

                <Card title="MIJN TRAJECT" noTranslate>
                    {renderSubmodules()}
                </Card>
            </div>
        </React.Fragment>
    )
};
