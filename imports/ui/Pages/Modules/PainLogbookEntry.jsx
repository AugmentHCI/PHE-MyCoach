import React, { useState, useEffect } from 'react';

import { Chatbubble, ChatbubbleEmotions, ChatbubbleThoughtsReactions, ChatbubbleText, ChatbubbleInputSummary } from '../../components/Chatbubble.jsx';
import NavigationBar from '../../components/NavigationBar';

import {thoughts, emotions, reactions, fillerWords, conversation, moduleTranslation, rules, codes, codeFrequencies, options} from "./PainLogbookData.js";

import RuleEngine from "../../../api/RuleEngine.jsx";


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
    const [matchedRecommendations, updateMatchedRecommendations] = useState([]);
    const [currentRecommendation, updateCurrentRecommendation] = useState(0);

    const [messageQueue, updateMessageQueue] = useState(["MESSAGE-INTRO"]);
    const [tempMessageQueue, updateTempMessageQueue] = useState([]);

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
                console.log("Opening module" + matchedRecommendations[currentRecommendation].module);
                break;
            case "nextRecommendation":
                updateCurrentRecommendation(currentRecommendation + 1);
                addResponseToMessageQueue(message);
                break;
            case "saveAndClose":
                console.log(`Action ${actionType} not implemented.`)
                break;
            default:
                console.log(`Action ${actionType} not implemented.`)
        }
    }

    function initializeMessages() {
        const codeFreqs = codeFrequencies();
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
            newQueue.push({content: response, sentBy: "user"});
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
        let recommendationIndex = 0;
        messageQueue.forEach((message, index) => {
            /* Recommendation message (requires more complex handling) */
            if (message.content === "recommendation") { 
                /* Update state, but use local variable as state update happens asynchronously */
                messages.push(<ChatbubbleInputSummary key={"message-recommendation-"+recommendationIndex+"-inputs"} typeLength={1000} inputs={computeBars(userInput)}/>);
                let recommendations = matchedRecommendations.length === 0 ? ruleEngine.matchRules(userInput) : matchedRecommendations ;
                if (matchedRecommendations.length === 0) updateMatchedRecommendations(recommendations);
                const recommendationText = " Wil je hiervoor wat tips bekijken in de module '" + moduleTranslation[recommendations[recommendationIndex].module]+ "'?";
                messages.push(<Chatbubble key={"message-recommendation-"+recommendationIndex+"-1"} typeLength={2000} own={false}>{recommendations[recommendationIndex].explanation}</Chatbubble>)
                messages.push(<Chatbubble key={"message-recommendation-"+recommendationIndex+"-2"} delayedDisplay delayBy={2000} typeLength={2000} own={false}>{recommendations[recommendationIndex].recommendation + recommendationText}</Chatbubble>)
                recommendationIndex += 1;
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
                        onSubmit={hangleTERinput}/>);
                    break;
                case "recommendation-next":
                    if (recommendationIndex === matchedRecommendations.length) {
                        messages.push(<Chatbubble 
                            key={"recommendation-response-"+message.text+"-"+currentRecommendation}
                            own={true}
                            delayedDisplay
                            delayBy={4000}
                            choice 
                            disabled>Geen aanbevelingen meer</Chatbubble>);
                        break;
                    }
                case "recommendation-answer":
                    let newMessage = {...message};
                    newMessage.content = newMessage.text;
                    messages.push(<Chatbubble 
                        key={"recommendation-response-"+message.text+"-"+currentRecommendation}
                        own={true}
                        delayedDisplay
                        delayBy={4000}
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
    };
    
    /* Initialize first message once */
    useEffect(() => { initializeMessages() }, []);

    /* Scroll to bottom after each re-render (i.e. each time new messages are added) */
    useEffect(() => {
        const messages = document.getElementById("messages");
        /* Scroll immediately after new messages */
        messages.scrollTop = messages.scrollHeight;
        /* Scroll again after messages have expanded/user options have appeared (1000ms) */
        if (messageQueue[messageQueue.length-1].content === "recommendation") {
            setTimeout(function() { messages.scrollTop = messages.scrollHeight; }, 2001);
            setTimeout(function() { messages.scrollTop = messages.scrollHeight; }, 4001);
        }
        else {
            setTimeout(function() { messages.scrollTop = messages.scrollHeight; }, 1001);
        }
    });

    return (
        <React.Fragment>
            <NavigationBar title="Nieuwe pijnlog" action="close"/>
            <div id="messages" className="container" style={{paddingTop:"85px", paddingBottom: "15px"}}>
                {renderMessages()}
            </div>
        </React.Fragment>
    )
}

//  <ChatbubbleInputSummary key={"message-recommendation-inputs"} typeLength={1000} inputs={computeBars(testInputs)}/>