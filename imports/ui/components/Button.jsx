import React, { useState } from 'react';
import './Button.scss';

export default function Button(props) {

    const [isPressed, press] = useState(false);

    function handleOnClick() {
        press(false); 
        if (props.onClick && !props.inactive) { props.onClick() };
    }

    /* Generate Button Class */
    let buttonClass = props.disabled ? "button-inactive" : "button";
    buttonClass += isPressed ? " pressed" : "";
    if (props.isSelected) buttonClass += " selected";

    /* Generate Button Style */
    let style = props.style ? props.style : {};
    if (!props.isSelected) {
        style["backgroundColor"] = props.color ? `var(--idewe-${props.color})` : "var(--idewe-white)"
        style["color"] = props.contentColor ? `var(--idewe-${props.color})` : (props.color ? "var(--idewe-white)" : "var(--idewe-blue)")
        if (props.width === "fit" ) style["width"] = "fit-content";
    }

    return (
        <button className={buttonClass} 
                onTouchStart={() => press(true)} 
                onClick={() => handleOnClick()} 
                onTouchEnd={() => press(false)}
                style={style}>
            <div className={props.size === "small" ? "button-text-small" : "button-text"}>
                {props.children}
            </div>
        </button>
    )
}