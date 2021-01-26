import React, { useState } from 'react';
import './Button.scss';

function Button(props) {

    const [isPressed, press] = useState(false);

    const pressClass = isPressed ? "button-action pressed" : "button-action"

    function action() {
        press(false); 
        if (props.action) {props.action()};
    }

    return (
        <button className={pressClass} 
                onTouchStart={() => press(true)} 
                onClick={() => action()} 
                onTouchEnd={() => press(false)}>
            <div className={props.size === "small" ? "button-text-small" : "button-text"}>
                {props.children}
            </div>
            <div className="button-arrow">
                {'>'}
            </div>
        </button>
    )
}

export default Button;