import React, { useState, useEffect } from 'react';

import FadeIn from "react-fade-in";
import jwt_decode from "jwt-decode";

import { ResponsiveBar } from '@nivo/bar';

import NavigationBar from '../../components/NavigationBar';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import Input from '../../components/Input';
import Slider from '../../components/Slider';

import GoalSettingManager from '../../../api/GoalSettingManager.jsx';
import QuestionManager from '../../../api/QuestionManager';

import { values as valueCodes } from "../modules/ModuleScripts/ThoughtsEmotionsScript.js";

import "./ValueLogbook.scss";
import BuildupScheme from '../../../api/BuildupScheme';
import moment from 'moment';

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
    const [quantifyGoal, setQuantifyGoal] = useState(false);
    const [buildupGoal, updateBuildupGoal] = useState(false);
    const [measurements, updateMeasurements] = useState({0: 0, 1: 0, 2: 0});
    const [buildupScheme, updateBuildupScheme] = useState(undefined);
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

    /* Initialising component - Fetching and initialising data */
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
                const newBuildupScheme = goal.buildupScheme ? new BuildupScheme({schemeString:goal.buildupScheme}) : undefined;
                updateGoalQuantity(goal.quantity);
                updateGoalQuantifier(quantities.filter(item => item.id === goal.quantifier));
                setQuantifyGoal(goal.quantity ? true : false);
                updateBuildupScheme(newBuildupScheme);
                updateBuildupGoal(newBuildupScheme);
                updateMeasurements(newBuildupScheme ? newBuildupScheme.measurements : {0: 0, 1: 0, 2: 0})
                updateGoalDescription(goal.description);
                updateGoalTitle(goal.title);
                updateGoalThreshold(goal.threshold);
                updateGoalThresholdDescription(goal.thresholdDescription);
                updateSelectedDays(JSON.parse(goal.days));
                updateGoalValues(JSON.parse(goal.values));
                updateGoalTrust(goal.trust);
                updateGoalReward(goal.reward);
                setLoaded(true);
                console.log(goal.buildupScheme)
            }
        }
        fetchValues();
        fetchGoal();
    }, []);
    

    /* Saving component */
    async function saveGoal() {
        if (goalID) 
            /* Update existing goal */
            await goalSettingManager.updateGoal({
                goalID: goalID, 
                title: goalTitle, 
                description: goalDescription, 
                values: JSON.stringify(goalValues), 
                quantifier: goalQuantifier[0].id, 
                quantity: parseInt(goalQuantity), 
                days: JSON.stringify(selectedDays), 
                trust: goalTrust, 
                threshold: goalThreshold, 
                thresholdDescription: goalThresholdDescription, 
                reward: goalReward, 
                buildupScheme: buildupScheme && buildupGoal ? buildupScheme.toString() : null,
            });
        else 
            /* Create new goal */
            await goalSettingManager.insertGoal({
                title: goalTitle, 
                description: goalDescription, 
                values: JSON.stringify(goalValues), 
                quantifier: goalQuantifier[0].id, 
                quantity: parseInt(goalQuantity), 
                days: JSON.stringify(selectedDays), 
                trust: goalTrust, 
                threshold: goalThreshold, 
                thresholdDescription: goalThresholdDescription, 
                reward: goalReward, 
                buildupScheme: buildupScheme && buildupGoal ? buildupScheme.toString() : null,
            });
        history.back();
    }

    function removeGoal() {
        goalSettingManager.removeGoal(goalID);
        history.back();
    }

    const getColor = (bar) => {
        if (bar.data.date === moment().format("W-YYYY")) return 'var(--idewe-blue-dark)'
        return 'var(--idewe-blue)'
    }

    function renderChart() {
        if (buildupScheme?.scheme && buildupScheme.scheme.length > 100) return <React.Fragment/>
        if (buildupScheme?.scheme && buildupScheme.scheme.length === 0) return <b>
            Jouw metingen liggen al boven je doel! Je mag je doel iets hoger stellen.
        </b>
        return <div style={{height: "200px", width: "100%"}}><ResponsiveBar
        data={buildupScheme.scheme}
        indexBy="week"
        keys={["goal"]}
        colors={getColor}
        margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
        padding={0.35}
        minValue={0}
        borderRadius={2}
        tooltip={function (props) {return (Math.round(props.value*100)/100 + " " + goalQuantifier[0].value)}}
        axisTop={null}
        axisRight={null}
        enableLabel={false}
        theme={{ axis: { legend: { text: { fill: "var(--idewe-blue)" } } } }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Week',
            legendPosition: 'middle',
            legendOffset: 32,
        }}
        axisLeft={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: `Doel (${goalQuantifier[0].value})`,
            legendPosition: 'middle',
            legendOffset: -40
        }}>
    </ResponsiveBar></div>
    }

    function renderGoalsTab() {
        if (goalID && !loaded) return <React.Fragment/>
        return (<div className="goals-tab">
            <FadeIn>
                {/* General Information */}
                <h2 style={{marginTop:"20px"}}>Jouw doel</h2>
                <p>Geef je doel een naam:</p>
                <Input type="text" placeholder="Typ hier de naam" style={{width:"100%"}} value={goalTitle} onChange={updateGoalTitle}/>
                <p>Geef je doel ook een korte beschrijving:</p>
                <Input type="text" placeholder="Beschrijf kort je doel" style={{width:"100%"}} value={goalDescription} onChange={updateGoalDescription}/>
                <p>Kies een waarde waar jouw doel bij aansluit. Je kan er meerdere aanduiden indien van toepassing.</p>
                <Dropdown defaultText={"Kies een waarde"} defaultItems={goalValues} multiselect items={values} style={{flex: 2}} onChange={updateGoalValues}/>
                <hr/>
                {/* Quantify Goal */}
                <div style={{display:'flex', width: '100%'}}>
                    <h3 style={{flex:2}}>Kwantificeer je doel</h3>
                    <Input style={{marginRight:"1em"}} value={quantifyGoal} onChange={() => setQuantifyGoal(oldValue => !oldValue)} type="checkbox"/>
                </div>
                Kwantificeer je doel zodat je er naartoe kunt streven. Dit helpt je ook om je doel op te bouwen de komende weken.
                {quantifyGoal && <React.Fragment>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <Input disabled={!quantifyGoal} type="number" style={{width:"100px"}} placeholder="0" value={goalQuantity} onChange={(value) => updateBuildschemeData({type: "goal", value: value})}/>
                        <Dropdown disabled={!quantifyGoal} defaultItems={goalQuantifier} items={quantities} style={{flex: 2}} onChange={updateGoalQuantifier}></Dropdown>
                    </div>
                    En welke dagen wil je aan je doel werken?
                    <div style={{display:"flex", gap: "1em", marginTop:"1em"}}>
                        {Object.keys(selectedDays).map(day => {
                            const buttonClass = selectedDays[day] ? "day-button-selected" : "day-button";
                            return <div key={day} className={buttonClass} onClick={() => toggleDaySelection(day)}>{day}</div>
                        })}
                    </div>
                </React.Fragment>}
                <hr/>
                {/* Build-up Scheme */}
                { quantifyGoal && <React.Fragment>
                    <div style={{display:'flex', width: '100%'}}>
                        <h3 style={{flex:2}}>Bouw je doel op</h3>
                        <Input style={{marginRight:"1em"}} type="checkbox" value={buildupGoal} onChange={() => updateBuildupGoal(oldValue => !oldValue)}/>
                    </div>
                    Bouw je doel geleidelijk op met een opbouwschema.
                    { buildupGoal && <React.Fragment>
                        <br/>
                        Neem eerst drie metingen op van wat je momenteel kan. Met deze gegevens wordt er een startwaarde berekend, alsook een opbouwschema zodat jij je doel over enkele weken kunt behalen.
                        <div style={{display:"flex", width: "100%", flexDirection:"column", marginBottom: ".5em"}}>
                            <div style={{display:"flex", width: "100%", flexDirection:"row"}}>
                                <Input type="number" style={{flex:1}} placeholder="0" value={measurements[0]} onChange={(value) => updateBuildschemeData({type: "measurement", value: value, id: 0})}/>
                                <Input type="number" style={{flex:1}} disabled={!measurements[0]} placeholder="0" value={measurements[1]} onChange={(value) => updateBuildschemeData({type: "measurement", value: value, id: 1})}/>
                                <Input type="number" style={{flex:1}} disabled={!measurements[1]} placeholder="0" value={measurements[2]} onChange={(value) => updateBuildschemeData({type: "measurement", value: value, id: 2})}/>
                            </div>
                            <div style={{display:"flex", width: "100%", flexDirection:"row", textAlign: "center"}}>
                                <b style={{flex:1}}>Meting 1</b>
                                <b style={{flex:1}}>Meting 2</b>
                                <b style={{flex:1}}>Meting 3</b>
                            </div>
                        </div>
                        { buildupScheme?.isTooMuch() && buildupScheme?.scheme?.length <= 100 && <b style={{color:"var(--idewe-red)"}}>Je doel ligt iets te hoog! Probeer een doel in te stellen dat je binnen de 12 weken zou kunnen behalen.</b>}
                        { buildupScheme?.scheme?.length > 100 && <b style={{color:"var(--idewe-red)"}}> Het niveau van jouw metingen ligt iets te laag, of jouw doel ligt veel te hoog! </b>}
                        { buildupScheme?.scheme && !buildupScheme?.isTooMuch() && buildupScheme?.scheme?.length > 0 && <p>Je kan je doel in <b>{buildupScheme.scheme.length} weken</b> behalen. De eerste week begin je met <b>{Math.round(buildupScheme.startValue*10)/10} {goalQuantifier[0].value}</b>.</p>}
                        { buildupGoal && buildupScheme && buildupScheme.scheme && renderChart() }
                        </React.Fragment>
                    }
                    <hr/>
                </React.Fragment> }
                {/* Limitations */}
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
                {goalID && <Button width="100%" center color="red" onClick={() => removeGoal()}>Verwijder doel</Button>}
            </FadeIn>
        </div>)
    }

    function updateBuildschemeData({type, value, id=undefined}) {
        /* Create buildupScheme if none present */
        if (buildupGoal && !buildupScheme) {
            const newBuildupScheme = new BuildupScheme({
                goal: type === "goal" ? value : goalQuantity,
                unit: type === "unit" ? value : goalQuantifier,
                measurements: {
                    0: type === "measurement" && id === 0 ? parseInt(value) : 0,
                    1: type === "measurement" && id === 1 ? parseInt(value) : 0,
                    2: type === "measurement" && id === 2 ? parseInt(value) : 0}
            });
            updateBuildupScheme(newBuildupScheme);
        }
        /* Update buildupScheme if present */
        else if (buildupGoal) {
            if (type === "goal") buildupScheme.updateGoal(value); 
            if (type === "unit") buildupScheme.unit = value;
            if (type === "measurement") buildupScheme.updateMeasurement(id, value);
            updateBuildupScheme(buildupScheme);
        }
        /* Also push updates to state */
        if (type === "goal") updateGoalQuantity(value);
        if (type === "unit") updateGoalQuantifier(value);
        if (type === "measurement") {const newMeasurements = {...measurements}; newMeasurements[id] = value; updateMeasurements(newMeasurements);}
    }

    return (<React.Fragment>
        <NavigationBar title={ goalID ? "Bewerk doel" : "Nieuw doel"}/>
        <div className="valuelogbook">
            {renderGoalsTab()}
        </div>
    </React.Fragment>);
}

const quantities = [
    {id: "steps",    description: "Aantal stappen", value: "stappen",      short: "stp"},
    {id: "distance", description: "Afstand",        value: "kilometer",    short: "km"},
    {id: "time",     description: "Tijd",           value: "minuten",      short: "min"},
    {id: "amount",   description: "Keer per dag",   value: "keer per dag", short: "x"}
]
