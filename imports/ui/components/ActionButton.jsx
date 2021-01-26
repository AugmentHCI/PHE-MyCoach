import React, { useState } from 'react';
import './ActionButton.scss';

import Icon from './Illustrations/Icon.jsx';

function ActionButton(props) {
    
    const T = i18n.createComponent("Common");

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
            {props.icon && <div className="button-icon">
                <Icon width="22px" image={props.icon} color={"blue"} style={{marginTop: "7px", marginLeft: "2px"}}/>
            </div>}
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