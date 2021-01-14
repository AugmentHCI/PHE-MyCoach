import React from 'react';
import './Card.scss';

function Card(props) {
    
    const T = i18n.createComponent("Common");

    return (
        <div className="card">
            <p className="card-header-title">{props.demo ? props.title : <T>{props.title}</T>}</p>
            <div className="card-body" style={props.bodyStyle}>
                {props.children}
            </div>
        </div>
    )
}

export default Card;