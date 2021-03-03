import React, { useState, useEffect } from 'react';

import { Chatbubble, ChatbubbleEmotions, ChatbubbleThoughtsReactions, ChatbubbleText } from '../../components/Chatbubble.jsx';
import NavigationBar from '../../components/NavigationBar';

import {emotions, reactions, thoughts, fillerWords, conversation} from "./PainLogbookData.js";

export default function PainLogbook() {

    const [messageQueue, updateMessageQueue] = useState(["MESSAGE-INTRO"]);
    const [tempMessageQueue, updateTempMessageQueue] = useState([]);

    /* Conversation Logic */

    function action(actionType) {
        switch (actionType) {
            case "leave":
                history.back();
                break;
            default:
                console.log(`Action ${actionType} not implemented.`)
        }
    }

    function initializeMessages() {
        updateMessageQueue([conversation["MESSAGE-INTRO"]]);
        let tempMessageQueue = [];
        conversation["MESSAGE-INTRO"].response.forEach(message => {
            tempMessageQueue.push(conversation[message]);
        });
        updateTempMessageQueue(tempMessageQueue);
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
        for (const [response] of Object.entries(responses)) {
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
        updateMessageQueue(newQueue);
        updateTempMessageQueue(responseMessages);
    };

    function renderMessages() {
        let messages = [];
        messageQueue.forEach((message, index) => {
            messages.push(<Chatbubble key={"message-"+index} own={message.sentBy === "user" ? true : false}>{message.content}</Chatbubble>)
        });
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

    /* Initialize first message once */
    useEffect(() => { initializeMessages() }, []);

    /* Scroll to bottom after each re-render (i.e. each time new messages are added) */
    useEffect(() => {
        const messages = document.getElementById("messages");
        /* Scroll immediately after new messages */
        messages.scrollTop = messages.scrollHeight;
        /* Scroll again after messages have expanded/user options have appeared (1000ms) */
        setTimeout(function() { messages.scrollTop = messages.scrollHeight; }, 1001);
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