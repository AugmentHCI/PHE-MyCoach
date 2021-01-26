import React, { useState } from 'react';
import { Fragment } from 'react';
import './Art.scss';


function Art(props) {

    [image, setImage] = useState(null);

    const images = {"new-ideas": '/illustrations/new_ideas.svg'};

    if (!images.hasOwnProperty(props.image)) throw `Icon.jsx - No icon for '${props.image}' exists.`;

    if (!image) setImage(images[props.image]);

    return (
        <Fragment>
            {true && <img className="art" src={image} width={props.width ? props.width : "100px"} style={props.style}/>}
        </Fragment>
    );
}

export default Art;