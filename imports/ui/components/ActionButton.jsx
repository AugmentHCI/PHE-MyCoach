import React, { useState } from 'react';
import './ActionButton.scss';

import Icon from './Illustrations/Icon.jsx';

export default function ActionButton(props) {

    const [isPressed, press] = useState(false);

    const pressClass = isPressed ? "actionbutton pressed" : "actionbutton"

    let style = {};
    style["backgroundColor"] = props.color ? `var(--idewe-${props.color})` : "var(--idewe-blue)";

    function handleOnClick() {
        press(false); 
        if (props.onClick) {props.onClick()};
    }

    return (
        <button className={pressClass} 
                onTouchStart={() => press(true)} 
                onClick={() => handleOnClick()} 
                onTouchEnd={() => press(false)}
                style={style}>
            {props.icon && <div className="actionbutton-icon">
                <Icon width="22px" image={props.icon} color={props.color ? props.color : "blue"}/>
            </div>}
            <div className={props.size === "small" ? "actionbutton-text-small" : "actionbutton-text"}>
                {props.children}
            </div>
            <div className="actionbutton-arrow">
                <Icon image="next" width={"16px"} color="white"/>
            </div>
        </button>
    )
}