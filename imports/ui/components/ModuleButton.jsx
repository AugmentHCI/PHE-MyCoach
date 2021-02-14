import React from "react";
import "./ModuleButton.scss";

export default function ModuleButton(props) {

    const progressSuffix = props.data.OVERALL === "DONE" ? " finished" : (props.data.OVERALL === "NOT_STARTED" ? " locked" : "")

    /**
     * Handle the click action, and display visually
     */
    function handleOnClick() {
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
        const circumference = 71 * 2 * Math.PI;
        return circumference - percent / 100 * circumference;
    }

    function generateTitle() {
        if (props.code === "SOC") return <div style={{zIndex: "1"}}>{props.title.split(" ")[0]}<br/>{props.title.split(" ")[1]}</div>
        return <div style={{zIndex: "1"}}>{props.title}</div>
    }

    return <div className={"modulebutton-" + props.code + progressSuffix} onClick={() => handleOnClick()}>
        {generateTitle()}
        <svg
        className="progress-ring"
        width="150"
        height="150">
        <circle
            className="progress-ring-circle"
            transform= "rotate(-90deg)"
            stroke="var(--idewe-blue-dark)"
            strokeDasharray="446 446"
            strokeLinecap="round"
            strokeDashoffset = {setProgress(calculateProgress())}
            strokeWidth="14"
            fill="transparent"
            r="68"
            cx="75"
            cy="74"/>
        </svg>
    </div>
}