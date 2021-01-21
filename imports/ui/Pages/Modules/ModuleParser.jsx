import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './ModuleParser.scss';

// Import components
import NavigationBar from '../../components/NavigationBar.jsx';
import ModuleCard from '../../components/ModuleCard.jsx';

import PainEducationScript from './PainEducation/PainEducationScript.js';
import CardsParser from './CardsParser.jsx';

export default function ModuleParser(props) {

    const part =  FlowRouter.getParam('part');
    
    let data = [];
    
    switch (FlowRouter.getParam('module')) {
        case 'paineducation':
            PainEducationScript.modules.forEach(module => {
                if (Object.keys(module)[0] === part)  {console.log(module);data = module[Object.keys(module)[0]]; return;}
            });
            break;
        default:
            return <div>Module {FlowRouter.getParam('module')} not developed</div>
    }

    return (
        <React.Fragment>
            <NavigationBar></NavigationBar>
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
