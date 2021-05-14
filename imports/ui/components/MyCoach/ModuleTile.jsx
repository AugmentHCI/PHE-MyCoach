import React, { useState } from 'react';
import "./ModuleTile.scss";

import Icon from '../Illustrations/Icon.jsx';

export default function ModuleCard(props) {

    const [isPressed, press] = useState(false);

    let style = {}
    if (props.status === "NOT_STARTED") style["backgroundColor"] = "var(--idewe-gray-dark)";
    if (props.status === "COMPLETED") style["backgroundColor"] = "var(--idewe-blue-dark)";

    function handleOnClick() {
        press(false); 
        if (props.onClick) props.onClick();
    }

    return (<div className={"moduletile-container" + (isPressed ? "-pressed" : "")} style={style} onTouchStart={() => press(true)} onClick={() => handleOnClick()} onTouchEnd={() => press(false)}>
        {}
        {props.status === "COMPLETED" && <div className="moduletile-indicator"><Icon width="10px" image={"check"} color="white"/></div>}
        {props.status === "NOT_STARTED" && <div className="moduletile-indicator-notstarted"><Icon width="10px" image={"locked"} color="white"/></div>}
        {props.icon && <Icon image={props.icon} color="white" style={{marginRight: "10px"}}/>}
        {props.title}
    </div>)
}