import React, { useEffect } from 'react';
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

    useEffect(() => {
        const accuracy = 100;
        let options = {
            root: document.querySelector('#content'),
            rootMargin: '0px',
            threshold: [...Array(accuracy).keys()].map(function(item) { return item/accuracy })
        }

        let callback = (entries, observer) => {
            entries.forEach(entry => {
                entry.target.style.opacity = entry.intersectionRatio * 2;
              // Each entry describes an intersection change for one observed
              // target element:
              //   entry.boundingClientRect
              //   entry.intersectionRatio
              //   entry.intersectionRect
              //   entry.isIntersecting
              //   entry.rootBounds
              //   entry.target
              //   entry.time
            });
          };
        let observer = new IntersectionObserver(callback, options);

        const cards = document.querySelectorAll(".card,.card-overview");
        for (let card of cards) {
            observer.observe(card);
        }
      }, []); 

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
