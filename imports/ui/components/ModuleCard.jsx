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

    const topClass = props.topColor === "white" ? "module-card-top-white" : "module-card-top";

    const titleHTML = Array.isArray(props.title) ? createTitleHTML() : props.title;

    function createTitleHTML() {
        let prototypeTitleHTML = [];
        props.title.forEach((title, index) => {
            prototypeTitleHTML.push(<div key={index}>{title}<br/></div>)
        });
        return prototypeTitleHTML;
    }

    return (
        <div className="module-card-container" onClick={props.onClick}>
            <div className={topClass}>
                <div className="module-card-title-container">
                    <div className="module-card-number">{props.number}</div>
                    <div className="module-card-title">{titleHTML}</div>
                </div>
                <Art image={props.image} width="160px" style={{position: "absolute", bottom: "0px", right: "20px", zIndex: "1"}}></Art>
            </div>
            <div className="module-card-bottom">
                <div className="module-card-information">{props.description}</div>
                <div className="module-card-pills">
                    <PillButton color="white" icon="time">{props.duration}</PillButton>
                    <PillButton color="white" icon="information">{props.type}</PillButton>
                </div>
            </div>
        </div>);
}

export default ModuleCard;