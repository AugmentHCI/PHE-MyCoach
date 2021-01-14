import React, { useState } from 'react';
import './NavigationBar.scss';

function NavigationBar(props) {

    const noNavigationBar = ["MyProgress", "MyCoach"]
    
    const T = i18n.createComponent("Common");

    const [isPressed, press] = useState(false);

    function action() {
        press(false); 
        console.log("Action");
        if (props.action) {console.log("Action"); props.action()};
    }

    if (noNavigationBar.includes(FlowRouter.current().route.name)) return (<React.Fragment/>);

    return (
        <div className="NavigationBar">
            {FlowRouter.current().route.name}
        </div>
    )
}

export default NavigationBar;