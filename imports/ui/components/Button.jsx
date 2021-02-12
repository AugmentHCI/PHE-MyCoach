import React, { useState } from 'react';
import './Button.scss';

function Button(props) {

    const [isPressed, press] = useState(false);

    let pressClass = isPressed ? "button-action pressed" : "button-action";

    if (props.isSelected) pressClass += " selected";

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
        </button>
    )
}

export default Button;