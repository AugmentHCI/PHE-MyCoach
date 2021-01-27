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
        function handleScroll() {
            const windowHeight = document.getElementsByClassName('container')[0].clientHeight;
            const cards = [...document.querySelectorAll('.card,.card-overview')];
            cards.forEach((card, index) => {
                if (card.getBoundingClientRect().top  > windowHeight) card.style.opacity = 0;
                //else if (card.getBoundingClientRect().top  < 0) card.style.transform = `scale(${1 - (card.style.opacity / 2)})`;
                else if (card.getBoundingClientRect().top  > 0) {
                    card.style.opacity = 1 - (card.getBoundingClientRect().top / windowHeight / 1.3); 
                    //card.style.transform = `scale(${0.5 + (card.style.opacity / 2)})`
                }

                if (card.getBoundingClientRect().top  <= 70 && card.getBoundingClientRect().top > 0) card.classList.remove("card-scroll");
                else card.classList.add("card-scroll");
            });
        }
        document.querySelector('.container').addEventListener('scroll', handleScroll);

        return () => {
            document.querySelector('.container').removeEventListener('scroll', handleScroll);
        };
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
                            image={data.image}
                            hideButton>
                </ModuleCard>
                <hr className="module-hr-line"/>
                <CardsParser cards={data.cards}></CardsParser>
            </div>
        </React.Fragment>
    )
};
