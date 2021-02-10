import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import FadeIn from 'react-fade-in';

// Import internationalization files
import i18n from 'meteor/universe:i18n';
import "../../../i18n/nl.i18n.json"
import "../../../i18n/fr.i18n.json"
import "../../../i18n/en.i18n.json"

// Import components
import ActionButton from '../components/ActionButton.jsx';

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
        <div className="container">
            <FadeIn>
                <h1>My Coach</h1>
                <h2>MIJN TODO'S</h2>
                <ActionButton icon={"writing"}>Voeg toe aan je pijnlogboek</ActionButton>
                <ActionButton icon={"idea"}>Bekijk je coaching van de dag</ActionButton>

                <h2 style={{marginTop: '20px'}}>MIJN TRAJECT</h2>
                <ActionButton action={() => FlowRouter.go(`/mycoach/paineducation/`)}>Pijn-educatie</ActionButton>
            </FadeIn>
        </div>
    )
};
