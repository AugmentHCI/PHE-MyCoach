import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Chatbubble, ChatbubbleEmotions, ChatbubbleThoughtsReactions, ChatbubbleText, ChatbubbleTextualExplanation, ChatbubbleRecommendation } from '../../components/Chatbubble.jsx';

import {thoughts, emotions, reactions, fillerWords, conversation, moduleTranslation, rules, codes, codeFrequencies, options} from "./PainLogbookData_Textual";

import RuleEngine from "../../../api/RuleEngine.jsx";

import { getSubmodule } from '../../../api/scripts/ScriptDispatcher.jsx';

import AppModal from '../../components/AppModal.jsx';
import Illustration from '../../components/Illustrations/Illustration.jsx';
import PillButton from '../../components/PillButton.jsx';

import "./UserStudyStyles.scss";

const Photo = styled.div`
    width: 500px;
    border: 5px solid var(--idewe-white);
    box-shadow: var(--card-shadow);
    margin-bottom: 20px;
`

export default function PainLogbookTextual() {

    /* States and Constants */
    const ruleEngine = new RuleEngine(rules);
    const language  = "nl-BE";
    /* Recommendations */
    const [matchedRecommendations, updateMatchedRecommendations] = useState([]);
    const [currentRecommendation, updateCurrentRecommendation] = useState(0);
    const [currentModule, updateCurrentModule] = useState({});
    const [loadingModule, setLoadingModule] = useState(false);
    const [showModuleModal, setShowModuleModal] = useState(false);
    const [showExplanationModal, setShowExplanationModal] = useState(false);
    const [disabledAutoScroll, setDisabledAutoScroll] = useState(false);
    /* Message Queues */
    const [messageQueue, updateMessageQueue] = useState(["MESSAGE-INTRO"]);
    const [tempMessageQueue, updateTempMessageQueue] = useState([]);
    /* User input */
    const [userInput, updateUserInput] = useState([]);

    useEffect(() => {
        async function fetchSubmodule() {
            if (!matchedRecommendations || matchedRecommendations.length === 0) return;
            setLoadingModule(true);
            let recModule = matchedRecommendations[currentRecommendation].module.toLowerCase(), recSubmodule = matchedRecommendations[currentRecommendation].submodule, module = recSubmodule.split("_")[0]; 
            const submodule = await getSubmodule({module: recModule, submoduleID: recSubmodule});
            updateCurrentModule(submodule);
            setLoadingModule(false);
        }
        fetchSubmodule();
    }, [currentRecommendation, matchedRecommendations]);

    /* Conversation Logic */

    function action(actionType, message=null) {
        switch (actionType) {
            case "leave":
                history.back();
                break;
            case "openRecommendation":
                setShowModuleModal(true);
                break;
            case "explainRecommendation":
                setShowExplanationModal(true);
                break;
            case "noneRelevant":
            case "saveAndClose":
                Meteor.callPromise('userstudy.insert', {
                    mail: localStorage.getItem('mail'), 
                    settings: localStorage.getItem('studysettings'), 
                    type: 'action-textual', 
                    content: actionType});
                Meteor.callPromise('userstudy.insert', {
                    mail: localStorage.getItem('mail'), 
                    settings: localStorage.getItem('studysettings'), 
                    type: 'recommendations-textual', 
                    content: JSON.stringify(matchedRecommendations)});
                Meteor.callPromise('userstudy.insert', {
                    mail: localStorage.getItem('mail'), 
                    settings: localStorage.getItem('studysettings'), 
                    type: 'inputs-textual', 
                    content: JSON.stringify(userInput)});
                if (actionType === "saveAndClose") {
                    Meteor.callPromise('userstudy.insert', {
                        mail: localStorage.getItem('mail'), 
                        settings: localStorage.getItem('studysettings'), 
                        type: 'selected-textual', 
                        content: currentRecommendation + "-" + JSON.stringify(matchedRecommendations[currentRecommendation])});
                }
                FlowRouter.go(`/mycoach/userstudy/questionnaire/textual`);
                break;
            default:
                console.log(`Action ${actionType} not implemented.`)
            }
    }

    function initializeMessages() {
        updateMessageQueue([conversation["MESSAGE-INTRO"]]);
        let temporaryMessageQueue = [];
        conversation["MESSAGE-INTRO"].response.forEach(message => {
            temporaryMessageQueue.push(conversation[message]);
        });
        updateTempMessageQueue(temporaryMessageQueue);
    }

    function addResponseToMessageQueue(message) {
        let newQueue = [...messageQueue];
        newQueue.push(message);
        if (message.id) {updateUserInput([...userInput, {category: message.category, content: message.id}])}
        if (message.category === "ACTIVITY") {updateUserInput([...userInput, {category: message.category, content: message.content}])}
        let responseMessages = [];
        message.response.forEach(messageResponse => {
            newQueue.push(conversation[messageResponse])
            if (conversation[messageResponse].sentBy === "coach") {
                conversation[messageResponse].response.forEach(option => responseMessages.push(conversation[option]));
            }
        });
        updateMessageQueue(newQueue);
        updateTempMessageQueue(responseMessages);
    }

    function hangleTERinput(responses, nextmessage) {
        /* Add users responses + next coach message to message queue */
        let newQueue = [...messageQueue];
        let newUserInput = [...userInput];
        for (const [response, information] of Object.entries(responses)) {
            newUserInput.push(information);
            newQueue.push({content: information.translation ? information.translation[language] : response, sentBy: "user"});
        }
        const nextCoachMessage = conversation[nextmessage.response[0]]
        newQueue.push(nextCoachMessage);
        /* Also add next responses to coach message to queue */
        let responseMessages = [];
        nextCoachMessage.response.forEach(response => {
            responseMessages.push(conversation[response]);
        })
        /* Update queue states */
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
                let recommendations = matchedRecommendations.length === 0 ? ruleEngine.matchRules(userInput) : matchedRecommendations ;
                if (matchedRecommendations.length === 0) updateMatchedRecommendations(recommendations);
                messages.push(<ChatbubbleTextualExplanation 
                    key={"message-recommendation-1"}
                    recommendationIndex={recommendationIndex}
                    explanation={recommendations[currentRecommendation].explanation}/>);
                const recommendationText = " Ga je akkoord met de aanbeveling?";
                /*messages.push(<Chatbubble key={"message-recommendation-"+recommendationIndex+"-1"} typeLength={2000} own={false}>{recommendations[recommendationIndex].explanation}</Chatbubble>) */
                /*
                messages.push(<Chatbubble key={"message-recommendation-2"} delayedDisplay delayBy={recommendationIndex > 0 ? 0 : 2000} typeLength={recommendationIndex > 0 ? 0 : 2000} own={false}>{recommendations[recommendationIndex].recommendation + recommendationText}</Chatbubble>) */
                messages.push(<ChatbubbleRecommendation 
                    key={"message-recommendation-2"} 
                    recommendationIndex={recommendationIndex}
                    recommendationLength={recommendations.length-1}
                    nextRecommendation={() => updateCurrentRecommendation(currentRecommendation+1)}
                    prevRecommendation={() => updateCurrentRecommendation(currentRecommendation-1)}>
                        {recommendations[recommendationIndex].recommendation + recommendationText}
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
                        options={emotions}
                        language={language}
                        onSubmit={hangleTERinput}
                        />)
                    break;
                case "thoughts":
                case "reactions":
                    messages.push(<ChatbubbleThoughtsReactions 
                        key={"chatbubble-" + message.content+ "-" + index + "-" + message}
                        message={message}
                        options={message.content === "thoughts" ? thoughts : reactions} 
                        fillerWords={fillerWords}
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
        return (<AppModal
            notifyParent={() => {setShowExplanationModal(false)}}
            defaultOption="Begrepen" 
            defaultColor="blue"
            title="Waarom deze aanbeveling?"
            show={showExplanationModal}>
                {matchedRecommendations[currentRecommendation].explanation}
        </AppModal>)
    }

    function renderModuleModal() {
        if (loadingModule) return <React.Fragment/>
        const submodule = currentModule;
        return (<AppModal
            backOption="Terug" 
            notifyBack={() => setShowModuleModal(false)} 
            notifyParent={() => {action("saveAndClose");}}
            defaultOption="Akkoord" 
            defaultColor="blue"
            noPadding
            show={showModuleModal}>
            <div className="modalpopup-top">
                <Illustration image={submodule.image} width={submodule.imageWidth ? submodule.imageWidth : "160px"} style={{position: "absolute", bottom: "0px", right: "20px", zIndex: "1"}}/>
                <div className={"module-card-number"}>Onderdeel {submodule.part}</div>
                <div className={"modalpopup-card-title"}>{submodule.titleMarkup[0]}</div>
                {submodule.titleMarkup.length > 1 && <div className={"modalpopup-card-title"}>{submodule.titleMarkup[1]}</div>}
            </div>
            <div className={"modalpopup-body"}>
                <div style={{display:'flex', marginBottom:'5px'}}>
                    <PillButton contentColor="white" fillColor={"blue"} icon="time">{submodule.duration}</PillButton>
                    <PillButton contentColor="white" fillColor={"blue"} icon="information">{submodule.type}</PillButton>
                </div>
                {submodule.description}
                <hr/>
                Klik op 'Akkoord' indien je akkoord gaat met de aanbeveling. Hiermee rond jij je pijnlogboek af.
            </div>
        </AppModal>)
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
        <div className="userstudy">
            <div className="infopanel">
                <h2>Pijnlogboek - Deel 1 (van 2)</h2>
                <PillButton contentColor="blue" fillColor="white" icon="time">5 minuten</PillButton>
                <PillButton contentColor="blue" fillColor="white" icon="information">Interactief</PillButton><br/>
                Rechts zie je nu het pijnlogboek. Hierin ga jij een conversatie aan met een virtuele health coach die je gaat bevragen naar een recente situatie wanneer je pijn hebt ervaren. Probeer je even zo een situatie voor te stellen (stoot tegen de tafel, last van rug- of kniepijn, chronische pijn-opstoot, etc.), en vul dan het pijnlogboek in voor die pijnsituatie door te klikken de antwoord-opties (chatbubbels) die rechts in het gesprek staan.
                {matchedRecommendations.length > 0 && <hr/>}
                {matchedRecommendations.length > 0 && <p>Je krijgt nu enkele aanbevelingen rond jouw inputs, alsook een <b>tekstuele uitleg</b> van waarom je de aanbeveling te zien krijgt. Ga door de aanbevelingen met behulp van de pijlen (<i>zie foto</i>) en indien je een aanbeveling ziet dat je aanspreekt, open je deze en klik je op <i>"Akkoord"</i>. Als geen aanbeveling je aanspreekt, kies je de optie <i>"Geen aanbeveling relevant"</i>.</p>}
                {matchedRecommendations.length > 0 && <Photo>
                    <img src={`/images/userstudy/textual-explanation.jpg`} width="490px"/>
                </Photo>}
            </div>
            <div className="logbookpanel">
                <div id="messages" className="container" style={{paddingBottom: "15px"}}>
                    { showModuleModal && renderModuleModal() }
                    { showExplanationModal && renderExplanationModal() }
                    { renderMessages() }
                </div>
            </div>
        </div>
    )
}

//  <ChatbubbleInputSummary key={"message-recommendation-inputs"} typeLength={1000} inputs={computeBars(testInputs)}/>