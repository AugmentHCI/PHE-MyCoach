import React from 'react';
import i18n from 'meteor/universe:i18n';
import "../../../i18n/nl.i18n.json";
import "../../../i18n/fr.i18n.json";
import "../../../i18n/en.i18n.json";
import "./PillButton.scss";

import Icon from './Illustrations/Icon.jsx';

const T = i18n.createComponent("Common");

function PillButton(props) {

    const buttonClass = props.color === "white" ? "pill-button-white" : "pill-button-blue";

    const buttonIconClass = props.color === "white" ? "pill-button-icon-blue" : "pill-button-icon-white";

    const noOutline = ["information"];

    return (
        <button className={buttonClass}>
            {props.icon && !noOutline.includes(props.icon) && <div className={buttonIconClass}>       
                <Icon width="14px" image={props.icon} color={props.color ? props.color : "blue"}></Icon>
            </div>}
            {props.icon && noOutline.includes(props.icon) &&
                <Icon width="20px" image={props.icon} color={props.color === "white" ? "blue" : "white"} style={{float:"left", marginTop:"2px", paddingTop: "-6px"}}></Icon>}
            <div className='pill-button-text'>
                {props.children}
            </div>
        </button>);
}

export default PillButton;