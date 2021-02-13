import React, { useState } from 'react';
import { Fragment } from 'react';
import './Icon.scss';


function Icon(props) {

    const iconClass = props.color ? "icon-" + props.color : "icon-black";

    return (
        <Fragment>
            <img src={"/icons/" + props.image + ".svg"} width={props.width ? props.width : "16px"} style={props.style} className={iconClass}/>
        </Fragment>
    );
}

export default Icon;