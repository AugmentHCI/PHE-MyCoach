import React, { useState } from "react";
import "./ModuleButton.scss";

import Icon from "../Illustrations/Icon.jsx";

export default function ModuleButton(props) {

    const diameter = 120;
    const stroke = 14;
    const radius = diameter / 2 - ( stroke / 2 );
    const circumference = (diameter / 2 - ( stroke / 2 )) * 2 * Math.PI;

    const [isPressed, press] = useState(false);

    let progressSuffix = props.data.OVERALL === "COMPLETED" ? " completed" : (props.data.OVERALL === "NOT_STARTED" ? " locked" : "")
    if (isPressed) progressSuffix += " pressed";

    /**
     * Handle the click action, and display visually
     */
    function handleOnClick() {
        press(false);
        if (props.onClick && props.data.OVERALL !== "NOT_STARTED") props.onClick();
    }

    /**
     * Calculate the percentage of completed submodules
     */
    function calculateProgress() {
        let completed = 0;
        for (const [moduleName, status] of Object.entries(props.data)) {
            if (moduleName !== "OVERALL" && status == "COMPLETED") completed += 1;
        }
        return Math.round(completed/(Object.keys(props.data).length - 1) * 100)
    }

    /**
     * Calculate the circumference of the progress ring to reflect the progress of this module
     * @param {Int} percent The percentage of completed submodules
     */
    function setProgress(percent) {
        const circumference = radius * 2 * Math.PI;
        return circumference - percent / 100 * circumference;
    }

    function generateTitle() {
        if (props.code === "ACT") return <div style={{zIndex: "1"}}>{props.title.split(" ")[0]}<br/>{props.title.split(" ")[1] + " " + props.title.split(" ")[2]}</div>
        if (props.code === "EM") return <div style={{zIndex: "1"}}>{props.title.split(" ")[0]}<br/>{props.title.split(" ")[1] + " " + props.title.split(" ")[2]}</div>
        if (props.code === "SOC") return <div style={{zIndex: "1"}}>{props.title.split(" ")[0]}<br/>{props.title.split(" ")[1]}</div>
        return <div style={{zIndex: "1"}}>{props.title}</div>
    }

    return <div 
        className={"modulebutton-" + props.code + progressSuffix} 
        onClick={() => handleOnClick()}
        onTouchStart={() => press(true)}
        onTouchEnd={() => press(false)}>
            {props.data.OVERALL === "COMPLETED" && <div className="module-checkicon"><Icon color="blue-dark" image={"check"}></Icon></div>}
            {generateTitle()}
            {calculateProgress() < 100 && calculateProgress() > 0 && <svg
            className="progress-ring"
            width={diameter}
            height={diameter}>
            <circle
                className="progress-ring-circle"
                transform= "rotate(-90deg)"
                stroke="var(--idewe-blue-dark)"
                strokeDasharray={circumference + " " + circumference}
                strokeLinecap="round"
                strokeDashoffset = {setProgress(calculateProgress())}
                strokeWidth={stroke}
                fill="transparent"
                r={radius}
                cx={diameter / 2}
                cy={diameter / 2 - 1}/>
            </svg>}
    </div>
}