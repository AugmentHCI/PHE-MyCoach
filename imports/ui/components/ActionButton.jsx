import React, { useState } from 'react';
import './ActionButton.scss';

import Icon from './Illustrations/Icon.jsx';

export default function ActionButton(props) {
    
    const T = i18n.createComponent("Common");

    const [isPressed, press] = useState(false);

    const pressClass = isPressed ? "actionbutton pressed" : "actionbutton"

    function handleOnClick() {
        press(false); 
        if (props.onClick) {props.onClick()};
    }

    return (
        <button className={pressClass} 
                onTouchStart={() => press(true)} 
                onClick={() => handleOnClick()} 
                onTouchEnd={() => press(false)}>
            {props.icon && <div className="actionbutton-icon">
                <Icon width="22px" image={props.icon} color={"blue"} style={{marginTop: "7px", marginLeft: "2px"}}/>
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