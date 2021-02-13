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

    const noOutline = ["information", "time"];

    const needsOutline = props.icon && noOutline.includes(props.icon);

    const backgroundColor = props.fillColor ? 
        getComputedStyle(document.documentElement).getPropertyValue(`--idewe-${props.fillColor}`) : 
        getComputedStyle(document.documentElement).getPropertyValue(`--idewe-white`);

    const color = props.contentColor ? 
        getComputedStyle(document.documentElement).getPropertyValue(`--idewe-${props.contentColor}`) : 
        getComputedStyle(document.documentElement).getPropertyValue(`--idewe-blue`);

    const style = {
        backgroundColor: backgroundColor,
        color: color,
        marginTop: needsOutline ? "0px !important" : ""
    }
    
    function createIcon() {
        if (!needsOutline) return (<div className={"pill-button-icon"} style={{backgroundColor: color}}>       
            <Icon width="12px" image={props.icon} color={backgroundColor}/>
        </div>);
        else return (<Icon width="16px" image={props.icon} color={props.contentColor ? props.contentColor : "blue"} style={{float:"left", marginTop:"3px"}}></Icon>);
    }

    return (
        <button className="pill-button" style={style}>
            {createIcon()}
            <div className='pill-button-text'>
                {props.children}
            </div>
        </button>);
}

export default PillButton;