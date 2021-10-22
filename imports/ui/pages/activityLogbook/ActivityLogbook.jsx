import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* External API */
import FadeIn from 'react-fade-in';
import jwt_decode from "jwt-decode";
import moment from 'moment';

/* Internal API */
import BuildupScheme from '../../../api/BuildupScheme';
import { DAYS, INTENSITIES, QUANTITIES } from '../../../api/data/GoalsActivities';

/* Managers */
import ActivityLogbookManager from '../../../api/managers/ActivityLogbookManager';
import GoalSettingManager from '../../../api/managers/GoalSettingManager';

/* UI Components */
import Icon from '../../components/Illustrations/Icon';
import NavigationBar from '../../components/NavigationBar';
import Input from '../../components/Input';
import Dropdown from '../../components/Dropdown';
import AppModal from '../../components/AppModal';
import LoadingScreen from '../../components/LoadingScreen';

/* Styles */
import "./ActivityLogbook.scss";


export default function ActivityLogbook() {

    const language = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";
    const userId   = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr) : 1111111;
    const activityLogbookManager = new ActivityLogbookManager(userId);
    const goalSettingManager     = new GoalSettingManager(userId);

    const [selectedDay, setSelectedDay] = useState(moment(new Date()));
    const [weekOffset, updateWeekOffset] = useState(0);
    const [days, setDays] = useState(generateDays());
    const [loading, setLoading] = useState(true);
    
    /* New Activity */
    
    const [activityTitle, updateActivityTitle] = useState("");
    const [startTimeHour, updateStartTimeHour] = useState("");
    const [startTimeMins, updateStartTimeMins] = useState("");
    const [endTimeHour,   updateEndTimeHour]   = useState("");
    const [endTimeMins,   updateEndTimeMins]   = useState("");
    const [wholeDay,      setWholeDay]         = useState(false);
    const [intensity,     updateIntensity]     = useState("LIGHT");
    const [editingId,     updateEditingId]     = useState("");
    const [measuringGoal, updateMeasuringGoal] = useState("");
    const [measurement,   updateMeasurement]   = useState("");
    
    const [showModal, toggleShowModal] = useState(false);
    const [showMeasureModal, updateShowMeasureModal] = useState(false);
    const [showMeasuresCompleteModal, updateShowMeasuresCompleteModal] = useState(false);
    const [showGoalModal, updateShowGoalModal] = useState(false);

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
        let updatedActivity = newActivities.find(activity => activity._id === id);
        updatedActivity.done = newStatus;
        if (updatedActivity.goal && newStatus) goalSettingManager.getUserGoal(updatedActivity.goal).then(goal => {
            if (goal.buildupScheme) {
                const buildupScheme = new BuildupScheme({schemeString: goal.buildupScheme});
                if (buildupScheme.needsMeasurement()) {
                    updateMeasuringGoal(goal);
                    updateShowMeasureModal(true);
                }
                else if (!buildupScheme.needsMeasurement()) {
                    updateMeasuringGoal(goal);
                    updateShowGoalModal(true);
                }
            }
        })
        setActivities(newActivities);
    }


    async function addGoalValue() {
        const newGoals = goals.filter(goal => goal._id !== measuringGoal._id);
        const buildupScheme = new BuildupScheme({schemeString: measuringGoal.buildupScheme});
        buildupScheme.addValue({date: selectedDay.format("DD-MM-YYYY"), value: measurement});
        goalSettingManager.updateGoalScheme({goalID: measuringGoal._id, buildupScheme: buildupScheme.toString()});
        measuringGoal.buildupScheme = buildupScheme.toString();
        newGoals.push(measuringGoal);
        setGoals(newGoals);
        updateMeasurement("");
        updateShowGoalModal(false);
        const setGoal = buildupScheme.getGoal(selectedDay.format("WW-YYYY"));
        if (measurement >= setGoal * 1.1) toast.warning('Je hebt meer gedaan dan het huidige doel. Jouw enthousiasme is super! Maar probeer je aan het opbouwschema te houden, anders loop je het risico op overbelasting.', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            });
        else if (measurement <= setGoal * 0.9) toast.error('Jammer, je hebt je huidige doel niet bereikt. Probeer je te houden aan het opbouwschema. Niet opgeven, volgende keer beter!', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            });
        else toast.success('Proficiat, je hebt je doel behaald! Doe zo verder!', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
        });
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
            wholeDay: wholeDay,
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
            wholeDay: wholeDay,
            goalID: selectedGoalId});
        toggleShowModal(false);
        updateStartTimeHour(""); updateStartTimeMins(""); updateEndTimeHour(""); updateEndTimeMins("");
        updateIntensity("LIGHT");
        setWholeDay(false);
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
        setWholeDay(false);
        updateEditingId("");
        updateSelectedGoalId(undefined);
    }

    function addMeasurement() {
        const buildupScheme = new BuildupScheme({schemeString: measuringGoal.buildupScheme});
        buildupScheme.updateMeasurement(buildupScheme.getNextMeasurementIdNeeded(), parseInt(measurement));

        /* Update goal in database */
        goalSettingManager.updateGoalScheme({goalID: measuringGoal._id, buildupScheme: buildupScheme.toString()}); 
        /* Update local copy of goal as well */
        let newGoals = [...goals];
        const goalIndex = newGoals.findIndex(goal => measuringGoal?._id === goal._id);
        newGoals[goalIndex].buildupScheme = buildupScheme.toString();
        setGoals(newGoals);
        updateMeasuringGoal(newGoals[goalIndex]);

        updateMeasurement("");
        updateShowMeasureModal(false);
        if (!buildupScheme.needsMeasurement()) updateShowMeasuresCompleteModal(true);
        else updateMeasuringGoal(undefined);
    }

    function checkActivityInputValidity() {
        /* Needs activity title and intensity */
        if (!activityTitle || !intensity) return false;
        /* If not the whole day, needs start time and end time */
        if (!wholeDay &&  (!startTimeHour || !startTimeMins || !endTimeHour || !endTimeMins)) return false;
        /* If not the whole day, start time comes before end time */
        if (!wholeDay &&  (startTimeHour * 60 + startTimeMins >= endTimeHour * 60 + endTimeMins)) return false;
        return true;
    }

    function openActivityEditor(activityId, isGoal=false, goal=undefined) {
        if (isGoal) {
            updateSelectedGoalId(goal._id);
            updateActivityTitle(goal.title);
            updateIntensity("LIGHT");
            setWholeDay(goal.wholeDay);
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
        const activityGoal = getGoal(selectedActivity.goal);
        setWholeDay(activityGoal?.wholeDay ? activityGoal.wholeDay : false);
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

    function calculateIntensityPercentage(forIntensity) {
        const aggregate = filteredActivities.reduce((data, activity) => {
            data.total += (toMinutes(activity.endTime) - toMinutes(activity.startTime)); 
            if (activity.intensity === forIntensity) data.sum += (toMinutes(activity.endTime) - toMinutes(activity.startTime));
            return data;
        }, {sum: 0, total: 0});
        return Math.round(aggregate.sum / aggregate.total * 100, 2);
    }

    function handleDropdownGoalSelection(selectedGoals) {
        if (!selectedGoals || selectedGoals.length === 0) { updateSelectedGoalId(undefined) }
        else if (!selectedGoals[0]._id ) { updateSelectedGoalId(undefined) }
        else { 
            updateSelectedGoalId(selectedGoals[0]._id); 
            if (wholeDay !== selectedGoals[0].wholeDay) {
                updateStartTimeMins("");
                updateStartTimeHour("");
                updateEndTimeMins("");
                updateEndTimeHour("");
            }
            setWholeDay(selectedGoals[0].wholeDay ? true : false) 
        }
    }

    /* Modals */

    function renderGoalModal() {
        if (!showGoalModal || !measuringGoal) return <React.Fragment/>;
        const unit = QUANTITIES[measuringGoal?.quantifier]?.value;
        return (<AppModal
            show={showGoalModal} 
            title={"Meting: " + measuringGoal.title}
            backOption="Geen meting"
            defaultOption="Opslaan"
            disabledDefault={!measurement || measurement === 0 || isNaN(measurement)}
            notifyBack={() => {updateMeasuringGoal(undefined); updateShowGoalModal(false)}}
            notifyParent={() => addGoalValue()}>
                Je hebt een doel voltooid! Wat is je meting?<br/>
                <Input type="tel" placeholder="00" onChange={updateMeasurement} value={measurement}/>
                <h3 style={{display:"inline", color:"var(--idewe-blue)", fontFamily:"var(--main-font)"}}>{unit}</h3>
        </AppModal>)
    }

    function renderMeasureCompleteModal() {
        if (!showMeasuresCompleteModal || ! measuringGoal) return <React.Fragment/>;
        const buildupScheme = new BuildupScheme({schemeString: measuringGoal.buildupScheme});
        if (!buildupScheme?.scheme || buildupScheme?.scheme?.length === 0) return (<AppModal
            show={showMeasuresCompleteModal} 
            title={"Opbouwschema niet opgesteld"}
            backOption="Sluit"
            defaultOption="Bekijk doel"
            notifyBack={() => {updateMeasuringGoal(undefined); updateShowMeasuresCompleteModal(false)}}
            notifyParent={() => FlowRouter.go(`/${language}/mycoach/${FlowRouter.getParam('token')}/values/${measuringGoal._id}`)}>
            Je hebt 3 metingen ingegeven voor jouw doel. We kunnen met deze metingen echter geen opbouwschema opmaken om je doel in een redelijke tijd te behalen. Bekijk je metingen, en stel je doel desnoods bij.
        </AppModal>)
        return (<AppModal
            show={showMeasuresCompleteModal} 
            title={"Opbouwschema opgesteld"}
            backOption="Sluit"
            defaultOption="Bekijk schema"
            notifyBack={() => {updateMeasuringGoal(undefined); updateShowMeasuresCompleteModal(false)}}
            notifyParent={() => FlowRouter.go(`/${language}/mycoach/${FlowRouter.getParam('token')}/values/${measuringGoal._id}`)}>
            Je hebt 3 metingen ingegeven voor jouw doel. We hebben hiermee een opbouwschema gemaakt zodat je <b>binnen de {buildupScheme.scheme.length} {buildupScheme.scheme.length === 1 ? "week" : "weken"} jouw doel van {buildupScheme.goal} {buildupScheme.unit[0]?.short} kan behalen</b>. De eerste week <b>begin je met {buildupScheme.scheme[0].goal} {buildupScheme.unit[0]?.value}, succes!</b>
        </AppModal>)
    }

    function renderMeasureModal() {
        if (!showMeasureModal || !measuringGoal) return <React.Fragment/>
        const unit = QUANTITIES[measuringGoal?.quantifier]?.value;
        return (<AppModal
            show={showMeasureModal} 
            title={"Meetmoment: " + measuringGoal.title}
            backOption="Geen meting"
            defaultOption="Sla op"
            disabledDefault={!measurement || measurement === 0 || isNaN(measurement)}
            notifyBack={() => {updateMeasuringGoal(undefined); updateMeasurement(""); updateShowMeasureModal(false)}}
            notifyParent={() => addMeasurement()}>
                Je hebt je activiteit "{measuringGoal.title.toLowerCase()}" afgevinkt dat gelinkt is aan een doel dat jij momenteel aan het opbouwen bent. Als je hiervoor een meting hebt, kan je dat invullen.
                <br/>
                <Input type="tel" placeholder="00" onChange={updateMeasurement} value={measurement}/>
                <h3 style={{display:"inline", color:"var(--idewe-blue)", fontFamily:"var(--main-font)"}}>{unit}</h3>
            </AppModal>)
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
            {wholeDay && <div className="activity-input-row"><Icon image="time" width="20px" color="blue-dark" style={{marginRight: "10px", marginBottom: 0}}/>Gedurende de hele dag</div>}
            {!wholeDay && <div className="activity-input-row">
                <Icon image="time" width="20px" color="blue-dark" style={{marginRight: "10px", marginBottom: 0}}/>
                <Input type="tel" value={startTimeHour} onChange={updateStartTimeHour} id="startHour" placeholder="08" style={{width:"52px"}} between={[0, 23]} maxLength={2}/>
                <div style={{marginRight:"5px"}}>:</div>
                <Input type="tel" value={startTimeMins} onChange={updateStartTimeMins} id="startMinutes" placeholder="30" style={{width:"52px"}} between={[0, 59]} maxLength={2}/> 
                <div style={{marginRight:"10px"}}>-</div>
                <Input type="tel" value={endTimeHour} onChange={updateEndTimeHour} id="endHour" placeholder="10" style={{width:"52px"}} between={[0, 23]} maxLength={2}/>
                <div style={{marginRight:"5px"}}>:</div>
                <Input type="tel" value={endTimeMins} onChange={updateEndTimeMins} id="endMins" placeholder="00" style={{width:"52px"}} between={[0, 59]} maxLength={2}/> 
            </div>}
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

    /* Render functions */

    function renderActivities() {
        if (loading) return <LoadingScreen text=" "/>
        const planActivities = [...filteredActivities].filter(activity => !activity.wholeDay)
        if (planActivities.length === 0) return <React.Fragment/>
        return (<FadeIn>
            <div className="planned-activities">
            <h2>Je planning</h2>
            {planActivities.sort((act1, act2) => toMinutes(act1.startTime) > toMinutes(act2.startTime)).map(activity => {
             return (<PlannedActivity 
                key={activity._id} 
                activity={activity}
                toggleDone={toggleDone}
                goal={getGoal(activity.goal)}
                selectedDay={selectedDay}
                week={moment().subtract(weekOffset, "week").format("W-YYYY")}
                openActivityEditor={openActivityEditor}/>)}
        )}
        </div></FadeIn>)
    }

    function renderWholeDayActivities() {
        const planActivities = [...filteredActivities].filter(activity => activity.wholeDay)
        if (planActivities.length === 0) return <React.Fragment/>
        return (<FadeIn>
            <div className="planned-activities">
            <h2>Gedurende de hele dag</h2>
            {planActivities.sort((act1, act2) => toMinutes(act1.startTime) > toMinutes(act2.startTime)).map(activity => {
            if (moment(activity.date).isSame(selectedDay, "day") && activity.wholeDay) { return (<PlannedActivity 
                key={activity._id} 
                activity={activity}
                manager={activityLogbookManager}
                toggleDone={toggleDone}
                goal={getGoal(activity.goal)}
                selectedDay={selectedDay}
                week={moment().subtract(weekOffset, "week").format("W-YYYY")}
                openActivityEditor={openActivityEditor}/>)}
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
            {selectedDayGoals.map(goal => {return (<ToPlanActivity 
                key={goal._id} 
                goal={getGoal(goal._id)}
                selectedDay={selectedDay}
                manager={activityLogbookManager}
                toggleDone={toggleDone}
                week={moment().subtract(weekOffset, "week").format("W-YYYY")}
                openActivityEditor={openActivityEditor}/>)})}
            <hr className="break"/>
        </div>)
    }

    function renderInformationCard() {
        const lightWidth    = calculateIntensityPercentage("LIGHT"), 
              moderateWidth = calculateIntensityPercentage("MODERATE"), 
              heavyWidth    = calculateIntensityPercentage("HEAVY");

        const time = filteredActivities.length > 0 ? 
            filteredActivities.reduce((total, activity) => {if (activity.startTime && activity.startTime && activity.startTime !== ":" && activity.endTime !== ":") 
                                                                {return total + duration(activity.startTime, activity.endTime)} 
                                                            else {return total}}, 0) : 
            0;

        const timeDone = filteredActivities.length > 0 ? 
            filteredActivities.filter(activity => activity.done === true).reduce((total, activity) => {if (activity.startTime && activity.startTime && activity.startTime !== ":" && activity.endTime !== ":") 
                {return total + duration(activity.startTime, activity.endTime)} 
            else {return total}}, 0) : 
            0;
        
        const finishedCount = filteredActivities.length > 0 ? filteredActivities.filter(activity => activity.done === true).length : 0;
        const activityCount = filteredActivities.length;

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
                        Je hebt op deze dag <span className="description">{filteredActivities.length === 1 ? "1 activiteit" : filteredActivities.length + " activiteiten"} </span> gepland{time > 0 && <React.Fragment>, voor een totaal van 
                            <span className="description"> {Math.floor(time/60) > 0 && Math.floor(time/60) + " uur"}{time % 60 > 0 &&  " en " + (time % 60) + " minuten"}</span></React.Fragment>}. 
                            {time !== timeDone && timeDone !== 0 && <React.Fragment> Je hebt reeds 
                            <span className="description"> {Math.floor(timeDone/60) > 0 && Math.floor(timeDone/60) + " uur "}{timeDone % 60 > 0 && " en " + timeDone % 60 + " minuten"}</span> aan activiteiten gedaan.</React.Fragment>}
                            {timeDone === 0 && time > 0 && <React.Fragment> Voltooi je activiteiten!</React.Fragment>}
                            {activityCount === finishedCount && <React.Fragment> Je hebt ook alle activiteiten voltooid!</React.Fragment>}
                    </div>
                </React.Fragment>}
            </div>
            {filteredActivities.length > 0 && <hr className="break"/>}
        </React.Fragment>)
    }

    /* Return */

    return (<React.Fragment>
        <NavigationBar title="Activiteitenlogboek" back={`/${language}/mycoach/${FlowRouter.getParam('token')}`}/>
        <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        {renderAddActivityModal()}
        {renderMeasureModal()}
        {renderMeasureCompleteModal()}
        {renderGoalModal()}
        <div className="activitylogbook">
            <div className="week-header">
            <Icon image="next" color="blue" style={{transform:'rotate(180deg)', marginRight:"20px", marginTop: "3px"}} onClick={() => switchWeek("previous")}/>
                {generateWeekText()}
            <Icon image="next" color="blue" style={{marginLeft:"20px", marginTop:"3px"}} onClick={() => switchWeek("next")}/>
            </div>
            <div className="activity-days">
                {Object.keys(DAYS).map((day, index) => {
                    const isSelected = selectedDay.isSame(days[index], "day");
                    const isDisabled = days[index].isAfter(moment(new Date()));
                    const buttonClass = "activity-day" + (isSelected ? "-selected" : (isDisabled ? "-disabled" : ""));
                    const dayActivities = activities.filter(activity => moment(activity.date).isSame(days[index], "day"));
                    return (<div 
                        key={day} 
                        className={buttonClass + (dayActivities.length > 0 ? (isSelected ? " bordered-selected" : " bordered") : "")}
                        onClick={() => setSelectedDay(days[index])}>
                            <div>{DAYS[day][0].toUpperCase() + DAYS[day][1]}</div>
                            <div>{days[index].format("D")}</div>
                    </div>)})}
            </div>
            <div>
                {renderInformationCard()}
                {renderPlanActivities()}
                {renderWholeDayActivities()}
                {renderActivities()}
            </div>
            <div className="activity-add" onClick={() => toggleShowModal(prevState => !prevState)}>
                <Icon image="add" color="white" style={{margin:"0"}} width="25px"/>
            </div>
        </div>
    </React.Fragment>);
}

function PlannedActivity({activity, goal, selectedDay, week, openActivityEditor, toggleDone}) {
    const buildupScheme = goal?.buildupScheme ? new BuildupScheme({schemeString:goal.buildupScheme}) : undefined;
    let unit = buildupScheme?.unit;
    if (unit && unit.length > 0) unit = unit[0].short;
    const quantity = buildupScheme ? buildupScheme.getGoal(week) : undefined;
    const goalValue = buildupScheme ? buildupScheme.getValue({day: selectedDay.format("DD-MM-YYYY")}) : undefined;
    const goalColor = goalValue?.achieved ? "var(--idewe-green)" : (!goalValue ? "var(--idewe-gray)" : "var(--idewe-red)");
    return (<div className={"activity" + (activity.done ? "-done" : "")}>
        <div className="activity-content" onClick={() => openActivityEditor(activity._id, false, goal)}>
            <div className="activity-header">
                <div className="activity-title">
                    { activity.title }
                    {quantity && <p style={{display:"inline", fontSize:"14px", color:goalColor, marginLeft: "5px"}}>{(goalValue?.value ? goalValue.value : quantity) + " " + unit}</p>}
                </div>
            </div>
            <div style={{display:"flex"}}>
                {activity.intensity && <div className={"activity-intensity-" + activity.intensity.toLowerCase()}>
                        <Icon image={"sweat-"+activity.intensity.toLowerCase()} style={{margin:"0 10px 0 0"}} color="white" width={intensityIconWidth[activity.intensity]} />{INTENSITIES[activity.intensity]}
                </div>}
                { goal && <div className="activity-goal"> <Icon image={"goal"} style={{margin:"0 10px 0 0"}} color="white" width={"12px"} /> {goal.title} </div>}
            </div>
            { activity.startTime && activity.endTime && !goal?.wholeDay && <div className="activity-time">{activity.startTime} - {activity.endTime}</div> }
        </div>
        <div className="activity-toggle">
            Klaar
            <Input type="checkbox" value={activity.done} style={{marginTop:"3px"}} onChange={() => toggleDone(activity._id, !activity.done)}/>
        </div>
    </div>)
}

function ToPlanActivity({id, goal, intensity, selectedDay, week, openActivityEditor}) {
    const buildupScheme = goal?.buildupScheme ? new BuildupScheme({schemeString:goal.buildupScheme}) : undefined;
    let unit = buildupScheme?.unit;
    if (unit && unit.length > 0) unit = unit[0].short;
    const quantity = buildupScheme ? buildupScheme.getGoal(week) : undefined;
    return (<div className={"activity"}>
        <div className="activity-content" onClick={() => openActivityEditor(id, true, goal)}>
            <div className="activity-header">
                <Icon image={"goal"} style={{margin:"0 10px 0 0"}} color="blue" width={"16px"} />
                <div className="activity-title">{ goal.title }</div>
            </div>
            <div style={{display:"flex"}}>
                {intensity && <div className={"activity-intensity-" + intensity.toLowerCase()}>
                        <Icon image={"sweat-"+intensity.toLowerCase()} style={{margin:"0 10px 0 0"}} color="white" width={intensityIconWidth[intensity]} />{INTENSITIES[intensity]}
                </div>}
            </div>
        </div>
        {quantity && <div className="activity-intensity-moderate">{quantity + " " + unit}</div>}
        <div className="activity-toggle" onClick={() => openActivityEditor(id, true, goal)}> <Icon image="next" color="blue" style={{marginTop:"3px"}}/> </div>
    </div>)
}

function toMinutes(hour) {
    return (parseInt(hour.split(":")[0]) * 60 + parseInt(hour.split(":")[1]));
}

function duration(startTime, endTime) {
    return parseInt(toMinutes(endTime) - toMinutes(startTime));
}


const intensityIconWidth = {
    HEAVY: "15px",
    MODERATE: "17px",
    LIGHT: "8px"
}
