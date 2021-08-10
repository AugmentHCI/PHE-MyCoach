import React, { useState, useEffect } from 'react';

import FadeIn from "react-fade-in";
import jwt_decode from "jwt-decode";

import NavigationBar from '../../components/NavigationBar';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import Input from '../../components/Input';
import Slider from '../../components/Slider';

import GoalSettingManager from '../../../api/GoalSettingManager.jsx';
import QuestionManager from '../../../api/QuestionManager';

import { values as valueCodes } from "../modules/ModuleScripts/ThoughtsEmotionsScript.js";

import "./ValueLogbook.scss";

export default function NewGoalScreen() {

    const userID = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr) : 1111111;
    const goalSettingManager = new GoalSettingManager(userID);
    const questionManager = new QuestionManager(userID);

    const goalID = FlowRouter.getParam('id') === "newgoal" ? null : FlowRouter.getParam('id');
    const [loaded, setLoaded] = useState(false);

    const [values, setValues] = useState([]);

    const [goalTitle, updateGoalTitle] = useState("");
    const [goalDescription, updateGoalDescription] = useState("");
    const [goalValues, updateGoalValues] = useState([]);
    const [goalQuantifier, updateGoalQuantifier] = useState([quantities[0]]);
    const [goalQuantity, updateGoalQuantity] = useState("0");
    const [goalTrust, updateGoalTrust] = useState(0);
    const [goalThreshold, updateGoalThreshold] = useState("");
    const [goalThresholdDescription, updateGoalThresholdDescription] = useState("");
    const [goalReward, updateGoalReward] = useState("");
    const [selectedDays, updateSelectedDays] = useState({
        mo: false,
        tu: false,
        we: false,
        th: false,
        fr: false,
        sa: false,
        su: false
    });

    function toggleDaySelection(day) {
        let newSelectedDays = {...selectedDays};
        newSelectedDays[day] = !newSelectedDays[day];
        updateSelectedDays(newSelectedDays);
    }

    function finishedCompleting() {
        return (goalTitle && goalDescription && goalQuantity !== "0" && goalThreshold && goalThresholdDescription && goalReward && goalValues.length > 0)
    }

    async function saveGoal() {
        if (goalID) await goalSettingManager.updateGoal(goalID, goalTitle, goalDescription, JSON.stringify(goalValues), goalQuantifier[0].id, parseInt(goalQuantity), JSON.stringify(selectedDays), goalTrust, goalThreshold, goalThresholdDescription, goalReward);
        else await goalSettingManager.insertGoal(goalTitle, goalDescription, JSON.stringify(goalValues), goalQuantifier[0].id, parseInt(goalQuantity), JSON.stringify(selectedDays), goalTrust, goalThreshold, goalThresholdDescription, goalReward);
        history.back();
    }

    function renderGoalsTab() {
        if (goalID && !loaded) return <React.Fragment/>
        return (<div className="goals-tab">
            <FadeIn>
                <h2 style={{marginTop:"20px"}}>Jouw doel</h2>
                <p>Geef je doel een naam:</p>
                <Input type="text" placeholder="Typ hier de naam" style={{width:"100%"}} value={goalTitle} onChange={updateGoalTitle}/>
                <p>Geef je doel ook een korte beschrijving:</p>
                <Input type="text" placeholder="Beschrijf kort je doel" style={{width:"100%"}} value={goalDescription} onChange={updateGoalDescription}/>
                <p>Kies een waarde waar jouw doel bij aansluit. Je kan er meerdere aanduiden indien van toepassing.</p>
                <Dropdown defaultText={"Kies een waarde"} defaultItems={goalValues} multiselect items={values} style={{flex: 2}} onChange={updateGoalValues}/>
                <hr/>
                <h3>Kwantificeer je doel</h3>
                Probeer je doel te kwantificeren zodat je er naartoe kunt streven. Dit helpt je ook om je doel op te bouwen de komende weken.
                <div style={{display:"flex", flexDirection:"row"}}>
                    <Input type="number" style={{width:"100px"}} placeholder="0" value={goalQuantity} onChange={updateGoalQuantity}/>
                    <Dropdown defaultItems={goalQuantifier} items={quantities} style={{flex: 2}} onChange={updateGoalQuantifier}></Dropdown>
                </div>
                En welke dagen wil je aan je doel werken?
                <div style={{display:"flex", gap: "1em", marginTop:"1em"}}>
                    {Object.keys(selectedDays).map(day => {
                        const buttonClass = selectedDays[day] ? "day-button-selected" : "day-button";
                        return <div key={day} className={buttonClass} onClick={() => toggleDaySelection(day)}>{day}</div>
                    })}
                </div>
                <hr/>
                <h3>Drempels</h3>
                <Slider noBackground showValue value={goalTrust} mapping="5-AMOUNT" from={1} to={5} text="Hoeveel vertrouwen heb je erin om dit doel te halen?" onChange={updateGoalTrust}/>
                <p>Wat is een mogelijke drempel om dit doel te bereiken</p>
                <Input type="text" placeholder="Typ hier je drempel(s)" style={{width:"100%"}} value={goalThreshold} onChange={updateGoalThreshold}/>
                <p>Hoe ga je met deze drempel om?</p>
                <Input type="text" placeholder="Typ hier je antwoord" style={{width:"100%"}} value={goalThresholdDescription} onChange={updateGoalThresholdDescription}/>
                <p>Hoe ga je jezelf belonen als je het doel hebt gehaald</p>
                <Input type="text" placeholder="Typ hier je beloning" style={{width:"100%"}} value={goalReward} onChange={updateGoalReward}/>
                <hr/>
                <Button width="100%" disabled={!finishedCompleting()} center color="blue" onClick={() => saveGoal()}>{goalID ? "Update je doel" : "Doel opslaan"}</Button>
            </FadeIn>
        </div>)
    }

    useEffect(() => { 
        async function fetchValues() {
            const fetchedValues = await questionManager.getLatestAnswerOnQuestion("TE-MOD-5-SELECT-5");
            const parsedValues = JSON.parse(fetchedValues);
            const valueList = [];
            Object.keys(parsedValues).forEach(value => {
                if (parsedValues[value]) {
                    const foundValues = valueCodes.filter(valueCode => valueCode.id === value);
                    if (foundValues.length > 0) valueList.push({id: value, value: foundValues[0].text});
                    else valueList.push({id: value, value: value});
                }
            });
            setValues(valueList);
        }
        async function fetchGoal() {
            if (goalID) {
                const goal = await goalSettingManager.getUserGoal(goalID);
                updateGoalQuantity(goal.quantity);
                updateGoalQuantifier(quantities.filter(item => item.id === goal.quantifier));
                updateGoalDescription(goal.description);
                updateGoalTitle(goal.title);
                updateGoalThreshold(goal.threshold);
                updateGoalThresholdDescription(goal.thresholdDescription);
                updateSelectedDays(JSON.parse(goal.days));
                updateGoalValues(JSON.parse(goal.values));
                updateGoalTrust(goal.trust);
                updateGoalReward(goal.reward);
                setLoaded(true);
            }
        }
        fetchValues();
        fetchGoal();
    }, []);

    return (<React.Fragment>
        <NavigationBar title={ goalID ? "Bewerk doel" : "Nieuw doel"}/>
        <div className="valuelogbook">
            {renderGoalsTab()}
        </div>
    </React.Fragment>);
}

const quantities = [
    {id: "steps",    description: "Aantal stappen", value: "stappen"},
    {id: "distance", description: "Afstand",        value: "kilometer"},
    {id: "time",     description: "Tijd",           value: "minuten"},
    {id: "amount",   description: "Keer per dag",   value: "keer per dag"}
]