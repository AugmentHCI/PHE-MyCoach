import React from 'react';
import './Card.scss';

export default function Card(props) {
    
    const T = i18n.createComponent("Common");

    const titleClass = props.underline ? "card-header-title-underline" : "card-header-title";
    const cardClass = props.overview ? "card-overview" : "card";
    const cardBodyClass = props.overview ? "card-body-overview" : "card-body";

    return (
        <div className={cardClass}>
            <div className="card-header-div">
            {props.icon && <div className="card-icon-circle">{props.icon}</div>}
            <div className={titleClass}>{props.noTranslate ? props.title : <T>{props.title}</T>}</div>
            </div>
            {props.overview && <hr className={cardClass + "-line"}/>}
            <div className={cardBodyClass} style={props.bodyStyle}>
                {props.children}
            </div>
        </div>
    )
}