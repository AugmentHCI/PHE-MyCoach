import React, { useState } from 'react';
import { Fragment } from 'react';
import './Icon.scss';


export default function Icon(props) {

    const iconClass = props.color ? "icon-" + props.color : "icon-black";

    function handleOnClick() {
        if (props.onClick && !props.disabled) props.onClick();
    }

    return (
        <Fragment>
            <img onClick={() => handleOnClick()} src={"/icons/" + props.image + ".svg"} width={props.width ? props.width : "16px"} style={props.style} className={iconClass}/>
        </Fragment>
    );
}