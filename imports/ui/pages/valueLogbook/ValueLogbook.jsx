import React, { useState, useEffect } from 'react';

/* External API */
import FadeIn from "react-fade-in";
import jwt_decode from "jwt-decode";
import moment from 'moment';

/* Internal API */
import BuildupScheme from '../../../api/BuildupScheme';
import { values as valueCodes } from "../../../api/scripts/ThoughtsEmotionsScript";

/* Managers */
import QuestionManager from '../../../api/managers/QuestionManager';
import GoalSettingManager from '../../../api/managers/GoalSettingManager';

/* UI Components */
import NavigationBar from '../../components/NavigationBar';
import Button from '../../components/Button';
import Icon from '../../components/Illustrations/Icon';
import Illustration from '../../components/Illustrations/Illustration';
import Input from '../../components/Input';
import LoadingScreen from '../../components/LoadingScreen';

/* Styles */
import "./ValueLogbook.scss";

export default function ValueLogbook() {

    const language = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";
    const userID   = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr) : 1111111;
    const questionManager = new QuestionManager(userID);
    const goalSettingManager = new GoalSettingManager(userID);

    const [goals, setGoals] = useState([]);
    const [values, setValues] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [addingMode, setAddingMode] = useState(false);
    const [selectedTab, setSelectedTab] = useState("GOALS");
    const [addingValue, updateAddingValue] = useState("");
    const [goalsLoading, setGoalsLoading] = useState(true);
    const [valuesLoading, setValuesLoading] = useState(true);

    function removeItem(value) {
        let valuesCopy = JSON.parse(JSON.stringify(values));
        delete valuesCopy[value];
        setValues(valuesCopy);
        questionManager.setModuleQuestion("THOUGHTSEMOTIONS", "TE-MOD-5-SELECT-5", JSON.stringify(valuesCopy), false);
    }


    function findValueText(value) {
        const foundValues = valueCodes.filter(valueCode => valueCode.id === value)
        if (foundValues.length > 0) return foundValues[0].text;
        return value;
    }
    
    function renderValues() {
        let valueHTML = [];
        if (!values || Object.keys(values).length === 0) return <div style={{display:'flex', justifyContent: 'center', marginTop: '2em', marginBottom: '2em', color:'var(--idewe-blue)', fontWeight: 500, fontSize: '18px'}}>Nog geen waarden toegevoegd</div>
        Object.keys(values).forEach((value, index) => {
            if (values[value]) {
                valueHTML.push(<div className="value-row" key={index + value}>
                    <div className="value-container">
                        <div className="value-text">{findValueText(value)}</div>
                        <div className={"value-icon" + (editMode ? "" : "-disabled")} onClick={() => removeItem(value)}><Icon color="blue-dark" image="delete"/></div>
                    </div>
                </div>);
            }
        })
        return valueHTML;
    }

    function saveButton() {
        if (addingValue.length > 0) {
            let valuesCopy = values ? JSON.parse(JSON.stringify(values)) : {};
            valuesCopy[addingValue] = true;
            setValues(valuesCopy);
            updateAddingValue("");
            questionManager.setModuleQuestion("THOUGHTSEMOTIONS", "TE-MOD-5-SELECT-5", JSON.stringify(valuesCopy), false);
        }
        setAddingMode(!addingMode);
    }

    useEffect(() => { 
        async function fetchValues() {
            const fetchedValues = await questionManager.getLatestAnswerOnQuestion("TE-MOD-5-SELECT-5");
            console.log(fetchedValues)
            setValues(fetchedValues ? JSON.parse(fetchedValues) : undefined);
            setValuesLoading(false);
        }
        async function fetchGoals() {
            const fetchedGoals = await goalSettingManager.getUserGoals();
            console.log(fetchedGoals)
            setGoals(fetchedGoals);
            setGoalsLoading(false);
        }
        fetchValues();
        fetchGoals();
    }, []);

    function renderValuesTab() {
        if (valuesLoading) return <LoadingScreen height='70%'/>
        return (<div>
            <FadeIn>
            Hier zie je een overzicht van jouw waarden. Je kan waarden toevoegen of verwijderen, om ze dan te gebruiken in het tabblad 'Doelen'.
            { renderValues() }
            { addingMode && <Input 
                type="text" value={addingValue} onChange={updateAddingValue}
                style={{width: "100%", fontSize: "16px", fontWeight: 500, flexGrow: 1}} 
                placeholder="Typ hier"/> }
            <div style={{display: "flex"}}>
            {!addingMode && values && Object.keys(values) > 0 && <Button center color="blue" onClick={() => setEditMode(!editMode)} style={{marginTop: "20px", flex: 1, marginRight: editMode ? 0 : "10px"}}>{editMode ? "Opslaan" : "Wijzig"}</Button>}
            {!editMode && <Button center color="blue" onClick={() => saveButton()} style={{marginTop: "20px", flex: 1}}>{addingMode ? (addingValue.length > 0 ? "Voeg toe" : "Annuleer") : "Voeg waarde toe"}</Button>}
            </div>
            </FadeIn>
        </div>)
    }



    function renderGoalCard(goal) {
        const days = JSON.parse(goal.days);
        const values = JSON.parse(goal.values);
        const buildupScheme = goal.buildupScheme ? new BuildupScheme({schemeString: goal.buildupScheme}) : undefined;
         const thisWeeksGoal = buildupScheme && buildupScheme.measuresComplete() ? buildupScheme.getGoal(moment().format("W-YYYY")) : undefined;
        return (<div className="valuelogbook-entry" key={goal._id}>
            <div className="valuelogbook-entry-button" onClick={() => FlowRouter.go(`/${language}/mycoach/${FlowRouter.getParam('token')}/values/${goal._id}`)}><Icon image="view" color="white" width="18px" style={{marginLeft:"-2px"}}/></div>
            <div className="valuelogbook-entry-title">{goal.title}</div>
            <div className="valuelogbook-entry-description" style={{maxWidth: "80%", display: "flex"}}>{goal.description}</div>
            Doel: <div className="valuelogbook-entry-description">{goal.quantity + " " + quantityT[goal.quantifier]}</div>
            {thisWeeksGoal && <React.Fragment><br/>Deze week: <div className="valuelogbook-entry-description">{thisWeeksGoal + " " + quantityT[goal.quantifier]}</div></React.Fragment>}
            <div style={{display:"flex", "flexDirection": "row", marginTop:".5em"}}>
                {values.map(value => { return (<div key={value.id} className="valuelogbook-entry-value">{value.value}</div>)})}
            </div>
            <hr style={{marginTop:"1em", marginBottom: ".5em"}}/>
            <div style={{display:"flex", "flexDirection": "row"}}>
                {Object.keys(days).map(day => {
                    const color = days[day] ? "var(--idewe-blue)" : "var(--idewe-gray-light)";
                    return (<div key={day} style={{color: color, flex: 1, textAlign: "center"}}>{daysT[day]}</div>)})}
            </div>
        </div>)
    }

    function renderGoalsTab() {
        if (goalsLoading) return <LoadingScreen height='70%'/>
        return (<div className="goals-tab">
            <FadeIn>
                {goals.length === 0 && <div style={{display: "flex", justifyContent:"center", flexDirection:"column"}}>
                    <div className="valuelogbook-nogoalsmessage">Je hebt nog geen doelen toegevoegd!</div>
                    <Illustration image="act-mod-res" width="70%" style={{margin: "auto", marginBottom: "50px"}}/>
                </div>}
                {goals.length > 0 && <div> <h2>Jouw doelen</h2>
                    {goals.map(goal => {return (renderGoalCard(goal))})}
                </div>}
                <Button width="100%" center color="blue" onClick={() => FlowRouter.go(`/${language}/mycoach/${FlowRouter.getParam('token')}/values/newgoal`)}>Voeg een nieuw doel toe</Button>
            </FadeIn>
        </div>)
    }

    return (<React.Fragment>
        <NavigationBar title="Waarden en doelen" back={`/${language}/mycoach/${FlowRouter.getParam('token')}`}/>
        <div className="valuelogbook">
        <div className="valuelogbook-tabbar">
            <div className={"valuelogbook-tabitem" + (selectedTab === "GOALS" ? "-selected" : "")} onClick={() => setSelectedTab("GOALS")}>Doelen</div>
            <div className={"valuelogbook-tabitem" + (selectedTab === "VALUES" ? "-selected" : "")} onClick={() => setSelectedTab("VALUES")}>Waarden</div>
        </div>
            {selectedTab === "VALUES" && renderValuesTab()}
            {selectedTab === "GOALS" && renderGoalsTab()}
        </div>
    </React.Fragment>);
}

const quantityT = {
    distance: "kilometer",
    steps: "stappen", 
    time: "minuten",
    amount: "keer per dag"
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