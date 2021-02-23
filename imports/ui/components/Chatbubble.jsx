import React, { useEffect, useState } from "react";
import Highlighter from "react-highlight-words";

import Input from './Input.jsx';
import "./Chatbubble.scss";

export function Chatbubble(props) {

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

export function ChatbubbleTextField(props) {

    const [searchTerm, updateSearchterm] = useState("");
    const [hidden, setHidden] = useState(true);

    /* Input search bar Chatbubble */
    function filterSearchTerms(searchTerms) {
        let filteredWords = [];
        searchTerms.split(" ").forEach(term => {
            if (!props.fillerWords.includes(term)) {filteredWords.push(term)}
        })
        return filteredWords.join(" ");
    }

    /* Option list Chatbubble */
    function renderOptions() {
        let filteredWords = [];
        for (const [option, information] of Object.entries(props.options)) {
            if (filterSearchTerms(searchTerm).length < 1) {filteredWords.push(<div className="chat-text-option"><input type="checkbox"/> {option}</div>)}
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
                if (highlighted) filteredWords.push(
                    <React.Fragment>
                        <div className="chat-text-option" key={"li-" + option}><input type="checkbox"/> {highlighted}</div>
                    </React.Fragment>);
            }
        }
        return <div>{filteredWords}</div>
    }

    useEffect(() => { setTimeout(function() { setHidden(false) }, 1000) }, []);

    return (
        <div className="chatbubble-container">
            {!hidden && <div className={"chatbubble-ownchoice"}>
                <Input type="text" placeholder={"Typ om te filteren"} width={"300px"} onChange={updateSearchterm} noOutline></Input>
            </div>}
            {!hidden && <div className={"chatbubble-ownchoice"}>
                {renderOptions()}
            </div>}
        </div>
    )
}