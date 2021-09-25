import React, { useEffect, useState } from 'react';

/* External API */
import { FlowRouter } from 'meteor/kadira:flow-router';
import FadeIn from 'react-fade-in';
import jwt_decode from "jwt-decode";

/* Internal API */
import ScriptDispatcher, { getSubmodule } from '../../../api/scripts/ScriptDispatcher.jsx';

/* Managers */
import ProgressManager    from '../../../api/managers/ProgressManager.jsx';
import InteractionManager from '../../../api/managers/InteractionManager.jsx';
import ProfileManager     from '../../../api/managers/ProfileManager.jsx';
import ShortcutManager    from '../../../api/managers/ShortcutManager.jsx';

/* UI Components */
import NavigationBar from '../../components/NavigationBar.jsx';
import AppModal      from '../../components/AppModal.jsx';
import ModuleCard    from '../../components/MyCoach/ModuleCard.jsx';
import CardsParser   from './CardsParser.jsx';
import LoadingScreen from '../../components/LoadingScreen.jsx';

/* Styles */
import './SubmoduleParser.scss';


export default function SubmoduleParser(props) {

    const module = FlowRouter.getParam('module');
    const submodule =  FlowRouter.getParam('submodule');
    const language = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";
    const userToken = FlowRouter.getParam('token') ? FlowRouter.getParam('token') : "demo";
    const userID = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr) : 1111111;
    
    const progressManager = new ProgressManager(userID);
    const interactionManager = new InteractionManager(userID);
    const profileManager = new ProfileManager(userID, userToken);
    const shortcutManager = new ShortcutManager(userID);
    const [didSeeCompletionModal, setDidSeeCompletionModal] = useState(undefined);
    const [showCompletionModal, setShowCompletionModal] = useState(false);
    const [userProfile, setUserProfile] = useState(undefined);
    const [userProgress, setUserProgress] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const [loadingModule, setLoadingModule] = useState(true);
    const [data, setData] = useState([]);

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
        await progressManager.finishSubmodule(module.toUpperCase(), submodule, "COMPLETED", didCompleteModule);
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
    async function finishSubmodule(firstTime, extraAction=undefined) {
        console.log(`firstTime: ${firstTime}, extraAction: ${extraAction}`)
        if (firstTime) {
            switch (extraAction) {
                case 'UnlockPainLogbook':
                    await shortcutManager.upsertShortcut("PAINLOGBOOK", "MAIN", "DEFAULT");
                    await shortcutManager.upsertShortcut("PAINLOGBOOK", "PAINEDUCATION", "DEFAULT");
                    break;
                case 'UnlockActivityLogbook':
                    await shortcutManager.upsertShortcut("ACTIVITYLOGBOOK", "MAIN", "DEFAULT");
                    await shortcutManager.upsertShortcut("ACTIVITYLOGBOOK", "ACTIVITYWORK", "DEFAULT");
                    break;
                case 'UnlockValues':
                    await shortcutManager.upsertShortcut("VALUES", "MAIN", "DEFAULT");
                    await shortcutManager.upsertShortcut("VALUES", "THOUGHTSEMOTIONS", "DEFAULT");
                    break;
                default:
                    break;
            }
        }
        if (firstTime) { setShowCompletionModal(true) }
        else { history.back() }
    }

    /* Fetch user progress only once, avoids infinite re-rendering due to state-changes */
    useEffect(() => {
        async function fetchModuleData() {
            getSubmodule({module: module, submoduleID: submodule})
                .then(res => {
                    console.log(res);
                    setData(res);
                    setLoadingModule(false);
                });
        }
        /* Wrap in async function, as getModuleProgress is async */
        async function fetchUserProgress() {
            /*
            const latestUserProfile = (await profileManager.getLatestQuestionnaire())?.data;
            const profile = latestUserProfile ? latestUserProfile.profile : 1;
            */
            const latestUserProfile = {profile: 1};
            const profile = 1;
            progressManager.setProfile(profile);
            const progress = await progressManager.getModuleProgress(module);
            const modalStatus = await interactionManager.getInteractionStatuses("MODULE_COMPLETION_MODAL");
            setUserProfile(latestUserProfile);
            setUserProgress(progress);
            setDidSeeCompletionModal(modalStatus.includes("CONFIRM"));
            setLoading(false);
        }
        fetchModuleData();
        fetchUserProgress();
    }, []);

    if (loadingModule || !data) {
        return  <React.Fragment>
            <NavigationBar title="Coaching"/>
            <LoadingScreen height="100vh"/>
        </React.Fragment>
    }

    return (
        <React.Fragment>
            <NavigationBar title={data.navBarTitle ? data.navBarTitle : data.title}></NavigationBar>
            {renderCompletionModal()}
            <div className="container" style={{paddingTop: "85px"}}>
                {userProgress && userProfile && <FadeIn>
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
                    {loading && <LoadingScreen/>}
                    {!loading && <CardsParser cards={data.cards} module={module} submodule={data.id} moduleStatus={userProgress?.module?.submodule} userID={userID} userProfile={userProfile} finishCallback={finishSubmodule}/>}
                </FadeIn>}
            </div>
        </React.Fragment>
    )
};
