import React, { useState } from 'react';
import './ActionButton.scss';

function ActionButton(props) {
    
    const T = i18n.createComponent("Common");

    const [isPressed, press] = useState(false);

    const pressClass = isPressed ? "button-action pressed" : "button-action"

    function action() {
        press(false); 
        if (props.action) {props.action()};
    }

    return (
        <button className={pressClass} onTouchStart={() => press(true)} onTouchEnd={() => action()}>
            <div className="button-icon"/>
            <div className={props.size === "small" ? "button-text-small" : "button-text"}>
                {props.children}
            </div>
            <div className="button-arrow">
                {'>'}
            </div>
        </button>
    )
}

export default ActionButton;