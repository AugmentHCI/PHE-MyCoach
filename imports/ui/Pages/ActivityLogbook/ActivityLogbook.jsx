import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in';
import Illustration from '../../components/Illustrations/Illustration';

import NavigationBar from '../../components/NavigationBar';

export default function PainLogbook() {

    const language = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";

    let mainStyle = {display: "flex", justifyContent: "center", textAlign: "center", alignContent: "center", paddingTop: "20px", fontFamily: "var(--main-font)", color: "var(--idewe-blue-dark)", fontWeight: 500, fontSize: "20px"};

    return (<React.Fragment>
        <NavigationBar title="Activiteitenlogboek" back={`/${language}/mycoach/${FlowRouter.getParam('token')}`}/>
        <div>
            <FadeIn>
            <div style={{...mainStyle, paddingTop: "200px"}}>We werken er aan!</div>
            <div style={mainStyle}>
                <Illustration image="working" width="230px"/>
            </div>
            <div style={{...mainStyle, color:"var(--idewe-blue)", paddingLeft: "50px", paddingRight: "50px"}}>Kom binnen een drietal weken nog eens terug</div>
            </FadeIn>
        </div>
    </React.Fragment>);
}