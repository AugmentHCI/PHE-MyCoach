import React from 'react';
import i18n from 'meteor/universe:i18n';
import "../../../i18n/nl.i18n.json";
import "../../../i18n/fr.i18n.json";
import "../../../i18n/en.i18n.json";
import "./PillButton.scss";

const T = i18n.createComponent("Common");

function PillButton(props) {

    const buttonClass = props.color === "white" ? "pill-button-white" : "pill-button-blue";

    return (
        <button className={buttonClass}>
            <div>
                {props.children}
            </div>
        </button>);

}

export default PillButton;