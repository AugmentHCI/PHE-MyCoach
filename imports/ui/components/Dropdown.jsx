import React from "react";
import { useState, useEffect } from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Icon from "./Illustrations/Icon.jsx";

import "./Dropdown.scss";

export default function Dropdown( { items, multiselect, style, defaultItems, onChange, defaultText, disabled, idKey="id", valueKey="value" }) {
    const [open, toggleOpen] = useState(false);
    const [selection, setSelection] = useState([]);

    function handleOnClick(item) {
        if (!selection.some(current => current[idKey] === item[idKey])) {
            console.log("adding");
            if (!multiselect) {
                setSelection([item]);
                if (onChange) onChange([item]);
                toggleOpen(!open);
            } else if (multiselect) {
                setSelection([...selection, item]);
                if (onChange) onChange([...selection, item]);
            }
        } else {
            console.log("removing");
            let selectionAfterRemoval = [...selection];
            selectionAfterRemoval = selectionAfterRemoval.filter(current => current[idKey] !== item[idKey]);
            setSelection([...selectionAfterRemoval]);
            if (onChange) onChange([...selectionAfterRemoval]);
        }
        console.log(selection)
    }
      
    function isItemInSelection(item) {
        if (selection.some(current => current[idKey] === item[idKey])) { return true; }
        return false;
    }

    function renderHeaderTitle() {
        if (selection.length === 0) return (<p className="dd-header__title-noselection">{ defaultText ? defaultText : "Maak je keuze" }</p>)
        else if (selection.length === 1) return (<p className="dd-header__title">{selection[0][valueKey]}</p>)
        else if (selection.length === 2) return (<div className="dd-header__title">{selection[0][valueKey]}<div style={{color:'var(--idewe-gray-light)', display: 'inline'}}> en </div>{selection[1][valueKey].toLowerCase()}</div>)
        else return (<div className="dd-header__title">{selection[0][valueKey]} <div style={{color:'var(--idewe-gray-light)', display: 'inline'}}>en nog {selection.length - 1}</div></div>)
    }

    useEffect(() => { 
        if (defaultItems) setSelection(defaultItems);
    }, []);

    
    return (
        <div className="dd-wrapper" style={style}>
            <div tabIndex={0} className={"dd-header" + (disabled ? " disabled-dropdown" : "")} role="button" onKeyPress={() => {console.log(selection); toggleOpen(!open)}} onClick={() => {if (!disabled) toggleOpen(!open)}}>
            <div className="dd-header__title">
                { renderHeaderTitle() }
            </div>
            <div className="dd-header__action">
                {open ? 
                    <Icon image="next" color="gray-light" width="20px" style={{transform:'rotate(-90deg)', transition:'.2s ease-out'}}/> : 
                    <Icon image="next" color="gray-light" width="20px" style={{transform:'rotate(90deg)', transition:'.2s ease-in'}}/>}
            </div>
            </div>
            <div className="dd-element-list-container">
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={100}
                transitionLeaveTimeout={100}>
                    {open ? (<ul key="dd-element-list" className="dd-list">
                        {items.map(item => (
                            <li className="dd-list-item" key={item[idKey]}>
                                <button type="button" onClick={() => handleOnClick(item)}>
                                <span style={{fontWeight: isItemInSelection(item) ? 500 : 400}}>{item[valueKey]}</span>
                                {multiselect && <span>{isItemInSelection(item) && <Icon image="check" color="blue-dark" width="15px"/>}</span>}
                                </button>
                                <hr/>
                            </li>))}
                        </ul>) : null}
            </ReactCSSTransitionGroup>
            </div>
        </div>
    )
}