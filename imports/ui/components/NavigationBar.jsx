import React, { useState } from 'react';
import './NavigationBar.scss';

function NavigationBar(props) {

    const noNavigationBar = ["MyProgress", "MyCoach"]
    
    const T = i18n.createComponent("Common");

    if (noNavigationBar.includes(FlowRouter.current().route.name)) return (<React.Fragment/>);

    const title = props.title ? props.title : FlowRouter.current().route.name;

    return (
        <div className="navigation-bar">
            <button className="navigation-bar-button" onClick={() => history.back()}>{'<'}</button>
            {title}
        </div>
    )
}

export default NavigationBar;