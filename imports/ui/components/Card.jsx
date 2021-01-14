import React from 'react';
import './Card.css';

function Card(props) {
    
    const T = i18n.createComponent("Common");

    return (
        <div className="card">
            <p className="card-header-title"><T>{props.title}</T></p>
            <div className="card-body" style={props.bodyStyle}>
                {props.children}
            </div>
        </div>
    )
}

export default Card;