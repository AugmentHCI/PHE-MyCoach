import React from 'react';
import i18n from 'meteor/universe:i18n';
import "../../../i18n/nl.i18n.json";
import "../../../i18n/fr.i18n.json";
import "../../../i18n/en.i18n.json";
import "./ModuleCard.scss";

import PillButton from './PillButton.jsx';
import Art from './Illustrations/Art.jsx'

const T = i18n.createComponent("Common");

function ModuleCard(props) {

    return (
        <div className="module-card-container">
            <div className="module-card-top">
                <div className="module-card-number">{props.number}</div>
                <div className="module-card-title">{props.title}</div>
                <Art image="new-ideas" width="160px" style={{position: "absolute", bottom: "-10px", right: "20px", zIndex: "1"}}></Art>
            </div>
            <div className="module-card-bottom">
                <div className="module-card-information">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
                <PillButton color="white" icon="time">15 minutes</PillButton>
                <PillButton color="white" icon="information">Informatief</PillButton>
            </div>
        </div>);
}

export default ModuleCard;