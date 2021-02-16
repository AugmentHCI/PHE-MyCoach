import React, { useState, useEffect } from 'react';
import Highlighter from "react-highlight-words";

import Input from '../../components/Input.jsx';
import Chatbubble from '../../components/Chatbubble.jsx';
import NavigationBar from '../../components/NavigationBar';

import {reactions, options, fillerWords, conversation} from "./PainLogbookData.jsx";

export default function PainLogbook() {

    const [searchTerm, updateSearchterm] = useState("");

    const [messageQueue, updateMessageQueue] = useState(["MESSAGE-1"]);
    const [tempMessageQueue, updateTempMessageQueue] = useState([]);

    /* Input search bar */
    function filterSearchTerms(searchTerms) {
        let filteredWords = [];
        searchTerms.split(" ").forEach(term => {
            if (!fillerWords.includes(term)) {filteredWords.push(term)}
        })
        return filteredWords.join(" ");
    }

    function renderOptions() {
        let filteredWords = [];
        for (const [option, information] of Object.entries(options)) {
            if ((filterSearchTerms(searchTerm).split(" ")).length <= 1) {filteredWords.push(<li>{option}</li>)}
            else {
                let highlighted = null;
                (filterSearchTerms(searchTerm).split(" ")).forEach (term => {
                    if (!(term === "" || term === " ")) 
                    {
                        if (information.synonyms.includes(term.toLowerCase()) || option.toLowerCase().split(" ").includes(term.toLowerCase())) {
                            highlighted = <Highlighter
                            highlightClassName="highlighted"
                            searchWords={filterSearchTerms(searchTerm).split(" ")}
                            autoEscape={true}
                            textToHighlight={option}
                            key={option}
                        />
                        }
                }}) 
                if (highlighted) filteredWords.push(<li key={"li-" + option}>{highlighted}</li>);
            }
        }
        return <ul>{filteredWords}</ul>
    }

    function renderOptionQuestion() {
        return (<div className="container">
            <Input placeholder={"Hoe voel jij je vandaag"} width={"300px"} onChange={updateSearchterm}></Input>
            {renderOptions()}
        </div>)
    }

    /* Conversation Logic */

    function initializeMessages() {
        updateMessageQueue([conversation["MESSAGE-1"]]);
        let tempMessageQueue = [];
        conversation["MESSAGE-1"].response.forEach(message => {
            tempMessageQueue.push(conversation[message]);
        });
        console.log(tempMessageQueue)
        updateTempMessageQueue(tempMessageQueue);
    }
    function addToMessageQueue(message) {
        let newQueue = messageQueue;
        newQueue.push(message);
        let responseMessages = [];
        message.response.forEach(response => {
            if (response.sentBy === "user");
            responseMessages.push(conversation[response])
        });
        updateMessageQueue(newQueue);
        updateTempMessageQueue(responseMessages);
    }

    function renderMessages() {
        let messages = [];
        messageQueue.forEach((message, index) => {
            messages.push(<Chatbubble key={"message-"+index} own={message.sentBy === "user" ? true : false}>{message.content}</Chatbubble>)
        });
        tempMessageQueue.forEach((message, index) => {
            messages.push(<Chatbubble 
                key={"response-"+index}
                own={message.sentBy === "user" ? true : false}
                choice 
                onClick={() => addToMessageQueue(message)}>
                    {message.content}
                </Chatbubble>)
        });
        return messages;
    }

    /* Initialize first message once */
    useEffect(() => { initializeMessages() }, []);

    return (
        <React.Fragment>
            <NavigationBar title="Pijnlogboek"/>
            <div className="container" style={{paddingTop:"85px"}}>
                {renderMessages()}
            </div>
        </React.Fragment>
    )


}