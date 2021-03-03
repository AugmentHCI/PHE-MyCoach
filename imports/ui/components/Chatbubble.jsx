import React, { useEffect, useState } from "react";
import Highlighter from "react-highlight-words";

import { copyOfDict } from "../../JSONlib.js";

import Input from './Input.jsx';
import Button from './Button.jsx';
import "./Chatbubble.scss";

export function Chatbubble(props) {

    /* State */
    const [renderLoading, setRenderLoading] = useState(props.own ? false : true);
    const [delayedDisplay, setDelayedDisplay] = useState(props.delayedDisplay ? true : false);

    useEffect(() => {
        setTimeout(function() { setRenderLoading(false); setDelayedDisplay(false); }, 1000)
    }, []);

    const classSuffix = props.own ? (props.choice ? (props.type === "button" ? "-ownchoicebutton": "-ownchoice") : "-own") : "";

    function handleOnClick() {
        if (props.onClick) props.onClick();
    }

    return (<div className="chatbubble-container">
            {!props.own && <img src="/illustrations/avatar.png" width="35px" style={{position:"absolute"}}/>}
            {!delayedDisplay && <div className={"chatbubble" + classSuffix} onClick={() => handleOnClick()}>
                {renderLoading && <img src="/illustrations/loading.gif" width="50px" style={{}}/>}
                {!renderLoading && props.children}
            </div>}
        </div>
    )
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

export function ChatbubbleThoughtsReactions(props) {

    /* State */
    const [selectedOptions, updateSelectedOptions] = useState({});
    const [unselectedOptions, updateUnselectedOptions] = useState({});
    const [searchTerm, updateSearchterm] = useState("");

    const [hidden, setHidden] = useState(true);

    const title = props.message.content === "thoughts" ? "Mijn gedachten" : "Mijn reactie(s)";
    const text = props.message.content === "thoughts" ? 
        "Selecteer gedachten hieronder die van toepassing zijn. (Hint: typ trefwoorden om een specifieke gedachte te zoeken)" : 
        "Selecteer reacties hieronder die van toepassing zijn. (Hint: typ trefwoorden om een specifieke reactie te zoeken)" ;

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
                optionsHTML.push(<Option key={"selected-"+option} checked onChange={() => toggleOption(option, "deselect")}>{option}</Option>)
            }
            optionsHTML.push()
            return optionsHTML;
        }
    }

    /**
     * Render all options that the user van choose from.
     */
    function renderUnselectedOptions() {
        const optionsHTML = [];
        for (const [option, information] of Object.entries(unselectedOptions)) {
            if (filterSearchTerms(searchTerm).length < 1) {
                optionsHTML.push(<Option key={"unselected-"+option} onChange={() => toggleOption(option, "select")}>{option}</Option>)
            }
            else {
                let highlighted = null;
                (filterSearchTerms(searchTerm).split(" ")).forEach (term => {
                    if (!(term === "" || term === " ")) 
                    {
                        if (information.synonyms.join("").includes(term.toLowerCase()) || option.toLowerCase().includes(term.toLowerCase())) {
                            highlighted = <Highlighter
                            highlightClassName="highlighted"
                            searchWords={filterSearchTerms(searchTerm).split(" ")}
                            autoEscape={true}
                            textToHighlight={option}
                            key={option}
                        />
                        }
                }}) 
                if (highlighted) optionsHTML.push(
                    <Option key={"unselected-"+option} onChange={() => toggleOption(option, "select")}>{highlighted}</Option>);
            }
        }
        if (optionsHTML.length === 0) return "Geen resultaten gevonden..."
        return optionsHTML;
    }

    return (
        <div className="chatbubble-container">
            {!hidden && <div className={"chatbubble-ownchoice-textinput"}>
                <div className="chatbubble-title">{title}</div>
                <div style={{maxHeight:"110px", overflow:"scroll", overflowX:"hidden"}}>
                    { renderSelectedOptions() }
                </div>
                { Object.keys(selectedOptions).length > 0 && <Button color="blue" onClick={() => props.onSubmit(selectedOptions, props.message)}>Verstuur</Button>}
            </div>}
            {!hidden && <div className={"chatbubble-ownchoice-textinput"}>
                <Input type="text" value={searchTerm} placeholder={"Typ om te filteren"} width={"300px"} onChange={updateSearchterm} noOutline></Input>
                <div style={{overflow:"scroll", overflowX:"hidden", height:"220px"}}>
                    {Object.keys(unselectedOptions).length > 0 && renderUnselectedOptions()}
                </div>
            </div>}
        </div>
    )
}

export function ChatbubbleText(props) {
    const [hidden, setHidden] = useState(true);
    const [input, updateInput] = useState("");

    /* Initialize Chatbubble once */
    useEffect(() => { 
        setTimeout(function() { setHidden(false) }, 1000);
    }, [] );

    return (<div className="chatbubble-container">
        {!hidden && <div className={"chatbubble-ownchoice-textinput"}>
            <Input type="text" value={input} placeholder={"Typ wat je aan het doen was"} width={"100%"} onChange={updateInput} noOutline></Input>
        </div>}
        {(!hidden && input.length > 0) && <div className={"chatbubble-ownchoice"} onClick={() => props.onSubmit({content: input, response: props.message.response, sentBy: "user"})}>
            Verstuur
        </div>}
        </div>)

}

export function ChatbubbleEmotions(props) {

    /* State */
    const [selectedEmotions, updateSelectedEmotions] = useState({});
    const [hidden, setHidden] = useState(true);

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
        emotionButtonsHTML = [];
        for (const [emotion, information] of Object.entries(props.options)) {
            const isSelected = Object.keys(selectedEmotions).includes(emotion);
            emotionButtonsHTML.push(<Button size="small" outline isSelected={isSelected} width="fit" color="blue" style={{marginRight: "8px"}} onClick={() => toggleEmotion(emotion, information)}>{emotion}</Button>)
        }
        return emotionButtonsHTML;
    }

    return (<div className="chatbubble-container">
        {!hidden && <div className={"chatbubble-ownchoice-textinput"}>
            <div className="chatbubble-title">Mijn emoties</div>
            {renderEmotions()}
        </div>}
        {!hidden && <div className={"chatbubble-ownchoice"} onClick={() => props.onSubmit(selectedEmotions, props.message)}>
           {selectedEmotions.length === 0 ? "Geen van toepassing" : "Verstuur selectie"}
        </div>}
    </div>)
}