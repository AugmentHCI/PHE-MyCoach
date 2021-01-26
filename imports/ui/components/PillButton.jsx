import React from 'react';
import i18n from 'meteor/universe:i18n';
import "../../../i18n/nl.i18n.json";
import "../../../i18n/fr.i18n.json";
import "../../../i18n/en.i18n.json";
import "./PillButton.scss";

import Icon from './Illustrations/Icon.jsx';

const T = i18n.createComponent("Common");

/**
 * 
 * @param {*} props 
 */
function PillButton(props) {

    const buttonClass = props.color === "white" ? "pill-button-white" : "pill-button-blue";

    const buttonIconClass = props.color === "white" ? "pill-button-icon-blue" : "pill-button-icon-white";

    const noOutline = ["information", "time"];

    const needsOutline = props.icon && noOutline.includes(props.icon);

    function createIcon() {
        if (!needsOutline) return (<div className={buttonIconClass}>       
            <Icon width="12px" image={props.icon} color={props.color ? props.color : "blue"}/>
        </div>);
        else return (<Icon width="16px" image={props.icon} color={props.color === "white" ? "blue" : "white"} style={{float:"left", marginTop:"3px"}}></Icon>);
    }

    const updateStyle = needsOutline ? {marginTop: "0px !important"} : {};

    return (
        <button className={buttonClass} style={updateStyle}>
            {createIcon()}
            <div className='pill-button-text'>
                {props.children}
            </div>
        </button>);
}

export default PillButton;