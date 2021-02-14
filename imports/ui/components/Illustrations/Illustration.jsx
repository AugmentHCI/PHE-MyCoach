import React, { useState } from 'react';
import { Fragment } from 'react';
import './Illustration.scss';


function Illustration(props) {

    const image = '/illustrations/' + props.image + '.svg';

    return (
        <Fragment>
            <img className="illustration" src={image} width={props.width ? props.width : "100px"} style={props.style}/>
        </Fragment>
    );
}

export default Illustration;