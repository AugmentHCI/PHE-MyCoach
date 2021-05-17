import React, { useState, useEffect } from 'react';

import NavigationBar from '../../components/NavigationBar';

export default function PainLogbook() {

    const language = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";

    return (<React.Fragment>
        <NavigationBar title="Activiteitenlogboek" back={`/${language}/mycoach/${FlowRouter.getParam('token')}`}/>
        <div style={{display: "flex", justifyContent: "center", alignContent: "center", paddingTop: "200px"}}>
            We werken er aan
        </div>
    </React.Fragment>);
}