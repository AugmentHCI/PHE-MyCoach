import React, { useState } from 'react';
import { Fragment } from 'react';
import './Icon.scss';


function Icon(props) {

    [image, setImage] = useState(null);

    const icons = {
        "time": '/icons/time.svg', 
        "information": '/icons/information.svg',
        "back": '/icons/back.svg',
        "writing": '/icons/writing.svg',
        "idea": '/icons/idea.svg',
        "next": '/icons/next.svg',
    };

    if (!icons.hasOwnProperty(props.image)) throw `Icon.jsx - No icon for '${props.image}' exists.`;

    if (!image) setImage(icons[props.image]);

    const iconClass = props.color ? "icon-" + props.color : "icon-black";

    return (
        <Fragment>
            {image && <img src={image} width={props.width ? props.width : "16px"} style={props.style} className={iconClass}/>}
        </Fragment>
    );
}

export default Icon;