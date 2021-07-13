import React, { useState } from 'react';
import './Input.scss';

export default function Input(props) {

    const [isBetween, toggleIsBetween] = useState(!props.between || props.value.length === 0 || (props.value >= props.between[0] && props.value <= props.between[1]));
    const [value, updateValueState] = useState("");
    const usesCheck = ["radio", "checkbox"].includes(props.type);

    function updateValue(newValue) {
        if (props.type === "number" && !(/^\d+$/.test(newValue)) && newValue.length > 0) return;
        if (props.maxLength && newValue.length > props.maxLength) return;
        updateValueState(newValue);
        toggleIsBetween(!props.between || newValue.length === 0 || (newValue >= props.between[0] && newValue <= props.between[1]));
        props.onChange(newValue);
    }

    return (
        <input 
            type={props.type} 
            id={props.id}
            className={(props.noOutline ? "no-outline" : "") + (!isBetween ? " red-outline" : "")} 
            style={props.style} 
            value={props.value} 
            checked={props.type === "checkbox" ? props.value : undefined}
            onChange={(event) => { usesCheck ?  updateValue(event.target.checked) : updateValue(event.target.value) }} 
            onKeyDown={() => {return (event.keyCode === 8 || (event.keyCode === 46 ? true : !isNaN(Number(event.key))))} }
            placeholder={props.placeholder}>
        </input>
    )
}