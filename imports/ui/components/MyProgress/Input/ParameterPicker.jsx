import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { parameters } from "../../../../api/processors/MyProgressProcessor"
import i18n from 'meteor/universe:i18n';
import "../../../../../i18n/nl.i18n.json";
import "../../../../../i18n/fr.i18n.json";
import "../../../../../i18n/en.i18n.json";

const T = i18n.createComponent("Common");

export default function ParameterPicker({onChange, dontDisplay, currentParameter}) {

    const title = currentParameter === "" ? "Geen" : parameters.filter((parameter) => parameter.id === currentParameter)[0].measure;

    function handleChange(newValue) {
        onChange(newValue);
    }

    return (
        <DropdownButton variant="dropdown" title={title}>
            {parameters.map(parameter => {
                if (currentParameter !== parameter.id && dontDisplay !== parameter.id) 
                    return <Dropdown.Item key={parameter.id} onClick={() => handleChange(parameter.id)}>{parameter.measure}</Dropdown.Item>
            })}
        </DropdownButton>
    )
}