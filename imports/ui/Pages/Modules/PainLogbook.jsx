import React, { useState, useEffect } from 'react';

import { Chatbubble, ChatbubbleEmotions, ChatbubbleThoughtsReactions, ChatbubbleText } from '../../components/Chatbubble.jsx';
import NavigationBar from '../../components/NavigationBar';

import {thoughts, emotions, reactions, fillerWords, conversation, moduleTranslation, rules, codes, codeFrequencies} from "./PainLogbookData.js";

import RuleEngine from "../../../api/RuleEngine.jsx";

export default function PainLogbook() {

    /* States and Constants */
    const figmaLink = "https://www.figma.com/proto/1uQ546kVRnr7F0URcdtm85/Untitled?node-id=1%3A134&viewport=-1003%2C902%2C1.1312503814697266&scaling=scale-down";
    const ruleEngine = new RuleEngine(rules);
    const [matchedRecommendations, updateMatchedRecommendations] = useState([]);
    const [currentRecommendation, updateCurrentRecommendation] = useState(0);

    const [messageQueue, updateMessageQueue] = useState(["MESSAGE-INTRO"]);
    const [tempMessageQueue, updateTempMessageQueue] = useState([]);

    const [visualRecommendation, toggleVisualRecommendation] = useState(FlowRouter.getParam('settings') === "visual")

    const [userInput, updateUserInput] = useState([]);

    function computeBars() {
        let userCodes  = {};
        userInput.forEach(input => {
            if (input.level1 === "EMOTION" && Object.keys(codes).includes(input.level2)) {
                userCodes[[input.level2]] = userCodes[[input.level2]] ? userCodes[[input.level2]]+2 : 2 ;
            }
            if (input.codes) input.codes.forEach(code => {
                userCodes[[code]] = Object.keys(userCodes).includes(code) ? userCodes[[code]]+1 : 1 ;
            });
        })
        return userCodes;
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
            case "next":
                toggleVisualRecommendation(!visualRecommendation);
                break;
            case "saveAndClose":
                window.open(figmaLink, "_blank");
                break;
            default:
                console.log(`Action ${actionType} not implemented.`)
        }
    }

    function initializeMessages() {
        const codeFreqs = codeFrequencies();
        console.log(codeFreqs)
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
                console.log(computeBars());
                if (visualRecommendation) {
                    messages.push(<Chatbubble key={"message-recommendation-visual"} typeLength={2000} onClick={()=> window.open(figmaLink, "_blank")} own={false}>Aanbeveling gegenereerd: klik hier.</Chatbubble>)
                }
                else {
                    /* Update state, but use local variable as state update happens asynchronously */
                    let recommendations = matchedRecommendations.length === 0 ? ruleEngine.matchRules(userInput) : matchedRecommendations ;
                    if (matchedRecommendations.length === 0) updateMatchedRecommendations(recommendations);
                    const recommendationText = " Wil je hiervoor wat tips bekijken in de module '" + moduleTranslation[recommendations[recommendationIndex].module]+ "'?";
                    messages.push(<Chatbubble key={"message-recommendation-"+recommendationIndex+"-1"} typeLength={2000} own={false}>{recommendations[recommendationIndex].explanation}</Chatbubble>)
                    messages.push(<Chatbubble key={"message-recommendation-"+recommendationIndex+"-2"} delayedDisplay delayBy={2000} typeLength={2000} own={false}>{recommendations[recommendationIndex].recommendation + recommendationText}</Chatbubble>)
                    recommendationIndex += 1;
                }
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
                    if (recommendationIndex === matchedRecommendations.length && !visualRecommendation) {
                        messages.push(<Chatbubble 
                            key={"recommendation-response-"+message.text+"-"+currentRecommendation}
                            own={true}
                            delayedDisplay
                            delayBy={4000}
                            choice 
                            disabled>Geen aanbevelingen meer</Chatbubble>);
                        break;
                    }
                    else if (visualRecommendation) {
                        messages.push(<Chatbubble 
                            key={"recommendation-response-visual-next"}
                            own={true}
                            delayedDisplay
                            delayBy={2000}
                            choice
                            onClick={() => action("next")}>
                                Volgende
                            </Chatbubble>);
                        break;
                    }
                case "recommendation-answer":
                    if (visualRecommendation) break;
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
            <NavigationBar title="Pijnlogboek"/>
            <div id="messages" className="container" style={{paddingTop:"85px", paddingBottom: "15px"}}>
                {renderMessages()}
            </div>
        </React.Fragment>
    )
}