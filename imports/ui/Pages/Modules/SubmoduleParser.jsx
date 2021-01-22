import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './SubmoduleParser.scss';

// Import components
import NavigationBar from '../../components/NavigationBar.jsx';
import ModuleCard from '../../components/ModuleCard.jsx';

import PainEducationScript from './ModuleScripts/PainEducationScript.js';
import CardsParser from './CardsParser.jsx';

export default function SubmoduleParser(props) {

    const submoduleID =  FlowRouter.getParam('submodule');
    
    let data = [];
    
    switch (FlowRouter.getParam('module')) {
        case 'paineducation':
            PainEducationScript.submodules.forEach(submodule => {
                if (submodule.id === submoduleID)  {data = submodule; return;}
            });
            break;
        default:
            return <div>Module {FlowRouter.getParam('module')} not developed</div>
    }

    return (
        <React.Fragment>
            <NavigationBar title={data.title}></NavigationBar>
            <div className="container" style={{paddingTop: "85px"}}>
                <ModuleCard title={data["title-markup"]} 
                            number={data.part}
                            topColor={"white"}
                            description={data.description}
                            duration={data.duration}
                            type={data.type}
                            image={data.image}>
                </ModuleCard>
                <hr className="module-hr-line"/>
                <CardsParser cards={data.cards}></CardsParser>
            </div>
        </React.Fragment>
    )
};
