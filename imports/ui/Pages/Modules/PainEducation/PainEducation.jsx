import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Import internationalization files
import i18n from 'meteor/universe:i18n';
import "../../../../../i18n/nl.i18n.json"
import "../../../../../i18n/fr.i18n.json"
import "../../../../../i18n/en.i18n.json"

// Import components
import ActionButton from '../../../components/ActionButton.jsx';
import Card from '../../../components/Card.jsx';
import NavigationBar from '../../../components/NavigationBar.jsx';
import ModuleCard from '../../../components/ModuleCard.jsx';



// Instance of React translate component, "Common" refers to the namespace of the i18n files
const T = i18n.createComponent("Common");

export default function PainEducation(props) {

    // Get locale from URL routing (see also routes.jsx file)
    function setLocale() {
        /*
        let language = FlowRouter.getParam('language');
        i18n.setLocale(language);
        setDataParserLocale(language);*/
    }

    /* Links to modules */
    function routeToModule(link) {
        FlowRouter.go(`/mycoach/paineducation/${link}`);
    }

    return (
        <React.Fragment>
            <NavigationBar></NavigationBar>
            <div className="container" style={{paddingTop: "85px"}}>
                <Card title="MIJN SHORTCUTS" noTranslate>
                    <ActionButton size="small">Voeg toe aan je pijnlogboek</ActionButton>
                    <ActionButton size="small">Bekijk je coaching van de dag</ActionButton>
                </Card>

                <Card title="MIJN TRAJECT" noTranslate>
                    <ModuleCard title={<div>Rol van <br/> het brein</div>} 
                                number="Onderdeel 2"
                                duration={"10 minuten"}
                                description={"In deze module bekijken we het effect van ons brein op de pijn die wij ervaren."}
                                type={"Informatief"}
                                image="new-ideas"
                                onClick={() => routeToModule('part-1')}>
                    </ModuleCard>
                </Card>

            </div>
        </React.Fragment>
    )
};
