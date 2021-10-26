import React, { useState, useEffect } from 'react';

/* External API */
import jwt_decode from "jwt-decode";

/* Internal API */
import { Chatbubble, ChatbubbleEmotions, ChatbubbleThoughtsReactions, ChatbubbleText, ChatbubbleInputSummary, ChatbubbleRecommendation } from '../../components/Chatbubble.jsx';
import { THOUGHTS, EMOTIONS, REACTIONS, RECOMMENDATIONTITLES, RECOMMENDATIONS, CONVERSATION, FILLERWORDS } from "../../../api/data/PainLogbook";
import PainRecommenderSystem from "../../../api/RuleEngine.jsx";
import { getSubmoduleMetadata } from '../../../api/scripts/ScriptDispatcher.jsx';

/* Managers */
import PainLogbookManager from '../../../api/managers/PainLogbookManager';
import ProgressManager from '../../../api/managers/ProgressManager';

/* UI Components */
import NavigationBar from '../../components/NavigationBar';
import AppModal      from '../../components/AppModal.jsx';
import Illustration  from '../../components/Illustrations/Illustration.jsx';
import PillButton    from '../../components/PillButton.jsx';
import ActionButton  from '../../components/ActionButton';


export default function PainLogbookEntry() {

    /* States and Constants */
    const language  = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";
    const userID = parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr);
    const token = FlowRouter.getParam('token');
    const recommenderSystem = new PainRecommenderSystem(RECOMMENDATIONS);
    const painLogbookManager = new PainLogbookManager(userID);
    const progressManager    = new ProgressManager(userID);
    /* Recommendations */
    const [matchedRecommendations, updateMatchedRecommendations] = useState([]);
    const [currentRecommendation, updateCurrentRecommendation] = useState(0);
    const [currentModules, updateCurrentModules] = useState([]);
    const [loadingModule, setLoadingModule] = useState(false);
    const [showModuleModal, setShowModuleModal] = useState(false);
    const [showExplanationModal, setShowExplanationModal] = useState(false);
    const [disabledAutoScroll, setDisabledAutoScroll] = useState(false);
    const [saved, setSaved] = useState(false);
    const [showAllRecommendations, updateShowAllRecommendations] = useState(false);
    /* Message Queues */
    const [messageQueue, updateMessageQueue] = useState(["MESSAGE-INTRO"]);
    const [tempMessageQueue, updateTempMessageQueue] = useState([]);
    /* User input */
    const [userInput, updateUserInput] = useState([]);
    const [userInputCodes, updateUserInputCodes] = useState([]);
    const [userProgress, updateUserProgress] = useState([]);
    const [userLogs, updateUserLogs] = useState([]);

    const [saveAndForward, setSaveAndForward] = useState(undefined);

    /* saveAndForward */
    useEffect(() => {
        if (saveAndForward && userLogs.length > 0 && (["OPEN", "CLOSE"].includes(userLogs[userLogs.length-1].split("-")[0]))) {
            saveLog();
            if (saveAndForward.module && saveAndForward.submodule) FlowRouter.go(`/${language}/mycoach/${token}/module/${saveAndForward.module}/${saveAndForward.submodule}?goPainlogbookOnBack=true`);
            else { history.back() }
        }
    }, [saveAndForward, userLogs]);

    /* Fetch user progress */
    useEffect(() => {
        async function fetchUserProgress() {
            const fetchedProgress = await progressManager.getUserProgress();
            updateUserProgress(fetchedProgress);
        }
        fetchUserProgress();
    }, []);

    /* Fetch submodule metadata when recommendation changes, and log change */
    useEffect(() => {
        async function fetchSubmodules() {
            if (!matchedRecommendations || matchedRecommendations.length === 0) return;
            setLoadingModule(true);
            const modules = [];
            const recommendation = matchedRecommendations[currentRecommendation][0];
            for (const module of RECOMMENDATIONS[recommendation].modules) {
                const submodule = getSubmoduleMetadata({module: module.module, submoduleID: module.submodule});
                if (submodule) {
                    submodule.module = module.module;
                    modules.push(submodule);
                }
            }
            updateCurrentModules(modules);
            setLoadingModule(false);
        }
        fetchSubmodules();
        /* Log change */
        if (matchedRecommendations?.length > 0 && matchedRecommendations[currentRecommendation][0]) {
            const newUserLogs = [...userLogs, "SHOW-"+currentRecommendation+"-"+matchedRecommendations[currentRecommendation][0]];
            updateUserLogs(newUserLogs);
        }
    }, [currentRecommendation, matchedRecommendations]);

    /* Switch recommendation index when user hides all recommendations */
    useEffect(() => {
        if (currentRecommendation > 2 && !showAllRecommendations) updateCurrentRecommendation(2);
    }, [showAllRecommendations])

    /* Conversation Logic */

    function action(actionType, message=null) {
        switch (actionType) {
            case "leave":
                history.back();
                break;
            case "openRecommendation":
                appendActionToLog({action:"OPENMODAL-"+currentRecommendation+"-"+matchedRecommendations[currentRecommendation][0]});
                setShowModuleModal(true);
                break;
            case "explainRecommendation":
                appendActionToLog({action: "EXPLAIN-"+currentRecommendation+"-"+matchedRecommendations[currentRecommendation][0]})
                setShowExplanationModal(true);
                break;
            case "saveAndClose":
                appendActionToLog({action:"CLOSE-"+currentRecommendation+"-"+matchedRecommendations[currentRecommendation][0]});
                setSaveAndForward({});
                break;
            default:
                console.log(`Action ${actionType} not implemented.`)
        }
    }

    function saveLog() {
        if (saved) return;
        let userLog = {THOUGHT: [], REACTION: [], EMOTION: [], CONTEXT: undefined, INTENSITY: undefined, ACTIVITY: undefined}
        userInputCodes.forEach(input => {
            /* Activity, context, intensity */
            if (input.includes("|")) {
                const code = input.split("|")[0];
                userLog[code] = code === "CONTEXT" ? (input.split("|")[1]).split(" (")[0] : input.split("|")[1];
            }
            /* Thoughts, emotions, reactions */
            else {
                const code = input.split("-")[0];
                userLog[code] = userLog[code].length > 0 ? [...userLog[code], input] : [input];
            }
        });
        Object.keys(userLog).forEach(key => {
            if (["THOUGHT", "REACTION", "EMOTION"].includes(key)) { userLog[key] = userLog[key].join("|") }
        })
        console.log(userLogs);
        painLogbookManager.addPainLog(userLog.CONTEXT, userLog.ACTIVITY, userLog.INTENSITY, userLog.THOUGHT, userLog.EMOTION, userLog.REACTION, JSON.stringify(userLogs));
        setSaved(true);
    }

    function initializeMessages() {
        updateMessageQueue([CONVERSATION["MESSAGE-INTRO"]]);
        let temporaryMessageQueue = [];
        CONVERSATION["MESSAGE-INTRO"].response.forEach(message => {
            temporaryMessageQueue.push(CONVERSATION[message]);
        });
        updateTempMessageQueue(temporaryMessageQueue);
    }

    function addResponseToMessageQueue(message) {
        let newQueue = [...messageQueue];
        newQueue.push(message);
        if (message.id) {
            updateUserInput([...userInput, {category: message.category, content: message.id}])
            updateUserInputCodes([...userInputCodes, message.category+"|"+message.content]);
        }
        if (message.category === "ACTIVITY") {
            updateUserInput([...userInput, {category: message.category, content: message.content}])
            updateUserInputCodes([...userInputCodes, "ACTIVITY|"+message.content]);
        }
        let responseMessages = [];
        message.response.forEach(messageResponse => {
            newQueue.push(CONVERSATION[messageResponse])
            if (CONVERSATION[messageResponse].sentBy === "coach") {
                CONVERSATION[messageResponse].response.forEach(option => responseMessages.push(CONVERSATION[option]));
            }
        });
        updateMessageQueue(newQueue);
        updateTempMessageQueue(responseMessages);
    }

    function hangleTERinput(responses, nextmessage) {
        /* Add users responses + next coach message to message queue */
        let newQueue = [...messageQueue];
        let newUserInput = [...userInput];
        let newUserInputCodes = [...userInputCodes];
        for (const [response, information] of Object.entries(responses)) {
            newUserInputCodes.push(response)
            newUserInput.push(information);
            newQueue.push({content: information.translation ? information.translation[language] : response, sentBy: "user"});
        }
        const nextCoachMessage = CONVERSATION[nextmessage.response[0]]
        newQueue.push(nextCoachMessage);
        /* Also add next responses to coach message to queue */
        let responseMessages = [];
        nextCoachMessage.response.forEach(response => {
            responseMessages.push(CONVERSATION[response]);
        })
        /* Update queue states */
        updateUserInputCodes(newUserInputCodes);
        updateUserInput(newUserInput);
        updateMessageQueue(newQueue);
        updateTempMessageQueue(responseMessages);
    }

    function renderMessages() {
        let messages = [];
        /* Step 1: Render Coach messages */
        let recommendationIndex = currentRecommendation;
        messageQueue.forEach((message, index) => {
            /* Recommendation message (requires more complex handling) */
            if (message.content === "recommendation") { 
                /* Update state, but use local variable as state update happens asynchronously */
                let recommendations = matchedRecommendations.length === 0 ? recommenderSystem.matchRules(userInput) : matchedRecommendations ;
                if (matchedRecommendations.length === 0) updateMatchedRecommendations(recommendations);

                messages.push(<ChatbubbleInputSummary key={"message-recommendation-inputs"} typeLength={recommendationIndex > 0 ? 0 : 2000} recommendations={matchedRecommendations} selectedRecommendation={currentRecommendation} logger={appendActionToLog} showAllRecommendations={showAllRecommendations} updateShowAllRecommendations={updateShowAllRecommendations}/>);

                /*messages.push(<Chatbubble key={"message-recommendation-"+recommendationIndex+"-1"} typeLength={2000} own={false}>{recommendations[recommendationIndex].explanation}</Chatbubble>) */

                /*messages.push(<Chatbubble key={"message-recommendation-2"} delayedDisplay delayBy={recommendationIndex > 0 ? 0 : 2000} typeLength={recommendationIndex > 0 ? 0 : 2000} own={false}>{recommendations[recommendationIndex].recommendation + recommendationText}</Chatbubble>) */

                const currentRecommendationID = recommendations[recommendationIndex][0];
                messages.push(<ChatbubbleRecommendation 
                    key={"message-recommendation-2"} 
                    recommendationIndex={recommendationIndex}
                    recommendationLength={recommendations.length-1}
                    showAllRecommendations={showAllRecommendations}
                    nextRecommendation={() => updateCurrentRecommendation(currentRecommendation+1)}
                    prevRecommendation={() => updateCurrentRecommendation(currentRecommendation-1)}>
                        <div dangerouslySetInnerHTML={{ __html: RECOMMENDATIONS[currentRecommendationID].recommendation["nl-BE"] }} />
                    </ChatbubbleRecommendation>) ;

            }
            /* Normal messages */
            else {
                messages.push(<Chatbubble key={"message-"+index} own={message.sentBy === "user" ? true : false}>{message.content}</Chatbubble>) 
            }
        });
        /* Step 2: Render own message input options */
        tempMessageQueue.forEach((message, index) => {
            switch (message.content) {
                case "input":
                    messages.push(<ChatbubbleText
                        key={"chatbubble-text-" + index + "-" + message}
                        message={message}
                        onSubmit={addResponseToMessageQueue}
                        />)
                    break;
                case "emotions":
                    messages.push(<ChatbubbleEmotions
                        key={"chatbubble-emotions-" + index + "-" + message}
                        message={message}
                        options={EMOTIONS}
                        language={language}
                        onSubmit={hangleTERinput}
                        />)
                    break;
                case "thoughts":
                case "reactions":
                    messages.push(<ChatbubbleThoughtsReactions 
                        key={"chatbubble-" + message.content+ "-" + index + "-" + message}
                        message={message}
                        options={message.content === "thoughts" ? THOUGHTS : REACTIONS} 
                        fillerWords={FILLERWORDS}
                        language={language}
                        onSubmit={hangleTERinput}/>);
                    break;
                case "recommendation-answer":
                    let newMessage = {...message};
                    newMessage.content = newMessage.text;
                    messages.push(<Chatbubble 
                        key={"recommendation-response-"+message.text+"-"+currentRecommendation}
                        own={true}
                        delayedDisplay
                        delayBy={disabledAutoScroll > 0 ? 0 : 4000}
                        choice 
                        type={message.type}
                        onClick={() => action(message.action, {...newMessage})}>
                            {message.text}
                        </Chatbubble>);
                    break;
                default:
                    messages.push(<Chatbubble 
                        key={"response-"+index+"-"+message.content}
                        own={message.sentBy === "user" ? true : false}
                        delayedDisplay
                        choice 
                        type={message.type}
                        onClick={message.action ? 
                            () => action(message.action) : 
                            () => addResponseToMessageQueue({...message})}>
                            {message.content}
                        </Chatbubble>);
                    break;
            }
        });
        return messages;
    }

    function renderExplanationModal() {
        const currentRecommendationID = matchedRecommendations[currentRecommendation]?.[0];
        const currentExplanation = RECOMMENDATIONS[currentRecommendationID].explanation;

        return (<AppModal
            notifyParent={() => {setShowExplanationModal(false)}}
            defaultOption="Begrepen" 
            defaultColor="blue"
            title="Waarom deze aanbeveling?"
            show={showExplanationModal}>
                {currentExplanation}
        </AppModal>)
    }

    function renderModuleModal() {
        if (loadingModule) return <React.Fragment/>
        /* Only one submodule present in recommendation */
        if (currentModules.length === 1) return (<AppModal
            backOption="Sluit" 
            notifyBack={() => setShowModuleModal(false)} 
            notifyParent={() => {saveLog(); FlowRouter.go(`/${language}/mycoach/${FlowRouter.getParam('token')}/module/${currentModules[0].module}/${currentModules[0].id}?goPainlogbookOnBack=true`)}}
            defaultOption="Open" 
            defaultColor="blue"
            noPadding
            show={showModuleModal}>
            <div className="modalpopup-top">
                <Illustration image={currentModules[0].image} width={currentModules[0].imageWidth ? currentModules[0].imageWidth : "160px"} style={{position: "absolute", bottom: "0px", right: "20px", zIndex: "1"}}/>
                <div className={"module-card-number"}>Onderdeel {currentModules[0].part}</div>
                <div className={"modalpopup-card-title"}>{currentModules[0].titleMarkup[0]}</div>
                {currentModules[0].titleMarkup.length > 1 && <div className={"modalpopup-card-title"}>{currentModules[0].titleMarkup[1]}</div>}
            </div>
            <div className={"modalpopup-body"}>
                <div style={{display:'flex', marginBottom:'5px'}}>
                    <PillButton contentColor="white" fillColor={"blue"} icon="time">{currentModules[0].duration}</PillButton>
                    <PillButton contentColor="white" fillColor={"blue"} icon="information">{currentModules[0].type}</PillButton>
                </div>
                {currentModules[0].description}
                <hr/>
                Jouw pijnlog wordt opgeslagen en je wordt doorverwezen naar dit onderdeel.
            </div>
        </AppModal>);
        /* Multiple submodules present in recommendation */
        return (<AppModal
            backOption="Sluit" 
            notifyBack={() => setShowModuleModal(false)} 
            title="Aanbevolen onderdelen"
            show={showModuleModal}>
                Wij bevelen jou de volgende onderdelen aan. Kies er ééntje waar jij aan zou willen werken!
                {currentModules.map(submodule => {
                    const disabled = !userProgress?.[submodule.module]?.[submodule.id] || userProgress[submodule.module][submodule.id] === "NOT_STARTED";
                    return (<React.Fragment key={submodule.id}>
                    <hr/>
                    {disabled && <b style={{color: 'var(--idewe-gray)', display: 'inline'}}>(Vergrendeld) </b>}
                    <p style={{color: disabled ? 'var(--idewe-gray)' : 'var(--idewe-blue-dark)', display: 'inline'}}>{submodule.description}</p>
                    <ActionButton 
                        icon={submodule.icon} 
                        color={disabled ? "gray": "blue"} 
                        disabled={disabled} 
                        subtitle={RECOMMENDATIONTITLES[submodule.module]}
                        onClick={() => {
                            appendActionToLog({action: "OPEN-"+currentRecommendation+"-"+matchedRecommendations[currentRecommendation][0]+"-"+submodule.id});
                            setSaveAndForward({module: submodule.module, submodule: submodule.id});
                        }}>{submodule.title}</ActionButton>
                </React.Fragment>)})}
        </AppModal>);
    }

    function appendActionToLog({action}) {
        const newUserLogs = [...userLogs, action];
        updateUserLogs(newUserLogs);
    }
    
    /* Initialize first message once */
    useEffect(() => { initializeMessages() }, []);

    /* Scroll to bottom after each re-render (i.e. each time new messages are added) */
    useEffect(() => {
        const messages = document.getElementById("messages");
        /* Scroll immediately after new messages */
        if (!disabledAutoScroll) {
            messages.scrollTop = messages.scrollHeight;
            /* Scroll again after messages have expanded/user options have appeared (1000ms) */
            if (messageQueue[messageQueue.length-1].content === "recommendation") {
                setTimeout(function() { messages.scrollTop = messages.scrollHeight; }, 2001);
                setTimeout(function() { messages.scrollTop = messages.scrollHeight; }, 4001);
                setDisabledAutoScroll(true);
            }
            else {
                setTimeout(function() { messages.scrollTop = messages.scrollHeight; }, 1001);
            }
        }
    });

    return (
        <React.Fragment>
            <NavigationBar title="Nieuwe pijnlog" action="close"/>
            <div id="messages" className="container" style={{paddingTop:"85px", paddingBottom: "15px"}}>
                { showModuleModal && renderModuleModal() }
                { showExplanationModal && renderExplanationModal() }
                { renderMessages() }
            </div>
        </React.Fragment>
    )
}

//  <ChatbubbleInputSummary key={"message-recommendation-inputs"} typeLength={1000} inputs={computeBars(testInputs)}/>