import { data } from 'browserslist';
import React from 'react';
import './Content.scss';

function Content(props) {

    /* Constructors for content */
    createTextContent = (text) => {
        return <div className="content-text">{text}</div>;
    }

    createQuestionContent = (question, options) => {
        return (<div className="content-question">
            <div className="content-question-title">Vraag</div>
            <div className="content-question-text">{question}</div>
        </div>);
    };

    createVideoContent = (link, language) => {
        return <iframe src={link[language]} width="100%" style={{marginTop:"20px", borderRadius: "10px"}} frameBorder="0" allow="autoplay; fullscreen"></iframe>
    }


    /* Display-Rules */
    if (props.data["show-if"]) {
        if (props.data["show-if"] === "Pain" && props.userProfile.pain !== "Pain") return <React.Fragment></React.Fragment>;
        if (props.data["show-if"] === "No pain" && props.userProfile.pain !== "No pain") return <React.Fragment></React.Fragment>;
    }

    /* Generate content according to content type */
    switch (props.data.type) {
        case 'Text':
            return createTextContent(props.data.content);
        case 'Question':
            return createQuestionContent(props.data.question, props.data.options);
        case 'Video':
            return createVideoContent(props.data.link, props.userProfile.language);
        default:
            return <div>NOT IMPLEMENTED - {props.data.type}</div>
    }
}

export default Content;