import React, { useState } from 'react';
import './Input.scss';

export default function Input(props) {

    return (
        <input 
            type={props.type} 
            className={props.noOutline ? "no-outline" : ""} 
            style={props.style} 
            value={props.value} 
            onChange={(event) => props.onChange(event.target.value)} 
            placeholder={props.placeholder}>
        </input>
    )
}