import React, { useEffect, useState } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import FadeIn from 'react-fade-in';

/* Import components */
import NavigationBar from '../../components/NavigationBar.jsx';
import ModuleCard from '../../components/MyCoach/ModuleCard.jsx';
import Button from '../../components/Button.jsx';

import jwt_decode from "jwt-decode";

import PainEducationScript from './ModuleScripts/PainEducationScript.js';
import ThoughtsEmotionsScript from './ModuleScripts/ThoughtsEmotionsScript.js';
import CardsParser from './CardsParser.jsx';

import './SubmoduleParser.scss';
import ProgressManager from '../../../api/ProgressManager.jsx';

export default function SubmoduleParser(props) {

    const module = FlowRouter.getParam('module').toUpperCase();
    const submodule =  FlowRouter.getParam('submodule');
    const userID = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr) : 1111111;
    
    const progressManager = new ProgressManager(userID);
    const [userProgress, setUserProgress] = useState(undefined) 
    let data = [];
    
    switch (module) {
        case 'PAINEDUCATION':
            PainEducationScript.submodules.forEach(submoduleScript => {
                if (submoduleScript.id === submodule)  {data = submoduleScript; return;}
            });
            break;
        case 'THOUGHTSEMOTIONS':
            ThoughtsEmotionsScript.submodules.forEach(submoduleScript => {
                if (submoduleScript.id === submodule)  {data = submoduleScript; return;}
            });
            break;
        default:
            return <div>Module '{module}' not developed</div>
    }

    /*
    useEffect(() => {
        function handleScroll() {
            const windowHeight = document.getElementsByClassName('container')[0].clientHeight;
            const cards = [...document.querySelectorAll('.card,.card-overview')];
            cards.forEach((card, index) => {
                if (card.getBoundingClientRect().top  > windowHeight) card.style.opacity = 0;
                //else if (card.getBoundingClientRect().top  < 0) card.style.transform = `scale(${1 - (card.style.opacity / 2)})`;
                else if (card.getBoundingClientRect().top  > 0) {
                    card.style.opacity = 1 - (card.getBoundingClientRect().top / windowHeight / 1.3) + 0.1; 
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
    */

    async function finishSubmodule(save) {
        if (save) { await progressManager.finishSubmodule(module, submodule, "COMPLETED", false) }
        history.back();
    }

    /* Fetch user progress only once, avoids infinite re-rendering due to state-changes */
    useEffect(() => {
        /* Wrap in async function, as getModuleProgress is async */
        async function fetchUserProgress() {
            const progress = await progressManager.getModuleProgress("PAINEDUCATION");
            setUserProgress(progress);
        }
        fetchUserProgress();
    }, []);

    return (
        <React.Fragment>
            <NavigationBar title={data.title}></NavigationBar>
            <div className="container" style={{paddingTop: "85px"}}>
                {userProgress && <FadeIn>
                    <ModuleCard title={data["title-markup"]} 
                                number={data.part}
                                topColor={"white"}
                                description={data.description}
                                duration={data.duration}
                                type={data.type}
                                image={data.image}
                                imageWidth={data.imageWidth}
                                hideButton>
                    </ModuleCard>
                    <hr className="module-hr-line"/>
                    <CardsParser cards={data.cards} moduleStatus={userProgress[module][submodule]}></CardsParser>
                    <Button style={{marginBottom: "100px", 
                                    textAlign: "center", 
                                    justifyContent: "center"}} 
                            color="blue" 
                            onClick={() => finishSubmodule(userProgress[module][submodule] !== "COMPLETED")}>
                                {userProgress[module][submodule] === "COMPLETED" ? "Keer terug" : "Voltooi deze module"}
                    </Button>
                </FadeIn>}
            </div>
        </React.Fragment>
    )
};
