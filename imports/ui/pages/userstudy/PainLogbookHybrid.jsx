import React, { useState, useEffect } from 'react';

import { Chatbubble, ChatbubbleEmotions, ChatbubbleThoughtsReactions, ChatbubbleText, ChatbubbleInputSummary, ChatbubbleRecommendation, ChatbubbleTextualExplanation } from '../../components/Chatbubble.jsx';

import {thoughts, emotions, reactions, fillerWords, conversation, moduleTranslation, rules, codes, codeFrequencies, options} from "./PainLogbookData_Hybrid";

import RuleEngine from "../../../api/RuleEngine.jsx";

import PainEducationScript from '../modules/ModuleScripts/PainEducationScript.js';
import ThoughtsEmotionsScript from '../modules/ModuleScripts/ThoughtsEmotionsScript.js';
import ActivityWorkScript from '../modules/ModuleScripts/ActivityWorkScript.js';
import AppModal from '../../components/AppModal.jsx';
import Illustration from '../../components/Illustrations/Illustration.jsx';
import PillButton from '../../components/PillButton.jsx';

import "./UserStudyStyles.scss";


export default function PainLogbookHybrid() {

    /* States and Constants */
    const ruleEngine = new RuleEngine(rules);
    const language  = localStorage.getItem("language") ? localStorage.getItem("language") : "nl-BE";
    /* Recommendations */
    const [matchedRecommendations, updateMatchedRecommendations] = useState([]);
    const [currentRecommendation, updateCurrentRecommendation] = useState(0);
    const [showModuleModal, setShowModuleModal] = useState(false);
    const [showExplanationModal, setShowExplanationModal] = useState(false);
    const [disabledAutoScroll, setDisabledAutoScroll] = useState(false);
    /* Message Queues */
    const [messageQueue, updateMessageQueue] = useState(["MESSAGE-INTRO"]);
    const [tempMessageQueue, updateTempMessageQueue] = useState([]);
    /* User input */
    const [userInput, updateUserInput] = useState([]);

    function computeBars(inputs) {
        let userCodes  = {};
        /* Compute user frequencies */
        inputs.forEach(input => {
            if (input.level1 === "EMOTION" && Object.keys(codes).includes(input.level3)) {
                userCodes[[input.level3]] = userCodes[[input.level3]] ? userCodes[[input.level3]]+2 : 2 ;
            }
            if (input.codes) input.codes.forEach(code => {
                userCodes[[code]] = Object.keys(userCodes).includes(code) ? userCodes[[code]]+1 : 1 ;
            });
        });
    console.log(userCodes);
        /* Compute user relative frequencies */
        const userTotal = inputs.reduce((total, input) => (input.level1) ? ((input.level1 === "EMOTION") ? total + 2 : total + 1) : total , 0);
        let relUserCodes = {};
        Object.keys(userCodes).forEach(code => {
            relUserCodes[[code]] = userCodes[code] / userTotal;
        });
    console.log(relUserCodes);
        /* Compute user total frequencies */
        const codeFreqs = codeFrequencies();
        let totUserCodes = {};
        Object.keys(userCodes).forEach(code => {
            totUserCodes[[code]] = userCodes[code] / codeFreqs[code];
        });
    console.log(codeFreqs);
    console.log(totUserCodes);
        /* Compute avg between both frequencies */
        let userFrequencies = {};
        Object.keys(userCodes).forEach(code => {
            userFrequencies[code] = (totUserCodes[code] + relUserCodes[code]) / 2;
        });
    console.log(userFrequencies);
        /* Sort and scale user inputs */
        let codesArray = Object.keys(userFrequencies).map(key => [key, userFrequencies[key]] );
        codesArray.sort((first, second) => second[1] - first[1]);
        const max = codesArray[0][1];
        for (let i = 0; i < codesArray.length; i++) {
            codesArray[i][1] = codesArray[i][1] / max ; 
        }
    console.log(codesArray);
        return codesArray;
    }

    /* Conversation Logic */

    function action(actionType, message=null) {
        switch (actionType) {
            case "leave":
                history.back();
                break;
            case "explainRecommendation":
                setShowExplanationModal(true);
                break;
            case "noneRelevant":
            case "saveAndClose":
                if (localStorage.getItem('prolificID')) {
                    Meteor.callPromise('prolificstudy.insert', {
                        id: localStorage.getItem('prolificID'), 
                        settings: localStorage.getItem('studysettings'), 
                        type: 'action-hybrid', 
                        content: actionType});
                    Meteor.callPromise('prolificstudy.insert', {
                        id: localStorage.getItem('prolificID'), 
                        settings: localStorage.getItem('studysettings'), 
                        type: 'recommendations-hybrid', 
                        content: JSON.stringify(matchedRecommendations)});
                    Meteor.callPromise('prolificstudy.insert', {
                        id: localStorage.getItem('prolificID'), 
                        settings: localStorage.getItem('studysettings'), 
                        type: 'inputs-hybrid', 
                        content: JSON.stringify(userInput)});
                    if (actionType === "saveAndClose") {
                        Meteor.callPromise('prolificstudy.insert', {
                            id: localStorage.getItem('prolificID'), 
                            settings: localStorage.getItem('studysettings'), 
                            type: 'selected-hybrid', 
                            content: currentRecommendation + "-" + JSON.stringify(matchedRecommendations[currentRecommendation])});
                    }
                }
                else {
                    Meteor.callPromise('userstudy.insert', {
                        mail: localStorage.getItem('mail'), 
                        settings: localStorage.getItem('studysettings'), 
                        type: 'action-hybrid', 
                        content: actionType});
                    Meteor.callPromise('userstudy.insert', {
                        mail: localStorage.getItem('mail'), 
                        settings: localStorage.getItem('studysettings'), 
                        type: 'recommendations-hybrid', 
                        content: JSON.stringify(matchedRecommendations)});
                    Meteor.callPromise('userstudy.insert', {
                        mail: localStorage.getItem('mail'), 
                        settings: localStorage.getItem('studysettings'), 
                        type: 'inputs-hybrid', 
                        content: JSON.stringify(userInput)});
                    if (actionType === "saveAndClose") {
                        Meteor.callPromise('userstudy.insert', {
                            mail: localStorage.getItem('mail'), 
                            settings: localStorage.getItem('studysettings'), 
                            type: 'selected-hybrid', 
                            content: currentRecommendation + "-" + JSON.stringify(matchedRecommendations[currentRecommendation])});
                    }
                }
                FlowRouter.go(`/mycoach/userstudy/questionnaire/hybrid`);
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
                messages.push(<ChatbubbleInputSummary 
                    key={"message-recommendation-inputs"} 
                    typeLength={recommendationIndex > 0 ? 0 : 2000} 
                    inputs={computeBars(userInput)}
                    codes={codes}
                    highlights={recommendations[recommendationIndex].codeMarkings}/>);
                messages.push(<ChatbubbleTextualExplanation 
                    key={"message-recommendation-1"} 
                    recommendationIndex={recommendationIndex}
                    explanation={recommendations[currentRecommendation].explanation[language]}/>);
                const recommendationText = language === "nl-BE" ? " Ga je akkoord met de aanbeveling?" : "Do you agree with the recommendation?";
                /*messages.push(<Chatbubble key={"message-recommendation-"+recommendationIndex+"-1"} typeLength={2000} own={false}>{recommendations[recommendationIndex].explanation}</Chatbubble>) */
                /*
                messages.push(<Chatbubble key={"message-recommendation-2"} delayedDisplay delayBy={recommendationIndex > 0 ? 0 : 2000} typeLength={recommendationIndex > 0 ? 0 : 2000} own={false}>{recommendations[recommendationIndex].recommendation + recommendationText}</Chatbubble>) */
                messages.push(<ChatbubbleRecommendation 
                    key={"message-recommendation-2"} 
                    recommendationIndex={recommendationIndex}
                    recommendationLength={recommendations.length-1}
                    nextRecommendation={() => updateCurrentRecommendation(currentRecommendation+1)}
                    prevRecommendation={() => updateCurrentRecommendation(currentRecommendation-1)}>
                        {recommendations[recommendationIndex].recommendation[language] + recommendationText}
                    </ChatbubbleRecommendation>) ;

            }
            /* Normal messages */
            else {
                const content = typeof message.content === "string" ? message.content : message.content?.[language];
                messages.push(<Chatbubble key={"message-"+index} own={message.sentBy === "user" ? true : false}>{content}</Chatbubble>) 
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
                    newMessage.content = typeof newMessage.text === "string" ? newMessage.text : newMessage.text[language];
                    const messageText = typeof message.text === "string" ? message.text : message.text[language];
                    messages.push(<Chatbubble 
                        key={"recommendation-response-"+messageText+"-"+currentRecommendation}
                        own={true}
                        delayedDisplay
                        delayBy={disabledAutoScroll > 0 ? 0 : 4000}
                        choice 
                        type={message.type}
                        onClick={() => action(message.action, {...newMessage})}>
                            {messageText}
                        </Chatbubble>);
                    break;
                default:
                    const content = typeof message.content === "string" ? message.content : message.content?.[language];
                    messages.push(<Chatbubble 
                        key={"response-"+index+"-"+content}
                        own={message.sentBy === "user" ? true : false}
                        delayedDisplay
                        choice 
                        type={message.type}
                        onClick={message.action ? 
                            () => action(message.action) : 
                            () => addResponseToMessageQueue({...message})}>
                            {content}
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
                <h2>{localization.title[language]}</h2>
                <PillButton contentColor="blue" fillColor="white" icon="time">{localization.time[language]}</PillButton>
                <PillButton contentColor="blue" fillColor="white" icon="information">{localization.interactive[language]}</PillButton><br/>
                {localization.information[language]}
                {matchedRecommendations.length > 0 && <hr/>}
                {matchedRecommendations.length > 0 && localization.informationRecommendation[language]}
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

const localization = {
    title: {
        "nl-BE": "Pijnlogboek - Deel 2 (van 2)",
        "en-EN": "Pain Logbook - Part 2 (of 2)"
    },
    interactive: {
        "nl-BE": "Interactief",
        "en-EN": "Interactive"
    },
    time: {
        "nl-BE": "5 minuten",
        "en-EN": "5 minutes"
    },
    information: {
        "nl-BE": <div>Rechts zie je weer het pijnlogboek. Dit kan je nu invullen voor een <b>andere situatie waarin je pijn hebt ervaren.</b> Wanneer je klaar bent, krijg je weer enkele aanbevelingen, maar deze keer met een <b>tekstuele én visuele uitleg</b> van waarom je de aanbeveling krijgt.</div>,
        "en-EN": <div>On your right, you see the pain logbook again. You van fill it in for a <b>different situation in which you experienced pain</b>. When you are finished, you will receive some recommendations with <b>textual and visual</b> explanations.</div>
    },
    informationRecommendation: {
        "nl-BE": <p>Je krijgt nu enkele aanbevelingen rond jouw inputs, alsook een visuele <b>en tekstuele uitleg</b> van waarom je de aanbeveling te zien krijgt. Ga gerust door de aanbevelingen met behulp van de pijlen en indien je een aanbeveling ziet dat je aanspreekt, open je deze en klik je op <i>"Akkoord"</i>. Als geen aanbeveling je aanspreekt, kies je de optie <i>"Geen aanbeveling relevant"</i>.</p>,
        "en-EN": <p>You now see some recommendations, together with a visual <b>and</b> textual explanation of why you receive the recommendation. Go through the recommendations using the arrows until you find one you agree with, or click on "None relevant" otherwise.</p>
    }
}

//  <ChatbubbleInputSummary key={"message-recommendation-inputs"} typeLength={1000} inputs={computeBars(testInputs)}/>