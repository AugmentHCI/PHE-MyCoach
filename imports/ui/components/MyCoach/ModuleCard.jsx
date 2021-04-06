import React from 'react';
import i18n from 'meteor/universe:i18n';
import "../../../../i18n/nl.i18n.json";
import "../../../../i18n/fr.i18n.json";
import "../../../../i18n/en.i18n.json";
import "./ModuleCard.scss";


import Icon from '../Illustrations/Icon.jsx';
import Illustration from '../Illustrations/Illustration.jsx';
import PillButton from '../PillButton.jsx';

const T = i18n.createComponent("Common");

export default function ModuleCard(props) {

    const lockedSuffix = props.locked ? "-locked" : "";
    const iconColor = props.locked ? "gray-dark" : "blue";
    const iconImage = {"IN_PROGRESS": {image: "loading", color: "blue"}, "TO_START": {image: "time", color: "gray-light"}, "COMPLETED": {image: "check", color: "blue"}, "NOT_STARTED": {image: "locked", color: "gray-dark"}}
    const status = props.status ? props.status : "NOT_STARTED";

    /* UI - Closed card */
    if (props.closed) return (<div className={"module-card-closed" + lockedSuffix} onClick={() => toggleClosed()}>
        <div className={"module-status-icon"}>
            <Icon image={iconImage[status].image} color={iconImage[status].color} width={"18px"}></Icon>
        </div>
        <div className="module-card-closed-text">
            <div className={"module-card-closed-number" + lockedSuffix}>Onderdeel {props.number}</div>
            <div className="module-card-closed-title">{props.title.join(' ')}</div>
        </div>
        <div className="module-card-icon">
            <div className="module-card-icon-circle">
                <Icon image="next" style={{transform:"rotate(90deg)"}} width="14px" color={iconColor}/>
            </div>
        </div>
    </div>);
    
    const topClass = props.topColor === "white" ? "module-card-top-white" : "module-card-top";

    const titleHTML = Array.isArray(props.title) ? createTitleHTML() : props.title;

    const buttonText = status === "COMPLETED" ? "Herbekijk" : "Begin";

    function createTitleHTML() {
        let prototypeTitleHTML = [];
        props.title.forEach((title, index) => {
            prototypeTitleHTML.push(<div key={index}>{title}<br/></div>)
        });
        return prototypeTitleHTML;
    }

    function toggleClosed() {
        if (props.onToggleClosed && props.closed) {props.onToggleClosed(props.id)}
        else if (props.onToggleClosed && !props.closed) {props.onToggleClosed("closed")}
    }

    /* UI - Opened Card */
    return (
        <div className="module-card-container">
            <div className={topClass}>
                <div className="module-card-title-container">
                    <div className={"module-card-number" + lockedSuffix}>Onderdeel {props.number}</div>
                    <div className={"module-card-title" + lockedSuffix}>{titleHTML}</div>
                </div>
                <Illustration image={props.image + lockedSuffix} width={props.imageWidth ? props.imageWidth : "160px"} style={{position: "absolute", bottom: "0px", right: "20px", zIndex: "1"}}></Illustration>
            </div>
            <div className={"module-card-bottom" + lockedSuffix}>
                <div className="module-card-bottom-row">
                    <div className="module-card-information">{props.description}</div>
                    {!props.hideButton && <div className="module-card-icon">
                    <div className="module-card-icon-circle" style={{marginBottom: "5px"}} onClick={() => toggleClosed()}>
                            <Icon image="next" style={{transform:"rotate(-90deg)", marginTop:"-4px"}} width="14px" color={iconColor}/>
                        </div>
                    </div>}
                </div>
                <div className="module-card-bottom-row">
                    <div className="module-card-pills">
                        <PillButton contentColor={props.locked ? "white" : "blue"} fillColor={props.locked ? "gray-light" : "white"} icon="time">{props.duration}</PillButton>
                        <PillButton contentColor={props.locked ? "white" : "blue"} fillColor={props.locked ? "gray-light" : "white"} icon="information">{props.type}</PillButton>
                    </div>
                    {!props.hideButton && <div className="module-button-container">
                        <button className={"module-button" + (props.locked ? "-disabled" : "")} onClick={()=> {if (props.onClick && !props.locked) props.onClick()}}>{buttonText}</button>
                    </div>}
                </div>
            </div>
        </div>);
}