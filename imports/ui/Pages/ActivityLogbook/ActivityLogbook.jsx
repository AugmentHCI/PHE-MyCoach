import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in';
import "./ActivityLogbook.scss";

import jwt_decode from "jwt-decode";

import Icon from '../../components/Illustrations/Icon';
import NavigationBar from '../../components/NavigationBar';
import Input from '../../components/Input';
import AppModal from '../../components/AppModal';
import moment from 'moment';
import ActivityLogbookManager from '../../../api/ActivityLogbookManager';

export default function PainLogbook() {

    const language = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";
    const userId    = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr) : 1111111;
    const userToken = FlowRouter.getParam('token') ? FlowRouter.getParam('token') : "demo";
    const activityLogbookManager = new ActivityLogbookManager(userId);

    const [selectedDay, setSelectedDay] = useState(moment(new Date()));
    const [weekOffset, updateWeekOffset] = useState(0);
    const [days, setDays] = useState(generateDays(weekOffset));
    const [loading, setLoading] = useState(false);
    const [showModal, toggleShowModal] = useState(false);

    /* New Activity */

    const [activityTitle, updateActivityTitle] = useState("");
    const [startTimeHour, updateStartTimeHour] = useState("");
    const [startTimeMins, updateStartTimeMins] = useState("");
    const [endTimeHour,   updateEndTimeHour]   = useState("");
    const [endTimeMins,   updateEndTimeMins]   = useState("");
    const [intensity, updateIntensity]         = useState("LIGHT");
    const [editingId, updateEditingId]         = useState("");

    const [activities, setActivities] = useState([]);
    const filteredActivities = activities.filter(activity => moment(activity.date).isSame(selectedDay, "day"));

    function generateDays() {
        let day = selectedDay.clone().startOf("isoWeek");
        let week = [];
        for (let i = 0; i < 7; i++) {
            week.push(day.clone());
            day.add(1, "day");
        }
        return week;
    }

    function generateWeekText() {
        let firstDay = selectedDay.clone().startOf("isoWeek");
        let lastDay  = selectedDay.clone().endOf("isoWeek");
        return firstDay.format("D MMMM") + " - " + lastDay.format("D MMMM");
    }

    function renderActivities() {
        //if (loading) return (<div><img src="/illustrations/loading.gif" width="50px" style={{}}/></div>);
        return (<FadeIn>{activities.sort((act1, act2) => toMinutes(act1.startTime) > toMinutes(act2.startTime)).map(activity => {
            if (moment(activity.date).isSame(selectedDay, "day")) return (<Activity 
                key={activity._id} 
                id={activity._id}
                done={activity.done}
                manager={activityLogbookManager}
                title={activity.title} 
                intensity={activity.intensity}
                startTime={activity.startTime}
                toggleDone={toggleDone}
                openActivityEditor={openActivityEditor}
                endTime={activity.endTime}/>)
        })}</FadeIn>)
    }

    async function fetchActivities() {
        setLoading(true);
        const fetchedActivities = await activityLogbookManager.fetchWeekActivity(weekOffset);
        setActivities(fetchedActivities);
        setLoading(false);
    }

    useEffect(() => {
        setDays(generateDays(weekOffset+1));
        fetchActivities();
    }, [selectedDay]);

    function switchWeek(direction) {
        if (direction === "previous") {
            setSelectedDay(prevState => prevState.clone().subtract(1, "week"));
            updateWeekOffset(prevState => prevState + 1);
        }
        else {
            setSelectedDay(prevState => prevState.clone().add(1, "week"));
            updateWeekOffset(prevState => prevState - 1);
        }
    }

    function toggleDone(id, newStatus) {
        activityLogbookManager.toggleActivityDone(id, newStatus);
        const newActivities = [...activities];
        newActivities.find(activity => activity._id === id).done = newStatus;
        setActivities(newActivities);
    }

    function closeActivityModal() {
        toggleShowModal(false);
        updateStartTimeHour(""); updateStartTimeMins(""); updateEndTimeHour(""); updateEndTimeMins("");
        updateIntensity("LIGHT");
        updateActivityTitle("");
        updateEditingId("");
    }

    async function addActivity() {
        const startTime = startTimeHour + ":" + startTimeMins;
        const endTime = endTimeHour + ":" + endTimeMins;
        await activityLogbookManager.insertActivity(selectedDay.toDate(), startTime, endTime, activityTitle, intensity);
        fetchActivities();
    }

    async function updateActivity() {
        const startTime = startTimeHour + ":" + startTimeMins;
        const endTime = endTimeHour + ":" + endTimeMins;
        await activityLogbookManager.updateActivity(editingId, activityTitle, startTime, endTime, intensity);
        toggleShowModal(false);
        updateStartTimeHour(""); updateStartTimeMins(""); updateEndTimeHour(""); updateEndTimeMins("");
        updateIntensity("LIGHT");
        updateActivityTitle("");
        updateEditingId("");
        fetchActivities();
    }

    function saveActivity() {
        if (editingId) updateActivity();
        else addActivity();
        toggleShowModal(false);
        updateStartTimeHour(""); updateStartTimeMins(""); updateEndTimeHour(""); updateEndTimeMins("");
        updateIntensity("LIGHT");
        updateActivityTitle("");
        updateEditingId("");
    }

    function openActivityEditor(activityId) {
        const selectedActivity = activities.find(act => act._id === activityId);
        updateStartTimeHour(selectedActivity.startTime.split(":")[0]); 
        updateStartTimeMins(selectedActivity.startTime.split(":")[1]); 
        updateEndTimeHour(selectedActivity.endTime.split(":")[0]); 
        updateEndTimeMins(selectedActivity.endTime.split(":")[1]);
        updateIntensity(selectedActivity.intensity);
        updateActivityTitle(selectedActivity.title);
        updateEditingId(activityId);
        toggleShowModal(true);
    }

    function renderInformationCard() {
        const lightWidth    = calculateIntensityPercentage("LIGHT"), 
              moderateWidth = calculateIntensityPercentage("MODERATE"), 
              heavyWidth    = calculateIntensityPercentage("HEAVY");

        const time = filteredActivities.length > 0 ? 
            filteredActivities.reduce((total, activity) => {return total + duration(activity.startTime, activity.endTime)}, 0) : 
            0;

        const timeDone = filteredActivities.length > 0 ? 
            filteredActivities.filter(activity => activity.done === true).reduce((total, activity) => {return total + duration(activity.startTime, activity.endTime)}, 0) : 
            0;

        return (<React.Fragment>
            <div className="day-information">
                <h2>Overzicht</h2>
                {filteredActivities.length === 0 && <div className="day-noactivities">Je hebt nog geen activiteiten gepland op deze dag. Voeg er ééntje toe!</div>}
                {filteredActivities.length > 0 && <React.Fragment>
                    <div className="bar-row">
                        {lightWidth > 0 && <div className="intensitybar-light"    style={{width:lightWidth+"%"}}>    <Icon image="sweat-light" color="white" width="10px" style={{marginBottom: 0, marginTop: "1px"}}/> </div>}
                        {moderateWidth > 0 && <div className="intensitybar-moderate" style={{width:moderateWidth+"%"}}> <Icon image="sweat-moderate" color="white" width="20px" style={{marginBottom: 0, marginTop: "1px"}}/> </div>}
                        {heavyWidth > 0 && <div className="intensitybar-heavy"    style={{width:heavyWidth+"%"}}>    <Icon image="sweat-heavy" color="white" width="18px" style={{marginBottom: 0, marginTop: "1px"}}/> </div>}
                    </div>
                    <div style={{marginTop:"4px"}}>
                        Je hebt op deze dag <span className="description">{filteredActivities.length} activiteiten </span> gepland, voor een totaal van 
                            <span className="description"> {Math.floor(time/60) > 0 && Math.floor(time/60) + " uur en "}{time % 60} minuten</span>. 
                            {time !== timeDone && <React.Fragment> Je hebt reeds 
                            <span className="description"> {Math.floor(timeDone/60) > 0 && Math.floor(timeDone/60) + " uur en "}{timeDone % 60} minuten</span> aan activiteiten gedaan.</React.Fragment>}
                            {time === timeDone && <React.Fragment> Je hebt ook alle activiteiten voltooid!</React.Fragment>}
                    </div>
                </React.Fragment>}
            </div>
            {filteredActivities.length > 0 && <hr className="break"/>}
        </React.Fragment>)
    }

    function calculateIntensityPercentage(forIntensity) {
        const aggregate = filteredActivities.reduce((data, activity) => {
            data.total += (toMinutes(activity.endTime) - toMinutes(activity.startTime)); 
            if (activity.intensity === forIntensity) data.sum += (toMinutes(activity.endTime) - toMinutes(activity.startTime));
            return data;
        }, {sum: 0, total: 0});
        return Math.round(aggregate.sum / aggregate.total * 100, 2);
    }

    function renderAddActivityModal() {
        if (!AppModal) return <React.Fragment/>
        return (<AppModal 
                show={showModal} 
                title="Nieuwe activiteit"
                defaultOption={editingId ? "Pas aan" : "Voeg toe"}
                notifyParent={() => saveActivity()}
                backOption="Annuleer"
                notifyBack={() => closeActivityModal()}>
            <Input type="text" value={activityTitle} onChange={updateActivityTitle} placeholder="Naam activiteit" style={{width:"100%"}}/>
            <div className="activity-input-row">
                <Icon image="time" width="20px" color="blue-dark" style={{marginRight: "10px", marginBottom: 0}}/>
                <Input type="text" value={startTimeHour} onChange={updateStartTimeHour} id="startHour" placeholder="08" style={{width:"50px"}} focusNextAfter={2} focusNextId="startMinutes"/>
                <div style={{marginRight:"5px"}}>:</div>
                <Input value={startTimeMins} onChange={updateStartTimeMins} id="startMinutes" type="text" placeholder="30" style={{width:"50px"}} focusNextAfter={2} focusNextId="endHour"/> 
                <div style={{marginRight:"10px"}}>-</div>
                <Input value={endTimeHour} onChange={updateEndTimeHour} id="endHour" type="text" placeholder="10" style={{width:"50px"}} focusNextAfter={2} focusNextId="endMins"/>
                <div style={{marginRight:"5px"}}>:</div>
                <Input value={endTimeMins} onChange={updateEndTimeMins} id="endMins" type="text" placeholder="00" style={{width:"50px"}}/> 
            </div>
            <div className="activity-input-row">
                <Icon image="lifting" width="20px" color="blue-dark" style={{marginRight: "10px"}}/>
                <button className={"intensity-btn-light" + (intensity==="LIGHT" ? "-selected" : "")} onClick={() => updateIntensity("LIGHT")}>
                    <Icon image="sweat-light" width="10px" color={intensity==="LIGHT" ? "white" : "blue-dark"} style={{marginBottom:0}}/> Licht</button>
                <button className={"intensity-btn-moderate" + (intensity==="MODERATE" ? "-selected" : "")} onClick={() => updateIntensity("MODERATE")}>
                    <Icon image="sweat-moderate" width="18px" color={intensity==="MODERATE" ? "white" : "blue-dark"} style={{marginBottom:0}}/> Matig</button>
                <button className={"intensity-btn-heavy" + (intensity==="HEAVY" ? "-selected" : "")} onClick={() => updateIntensity("HEAVY")}>
                    <Icon image="sweat-heavy" width="18px" color={intensity==="HEAVY" ? "white" : "blue-dark"} style={{marginBottom:0}}/> Zwaar</button>
            </div>
        </AppModal>)
    }


    return (<React.Fragment>
        <NavigationBar title="Activiteitenlogboek" back={`/${language}/mycoach/${FlowRouter.getParam('token')}`}/>
        {renderAddActivityModal()}
        <div className="activitylogbook">
            <div className="week-header">
            <Icon image="next" color="blue" style={{transform:'rotate(180deg)', marginRight:"20px", marginTop: "7px"}} onClick={() => switchWeek("previous")}/>
                {generateWeekText()}
            <Icon image="next" color="blue" style={{marginLeft:"20px", marginTop:"7px"}} onClick={() => switchWeek("next")}/>
            </div>
            <div className="activity-days">
                {Object.keys(daysT).map((day, index) => {
                    const isSelected = selectedDay.isSame(days[index], "day");
                    const isDisabled = days[index].isAfter(moment(new Date()));
                    const buttonClass = "activity-day" + (isSelected ? "-selected" : (isDisabled ? "-disabled" : ""));
                    return (<div 
                        key={day} 
                        className={buttonClass}
                        onClick={() => setSelectedDay(days[index])}>
                        {daysT[day][0].toUpperCase() + daysT[day][1]}<br/>{days[index].format("D")}
                    </div>)})}
            </div>
            <div>
                {renderInformationCard()}
                {renderActivities()}
            </div>
            <div className="activity-add" onClick={() => toggleShowModal(prevState => !prevState)}>
                <Icon image="add" color="white" style={{margin:"0"}} width="25px"/>
            </div>
        </div>
    </React.Fragment>);
}

function Activity(props) {
    return (<div className={"activity" + (props.done ? "-done" : "")}>
        <div className="activity-content" onClick={() => props.openActivityEditor(props.id)}>
            <div className="activity-header">
                <div className="activity-title">{props.title}</div>
                <div className={"activity-intensity-" + props.intensity.toLowerCase()}>
                    <Icon image={"sweat-"+props.intensity.toLowerCase()} style={{margin:"0 10px 0 0"}} color="white" width={intensityIconWidth[props.intensity]} />{intensityT[props.intensity]}</div>
            </div>
            <div className="activity-time">{props.startTime} - {props.endTime}</div>
        </div>
        <div className="activity-toggle">
            <Input type="checkbox" value={props.done} onChange={() => props.toggleDone(props.id, !props.done)}/>
        </div>
    </div>)
}

function toMinutes(hour) {
    return (parseInt(hour.split(":")[0]) * 60 + parseInt(hour.split(":")[1]));
}

function duration(startTime, endTime) {
    return parseInt(toMinutes(endTime) - toMinutes(startTime));
}

const daysT = {
    mo: "ma",
    tu: "di",
    we: "wo",
    th: "do",
    fr: "vr",
    sa: "za",
    su: "zo"
}

const intensityIconWidth = {
    HEAVY: "15px",
    MODERATE: "17px",
    LIGHT: "8px"
}

const intensityT = {
    HEAVY: "Zwaar",
    MODERATE: "Matig",
    LIGHT: "Licht"
}