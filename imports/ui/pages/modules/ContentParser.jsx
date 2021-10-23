import React, { useState, useEffect } from 'react';

/* External API */
import ReactAudioPlayer from 'react-audio-player';
import { Carousel } from 'react-responsive-carousel';

/* Internal API */
import createSortingContent from './ContentSorting';
import createSwipeContent from './ContentSwiping';
import LifeChartContent from './ContentLifechart';

import contentStoryTest from './ContentStory';

/* UI Components */
import AppModal from '../../components/AppModal.jsx';
import Button from '../../components/Button.jsx';
import PillButton from '../../components/PillButton.jsx';
import Slider from '../../components/Slider.jsx';
import Input from '../../components/Input.jsx';
import Icon from '../../components/Illustrations/Icon.jsx';

/* Styles */
import './ContentParser.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires a loader


function ContentParser(props) {

    const [display, setDisplay] = useState(false);

    function parseTextMarkup(textArray) {
        let contentHTML = [];
        textArray.forEach((element, index) => {
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
        });
        return contentHTML;
    }

    /* Constructors for content */

    /**
     * Generates a Text-content HTML
     * @param {String} text        The text that needs to be displayed
     * @param {Boolean} isOverview True if the text is in an overview Card (will simply make text white)
     */
    function createTextContent(text, isOverview) {
        if (typeof(text) === "string") return <div key={props.childrenKey+"-text"} className={isOverview ? "content-text-overview" : "content-text"}>{text}</div>;
        else { return <div key={props.childrenKey+"-text"} className={isOverview ? "content-text-overview" : "content-text"}>{parseTextMarkup(text)}</div>; }
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
    function createQuestionContent(questionID, question, number, options, correct, explanation, onCorrect, onIncorrect, retake=false) {
        let buttonsHTML = [];
        let [status, changeStatus] =  useState("default");

        useEffect(() => {
            async function fetchStatus() {
                const answer = await props.questionManager.getLatestAnswerOnQuestion(questionID);
                if (answer) changeStatus(answer);
            }
            if (!retake) fetchStatus();
        }, []);

        async function selectButton(option) {
            await props.questionManager.setModuleQuestion(props.module, questionID, option); 
            if (status === "default") changeStatus(option);
            props.callback();
        }

        /* Make buttons for each of the options, and assign correct/incorrect actions to buttons */
        options.forEach((option, index) => {
            if (option === correct) {
                const correctButtonClass = status !== "default" ? (status === "correct" ? "content-button-correct" : "content-button-correctempty") : "content-button";
                buttonsHTML.push(<button key={props.childrenKey + "-" + index} className={correctButtonClass} onClick={() => selectButton("correct")}>{option}</button>);
            }
            else if (option !== correct) {
                const incorrectButtonClass = status === "incorrect-" + index ? "content-button-incorrect" : "content-button";
                buttonsHTML.push(<button key={props.childrenKey + "-" + index} className={incorrectButtonClass} onClick={() => selectButton("incorrect-" + index)}>{option}</button>);
            }
        })
        /* Make the Question-Content element */
        return (<div key={props.childrenKey} className="content-backdrop">
            <div className="content-question-title">Vraag {number ? number : ""}</div>
            <div className="content-question-text">{question}</div>
            <div className="content-buttons">{buttonsHTML}</div>
            {status !== "default" && !status.includes("incorrect") && <div className="content-answer-correct">{explanation ? onCorrect + " " + explanation : onCorrect}</div>}
            {status !== "default" && status.includes("incorrect") && <div className="content-answer-incorrect">{explanation ? onIncorrect + " " + explanation : onIncorrect}</div>}
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
        const [locked, setLocked] = useState(false);

        useEffect(() => {
            async function fetchStatus() {
                const answer = await props.questionManager.getLatestAnswerOnQuestion(questionID);
                if (answer) {
                    let newArray = new Array(options.length).fill(false);
                    newArray[options.findIndex(option => option.id === answer)] = true;
                    changeSelected(newArray);
                    if (props.data.lockOnAnswer) setLocked(true);
                }
            }
            fetchStatus();
        }, []);

        async function selectButton(index) {
            if (!locked) {
                await props.questionManager.setModuleQuestion(props.module, questionID, options[index].id, false);
                let newArray = new Array(options.length).fill(false);
                newArray[index] = true;
                changeSelected(newArray);
                props.callback();
                if (props.data.lockOnAnswer) setLocked(true);
            }
        }
        /* Make buttons for each of the options, and assign correct/incorrect actions to buttons */
        options.forEach((option, index) => {
            const buttonLocked = selected[index] && locked;
            buttonsHTML.push(<Button key={props.childrenKey + "-" + index} width={buttonWidth} disabled={buttonLocked} isSelected={selected[index] && !locked} onClick={() => selectButton(index)}>{option.text}</Button>);
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
            if (typeof(item) === "string") listHTML.push(<li key={props.childrenKey + "-" + index} className={isOverview ? "content-list-item-overview" : "content-list-item"}>{item}</li>)
            else listHTML.push(<li key={props.childrenKey + "-" + index} className={isOverview ? "content-list-item-overview" : "content-list-item"}>{parseTextMarkup(item)}</li>)
        });
        if (isNumbered) return <ol className="content-list-numbered">{listHTML}</ol>;
        else return <ul className={"content-list"}>{listHTML}</ul>;
    }

    /**
     * Generates an Image-content HTML
     * @param {String} imageUrl A string of text that will be enumerated
     * @param {Int}    width    [Optional] Percentage of width
     */
    function createImageContent(imageUrl, width) {
        /* If only one image url is given */
        if (!Array.isArray(imageUrl)) return (<div className="content-image-container">
            <img className="content-image" src={imageUrl} width={width ? width + "%" : "80%"}/>
            </div>);
        /* If an array of urls is given */
        let imageHTML = [];
        imageUrl.forEach((image, index) => {
            imageHTML.push(<img key={props.childrenKey+"-"+index} className="content-image-inline" src={image} width={90 / imageUrl.length + "%"}/>)
        })
        return (<div className="content-image-container">{imageHTML}</div>);
    }

    /**
     * Returns a Vimeo-iframe HTML
     * @param {Dict}   link     A dictionary of language-keys and corresponding link-values
     * @param {String} language The language used as the key for the link dictionary
     */
    function createVideoContent(link, language) {
        if (link === false) {return <div className="content-video-todo">Video</div>}
        return <iframe 
            key={props.childrenKey} 
            src={link} 
            width="100%" 
            style={{marginTop:"20px", borderRadius: "10px"}} 
            frameBorder="0" 
            allow="autoplay; fullscreen" 
            mozallowfullscreen={true} 
            webkitallowfullscreen={true} 
            allowFullScreen={true} 
            mozallowfullscreen="mozallowfullscreen" 
            msallowfullscreen="msallowfullscreen" 
            oallowfullscreen="oallowfullscreen" 
            webkitallowfullscreen="webkitallowfullscreen"/>
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
    function createSliderContent(id, text, from, to, valueText, show, save, oneTime=true) {
        return <div className="content-backdrop"><Slider key={props.childrenKey} id={id} text={text} from={from} to={to} valueText={valueText} showValue={show} mapping={props.data.mapping} save={save} questionManager={props.questionManager} callback={props.callback} module={props.module} oneTime={oneTime}/></div>
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
                <div className="content-textinput-saved">{value}</div>
            </div>}
        </div>)
    }

    /**
     * Returns a multitext-input element
     * @param {String} text The text that explains the context of what the user needs to type
     * @param {String} placeholder (Optional) The textual placeholder for the input-field
     */
    function createMultiTextInputContent(text, placeholder) {
        const [currentValue, updateValue] = useState("");
        const [values, updateValues] = useState([]);
        const [saved, updateSave] = useState(false);
        const buttonStyle = {height:"50px", marginTop:"10px", marginLeft:"0", paddingTop:"15px", paddingLeft:"10px"};

        function addItem() {
            updateValues([...values, currentValue]);
            updateValue("");
        }

        function removeItem(index) {
            const newArray = values.filter((value, i) => {if (i !== index) return value});
            updateValues(newArray);
        }

        async function save() {
            updateSave(true);
            await props.questionManager.setModuleQuestion(props.module, props.data.id, JSON.stringify(values), false); 
            props.callback();
        }

        useEffect(() => {
            async function fetchStatus() {
                const answer = await props.questionManager.getLatestAnswerOnQuestion(props.data.id);
                if (answer) { updateValues(JSON.parse(answer)) }
            }
            console.log(props.data.id);
            fetchStatus();
        }, []);

        return (<div className="content-backdrop">
            {text}
            {values.map((input, index) => <div className="content-textinput-row" key={index + input}>
                <div className="content-textinput-saved-container">
                    <div className="content-textinput-saved-text">{input}</div>
                    {!saved && <div className="content-textinput-saved-icon" onClick={() => removeItem(index)}><Icon color="gray-dark" image="delete"/></div>}
                </div>
            </div>)}
            {values.length > 0 && !saved && <hr/>}
            {!saved && <div className="content-textinput-row">
                <Input 
                    type="text" key={props.childrenKey} value={currentValue} onChange={updateValue}
                    style={{width: "100%", fontSize: "16px", fontWeight: 500, flexGrow: 1}} 
                    placeholder={placeholder ? placeholder : "Typ hier"}/>
                {currentValue.length > 0 && <Button color="blue" width="50px" style={buttonStyle} onClick={() => addItem()}>
                    <Icon image="add" width="25px" color="white"/>
                </Button>}
            </div>}
            {values.length > 0 && !saved && <div className="content-textinput-row">
                <Button style={{float:"right"}} color={"blue"} onClick={() => save()}>Klaar</Button>
            </div>}
        </div>)
    }
    
    function createDelayedDisplayContent(data) {
        const [started, setStarted] = useState(false);
        const [saved, setSaved] = useState(false);

        async function confirmDone() {
            await props.questionManager.setModuleQuestion(props.module, data.id, "CONFIRM", false); 
            setSaved(true);
            props.callback();
        }

        if (!started) return (<div className="content-delayed-container">
            <Button center style={{marginTop:"80px"}} color="blue" onClick={() => setStarted(true)}>Begin</Button>
        </div>)

        /*
        return (<div className="content-delayed-container">{data.content.map((item, index) => {
            return <div className="content-delayed-item" key={item+"-"+index} style={{opacity:"0", animation:"fadeIn 2s ease-in "+ index*4+"s 1 normal forwards"}}>{item}</div>
        })}
        <Button center style={{marginTop: "10px", opacity:"0", animation:"fadeIn 2s ease-in "+ data.content.length*4+"s 1 normal forwards"}} onClick={() => confirmDone()}>Klaar</Button></div>)*/


        return (<div className="content-delayed-container">{data.content.map((item, index) => {
            return <div className="content-delayed-item" style={{animation:"fadeIn 2s ease-in "+ index*4+"s 1 normal forwards"}} key={item+"-"+index}>{item}</div>
        })}
        <Button center style={{marginTop: "10px"}} disabled={saved} onClick={() => confirmDone()}>Klaar</Button></div>)
    }

    function createTextBubbleContent(data) {
        const className = data.float === "right" ? "tri-left content-textbubble-container-right left-in" : "tri-right content-textbubble-container right-in";
        return (<div className={className}>
            {data.content}
        </div>)
    }

    useEffect(() => {
        displayContent(props.data.showIf);
    }, []);

    /**
     * Sets the display state accordingly depending on whether the display-rules are met.
     * @param rules The rules that need to be met in order to display the card.
     */
    async function displayContent(rules) {
        if (!rules) { setDisplay(true); return; }
        let ruleResults = true;
        for (const rule of rules) {
            /* Display-Rules */
            switch (rule.rule) {
                case "Pain": 
                    if (!props.userProfile.K) ruleResults = false;
                    break;
                case "No pain":
                    if (props.userProfile.K) ruleResults = false;
                    break;
                case "Profile":
                    if (!rule.profiles.includes(props.userProfile.profile)) ruleResults = false;
                    break;
                case "AnswerHigherThan":
                    const answerHigher = await props.questionManager.getLatestAnswerOnQuestion(rule.questionID);
                    if (answerHigher <= rule.answer) ruleResults = false;
                    break;
                case "AnswerLowerThan":
                    const answerLower = await props.questionManager.getLatestAnswerOnQuestion(rule.questionID);
                    if (answerLower >= rule.answer) ruleResults = false;
                    break;
                case "HasAnswered":
                    const answer = await props.questionManager.getLatestAnswerOnQuestion(rule.questionID);
                    if (rule.answerID !== answer) ruleResults = false;
                    break;
                case "ScoresSame":
                    const answer1s = await props.questionManager.getLatestAnswerOnQuestion(rule.questionID1);
                    const answer2s = await props.questionManager.getLatestAnswerOnQuestion(rule.questionID2);
                    if (answer1s !== answer2s) ruleResults = false;
                    break;
                case "ScoresHigher":
                    const answer1h = await props.questionManager.getLatestAnswerOnQuestion(rule.questionID1);
                    const answer2h = await props.questionManager.getLatestAnswerOnQuestion(rule.questionID2);
                    if (answer1h <= answer2h) ruleResults = false;
                    break;
                case "ScoresLower":
                    const answer1l = await props.questionManager.getLatestAnswerOnQuestion(rule.questionID1);
                    const answer2l = await props.questionManager.getLatestAnswerOnQuestion(rule.questionID2);
                    if (answer1l >= answer2l) ruleResults = false;
                    break;
                case "SelectionCount":
                    let answers = await props.questionManager.getLatestAnswerOnQuestion(rule.questionID);
                    if (!answers) return false;
                    answers = JSON.parse(answers);
                    let count = 0;
                    Object.keys(answers).forEach(id => { if (answers[id]) count++; });
                    console.log(count);
                    if (!rule.count.includes(count)) return false;
                    break;
                default:
                    console.log(`Card display rule '${rule.rule}' not implemented`);
                    break;
            }
        }
        setDisplay(ruleResults);
    }

    function createAudioContent(data) {
        return (<ReactAudioPlayer
            src={data.source}
            controls/>)
    }

    function generateContent() {
    /* Generate content according to content type */
        switch (props.data.type) {
            case 'Text':
                return createTextContent(props.data.content, props.data.overview);
            case 'Subtitle':
                return createSubtitleContent({content: props.data.content, underline: props.data.underline});
            case 'List':
                return createListContent(props.data.content, props.data.numbered, props.data.overview);
            case 'Question':
                return createQuestionContent(props.data.id, props.data.question, props.data.number, props.data.options, props.data.correct, props.data.explanation, props.data.onCorrect, props.data.onIncorrect, props.data.retake);
            case 'Video':
                return createVideoContent(props.data.link, props.userProfile.language);
            case 'Selection':
                return createSelectionContent(props.data.id, props.data.title, props.data.question, props.data.options, props.data.width);
            case 'Sort-Exercise':
                return createSortingContent(props.data.content, props.data.columns, props.data.options);
            case 'Image':
                return createImageContent(props.data.link, props.data.width);
            case 'Slider':
                return createSliderContent(props.data.id, props.data.text, props.data.from, props.data.to, props.data.valueText, props.data.showValue, props.data.save, props.data.oneTime);
            case 'Text-Input':
                return createTextInputContent(props.data.text, props.data.placeholder);
            case 'Multitext-Input':
                return createMultiTextInputContent(props.data.text, props.data.placeholder);
            case 'DelayedDisplay':
                return createDelayedDisplayContent(props.data);
            case 'Swipe':
                return createSwipeContent(props);
            case 'TextBubble':
                return createTextBubbleContent(props.data);
            case 'Audiofile':
                return createAudioContent(props.data);
            case 'Multiple-Choice':
                return createMultipleChoiceContent(props);
            case 'Shortcut':
                return createShortcutContent(props);
            case 'LifedomainChart':
                return <LifeChartContent questionManager={props.questionManager}/>;
            case 'Story':
                return createStoryContent({content: props.data.content, dynamicHeight: props.data.dynamicHeight});
            case 'StoryTesting':
                return contentStoryTest({db: props.data.data});
            case 'CircleExercise':
                return createCircleExerciseContent({id: props.data.id, module: props.module, callback: props.callback, questionManager: props.questionManager});
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

    return <div style={{display: display ? 'initial':'none'}}>{generateContent()}</div>;
}

export default ContentParser;


function createMultipleChoiceContent(props) {

    const [options, setOptions] = useState(props.data.options);
    const [uncheckedOptions, setUncheckedOptions] = useState([]);
    const [checked, updateChecked] = useState(Object.assign({}, ...options.map((x) => ({[x.id]: false}))));
    const [saved, setSaved] = useState(false);

    function toggleChecked(selection) {
        let newChecked = {...checked};
        newChecked[selection] = !newChecked[selection];
        updateChecked(newChecked);
    }

    function selectedCount() {
        return Object.keys(checked).reduce((count, key) => (checked[key] ? count + 1 : count), 0);
    }

    async function save() { 
        await props.questionManager.setModuleQuestion(props.module, props.data.id, JSON.stringify(checked));
        setSaved(true);
        props.callback();
    }

    useEffect(() => {
        async function fetchAnswers() {
            const answer = await props.questionManager.getLatestAnswerOnQuestion(props.data.id);
            if (answer) { 
                const parsedAnswers = JSON.parse(answer);
                let newUncheckedOptions = [];
                updateChecked(parsedAnswers); 
                props.data.options.forEach(option => {
                    if (!parsedAnswers[option.id]) { newUncheckedOptions.push(option) }
                });
                setUncheckedOptions(newUncheckedOptions);
                setSaved(true); 
            }
            else if (props.data.useSelectionFrom) { 
                let answers = await props.questionManager.getLatestAnswerOnQuestion(props.data.useSelectionFrom);
                if (answers) { 
                    let newChecked = {};
                    let newOptions = [];
                    answers = JSON.parse(answers);
                    Object.keys(answers).forEach(key => {if (answers[key]) { newChecked[key] = false; newOptions.push({id: key, text: getTextFromOption(key)})}});
                    setOptions(newOptions);
                    updateChecked(newChecked);
                }
            }
        }
        fetchAnswers();
    }, []);

    function getTextFromOption(id) {
        for (const option of props.data.options) {if (option.id === id) return option.text}
    }

    return (<div>
        { saved && options.map(option => {
            if (checked[option.id]) return <div key={option.id} className={"content-multiplechoice-option-presented"}>{option.text}</div>})
        }
        { uncheckedOptions.length > 0 && uncheckedOptions.map(option => {
            return <div key={option.id} className={"content-multiplechoice-option-unchecked"}>{option.text}</div>})
        }
        { !saved && <React.Fragment>
            {options.map(option => { return <div key={option.id} className={"content-multiplechoice-option" + (checked[option.id] ? "-selected" : "")} onClick={() => toggleChecked(option.id)}>
                <input style={{marginRight: "7px"}} type="checkbox" checked={checked[option.id]} onChange={() => toggleChecked(option.id)}/>
                {option.text}
            </div>})}
            {(props.data.needsSelectedAtLeast && selectedCount() >= props.data.needsSelectedAtLeast) && (props.data.needsSelectedAtMost && selectedCount() <= props.data.needsSelectedAtMost) && <Button center color="blue" onClick={() => save()}>Verstuur</Button>}
            {selectedCount() === 0 && <Button center color="gray-light">Selecteer er minstens {props.data.needsSelectedAtLeast - selectedCount()}</Button>}
            {(props.data.needsSelectedAtLeast && selectedCount() !== 0 && selectedCount() < props.data.needsSelectedAtLeast) && <Button center color="gray-light">Selecteer er nog {props.data.needsSelectedAtLeast - selectedCount()}</Button>}
            {(props.data.needsSelectedAtMost && selectedCount() > props.data.needsSelectedAtMost) && <Button center color="gray-light">{selectedCount() - props.data.needsSelectedAtMost} te veel aangeduid</Button>}
        </React.Fragment>}
    </div>)
}

function createSubtitleContent({content, underline=undefined}) {
    return <h3 style={{fontWeight:600, marginTop: '1em', marginBottom: '.5em', fontSize: '16px', textDecoration: underline ? "underline" : ""}}>{content}</h3>
}

function createShortcutContent(props) {

    const [showModal, setShowModal] = useState(false);

    return (<div style={{marginTop: "5px"}}>
        {showModal && <AppModal title="Snelkoppeling" defaultOption={"Sluit"} notifyParent={() => setShowModal(false)} show={showModal}>{props.data.modalText}</AppModal>}
        <PillButton contentColor={"white"} fillColor={"blue"} icon="information" onClick={() => setShowModal(true)}>{props.data.buttonText}</PillButton>
    </div>)
}

function createStoryContent({content, dynamicHeight=false}) {

    return (
        <Carousel showThumbs={false} showStatus={false} autoPlay={false} interval={100000} dynamicHeight={dynamicHeight}>
            {content.map(card => {return (<div className="content-story-card">
                {card.image && <img className={"content-story-image" + (card.title || card.text ? "" : "-rounded")} src={card.image}/>}
                {(card.title || card.text) && <div className={"content-story-textcontainer" + (card.image ? "" : "-rounded")}>
                    {card.title && <p className="content-story-title">{card.title}</p>}
                    {card.text && <p className="content-story-text">{card.text}</p>}
                </div>}
            </div>)})}
        </Carousel>
    );
}

function createCircleExerciseContent({id, questionManager, module, callback}) {

    const [editingKnelpunt, updateEditingKnelpunt] = useState("");
    const [editingBetrokkenheid, updateEditingBetrokkenheid] = useState("");
    const [editingInvloed, updateEditingInvloed] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchAnswer() {
            const fetchedAnswer = await questionManager.getLatestAnswerOnQuestion(id);
            console.log(fetchedAnswer);
            if (fetchedAnswer) setData(JSON.parse(fetchedAnswer));
        }
        fetchAnswer();
    }, [])

    function setForEditing(entry) {
        updateEditingKnelpunt(entry.knelpunt);
        updateEditingBetrokkenheid(entry.betrokkenheid);
        updateEditingInvloed(entry.invloed);
        const newData = data.filter(dataEntry => dataEntry.knelpunt !== entry.knelpunt && dataEntry.betrokkenheid !== entry.betrokkenheid && dataEntry.invloed !== entry.invloed);
        const entryIndex = data.indexOf(entry);
        setData(newData);
        const container = document.getElementsByClassName("container")[0];
        container.scrollBy(0 , -180 - (66 * entryIndex));
    }

    async function addEntry() {
        const newData = [{knelpunt: editingKnelpunt, betrokkenheid: editingBetrokkenheid, invloed: editingInvloed}, ...data];
        setData(newData);
        await questionManager.setModuleQuestion(module, id, JSON.stringify(newData), false); 
        callback();
        updateEditingKnelpunt(""); updateEditingBetrokkenheid(""); updateEditingInvloed("");
    }

    return (
        <React.Fragment>
            <div className="content-backdrop">
                <b>Jouw knelpunt</b>
                <Input type="text" style={{width:"100%"}} value={editingKnelpunt} onChange={updateEditingKnelpunt} placeholder="Knelpunt"/>
                <b>Cirkel van betrokkenheid</b>
                <Input type="text" style={{width:"100%"}} value={editingBetrokkenheid} onChange={updateEditingBetrokkenheid} placeholder="Wat kan je niet veranderen?"/>
                <b>Cirkel van invloed</b>
                <Input type="text" style={{width:"100%"}} value={editingInvloed} onChange={updateEditingInvloed} placeholder="Wat kan je wel veranderen?"/>
                <Button onClick={addEntry}>Voeg toe</Button>
            </div>
            {data.length > 0 && <div className="content-backdrop">
                <h2><b>Jouw knelpunten</b></h2>
                {data.map((entry, index) => <div style={{position: "relative"}}>
                    <b>Knelpunt:</b> {entry.knelpunt}<br/>
                    <b>Betrokkenheid:</b> {entry.betrokkenheid}<br/>
                    <b>Invloed:</b> {entry.invloed}<br/>
                    <div className="content-circleexercise-edit" onClick={() => setForEditing(entry)}><Icon image="pen" color="white"/></div>
                    {index !== data.length-1 && <hr/>}
                </div>)}    
            </div>}
        </React.Fragment>
    );
}