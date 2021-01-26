import React, { useState } from 'react';
import i18n from 'meteor/universe:i18n';
import "../../../i18n/nl.i18n.json";
import "../../../i18n/fr.i18n.json";
import "../../../i18n/en.i18n.json";
import "./ModuleCard.scss";


import Icon from './Illustrations/Icon.jsx';
import PillButton from './PillButton.jsx';
import Art from './Illustrations/Art.jsx';

const T = i18n.createComponent("Common");

function ModuleCard(props) {

    const [opened, toggleOpen] = useState(props.closed ? props.closed : false);

    if (opened) return (<div className="module-card-closed" onClick={() => toggleOpen(!opened)}>
        <div className="module-card-closed-text">
            <div className='module-card-closed-number'>Onderdeel {props.number}</div>
            <div className='module-card-closed-title'>{props.title.join(' ')}</div>
        </div>
        <div className="module-card-icon">
            <div className="module-card-icon-circle">
                <Icon image="next" style={{transform:"rotate(90deg)"}} width="14px" color="blue"/>
            </div>
        </div>
    </div>);
    
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
        <div className="module-card-container">
            <div className={topClass}>
                <div className="module-card-title-container">
                    <div className="module-card-number">Onderdeel {props.number}</div>
                    <div className="module-card-title">{titleHTML}</div>
                </div>
                <Art image={props.image} width="160px" style={{position: "absolute", bottom: "0px", right: "20px", zIndex: "1"}}></Art>
            </div>
            <div className="module-card-bottom">
                <div className="module-card-bottom-row">
                    <div className="module-card-information">{props.description}</div>
                    <div className="module-card-icon">
                        <div className="module-card-icon-circle" onClick={() => toggleOpen(!opened)}>
                            <Icon image="next" style={{transform:"rotate(-90deg)"}} width="14px" color="blue"/>
                        </div>
                    </div>
                </div>
                <div className="module-card-bottom-row">
                    <div className="module-card-pills">
                        <PillButton color="white" icon="time">{props.duration}</PillButton>
                        <PillButton color="white" icon="information">{props.type}</PillButton>
                    </div>
                    <div className="module-button-container">
                        <button className="module-button">Begin</button>
                    </div>
                </div>
            </div>
        </div>);
}

export default ModuleCard;