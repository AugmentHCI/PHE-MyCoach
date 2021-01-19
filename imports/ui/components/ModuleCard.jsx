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

    const topColor = props.topColor === "white" ? "module-card-top-white" : "module-card-top"

    return (
        <div className="module-card-container">
            <div className={topColor}>
                <div className="module-card-number">{props.number}</div>
                <div className="module-card-title">{props.title}</div>
                <Art image="new-ideas" width="160px" style={{position: "absolute", bottom: "-10px", right: "20px", zIndex: "1"}}></Art>
            </div>
            <div className="module-card-bottom">
                <div className="module-card-information">{props.description}</div>
                <PillButton color="white" icon="time">{props.duration}</PillButton>
                <PillButton color="white" icon="information">{props.type}</PillButton>
            </div>
        </div>);
}

export default ModuleCard;