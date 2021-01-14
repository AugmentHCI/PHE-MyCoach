import React from 'react';
import './Card.css';

function Card(props) {
    
    const T = i18n.createComponent("Common");

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div className="card-body" style={props.bodyStyle}>
            <p className="card-header-title"><T>{props.title}</T></p>
                {props.children}
            </div>
        </div>
    )
}

export default Card;