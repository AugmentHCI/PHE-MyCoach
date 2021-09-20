import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in';
import "./ActivityLogbook.scss";

import jwt_decode from "jwt-decode";

import Icon from '../../components/Illustrations/Icon';
import NavigationBar from '../../components/NavigationBar';
import Input from '../../components/Input';
import Dropdown from '../../components/Dropdown';
import AppModal from '../../components/AppModal';
import moment from 'moment';
import ActivityLogbookManager from '../../../api/ActivityLogbookManager';
import GoalSettingManager from '../../../api/GoalSettingManager';
import BuildupScheme from '../../../api/BuildupScheme';
import LoadingScreen from '../LoadingScreen'


export default function PainLogbook() {

    const language = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";
    const userId   = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr) : 1111111;
    const activityLogbookManager = new ActivityLogbookManager(userId);
    const goalSettingManager     = new GoalSettingManager(userId);

    const [selectedDay, setSelectedDay] = useState(moment(new Date()));
    const [weekOffset, updateWeekOffset] = useState(0);
    const [days, setDays] = useState(generateDays());
    const [loading, setLoading] = useState(true);
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
    const [goals, setGoals] = useState([]);
    const [selectedGoalId, updateSelectedGoalId]   = useState(undefined);
    const selectedGoal = getGoal(selectedGoalId);
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

    async function fetchActivities() {
        setLoading(true);
        const fetchedActivities = await activityLogbookManager.fetchWeekActivity(weekOffset);
        setActivities(fetchedActivities);
        setLoading(false);
    }

    async function fetchGoals() {
        let fetchedGoals = await goalSettingManager.getUserGoals();
        fetchedGoals.unshift({_id: null, title: "Geen"});
        setGoals(fetchedGoals);
    }

    useEffect(() => {
        setDays(generateDays());
        fetchActivities();
    }, [weekOffset]);

    useEffect(() => {
        fetchGoals();
    }, []);

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

    function getGoal(id) {
        const filteredGoals = goals.filter(goal => goal._id === id);
        if (filteredGoals.length > 0) return filteredGoals[0];
        else return undefined;
    }

    async function addActivity() {
        const startTime = startTimeHour + ":" + startTimeMins;
        const endTime = endTimeHour + ":" + endTimeMins;
        await activityLogbookManager.insertActivity({
            date: selectedDay.toDate(), 
            startTime: startTime, 
            endTime: endTime, 
            title: activityTitle, 
            intensity: intensity, 
            goalId: selectedGoalId ? selectedGoalId : null});
        fetchActivities();
    }

    async function updateActivity() {
        const startTime = startTimeHour + ":" + startTimeMins;
        const endTime = endTimeHour + ":" + endTimeMins;
        await activityLogbookManager.updateActivity({
            activityID: editingId, 
            title: activityTitle, 
            startTime: startTime, 
            endTime: endTime, 
            intensity: intensity, 
            goalID: selectedGoalId});
        toggleShowModal(false);
        updateStartTimeHour(""); updateStartTimeMins(""); updateEndTimeHour(""); updateEndTimeMins("");
        updateIntensity("LIGHT");
        updateActivityTitle("");
        updateEditingId("");
        updateSelectedGoalId(undefined);
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
        updateSelectedGoalId(undefined);
    }

    function checkActivityInputValidity() {
        if (!activityTitle || !intensity || !startTimeHour || !startTimeMins || !endTimeHour || !endTimeMins) return false;
        if (startTimeHour * 60 + startTimeMins >= endTimeHour * 60 + endTimeMins) return false;
        return true;
    }

    function openActivityEditor(activityId, isGoal=false, goal=undefined) {
        if (isGoal) {
            updateSelectedGoalId(goal._id);
            updateActivityTitle(goal.title);
            updateIntensity("LIGHT")
            toggleShowModal(true);
            return;
        }
        const selectedActivity = activities.find(act => act._id === activityId);
        updateStartTimeHour(selectedActivity.startTime.split(":")[0]); 
        updateStartTimeMins(selectedActivity.startTime.split(":")[1]); 
        updateEndTimeHour(selectedActivity.endTime.split(":")[0]); 
        updateEndTimeMins(selectedActivity.endTime.split(":")[1]);
        updateIntensity(selectedActivity.intensity);
        updateActivityTitle(selectedActivity.title);
        if (selectedActivity.goal) updateSelectedGoalId(selectedActivity.goal) 
        else updateSelectedGoalId(undefined);
        updateEditingId(activityId);
        toggleShowModal(true);
    }

    function closeActivityEditor() {
        toggleShowModal(false);
        updateStartTimeHour(""); updateStartTimeMins(""); updateEndTimeHour(""); updateEndTimeMins("");
        updateIntensity("LIGHT");
        updateActivityTitle("");
        updateSelectedGoalId(undefined);
        updateEditingId("");
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

    function renderActivities() {
        if (loading) return <LoadingScreen text=" "/>
        if (filteredActivities.length === 0) return <React.Fragment/>
        return (<FadeIn>
            <div className="planned-activities">
            <h2>Je planning</h2>
            {activities.sort((act1, act2) => toMinutes(act1.startTime) > toMinutes(act2.startTime)).map(activity => {
            if (moment(activity.date).isSame(selectedDay, "day")) { return (<Activity 
                key={activity._id} 
                id={activity._id}
                done={activity.done}
                manager={activityLogbookManager}
                title={activity.title} 
                intensity={activity.intensity}
                startTime={activity.startTime}
                toggleDone={toggleDone}
                goal={getGoal(activity.goal)}
                week={moment().subtract(weekOffset, "week").format("W-YYYY")}
                openActivityEditor={openActivityEditor}
                endTime={activity.endTime}/>)}
        })}
        </div></FadeIn>)
    }

    function renderPlanActivities() {
        const day = moment(selectedDay).locale('en').format('dddd').slice(0, 2).toLowerCase();
        const selectedDayGoals = [...goals].filter(goal => {
            if (goal._id) { /* Skip the 'None' goal */
                const selectedDays = Object.keys(JSON.parse(goal.days)).filter(function(d){return JSON.parse(goal.days)[d]});
                if (!selectedDays.includes(day)) return false;
                for (const act of filteredActivities) {
                    if (act.goal && act.goal === goal._id) { return false; }
                }
                return true;
            }
        });
        if (selectedDayGoals.length === 0) return <React.Fragment/>
        return (<div className="planned-activities">
            <h2>Plan deze activiteiten in</h2>
            {selectedDayGoals.map(goal => {return (<Activity 
                key={goal._id} 
                done={false}
                goal={getGoal(goal._id)}
                manager={activityLogbookManager}
                toggleDone={toggleDone}
                week={moment().subtract(weekOffset, "week").format("W-YYYY")}
                isGoal
                openActivityEditor={openActivityEditor}/>)})}
            <hr className="break"/>
        </div>)
    }

    function handleDropdownGoalSelection(selectedGoals) {
        if (!selectedGoals || selectedGoals.length === 0) { updateSelectedGoalId(undefined) }
        else if (!selectedGoals[0]._id ) { updateSelectedGoalId(undefined) }
        else { updateSelectedGoalId(selectedGoals[0]._id) }
    }

    function renderAddActivityModal() {
        if (!showModal) return <React.Fragment/>
        return (<AppModal 
                show={showModal} 
                title="Nieuwe activiteit"
                defaultOption={editingId ? "Pas aan" : "Voeg toe"}
                disabledDefault={!checkActivityInputValidity()}
                notifyParent={() => saveActivity()}
                backOption="Annuleer"
                notifyBack={() => closeActivityEditor()}>
            <Input type="text" value={activityTitle} onChange={updateActivityTitle} placeholder="Naam activiteit" style={{width:"100%"}}/>
            <div className="activity-input-row">
                <Icon image="time" width="20px" color="blue-dark" style={{marginRight: "10px", marginBottom: 0}}/>
                <Input type="tel" value={startTimeHour} onChange={updateStartTimeHour} id="startHour" placeholder="08" style={{width:"55px"}} between={[0, 23]} maxLength={2}/>
                <div style={{marginRight:"5px"}}>:</div>
                <Input type="tel" value={startTimeMins} onChange={updateStartTimeMins} id="startMinutes" placeholder="30" style={{width:"55px"}} between={[0, 59]} maxLength={2}/> 
                <div style={{marginRight:"10px"}}>-</div>
                <Input type="tel" value={endTimeHour} onChange={updateEndTimeHour} id="endHour" placeholder="10" style={{width:"55px"}} between={[0, 23]} maxLength={2}/>
                <div style={{marginRight:"5px"}}>:</div>
                <Input type="tel" value={endTimeMins} onChange={updateEndTimeMins} id="endMins" placeholder="00" style={{width:"55px"}} between={[0, 59]} maxLength={2}/> 
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
            <div className="activity-input-row">
                <Icon image="goal" width="20px" color="blue-dark" style={{marginRight: "10px", marginBottom: 0}}/>
                <Dropdown defaultText={"Kies een doel (optioneel)"} defaultItems={selectedGoal ? [selectedGoal] :  []} items={goals} style={{flex: 2}} idKey="_id" valueKey="title" onChange={(selectedGoals) => handleDropdownGoalSelection(selectedGoals) }/>
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
                    const dayActivities = activities.filter(activity => moment(activity.date).isSame(days[index], "day"));
                    return (<div 
                        key={day} 
                        className={buttonClass + (dayActivities.length > 0 ? (isSelected ? " bordered-selected" : " bordered") : "")}
                        onClick={() => setSelectedDay(days[index])}>
                        {daysT[day][0].toUpperCase() + daysT[day][1]}<br/>{days[index].format("D")}
                    </div>)})}
            </div>
            <div>
                {renderInformationCard()}
                {renderPlanActivities()}
                {renderActivities()}
            </div>
            <div className="activity-add" onClick={() => toggleShowModal(prevState => !prevState)}>
                <Icon image="add" color="white" style={{margin:"0"}} width="25px"/>
            </div>
        </div>
    </React.Fragment>);
}

function Activity(props) {
    const buildupScheme = props.goal?.buildupScheme ? new BuildupScheme({schemeString: props.goal.buildupScheme}) : undefined;
    let unit = buildupScheme?.unit;
    if (unit && unit.length > 0) unit = unit[0].short;
    const quantity = buildupScheme ? buildupScheme.getGoal(props.week) : undefined;
    return (<div className={"activity" + (props.done ? "-done" : "")}>
        <div className="activity-content" onClick={() => props.openActivityEditor(props.id, props.isGoal, props.goal)}>
            <div className="activity-header">
                { props.isGoal && <Icon image={"goal"} style={{margin:"0 10px 0 0"}} color="blue" width={"16px"} /> }
                <div className="activity-title">{props.isGoal ? props.goal.title : props.title } {!props.isGoal && quantity && <p style={{display:"inline", fontSize:"14px", color:"var(--idewe-gray)", marginLeft: "2px"}}>{quantity + " " + unit}</p>}</div>
            </div>
            <div style={{display:"flex"}}>
                {props.intensity && <div className={"activity-intensity-" + props.intensity.toLowerCase()}>
                        <Icon image={"sweat-"+props.intensity.toLowerCase()} style={{margin:"0 10px 0 0"}} color="white" width={intensityIconWidth[props.intensity]} />{intensityT[props.intensity]}
                </div>}
                { props.goal && !props.isGoal && <div className="activity-goal"> <Icon image={"goal"} style={{margin:"0 10px 0 0"}} color="white" width={"12px"} /> {props.goal.title} </div>}
            </div>
            { props.startTime && props.endTime && <div className="activity-time">{props.startTime} - {props.endTime}</div> }
        </div>
        {!props.isGoal && <div className="activity-toggle">
            Klaar
            <Input type="checkbox" value={props.done} style={{marginTop:"3px"}} onChange={() => props.toggleDone(props.id, !props.done)}/>
        </div>}
        {props.isGoal && quantity && <div className="activity-intensity-moderate">{quantity + " " + unit}</div>}
        {props.isGoal && <div className="activity-toggle" onClick={() => props.openActivityEditor(props.id, props.isGoal, props.goal)}> <Icon image="next" color="blue" style={{marginTop:"3px"}}/> </div>}
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

const quantityT = {
    "steps": "stappen",
    "distance": "km",
    "time": "min",
    "amount": "keer"
}
