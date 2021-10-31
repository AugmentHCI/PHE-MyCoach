import React, { useState } from "react";
import "./ModuleButton.scss";

import { FlowRouter } from "meteor/kadira:flow-router";

import jwt_decode from "jwt-decode";

import Icon from "../Illustrations/Icon.jsx";

import { DEV_RRNRS, MODULETITLES } from "../../../api/data/Coaching";

export default function ModuleButton({module, token, language, data, position}) {

    const userID  = parseInt(jwt_decode(token)?.rrnr);
    const title = MODULETITLES[module];

    const diameter = 120;
    const stroke = 14;
    const radius = diameter / 2 - ( stroke / 2 );
    const circumference = (diameter / 2 - ( stroke / 2 )) * 2 * Math.PI;

    const [isPressed, press] = useState(false);

    let progressSuffix = calculateProgress() === 100 ? " completed" : (calculateProgress() === 0 ? " locked" : "")
    if (isPressed) progressSuffix += " pressed";

    /**
     * Handle the click action, and display visually
     */
    function handleOnClick() {
        press(false);
        if (calculateProgress() !== 0) { FlowRouter.go(`/${language}/mycoach/${token}/module/${module.toLowerCase()}/`) }
        else if (DEV_RRNRS.includes(userID)) { FlowRouter.go(`/${language}/mycoach/${token}/module/${module.toLowerCase()}/`) }
    }

    /**
     * Calculate the percentage of completed submodules
     */
    function calculateProgress() {
        if (!data) return 0;
        let completed = 0;
        if (Object.keys(data).length === 0) return 0;
        for (const [, status] of Object.entries(data)) {
            if (status == "COMPLETED") completed += 1;
            else if (status == "IN_PROGRESS") completed += 0.5;
            /* TODO: Check if still called TO_START */
            else if (status == "TO_START") completed += 0.2;
        }
        return Math.round(completed/(Object.keys(data).length) * 100)
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
        if (module === "ACTIVITYWORK") return <div style={{zIndex: "3", fontSize:"15px"}}>Belasting &<br/>belastbaar-<br/>heid</div>
        if (module === "THOUGHTSEMOTIONS") return <div style={{zIndex: "3"}}>{title.split(" ")[0]}<br/>{title.split(" ")[1] + " " + title.split(" ")[2]}</div>
        if (module === "SOCIAL") return <div style={{zIndex: "3"}}>{title.split(" ")[0]}<br/>{title.split(" ")[1]}</div>
        return <div style={{zIndex: "1"}}>{title}</div>
    }

    return <div 
        className={"modulebutton-" + position + progressSuffix} 
        onClick={() => handleOnClick()}
        onTouchStart={() => press(true)}
        onTouchEnd={() => press(false)}>
            {calculateProgress() === 100 && <div className="module-checkicon"><Icon color="blue-dark" image={"check"}></Icon></div>}
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