import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Import internationalization files
import i18n from 'meteor/universe:i18n';
import "../../../i18n/nl.i18n.json"
import "../../../i18n/fr.i18n.json"
import "../../../i18n/en.i18n.json"

// Import components
import ActionButton from '../components/ActionButton.jsx';
import Card from '../components/Card.jsx';
import NavigationBar from '../components/NavigationBar.jsx';
import PillButton from '../components/PillButton.jsx';
import ModuleCard from '../components/ModuleCard.jsx';



// Instance of React translate component, "Common" refers to the namespace of the i18n files
const T = i18n.createComponent("Common");

export default function MyCoach(props) {

    // Get locale from URL routing (see also routes.jsx file)
    function setLocale() {
        /*
        let language = FlowRouter.getParam('language');
        i18n.setLocale(language);
        setDataParserLocale(language);*/
    }

    return (
        <React.Fragment>
            <NavigationBar></NavigationBar>
            <div className="container" style={{paddingTop: "85px"}}>
                <Card title="MIJN SHORTCUTS" demo={true}>
                    <ActionButton size="small">Voeg toe aan je pijnlogboek</ActionButton>
                    <ActionButton size="small">Bekijk je coaching van de dag</ActionButton>
                    <PillButton icon={"time"}>15 minuten</PillButton>
                    <PillButton icon={"information"}>Informatief</PillButton>
                </Card>

                <Card title="MIJN TRAJECT" demo={true}>
                    <ModuleCard title={<div>Rol van <br/> het brein</div>} number="Onderdeel 2"></ModuleCard>
                </Card>

            </div>
        </React.Fragment>
    )
};
