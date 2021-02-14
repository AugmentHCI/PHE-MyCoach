import React, { useState } from 'react';
import './Button.scss';

function Button(props) {

    const [isPressed, press] = useState(false);

    let buttonClass = props.disabled ? "button-inactive" : "button";
    buttonClass += isPressed ? " pressed" : "";

    if (props.isSelected) buttonClass += " selected";

    function action() {
        press(false); 
        if (props.action && !props.inactive) { props.action() };
    }

    let style = props.style ? props.style : {};
   
    style["backgroundColor"] = props.color ? `var(--idewe-${props.color})` : "var(--idewe-white)"
    style["color"] = props.contentColor ? `var(--idewe-${props.color})` : (props.color ? "var(--idewe-white)" : "var(--idewe-blue)")
    if (props.width === "fit" ) style["width"] = "fit-content";

    console.log(style)

    return (
        <button className={buttonClass} 
                onTouchStart={() => press(true)} 
                onClick={() => action()} 
                onTouchEnd={() => press(false)}
                style={style}>
            <div className={props.size === "small" ? "button-text-small" : "button-text"}>
                {props.children}
            </div>
        </button>
    )
}

export default Button;