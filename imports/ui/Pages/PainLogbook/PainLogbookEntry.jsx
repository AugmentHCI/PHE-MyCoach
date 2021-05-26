import React, { useState, useEffect } from 'react';

import { Chatbubble, ChatbubbleEmotions, ChatbubbleThoughtsReactions, ChatbubbleText, ChatbubbleInputSummary, ChatbubbleRecommendation } from '../../components/Chatbubble.jsx';
import NavigationBar from '../../components/NavigationBar';

import {thoughts, emotions, reactions, fillerWords, conversation, moduleTranslation, rules, codes, codeFrequencies, options} from "./PainLogbookData.js";

import jwt_decode from "jwt-decode";

import RuleEngine from "../../../api/RuleEngine.jsx";
import PainLogbookManager from '../../../api/PainLogbookManager.jsx';

import PainEducationScript from '../Modules/ModuleScripts/PainEducationScript.js';
import ThoughtsEmotionsScript from '../Modules/ModuleScripts/ThoughtsEmotionsScript.js';
import ActivityWorkScript from '../Modules/ModuleScripts/ActivityWorkScript.js';
import AppModal from '../../components/AppModal.jsx';
import Illustration from '../../components/Illustrations/Illustration.jsx';
import PillButton from '../../components/PillButton.jsx';


const testInputs = [
    {
      "level4": "EMOTION-EXHAUSTED",
      "level3": "FATIGUE",
      "level2": "NEGATIVE",
      "level1": "EMOTION"
    },
    {
      "level4": "EMOTION-ANNOYED",
      "level3": "ANGER",
      "level2": "NEGATIVE",
      "level1": "EMOTION"
    },
    {
      "level4": "EMOTION-ANGRY",
      "level3": "ANGER",
      "level2": "NEGATIVE",
      "level1": "EMOTION"
    },
    {
      "level4": "THOUGHT-CAUSE-NEG-1",
      "level3": "CAUSE",
      "level2": "NEGATIVE",
      "level1": "THOUGHT",
      "codes": [
        "TIT"
      ],
      "synonyms": [
        "kapot",
        "versleten"
      ]
    },
    {
      "level4": "THOUGHT-CAUSE-NEG-3",
      "level3": "CAUSE",
      "level2": "NEGATIVE",
      "level1": "THOUGHT",
      "codes": [
        "TIT"
      ],
      "synonyms": [
        "versleten",
        "slijt"
      ]
    },
    {
      "level4": "REACTION-NEG-2",
      "level3": "",
      "level2": "NEGATIVE",
      "level1": "REACTION",
      "codes": [
        "TIR",
        "ANXIOUS",
        "DEPRESSED"
      ],
      "synonyms": [
        "paniek"
      ]
    },
    {
      "level4": "REACTION-NEG-4",
      "level3": "",
      "level2": "NEGATIVE",
      "level1": "REACTION",
      "codes": [
        "TIR",
        "ANXIOUS"
      ],
      "synonyms": [
        "stop",
        "alles"
      ]
    }
]

export default function PainLogbookEntry() {

    /* States and Constants */
    const ruleEngine = new RuleEngine(rules);
    const painLogbookManager = new PainLogbookManager(parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr));
    const language  = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";
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
        /* Compute user relative frequencies */
        const userTotal = inputs.reduce((total, input) => (input.level1) ? ((input.level1 === "EMOTION") ? total + 2 : total + 1) : total , 0);
        let relUserCodes = {};
        Object.keys(userCodes).forEach(code => {
            relUserCodes[[code]] = userCodes[code] / userTotal;
        });
        /* Compute user total frequencies */
        const codeFreqs = codeFrequencies();
        let totUserCodes = {};
        Object.keys(userCodes).forEach(code => {
            totUserCodes[[code]] = userCodes[code] / codeFreqs[code];
        });
        /* Compute avg between both frequencies */
        let userFrequencies = {};
        Object.keys(userCodes).forEach(code => {
            userFrequencies[code] = (totUserCodes[code] + relUserCodes[code]) / 2;
        });
        /* Sort and scale user inputs */
        let codesArray = Object.keys(userFrequencies).map(key => [key, userFrequencies[key]] );
        codesArray.sort((first, second) => second[1] - first[1]);
        const max = codesArray[0][1];
        for (let i = 0; i < codesArray.length; i++) {
            codesArray[i][1] = codesArray[i][1] / max ; 
        }
        return codesArray;
    }

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
            case "saveAndClose":
                saveLog();
                history.back();
                break;
            default:
                console.log(`Action ${actionType} not implemented.`)
        }
    }

    function saveLog() {
        let userLog = {THOUGHT: [], REACTION: [], EMOTION: [], CONTEXT: undefined, INTENSITY: undefined, ACTIVITY: undefined}
        userInput.forEach(input => {
            if (input.level1) userLog[input.level1].push(input.level4);
            else { userLog[input.category] = input.content }
        });
        Object.keys(userLog).forEach(key => {
            if (["THOUGHT", "REACTION", "EMOTION"].includes(key)) { userLog[key] = userLog[key].join("|") }
        })
        painLogbookManager.addPainLog(userLog.CONTEXT, userLog.ACTIVITY, userLog.INTENSITY, userLog.THOUGHT, userLog.EMOTION, userLog.REACTION);
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
                messages.push(<ChatbubbleInputSummary key={"message-recommendation-inputs"} typeLength={recommendationIndex > 0 ? 0 : 2000} inputs={computeBars(userInput)} highlights={recommendations[recommendationIndex].codeMarkings}/>);
                const recommendationText = " Wil je hiervoor wat tips bekijken in de module '" + moduleTranslation[recommendations[recommendationIndex].module]+ "'?";
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
        let submodule = [], recModule = matchedRecommendations[currentRecommendation].module.toLowerCase(), recSubmodule = matchedRecommendations[currentRecommendation].submodule;
        switch (recSubmodule.split("_")[0]) {
            case "PE":
                submodule = PainEducationScript.submodules.filter(submoduleData => submoduleData.id === recSubmodule)[0];
                break;
            case "TE":
                submodule = ThoughtsEmotionsScript.submodules.filter(submoduleData => submoduleData.id === recSubmodule)[0];
                break;
            case "ACT":
                submodule = ActivityWorkScript.submodules.filter(submoduleData => submoduleData.id === recSubmodule)[0];
                break;
        }

        return (<AppModal
            backOption="Sluit" 
            notifyBack={() => setShowModuleModal(false)} 
            notifyParent={() => {saveLog(); FlowRouter.go(`/${language}/mycoach/${FlowRouter.getParam('token')}/module/${recModule}/${recSubmodule}?goPainlogbookOnBack=true`)}}
            defaultOption="Open" 
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
                <div>
                    <PillButton contentColor="white" fillColor={"blue"} icon="time">{submodule.duration}</PillButton>
                    <PillButton contentColor="white" fillColor={"blue"} icon="information">{submodule.type}</PillButton>
                </div>
                {submodule.description}
                <hr/>
                Jouw pijnlog wordt opgeslagen en je wordt doorverwezen naar dit onderdeel.
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