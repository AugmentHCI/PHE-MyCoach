import { data } from 'browserslist';
import React, { useState, useEffect } from 'react';
import './ContentParser.scss';
import createSortingContent from './ContentSorting.jsx';

import Button from '../../components/Button.jsx';
import Slider from '../../components/Slider.jsx';
import Input from '../../components/Input.jsx';
import Icon from '../../components/Illustrations/Icon.jsx';

function ContentParser(props) {

    /* Constructors for content */

    /**
     * Generates a Text-content HTML
     * @param {String} text        The text that needs to be displayed
     * @param {Boolean} isOverview True if the text is in an overview Card (will simply make text white)
     */
    function createTextContent(text, isOverview) {
        if (typeof(text) === "string") return <div key={props.childrenKey+"-text"} className={isOverview ? "content-text-overview" : "content-text"}>{text}</div>;
        else {
            let contentHTML = [];
            text.forEach((element, index) => {
                if (!element.type) {contentHTML.push(element)} /* Normal text */
                else if (element.type === "normal") {contentHTML.push(element.content)} /* Normal text */
                else if (element.type === "bold") {contentHTML.push(<b key={props.childrenKey+"-text-"+index}>{element.content}</b>)} /* Bold text */
                else if (element.type === "italic") {contentHTML.push(<i key={props.childrenKey+"-text-"+index}>{element.content}</i>)} /* Italic text */
                else if (element.type === "answer") {
                    let [answer, setAnswer] = useState(undefined);
                    useEffect(() => {
                        async function fetchAnswer() {
                            const fetchedAnswer = await props.questionManager.getLatestAnswerOnQuestion(element.questionID);
                            if (fetchedAnswer) setAnswer(fetchedAnswer);
                        }
                        fetchAnswer();
                    }, []);
                    contentHTML.push(answer)
                } /* Insert Answer */
            })
            return <div key={props.childrenKey+"-text"} className={isOverview ? "content-text-overview" : "content-text"}>{contentHTML}</div>;
        }
    }

    /**
     * Generates a Question-content HTML 
     * @param {String} question The question that is posed to the user
     * @param {Int}    number   [Optional] The number of the question, used for the title
     * @param {Array[String]} options The possible options from which the user can choose to answer the question
     * @param {String} correct     The correct option to the question
     * @param {String} explanation [Optional] The explanation of the question that can be displayed after answering
     * @param {String} onCorrect   The text that needs to be displayed (or added to the explanation) when the user answers correctly
     * @param {String} onIncorrect The text that needs to be displayed (or added to the explanation) when the user answers incorrectly
     */
    function createQuestionContent(questionID, question, number, options, correct, explanation, onCorrect, onIncorrect) {
        let buttonsHTML = [];
        let [status, changeStatus] =  useState("default");

        useEffect(() => {
            async function fetchStatus() {
                const answer = await props.questionManager.getLatestAnswerOnQuestion(questionID);
                if (answer) changeStatus(answer);
            }
            fetchStatus();
        }, []);

        async function selectButton(option) {
            await props.questionManager.setModuleQuestion(props.module, questionID, option); 
            if (status === "default") changeStatus(option);
            props.callback();
        }

        /* Make buttons for each of the options, and assign correct/incorrect actions to buttons */
        options.forEach((option, index) => {
            if (option === correct) {
                const correctButtonClass = status === "correct" ? "content-button-correct" : "content-button";
                buttonsHTML.push(<button key={props.childrenKey + "-" + index} className={correctButtonClass} onClick={() => selectButton("correct")}>{option}</button>);
            }
            else if (option !== correct) {
                const incorrectButtonClass = status === "incorrect" ? "content-button-incorrect" : "content-button";
                buttonsHTML.push(<button key={props.childrenKey + "-" + index} className={incorrectButtonClass} onClick={() => selectButton("incorrect")}>{option}</button>);
            }
        })
        /* Make the Question-Content element */
        return (<div key={props.childrenKey} className="content-backdrop">
            <div className="content-question-title">Vraag {number ? number : ""}</div>
            <div className="content-question-text">{question}</div>
            <div className="content-buttons">{buttonsHTML}</div>
            {status === "correct" && <div className="content-answer-correct">{explanation ? onCorrect + " " + explanation : onCorrect}</div>}
            {status === "incorrect" && <div className="content-answer-incorrect">{explanation ? onIncorrect + " " + explanation : onIncorrect}</div>}
        </div>);
    };

        /**
     * Generates a Selection-content HTML 
     * @param {String} title    The title of the selection (empty string for no title, null for default 'Question')
     * @param {String} question The question that is posed to the user
     * @param {Array[String]} options The possible options from which the user can choose to answer the question
     */
    function createSelectionContent(questionID, title, question, options, buttonWidth="100%") {
        let buttonsHTML = [];
        const [selected, changeSelected] =  useState(new Array(options.length).fill(false));

        useEffect(() => {
            async function fetchStatus() {
                const answer = await props.questionManager.getLatestAnswerOnQuestion(questionID);
                if (answer) {
                    let newArray = new Array(options.length).fill(false);
                    newArray[options.indexOf(answer)] = true;
                    changeSelected(newArray);
                }
            }
            fetchStatus();
        }, []);

        async function selectButton(index) {
            await props.questionManager.setModuleQuestion(props.module, questionID, options[index], false);
            let newArray = new Array(options.length).fill(false);
            newArray[index] = true;
            changeSelected(newArray);
            props.callback();
        }
        /* Make buttons for each of the options, and assign correct/incorrect actions to buttons */
        options.forEach((option, index) => {
            buttonsHTML.push(<Button key={props.childrenKey + "-" + index} width={buttonWidth} isSelected={selected[index]} onClick={() => selectButton(index)}>{option}</Button>);
        })
        /* Make the Question-Content element */
        return (<div key={props.childrenKey} className="content-backdrop">
            {title !== "" && <div className="content-question-title">{title ? title : "Vraag"}</div>}
            <div className="content-question-text">{question}</div>
            <div className="content-buttons">{buttonsHTML}</div>
            {status === "correct" && <div className="content-answer-correct">{onCorrect}</div>}
            {status === "incorrect" && <div className="content-answer-incorrect">{onIncorrect}</div>}
        </div>);
    }

    /**
     * Generates a List-content HTML
     * @param {Array[String]} content A string of text that will be enumerated
     * @param {Boolean} isNumbered    True if the list is numbered, false if the list is bulleted
     * @param {Boolean} isOverview    True if the list is in an overview Card (will simply make text white)
     */
    function createListContent(content, isNumbered, isOverview) {
        let listHTML = [];
        content.forEach((item, index) => {
            listHTML.push(<li key={props.childrenKey + "-" + index} className={isOverview ? "content-list-item-overview" : "content-list-item"}>{item}</li>)
        });
        if (isNumbered) return <ol className="content-list">{listHTML}</ol>;
        else return <ul className="content-list">{listHTML}</ul>;
    }

    /**
     * Generates an Image-content HTML
     * @param {String} imageUrl A string of text that will be enumerated
     * @param {Int}    width    [Optional] Percentage of width
     */
    function createImageContent(imageUrl, width) {
        /* If only one image url is given */
        if (!Array.isArray(imageUrl)) return <img className="content-image" src={imageUrl} width={width ? width + "%" : "80%"}/>;
        /* If an array of urls is given */
        let imageHTML = [];
        imageUrl.forEach((image, index) => {
            imageHTML.push(<img key={props.childrenKey+"-"+index} className="content-image-inline" src={image} width={90 / imageUrl.length + "%"}/>)
        })
        return imageHTML;
    }

    /**
     * Returns a Vimeo-iframe HTML
     * @param {Dict}   link     A dictionary of language-keys and corresponding link-values
     * @param {String} language The language used as the key for the link dictionary
     */
    function createVideoContent(link, language) {
        if (link === false) {return <div className="content-video-todo">Video</div>}
        return <iframe key={props.childrenKey} src={link} width="100%" style={{marginTop:"20px", borderRadius: "10px"}} frameBorder="0" allow="autoplay; fullscreen"></iframe>
    }

    /**
     * Returns a Slider-input element
     * @param {String}  text The text that explains the context of the slider
     * @param {Int}     from The minimum value of the slider
     * @param {Int}     to   The maximum value of the slider
     * @param {String}  valueText The text displayed next to the current value
     * @param {Boolean} show Whether the current value also needs to be displayed or not
     * @param {Boolean} save Whether the value needs to be saved (render button)
     */
    function createSliderContent(id, text, from, to, valueText, show, save) {
        return <Slider key={props.childrenKey} id={id} text={text} from={from} to={to} valueText={valueText} show={show} save={save} questionManager={props.questionManager} callback={props.callback} module={props.module}/>
    }

    /**
     * Returns a text-input element
     * @param {String} text The text that explains the context of what the user needs to type
     * @param {String} placeholder (Optional) The textual placeholder for the input-field
     */
    function createTextInputContent(text, placeholder) {
        const [value, updateValue] = useState("")
        const [saved, updateSave] = useState(false);
        const buttonStyle = {height:"50px", marginTop:"10px", marginLeft:"0", paddingTop:"15px", paddingLeft:"10px"};

        return (<div className="content-backdrop">
            {text}
            {!saved && <div className="content-textinput-row">
                <Input 
                    type="text" key={props.childrenKey} value={value} onChange={updateValue}
                    style={{width: "100%", fontSize: "16px", fontWeight: 500, flexGrow: 1}} 
                    placeholder={placeholder ? placeholder : "Typ hier"}/>
                {value.length > 0 && <Button color="blue" width="50px" style={buttonStyle} onClick={() => updateSave(true)}>
                    <Icon image="check" width="25px" color="white"/>
                </Button>}
            </div>}
            {saved && <div className="content-textinput-row">
                {value}
            </div>}
        </div>)
    }


    /* Display-Rules */
    switch (props.data.showIf?.rule) {
        case undefined:
            break;
        case "Pain": 
            if (!props.userProfile.K) return <React.Fragment></React.Fragment>;
            break;
        case "No pain":
            if (props.userProfile.K) return <React.Fragment></React.Fragment>;
            break;
        case "Profile":
            if (!props.data.showIf?.profiles.includes(props.userProfile.profile)) return <React.Fragment></React.Fragment>;
            break;
        default:
            console.log(`Card display rule '${props.data.showIf?.rule}' not implemented`);
            break;
    }

    /* Generate content according to content type */
    switch (props.data.type) {
        case 'Text':
            return createTextContent(props.data.content, props.data.overview);
        case 'List':
            return createListContent(props.data.content, props.data.numbered, props.data.overview);
        case 'Question':
            return createQuestionContent(props.data.id, props.data.question, props.data.number, props.data.options, props.data.correct, props.data.explanation, props.data.onCorrect, props.data.onIncorrect);
        case 'Video':
            return createVideoContent(props.data.link, props.userProfile.language);
        case 'Selection':
            return createSelectionContent(props.data.id, props.data.title, props.data.question, props.data.options, props.data.width);
        case 'Sort-Exercise':
            return createSortingContent(props.data.content, props.data.columns, props.data.options);
        case 'Image':
            return createImageContent(props.data.link, props.data.width);
        case 'Slider':
            return createSliderContent(props.data.id, props.data.text, props.data.from, props.data.to, props.data.valueText, props.data.show, props.data.save);
        case 'Text-Input':
            return createTextInputContent(props.data.text, props.data.placeholder);
        case 'Break':
            return <hr/>;
        default:
            return (<div className="content-not-implemented">
                <div className="content-not-implemented-title">NOT IMPLEMENTED</div>
                Hier komt een: {props.data.type}
                {props.data.text && <div><b>Noot: </b>{props.data.text}</div>}
            </div>)
    }
}

export default ContentParser;