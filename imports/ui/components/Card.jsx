import React from 'react';
import './Card.scss';

function Card(props) {
    
    const T = i18n.createComponent("Common");

    const titleClass = props.underline ? "card-header-title-underline" : "card-header-title";

    return (
        <div className="card">
            <p className={titleClass}>{props.noTranslate ? props.title : <T>{props.title}</T>}</p>
            <div className="card-body" style={props.bodyStyle}>
                {props.children}
            </div>
        </div>
    )
}

export default Card;