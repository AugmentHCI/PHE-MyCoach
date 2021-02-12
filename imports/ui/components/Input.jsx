import React, { useState } from 'react';
import './Input.scss';

function Input(props) {

    return (
        <input style={{width: props.width}} type={props.type} value={props.value} onChange={(event) => props.onChange(event.target.value)} placeholder={props.placeholder}>
        </input>
    )
}

export default Input;