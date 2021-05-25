import React, { useState, useEffect } from 'react';

import "./ValueLogbook.scss";

import { values as valueCodes } from "../Modules/ModuleScripts/ThoughtsEmotionsScript.js";
import FadeIn from "react-fade-in";
import jwt_decode from "jwt-decode";

import NavigationBar from '../../components/NavigationBar';
import Button from '../../components/Button';
import QuestionManager from '../../../api/QuestionManager';
import Icon from '../../components/Illustrations/Icon';
import Illustration from '../../components/Illustrations/Illustration';
import Input from '../../components/Input';

export default function ValueLogbook() {

    const language = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";
    const userID   = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr) : 1111111;
    const questionManager = new QuestionManager(userID);

    const [values, setValues] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [addingMode, setAddingMode] = useState(false);
    const [selectedTab, setSelectedTab] = useState("VALUES");
    const [addingValue, updateAddingValue] = useState("");

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
            let valuesCopy = JSON.parse(JSON.stringify(values));
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
            setValues(JSON.parse(fetchedValues));
        }
        fetchValues();
    }, []);

    return (<React.Fragment>
        <NavigationBar title="Waarden en doelen" back={`/${language}/mycoach/${FlowRouter.getParam('token')}`}/>
        <div className="valuelogbook">
        <div className="valuelogbook-tabbar">
            <div className={"valuelogbook-tabitem" + (selectedTab === "VALUES" ? "-selected" : "")} onClick={() => setSelectedTab("VALUES")}>Waarden</div>
            <div className={"valuelogbook-tabitem" + (selectedTab === "GOALS" ? "-selected" : "")} onClick={() => setSelectedTab("GOALS")}>Doelen</div>
        </div>
            {selectedTab === "VALUES" && <div>
                <FadeIn>
                Hier zie je een overzicht van jouw waarden. Je kan waarden toevoegen of verwijderen, om ze dan te gebruiken in het tabblad 'Doelen'.
                { renderValues() }
                { addingMode && <Input 
                    type="text" value={addingValue} onChange={updateAddingValue}
                    style={{width: "100%", fontSize: "16px", fontWeight: 500, flexGrow: 1}} 
                    placeholder={"Typ hier"}/> }
                <div style={{display: "flex"}}>
                {!addingMode && <Button center color="blue" onClick={() => setEditMode(!editMode)} style={{marginTop: "20px", flex: 1, marginRight: editMode ? 0 : "10px"}}>{editMode ? "Opslaan" : "Wijzig"}</Button>}
                {!editMode && <Button center color="blue" onClick={() => saveButton()} style={{marginTop: "20px", flex: 1}}>{addingMode ? (addingValue.length > 0 ? "Voeg toe" : "Annuleer") : "Voeg waarde toe"}</Button>}
                </div>
                </FadeIn>
            </div>}
            {selectedTab === "GOALS" && <div style={{display:"flex", flexDirection: "column", alignItems: "center", textAlign:"center", justifyContent: "center", fontSize:"18px", color: "var(--idewe-blue)", paddingTop: "40px"}}>
                Error: Fout bij het ophalen van profiel
                <Illustration image="working" width="230px" style={{marginTop: "10px", marginBottom: "10px"}}/>
                Wij zijn er van op de hoogte gesteld
            </div>}
        </div>
    </React.Fragment>);
}