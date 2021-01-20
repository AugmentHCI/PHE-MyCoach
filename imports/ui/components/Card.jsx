import React from 'react';
import './Card.scss';

function Card(props) {
    
    const T = i18n.createComponent("Common");

    const titleClass = props.underline ? "card-header-title-underline" : "card-header-title";
    const cardClass = props.overview ? "card-overview" : "card";

    return (
        <div className={cardClass}>
            <p className={titleClass}>{props.noTranslate ? props.title : <T>{props.title}</T>}</p>
            <div className="card-body" style={props.bodyStyle}>
                {props.children}
            </div>
        </div>
    )
}

export default Card;