import React, { useEffect, useState } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import FadeIn from 'react-fade-in';

/* Import components */
import NavigationBar from '../../components/NavigationBar.jsx';
import AppModal from '../../components/AppModal.jsx';
import ModuleCard from '../../components/MyCoach/ModuleCard.jsx';

import jwt_decode from "jwt-decode";

import PainEducationScript from './ModuleScripts/PainEducationScript.js';
import ThoughtsEmotionsScript from './ModuleScripts/ThoughtsEmotionsScript.js';
import CardsParser from './CardsParser.jsx';

import './SubmoduleParser.scss';
import ProgressManager from '../../../api/ProgressManager.jsx';
import QuestionManager from '../../../api/QuestionManager.jsx';
import InteractionManager from '../../../api/InteractionManager.jsx';
import ProfileManager from '../../../api/ProfileManager.jsx';

export default function SubmoduleParser(props) {

    const module = FlowRouter.getParam('module').toUpperCase();
    const submodule =  FlowRouter.getParam('submodule');
    const language = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";
    const userToken = FlowRouter.getParam('token') ? FlowRouter.getParam('token') : "demo";
    const userID = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr) : 1111111;
    
    const progressManager = new ProgressManager(userID);
    const questionManager = new QuestionManager(userID);
    const interactionManager = new InteractionManager(userID);
    const profileManager = new ProfileManager(userID);
    const [didSeeCompletionModal, setDidSeeCompletionModal] = useState(undefined);
    const [showCompletionModal, setShowCompletionModal] = useState(false);
    const [userProgress, setUserProgress] = useState(undefined);
    const [userQuestions, setUserQuestions] = useState(undefined);
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

    async function notifyModal() {
        const didCompleteModule = data.isLast ? true : false;
        await progressManager.finishSubmodule(module, submodule, "COMPLETED", didCompleteModule);
        if (!didSeeCompletionModal) interactionManager.setInteractionStatus("MODULE_COMPLETION_MODAL", "CONFIRM");
        setShowCompletionModal(false);
        if (!didCompleteModule) { history.back() }
        else { FlowRouter.go(`/${language}/mycoach/${userToken}`)}
    }

    function renderCompletionModal() {
        if (!showCompletionModal || didSeeCompletionModal===undefined) return <React.Fragment/>;
        if (!didSeeCompletionModal) interactionManager.setInteractionStatus("MODULE_COMPLETION_MODAL", "SHOW");
        const text = didSeeCompletionModal 
            ? "Goed zo, je hebt deze module voltooid. Doe zo verder!"
            : "Super, je hebt net je allereerste onderdeel voltooid! Je kan nu verder met de volgende onderdelen. Als je een onderdeel wilt herbekijken, komt de overzichtskaart van boven te staan zodat je snel een overzicht hebt van de belangrijkste informatie. Doe zo verder!";
        return (<AppModal show={true} title={"Klaar!"} defaultOption={"Sluit"} notifyParent={ notifyModal }>
            {text}
        </AppModal>);
    }

    /* Used as callback for CardsParser */
    async function finishSubmodule(firstTime) {
        if (firstTime) { setShowCompletionModal(true) }
        else { history.back() }
    }

    /* Fetch user progress only once, avoids infinite re-rendering due to state-changes */
    useEffect(() => {
        /* Wrap in async function, as getModuleProgress is async */
        async function fetchUserProgress() {
            const profile = (await profileManager.getLatestQuestionnaire())?.data?.profile;
            progressManager.setProfile(profile);
            const progress = await progressManager.getModuleProgress(module);
            const questions = await questionManager.getModuleQuestions(module);
            const modalStatus = await interactionManager.getInteractionStatuses("MODULE_COMPLETION_MODAL");
            setUserProgress(progress);
            setUserQuestions(questions);
            setDidSeeCompletionModal(modalStatus.includes("CONFIRM"));
        }
        fetchUserProgress();
    }, []);

    return (
        <React.Fragment>
            <NavigationBar title={data.title}></NavigationBar>
            {renderCompletionModal()}
            <div className="container" style={{paddingTop: "85px"}}>
                {userProgress && userQuestions && <FadeIn>
                    <ModuleCard title={data.titleMarkup} 
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
                    <CardsParser cards={data.cards} module={module} moduleStatus={userProgress[module][submodule]} userID={userID} finishCallback={finishSubmodule}></CardsParser>
                </FadeIn>}
            </div>
        </React.Fragment>
    )
};
