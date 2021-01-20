import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Import components
import ActionButton from '../../components/ActionButton.jsx';
import Card from '../../components/Card.jsx';
import NavigationBar from '../../components/NavigationBar.jsx';
import PillButton from '../../components/PillButton.jsx';
import ModuleCard from '../../components/ModuleCard.jsx';

import PainEducation from './PainEducation/PainEducation.js';
import CardsParser from './CardsParser.jsx';

export default function ModuleParser(props) {

    const part =  "part-" + FlowRouter.getParam('part');
    const data = PainEducation[part];

    return (
        <React.Fragment>
            <NavigationBar></NavigationBar>
            <div className="container" style={{paddingTop: "85px"}}>
                <ModuleCard title={data.title} 
                            number={"Onderdeel " + FlowRouter.getParam('part')}
                            topColor={"white"}
                            description={data.description}
                            duration={data.duration}
                            type={data.type}>
                </ModuleCard>
                <hr style={{borderTop: "1px solid var(--idewe-blue)", width: "90%"}}/>
                <CardsParser cards={data.cards}></CardsParser>
            </div>
        </React.Fragment>
    )
};
