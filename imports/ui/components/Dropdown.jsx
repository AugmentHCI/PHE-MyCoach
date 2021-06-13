import React from "react";
import { useState, useEffect } from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Icon from "./Illustrations/Icon.jsx";

import "./Dropdown.scss";

export default function Dropdown( { items, multiselect, style, defaultItems, onChange, defaultText }) {
    const [open, toggleOpen] = useState(false);
    const [selection, setSelection] = useState([]);

    function handleOnClick(item) {
        if (!selection.some(current => current.id === item.id)) {
            if (!multiselect) {
                setSelection([item]);
                if (onChange) onChange([item]);
                toggleOpen(!open);
            } else if (multiselect) {
                setSelection([...selection, item]);
                if (onChange) onChange([...selection, item]);
            }
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(current => current.id !== item.id);
            setSelection([...selectionAfterRemoval]);
            if (onChange) onChange([...selectionAfterRemoval]);
        }
    }
      

    function isItemInSelection(item) {
        if (selection.some(current => current.id === item.id)) { return true; }
        return false;
    }

    function renderHeaderTitle() {
        if (selection.length === 0) return (<p className="dd-header__title-noselection">{ defaultText ? defaultText : "Maak je keuze" }</p>)
        else if (selection.length === 1) return (<p className="dd-header__title">{selection[0].value}</p>)
        else if (selection.length === 2) return (<div className="dd-header__title">{selection[0].value}<div style={{color:'var(--idewe-gray-light)', display: 'inline'}}> en </div>{selection[1].value.toLowerCase()}</div>)
        else return (<div className="dd-header__title">{selection[0].value} <div style={{color:'var(--idewe-gray-light)', display: 'inline'}}>en nog {selection.length - 1}</div></div>)
    }

    useEffect(() => { 
        if (defaultItems) setSelection(defaultItems);
    }, []);

    
    return (
        <div className="dd-wrapper" style={style}>
            <div tabIndex={0} className="dd-header" role="button" onKeyPress={() => {console.log(selection); toggleOpen(!open)}} onClick={() => toggleOpen(!open)}>
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
                            <li className="dd-list-item" key={item.id}>
                                <button key={item.id + "-button"} type="button" onClick={() => handleOnClick(item)}>
                                <span key={item.id + "-text"} style={{fontWeight: isItemInSelection(item) ? 500 : 400}}>{item.value}</span>
                                {multiselect && <span key={item.id + "-check"}>{isItemInSelection(item) && <Icon image="check" color="blue-dark" width="15px"/>}</span>}
                                </button>
                                <hr key={item.id + "-hr"}/>
                            </li>))}
                        </ul>) : null}
            </ReactCSSTransitionGroup>
            </div>
        </div>
    )
}