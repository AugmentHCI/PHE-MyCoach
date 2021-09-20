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
export default function PillButton(props) {

    const noOutline = ["information", "time"];

    const needsOutline = props.icon && noOutline.includes(props.icon);

    const backgroundColor = props.fillColor ? `var(--idewe-${props.fillColor})` : "var(--idewe-white)";

    const color = props.contentColor ? `var(--idewe-${props.contentColor})` : "var(--idewe-blue)";

    const style = {
        backgroundColor: backgroundColor,
        color: color,
        marginTop: needsOutline ? "0px !important" : ""
    }

    function handleOnClick() {
        if (props.onClick) props.onClick();
    }
    
    function createIcon() {
        if (!needsOutline) return (<div className={"pill-button-icon"} style={{backgroundColor: color}}>       
            <Icon width="12px" image={props.icon} color={backgroundColor}/>
        </div>);
        else return (<Icon width="16px" image={props.icon} color={props.contentColor ? props.contentColor : "blue"}></Icon>);
    }

    return (
        <button className="pill-button" style={style} onClick={() => handleOnClick()}>
            {createIcon()}
            <div className='pill-button-text'>
                {props.children}
            </div>
        </button>);
}