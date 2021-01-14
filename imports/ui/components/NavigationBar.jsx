import React, { useState } from 'react';
import './NavigationBar.scss';

function NavigationBar(props) {
    
    const T = i18n.createComponent("Common");

    const [isPressed, press] = useState(false);

    const pressClass = isPressed ? "button-action pressed" : "button-action"

    function action() {
        press(false); 
        console.log("Action");
        if (props.action) {console.log("Action"); props.action()};
    }

    return (
        <div className="NavigationBar">
            {FlowRouter.current().route.name}
        </div>
    )
}

export default NavigationBar;