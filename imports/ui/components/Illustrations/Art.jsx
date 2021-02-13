import React, { useState } from 'react';
import { Fragment } from 'react';
import './Art.scss';


function Art(props) {

    const image = '/illustrations/' + props.image + '.svg';

    return (
        <Fragment>
            <img className="art" src={image} width={props.width ? props.width : "100px"} style={props.style}/>
        </Fragment>
    );
}

export default Art;