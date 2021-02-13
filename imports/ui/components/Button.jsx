import React, { useState } from 'react';
import './Button.scss';

function Button(props) {

    const [isPressed, press] = useState(false);

    let buttonClass = props.disabled ? "button-inactive" : "button";
    buttonClass += isPressed ? " pressed" : "";

    console.log(props.disabled)

    if (props.isSelected) pressClass += " selected";

    function action() {
        press(false); 
        if (props.action && !props.inactive) {props.action()};
    }

    return (
        <button className={buttonClass} 
                onTouchStart={() => press(true)} 
                onClick={() => action()} 
                onTouchEnd={() => press(false)}>
            <div className={props.size === "small" ? "button-text-small" : "button-text"}>
                {props.children}
            </div>
        </button>
    )
}

export default Button;