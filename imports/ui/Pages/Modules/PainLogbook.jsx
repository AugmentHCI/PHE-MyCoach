import React, { useState, useEffect } from 'react';

import { Chatbubble, ChatbubbleEmotions, ChatbubbleThoughtsReactions, ChatbubbleText } from '../../components/Chatbubble.jsx';
import NavigationBar from '../../components/NavigationBar';

import {thoughts, emotions, reactions, fillerWords, conversation, moduleTranslation, rules} from "./PainLogbookData.js";

import RuleEngine from "../../../api/RuleEngine.jsx";

export default function PainLogbook() {

    /* States */
    const ruleEngine = new RuleEngine(rules);
    const [matchedRecommendations, updateMatchedRecommendations] = useState([]);
    const [currentRecommendation, updateCurrentRecommendation] = useState(0);

    const [messageQueue, updateMessageQueue] = useState(["MESSAGE-INTRO"]);
    const [tempMessageQueue, updateTempMessageQueue] = useState([]);

    const [userInput, updateUserInput] = useState([]);

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
                let recommendations = matchedRecommendations.length === 0 ? ruleEngine.matchRules(userInput) : matchedRecommendations ;
                if (matchedRecommendations.length === 0) updateMatchedRecommendations(recommendations);
                const recommendationText = " Wil je hiervoor de aanbevolen tips bekijken in de module '" + moduleTranslation[recommendations[recommendationIndex].module]+ "'?";
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
                        message={message}
                        onSubmit={addResponseToMessageQueue}
                        />)
                    break;
                case "emotions":
                    messages.push(<ChatbubbleEmotions
                        message={message}
                        options={emotions}
                        onSubmit={hangleTERinput}
                        />)
                    break;
                case "thoughts":
                case "reactions":
                    messages.push(<ChatbubbleThoughtsReactions 
                        message={message}
                        options={message.content === "thoughts" ? thoughts : reactions} 
                        fillerWords={fillerWords}
                        onSubmit={hangleTERinput}/>);
                    break;
                case "recommendation-next":
                case "recommendation-answer":
                    if (message.content === "recommendation-next" && recommendationIndex === matchedRecommendations.length) {
                        messages.push(<Chatbubble 
                            key={"recommendation-response-"+message.text+"-"+currentRecommendation}
                            own={true}
                            delayedDisplay
                            delayBy={4000}
                            choice 
                            disabled>Geen aanbevelingen meer</Chatbubble>);
                        break;
                    }
                    let newMessage = {...message};
                    console.log(newMessage)
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
            <div id="messages" className="container" style={{paddingTop:"85px"}}>
                {renderMessages()}
            </div>
        </React.Fragment>
    )
}