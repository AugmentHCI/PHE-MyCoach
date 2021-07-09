import React, { useState } from 'react';
import './Input.scss';

export default function Input(props) {

    const activeElement = document.activeElement;
    if (props.focusNextAfter && props.value.length >= props.focusNextAfter && document.getElementById(props.id) === activeElement) {
        document.getElementById(props.focusNextId).focus();
    }

    return (
        <input 
            type={props.type} 
            id={props.id}
            className={props.noOutline ? "no-outline" : ""} 
            style={props.style} 
            value={props.value} 
            checked={props.type === "checkbox" ? props.value : undefined}
            onChange={(event) => { props.onChange(event.target.value); if (props.type !== "text") props.onChange(event.target.checked) }} 
            placeholder={props.placeholder}>
        </input>
    )
}