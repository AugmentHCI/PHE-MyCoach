import React, { useState, useEffect } from "react";
import { getSubmoduleMetadata } from "../../api/scripts/ScriptDispatcher";

import jwt_decode from "jwt-decode";

import AppModal from "./AppModal";
import PillButton from "./PillButton";
import Illustration from "./Illustrations/Illustration";
import ProgressManager from "../../api/managers/ProgressManager";



export default function CoachingModal({module, submodule, showModal, setShowModal, userToken, language, checkProgress=false}) {

    const [coachingData, setCoachingData] = useState(undefined);
    const [isLocked, setIsLocked] = useState(undefined);

    useEffect(() => {
        async function fetchData() {
            const fetchedCoachingData = getSubmoduleMetadata({module: module, submoduleID: submodule});
            setCoachingData(fetchedCoachingData);
            if (checkProgress) {
                const userID = parseInt(jwt_decode(userToken)?.rrnr);
                const progressManager = new ProgressManager(userID);
                const progress = await progressManager.getUserProgress();
                const moduleProgress = progress?.[fullMapping[module]]?.[submodule];
                setIsLocked(moduleProgress === "LOCKED")
            }
        }
       fetchData();
    }, [])

    if (coachingData) return(<AppModal
        backOption="Sluit" 
        notifyBack={() => setShowModal(false)} 
        notifyParent={() => {FlowRouter.go(`/${language}/mycoach/${userToken}/module/${module}/${submodule}`)}}
        defaultOption="Bekijk"
        addLockedIcon={ checkProgress && isLocked }
        defaultColor={ checkProgress && isLocked ? "gray" : "blue" }
        disabledDefault={checkProgress && isLocked}
        noPadding
        show={showModal}>
        <div className="modalpopup-top">
            <Illustration image={coachingData.image + (checkProgress && isLocked ? "-locked" : "")} width={coachingData.imageWidth ? coachingData.imageWidth : "160px"} style={{position: "absolute", bottom: "0px", right: "20px", zIndex: "1"}}/>
            <div className={"module-card-number"}>Onderdeel {coachingData.part}</div>
            <div className={"modalpopup-card-title"}>{coachingData.titleMarkup[0]}</div>
            {coachingData.titleMarkup.length > 1 && <div className={"modalpopup-card-title"}>{coachingData.titleMarkup[1]}</div>}
        </div>
        <div className={"modalpopup-body"}>
            <div style={{display:'flex', marginBottom:'5px'}}>
                <PillButton contentColor="white" fillColor={checkProgress && isLocked ? "gray" : "blue"} icon="time">{coachingData.duration}</PillButton>
                <PillButton contentColor="white" fillColor={checkProgress && isLocked ? "gray" : "blue"} icon="information">{coachingData.type}</PillButton>
            </div>
            <div className={"modalpopup-card-module"}>{moduleMapping[module]}</div>
            {coachingData.description}
        </div>
    </AppModal>);
    return (<React.Fragment/>)
}

const moduleMapping = {
    "paineducation": "Pijneducatie",
    "thoughtsemotions": "Gedachten & Emoties",
    "activitywork": "Belasting & Belastbaarheid",
    "stress": "Stress & Veerkracht",
    "social": "Sociale omgeving",
    "movement": "Bewegen"
}

const fullMapping = {
    "PE": "PAINEDUCATION",
    "ACT": "ACTIVITYWORK",
    "TE": "THOUGHTSEMOTIONS",
    "MOV": "MOVEMENT",
    "STR": "STRESSRESILIENCE",
    "SOC": "SOCIAL"
}