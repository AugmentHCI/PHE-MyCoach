import React, { useEffect, useState } from "react";

import "./Chatbubble.scss";

export default function Chatbubble(props) {

    const [renderLoading, setRenderLoading] = useState(props.own ? false : true);
    const [delayedDisplay, setDelayedDisplay] = useState(props.choice ? false : true);
    
    useEffect(() => {
        setTimeout(function() { setRenderLoading(false); setDelayedDisplay(true); }, 1000)
    }, []);

    const classSuffix = props.own ? (props.choice ? "-ownchoice" : "-own") : "";

    function handleOnClick() {
        if (props.onClick) props.onClick();
    }

    return (<div className="chatbubble-container">
            {!props.own && <img src="/illustrations/avatar.png" width="35px" style={{position:"absolute"}}/>}
            {delayedDisplay && <div className={"chatbubble" + classSuffix} onClick={() => handleOnClick()}>
                {renderLoading && <img src="/illustrations/loading.gif" width="50px" style={{}}/>}
                {!renderLoading && props.children}
            </div>}
        </div>
    )
}