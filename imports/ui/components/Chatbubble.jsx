import React, { useEffect, useState } from "react";
import Highlighter from "react-highlight-words";
import { FlowRouter } from "meteor/kadira:flow-router";

import { copyOfDict } from "../../JSONlib.js";

import Input from './Input.jsx';
import Button from './Button.jsx';
import "./Chatbubble.scss";
import Icon from "./Illustrations/Icon.jsx";


export function Chatbubble(props) {

    /* State */
    const [renderLoading, setRenderLoading] = useState(props.own ? false : true);
    const [delayedDisplay, setDelayedDisplay] = useState(props.delayedDisplay ? true : false);

    if (props.delayBy !== undefined) {
        useEffect(() => {
            setTimeout(function() { setDelayedDisplay(false) }, props.delayBy);
            setTimeout(function() { setRenderLoading(false) }, props.delayBy + (props.typeLength ? props.typeLength : 1000));
        }, []);
    }
    else {
        useEffect(() => {
            setTimeout(function() { setRenderLoading(false); setDelayedDisplay(false); }, (props.typeLength ? props.typeLength : 1000));
        }, []);
    }

    const classSuffix = props.own ? (props.choice ? (props.type === "button" ? "-ownchoicebutton": "-ownchoice") : "-own") : "";

    function handleOnClick() {
        if (props.onClick) props.onClick();
    }

    return (<div className="chatbubble-container">
            {(!props.own && !delayedDisplay) && <img src="/illustrations/avatar.png" width="35px" style={{position:"absolute"}}/>}
            {!delayedDisplay && <div className={"chatbubble" + classSuffix + (props.disabled ? " disabled": "")} onClick={() => handleOnClick()}>
                {renderLoading && <img src="/illustrations/loading.gif" width="50px" style={{}}/>}
                {!renderLoading && props.children}
            </div>}
        </div>)
}


function Option(props) {
    const classSuffix = props.checked ? "-selected" : "";
    return (<React.Fragment>
        <hr size="1px" className="option-breakline"/>     
        <div style={{width:"100%", display: "table"}}>
            <div style={{display: "table-cell", width: "27px", verticalAlign: "middle"}}>
                <input style={{marginRight: "7px"}} type="checkbox" checked={props.checked ? true : false} onChange={props.onChange}/>
            </div>
            <div className={"chat-text-option" + classSuffix} style={{display: "table-cell", width:"calc(100% - 27px)"}}>
                {props.children}
            </div>
        </div>
        </React.Fragment>
    )
}

/**
 * Chatbubble for displaying Thoughts and Reactions user input
 * @param {*} props 
 * @returns Chatbubble for displaying Thoughts and Reactions user input
 */
export function ChatbubbleThoughtsReactions(props) {

    const localStorageLanguage = localStorage.getItem('language') ? localStorage.getItem('language') : "nl-BE";
    const language = props.language ? props.language : localStorageLanguage;


    /* State */
    const [selectedOptions, updateSelectedOptions] = useState({});
    const [unselectedOptions, updateUnselectedOptions] = useState({});
    const [searchTerm, updateSearchterm] = useState("");

    const [hidden, setHidden] = useState(true);

    const localization = {
        thoughts: {"nl-BE": "Mijn gedachte(n)", "en-EN": "My thought(s)"}, 
        reactions: {"nl-BE": "Mijn reactie(s)", "en-EN": "My reaction(s)"},
        thoughtsExplanation: {
            "nl-BE": "Hier komen je geselecteerde gedachten te staan. Scroll door de lijst hieronder of typ trefwoorden om een specifieke gedachte te zoeken.", 
            "en-EN": "Here you'll see your selected thoughts. Scroll through the list below or type keywords to search for specific thoughts."},
        reactionsExplanation: {
            "nl-BE": "Hier komen je geselecteerde reactions te staan. Scroll door de lijst hieronder of typ trefwoorden om een specifieke gedachte te zoeken.", 
            "en-EN": "Here you'll see your selected reactions. Scroll through the list below or type keywords to search for specific thoughts."}}
    const title = localization[props.message.content][language];
    const text = localization[props.message.content + "Explanation"][language];

    /**
     * Remove all filler and common words from the current search therm
     * @param {[String]} searchTerms The string of search terms
     */
    function filterSearchTerms(searchTerms) {
        let filteredWords = [];
        searchTerms.split(" ").forEach(term => {
            if (!props.fillerWords.includes(term)) {filteredWords.push(term)}
        })
        return filteredWords.join(" ");
    }

    /* Initialize Chatbubble once */
    useEffect(() => { 
        updateUnselectedOptions(copyOfDict(props.options));
        setTimeout(function() { setHidden(false) }, 1000);
    }, [] );

    /* Scroll to bottom after each re-render */
    useEffect(() => {
        const messages = document.getElementById("messages");
        messages.scrollTop = messages.scrollHeight;
    });

    /**
     * Move an option from the selected to deselected options, or vice versa.
     * @param {String} option The option that is being (de)selected
     * @param {String} action Either 'select' or 'deselect'
     */
    function toggleOption(option, action) {
        let copyUnselectedOptions = copyOfDict(unselectedOptions);
        let copySelectedOptions = copyOfDict(selectedOptions);
        if (action === "select") { delete copyUnselectedOptions[option]; copySelectedOptions[option] = unselectedOptions[option]; }
        if (action === "deselect") { delete copySelectedOptions[option]; copyUnselectedOptions[option] = selectedOptions[option]; }
        updateSelectedOptions(copySelectedOptions);
        updateUnselectedOptions(copyUnselectedOptions);
        updateSearchterm("");
    }

    /**
     * Render all selected options, or an information message if empty.
     */
    function renderSelectedOptions() {
        if (Object.keys(selectedOptions).length === 0) 
            return (<div className="chatbubble-information">{text}</div>)
        else {
            const optionsHTML = [];
            for (const [option, information] of Object.entries(selectedOptions)) {
                optionsHTML.push(<Option key={"selected-"+option} checked onChange={() => toggleOption(option, "deselect")}>{information.translation[props.language]}</Option>)
            }
            optionsHTML.push()
            return optionsHTML;
        }
    }

    /**
     * Render all options that the user can choose from.
     */
    function renderUnselectedOptions() {
        const optionsHTML = [];
        for (const [option, information] of Object.entries(unselectedOptions)) {
            if (filterSearchTerms(searchTerm).length < 1) {
                optionsHTML.push(<Option key={"unselected-"+option} onChange={() => toggleOption(option, "select")}>{information.translation[props.language]}</Option>)
            }
            else {
                let highlighted = null;
                (filterSearchTerms(searchTerm).split(" ")).forEach (term => {
                    if (!(term === "" || term === " ")) 
                    {
                        if (information.synonyms.join("").includes(term.toLowerCase()) || information.translation[props.language].toLowerCase().includes(term.toLowerCase())) {
                            highlighted = <Highlighter
                            highlightClassName="highlighted"
                            searchWords={filterSearchTerms(searchTerm).split(" ")}
                            autoEscape={true}
                            textToHighlight={information.translation[props.language]}
                            key={option}
                        />
                        }
                }}) 
                if (highlighted) optionsHTML.push(
                    <Option key={"unselected-"+option} onChange={() => toggleOption(option, "select")}>{highlighted}</Option>);
            }
        }
        if (optionsHTML.length === 0) return (language === "nl-BE" ? "Geen resultaten gevonden..." : "No results found...")
        return optionsHTML;
    }

    return (
        <div className="chatbubble-container">
            {!hidden && <div className={"chatbubble-ownchoice-textinput"}>
                <div className="chatbubble-title">{title}</div>
                <div style={{maxHeight:"110px", overflow:"scroll", overflowX:"hidden"}}>
                    { renderSelectedOptions() }
                </div>
                { Object.keys(selectedOptions).length > 0 && <Button color="blue" onClick={() => props.onSubmit(selectedOptions, props.message)}>{language === "nl-BE" ? "Verstuur" : "Confirm"}</Button>}
            </div>}
            {!hidden && <div className={"chatbubble-ownchoice-textinput"}>
                <Input type="text" value={searchTerm} placeholder={language === "nl-BE" ? "Typ om te filteren" : "Type to filter"} width={"300px"} onChange={updateSearchterm} noOutline></Input>
                <div style={{overflow:"scroll", overflowX:"hidden", height:"220px"}}>
                    {Object.keys(unselectedOptions).length > 0 && renderUnselectedOptions()}
                </div>
            </div>}
        </div>
    )
}

/**
 * Chatbubble for displaying a text input field
 * @param {*} props 
 * @returns Chatbubble with a text input field
 */
export function ChatbubbleText(props) {
    const [hidden, setHidden] = useState(true);
    const [input, updateInput] = useState("");

    const localStorageLanguage = localStorage.getItem('language') ? localStorage.getItem('language') : "nl-BE";
    const language = props.language ? props.language : localStorageLanguage;



    /* Initialize Chatbubble once */
    useEffect(() => { 
        setTimeout(function() { setHidden(false) }, 1000);
    }, [] );

    return (<div className="chatbubble-container">
        {!hidden && <div className={"chatbubble-ownchoice-textinput"}>
            <Input type="text" value={input} placeholder={language === "nl-BE" ? "Typ je antwoord" : "Type your answer"} style={{width:"100% !important"}} onChange={updateInput} noOutline></Input>
        </div>}
        {(!hidden && input.length > 0) && 
            <div className={"chatbubble-ownchoice"} 
                 onClick={() => props.onSubmit({content: input, category: props.message.category, response: props.message.response, sentBy: "user"})}>
                {language === "nl-BE" ? "Verstuur" : "Confirm"}
            </div>}
        </div>)

}

export function ChatbubbleEmotions(props) {

    /* State */
    const [selectedEmotions, updateSelectedEmotions] = useState({});
    const [hidden, setHidden] = useState(true);

    const localStorageLanguage = localStorage.getItem('language') ? localStorage.getItem('language') : "nl-BE";
    const language = props.language ? props.language : localStorageLanguage;



    /* Initialize Chatbubble once */
    useEffect(() => { 
        setTimeout(function() { setHidden(false) }, 1000);
    }, [] );

    function toggleEmotion(emotion, information) {
        let copyOfEmotions = copyOfDict(selectedEmotions);
        if (Object.keys(copyOfEmotions).includes(emotion)) { delete copyOfEmotions[emotion] }
        else { copyOfEmotions[emotion] = information }
        updateSelectedEmotions(copyOfEmotions);
    }

    function renderEmotions() {
        let emotionButtonsHTML = [], emotionsRowHTML = [], counter = 0, emotionRowKey = "";
        for (const [emotionID, information] of Object.entries(props.options)) {
            const isSelected = Object.keys(selectedEmotions).includes(emotionID);
            emotionRowKey += emotionID;
            emotionsRowHTML.push(<Button key={emotionID} size="small" outline isSelected={isSelected} width="fit" color="blue" style={{float: "right", marginRight: "8px"}} onClick={() => toggleEmotion(emotionID, information)}>{information.translation[props.language]}</Button>)
            if (counter >= 2) {
                emotionButtonsHTML.push(<div key={emotionRowKey} style={{width: "100%"}}>{emotionsRowHTML}</div>);
                emotionsRowHTML = [];
                counter = 0;
                emotionRowKey = "";
            }
            else { counter += 1 }
        }
        return emotionButtonsHTML;
    }

    /* Language */
    const noneApplicable = language === "nl-BE" ? "Geen van toepassing" : "None applicable";
    const sendSelection = language === "nl-BE" ? "Verstuur selectie" : "Confirm selection";

    return (<div className="chatbubble-container">
        {!hidden && <div>
            {renderEmotions()}
        </div>}
        {!hidden && <div className={"chatbubble-ownchoice"} onClick={() => props.onSubmit(selectedEmotions, props.message)}>
           {Object.keys(selectedEmotions).length === 0 ? noneApplicable : sendSelection}
        </div>}
    </div>)
}

export function ChatbubbleInputSummary(props) {

    const [renderLoading, setRenderLoading] = useState(true);

    const localStorageLanguage = localStorage.getItem('language') ? localStorage.getItem('language') : "nl-BE";
    const language = props.language ? props.language : localStorageLanguage;



    /* Initialize Chatbubble once */
    useEffect(() => { 
        setTimeout(function() { setRenderLoading(false) }, (props.typeLength ? props.typeLength : 1000));
    }, [] );

    function renderInputBars() {
        let inputsHTML = [];
        props.inputs.forEach((input, index) => {
            //const codeTranslation = translations[language].inputCodes[input[0]];
            const codeTranslation = props.codes[input[0]].translation[language];
            inputsHTML.push(<React.Fragment key={index + input}>
                <div key={index + input} className="chatbubble-inputs-row">
                    {!props.highlights.includes(input[0]) && <div className="chatbubble-inputs-inputtext"><div className="chatbubble-inputs-highlightinput-disabled">{codeTranslation}</div></div>}
                    {props.highlights.includes(input[0]) && <div className="chatbubble-inputs-inputtext"><div className="chatbubble-inputs-highlightinput">{codeTranslation}</div></div>}
                    <div className="chatbubble-inputs-barcontainer"><div className="chatbubble-inputs-bar" style={{width:(Math.round(input[1] * 100)) + "%"}}/></div>
                </div>
                {index < props.inputs.length-1 && <hr key={"bar" + index + input} className="chatbubble-inputs-divider"/>}
            </React.Fragment>)
        })

        /* Language */
        const header = language === "nl-BE" ? "Jouw inputs" : "Your inputs";
        const body = language === "nl-BE" ? "Hier is een overzicht van je inputs. Er wordt ook een aanbeveling getoond rond je gemarkeerde input(s)." : "Here you are presented with an overview of your inputs. There is also a recommendation shown below related to the highlighted input(s).";
        return (<div className="chatbubble-inputs-container">
            <div className="chatbubble-inputs-title">{header}</div>
            <div className="chatbubble-inputs-text">{body}</div>
            <hr className="chatbubble-inputs-divider"/>
            {inputsHTML}
            </div>);
    }

    return (<div className="chatbubble-container">
        <img src="/illustrations/avatar.png" width="35px" style={{position:"absolute"}}/>
        <div className={"chatbubble"}>
            {renderLoading && <img src="/illustrations/loading.gif" width="50px"/>}
            {!renderLoading && renderInputBars()}
        </div>
    </div>)
}

export function ChatbubbleTextualExplanation(props) {

    const [renderLoading, setRenderLoading] = useState(true);
    const [delayedDisplay, setDelayedDisplay] = useState(true);

    const localStorageLanguage = localStorage.getItem('language') ? localStorage.getItem('language') : "nl-BE";
    const language = props.language ? props.language : localStorageLanguage;



    /* Initialize Chatbubble once */
    useEffect(() => { 
        setTimeout(function() { setDelayedDisplay(false) }, (1000));
        setTimeout(function() { setRenderLoading(false) }, (2000));
    }, [] );

    function renderTopBar() {
        return (<div>
            <div style={{display:"flex"}}>
                <div  style={{flexGrow:2, textAlign:"center", fontSize:"20px"}}>{language === "nl-BE" ? "Uitleg" : "Explanation"} {props.recommendationIndex + 1}</div>
            </div>
            <hr style={{margin: "5px", borderTop:"1px solid rgba(255,255,255,.3)"}}/>
        </div>);
    }

    return (<React.Fragment>{!delayedDisplay && <div className="chatbubble-container">
        <img src="/illustrations/avatar.png" width="35px" style={{position:"absolute"}}/>
        <div className={"chatbubble"}>
            {renderLoading && <img src="/illustrations/loading.gif" width="50px"/>}
            {!renderLoading && <div>
                {renderTopBar()}
                {<div style={{fontWeight:400}}>{props.explanation}</div>}
            </div>}
        </div>
    </div>}</React.Fragment>)
}

export function ChatbubbleRecommendation(props) {

    const [renderLoading, setRenderLoading] = useState(true);
    const [delayedDisplay, setDelayedDisplay] = useState(true);

    const localStorageLanguage = localStorage.getItem('language') ? localStorage.getItem('language') : "nl-BE";
    const language = props.language ? props.language : localStorageLanguage;



    /* Initialize Chatbubble once */
    useEffect(() => { 
        setTimeout(function() { setDelayedDisplay(false) }, (2000));
        setTimeout(function() { setRenderLoading(false) }, (4000));
    }, [] );

    function updateRecommendationIndex(update) {
        if (update === "next" && props.recommendationIndex < props.recommendationLength) props.nextRecommendation();
        if (update === "prev" && props.recommendationIndex > 0) props.prevRecommendation();
    }

    function renderTopBar() {
        return (<div>
            <div style={{display:"flex"}}>
                <Icon onClick={() => updateRecommendationIndex("prev")} 
                    image={"next-logbook" + (props.recommendationIndex === 0 ? "-disabled" : "")} style={{flexGrow:1, transform:"rotate(180deg)", maxWidth:"26px", maxHeight:"26px", marginTop: "4px", marginLeft:"10px"}} width="15px" noFilter/>
                <div  style={{flexGrow:2, textAlign:"center", fontSize:"20px"}}>{language === "nl-BE" ? "Aanbeveling" : "Recommendation"}  {props.recommendationIndex + 1}</div>
                <Icon onClick={() => updateRecommendationIndex("next")} image={"next-logbook" + (props.recommendationIndex === props.recommendationLength ? "-disabled" : "")} style={{flexGrow:1, maxWidth:"26px", maxHeight:"26px", marginTop: "4px", marginRight:"10px"}} width="15px" noFilter/>
            </div>
            <hr style={{margin: "5px", borderTop:"1px solid rgba(255,255,255,.3)"}}/>
        </div>);
    }

    return (<React.Fragment>{!delayedDisplay && <div className="chatbubble-container">
        <img src="/illustrations/avatar.png" width="35px" style={{position:"absolute"}}/>
        <div className={"chatbubble"}>
            {renderLoading && <img src="/illustrations/loading.gif" width="50px"/>}
            {!renderLoading && <div>
                {renderTopBar()}
                {<div style={{fontWeight:400}}>{props.children}</div>}
            </div>}
        </div>
    </div>}</React.Fragment>)
}