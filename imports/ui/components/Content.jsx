import { data } from 'browserslist';
import React, { useState } from 'react';
import './Content.scss';

function Content(props) {

    /* Constructors for content */
    createTextContent = (key, text) => {
        return <div key={key} className="content-text">{text}</div>;
    }

    createQuestionContent = (key, question, options, correct, onCorrect, onIncorrect) => {
        let buttonsHTML = [];
        let [status, changeStatus] =  useState("default");
        /* Make buttons for each of the options, and assign correct/incorrect actions to buttons */
        options.forEach((option, index) => {
            if (option === correct) {
                const correctButtonClass = status === "correct" ? "content-button-correct" : "content-button";
                buttonsHTML.push(<button key={key + "-" + index} className={correctButtonClass} onClick={() => {if (status === "default") changeStatus("correct")}}>{option}</button>);
            }
            else if (option !== correct) {
                const incorrectButtonClass = status === "incorrect" ? "content-button-incorrect" : "content-button";
                buttonsHTML.push(<button key={key + "-" + index} className={incorrectButtonClass} onClick={() => {if (status === "default") changeStatus("incorrect")}}>{option}</button>);
            }
        })
        /* Make the Question-Content element */
        return (<div key={key} className="content-question">
            <div className="content-question-title">Vraag</div>
            <div className="content-question-text">{question}</div>
            <div className="content-buttons">{buttonsHTML}</div>
            {status === "correct" && <div className="content-answer-correct">{onCorrect}</div>}
            {status === "incorrect" && <div className="content-answer-incorrect">{onIncorrect}</div>}
        </div>);
    };

    createVideoContent = (key, link, language) => {
        return <iframe key={key} src={link[language]} width="100%" style={{marginTop:"20px", borderRadius: "10px"}} frameBorder="0" allow="autoplay; fullscreen"></iframe>
    }


    /* Display-Rules */
    if (props.data["show-if"]) {
        if (props.data["show-if"] === "Pain" && props.userProfile.pain !== "Pain") return <React.Fragment></React.Fragment>;
        if (props.data["show-if"] === "No pain" && props.userProfile.pain !== "No pain") return <React.Fragment></React.Fragment>;
    }

    /* Generate content according to content type */
    switch (props.data.type) {
        case 'Text':
            return createTextContent(props.data.key, props.data.content);
        case 'Question':
            return createQuestionContent(props.data.key, props.data.question, props.data.options, props.data.correct, props.data.onCorrect, props.data.onIncorrect);
        case 'Video':
            return createVideoContent(props.data.key, props.data.link, props.userProfile.language);
        default:
            return <div>NOT IMPLEMENTED - {props.data.type}</div>
    }
}

export default Content;