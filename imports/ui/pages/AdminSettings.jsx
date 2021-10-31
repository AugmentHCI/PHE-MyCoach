import React, { useEffect, useState } from 'react';

/* External API */
import jwt_decode from "jwt-decode";

/* Managers */
import ProgressManager    from '../../api/managers/ProgressManager';
import QuestionManager    from '../../api/managers/QuestionManager';
import PainLogbookManager from '../../api/managers/PainLogbookManager';
import ShortcutManager    from '../../api/managers/ShortcutManager';
import InteractionManager from '../../api/managers/InteractionManager';

/* UI Components */
import NavigationBar from "../components/NavigationBar";
import Button from '../components/Button';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';

/* Styles */
import "./AdminSettings.scss";

const MODULES = [
    {id: "STRESS", value: "Stress"}, 
    {id: "PAINEDUCATION", value: "Pijneducatie"},
    {id: "THOUGHTSEMOTIONS", value: "Gedachten&Emoties"},
    {id: "ACTIVITYWORK", value: "Activiteit&Werk"},
    {id: "SOCIAL", value: "Sociale Omgeving"},
    {id: "MOVEMENT", value: "Beweging"},
]

export default function AdminSettings() {

    const progressManager = new ProgressManager({userID: parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr), userToken: FlowRouter.getParam('token')});
    const questionManager = new QuestionManager(parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr));
    const shortcutManager = new ShortcutManager(parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr));
    const interactionManager = new InteractionManager(parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr));
    const painLogbookManager = new PainLogbookManager(parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr));

    const [deletedProgress, setDeletedProgress] = useState(false);
    const [deletedPainlogs, setDeletedPainlogs] = useState(false);
    const [unlockedPainlogbook, setUnlockedPainlogbook] = useState(false);
    const [addedPainlogs, setAddedPainlogs] = useState(false);
    const [copiedRRNR, setCopiedRRNR] = useState(false);
    const [copiedDeelnemerID, setCopiedDeelnemerID] = useState(false);
    const [copiedJWT, setCopiedJWT] = useState(false);

    /* Individual Question */
    const [questionID, updateQuestionID] = useState("");
    const [questionStatus, updateQuestionStatus] = useState(undefined);

    async function deleteQuestion() {
        const result = await questionManager.removeUserQuestion({questionID: questionID});
        updateQuestionStatus(result);
        if (result.status === 200) updateQuestionID("");
    }

    /* Module questions */
    const [modules, updateModules] = useState([]);

    async function deleteModuleQuestions() {
        for (let module of modules) { questionManager.removeModuleQuestions({module: module.id}) }
        updateModules([]);
    }

    useEffect(() => {
        if (questionStatus) setTimeout(() => updateQuestionStatus(undefined), 3000);
    }, [questionStatus])

    const [unlockedShortcuts, setUnlockedShortcuts] = useState(false);

    async function deletePainlogs() {
        await painLogbookManager.deleteUserLogs();
        setDeletedPainlogs(true);
    }

    async function deleteProgress() {
        await progressManager.resetUserProgress();
        await questionManager.resetUserQuestions();
        await shortcutManager.resetUserShortcuts();
        await interactionManager.resetUserInteractions();
        setDeletedProgress(true);
    }

    async function unlockPainLogbook() {
        await shortcutManager.upsertShortcut("PAINLOGBOOK", "MAIN", "LOCKED");
        setUnlockedPainlogbook(true);
    }

    async function addExamplePainlogs() {
        await painLogbookManager.addPainLog("Huishouden", "Poetsen", "Matig", "THOUGHT-CAUSE-POS-1|THOUGHT-CAUSE-NEG-3", "EMOTION-ANXIOUS|EMOTION-UNEASY", "REACTION-NEG-3|REACTION-NEG-5", "2021-05-11T10:34:07.705Z");
        await painLogbookManager.addPainLog("Verplaatsing", "Fietsen", "Zwaar", "THOUGHT-CAUSE-POS-1|THOUGHT-CAUSE-NEG-3", "EMOTION-WORNOUT|EMOTION-EXHAUSTED", "REACTION-NEG-3|REACTION-NEG-5", "2021-05-07T10:34:07.705Z");
        await painLogbookManager.addPainLog("Sporten", "Op de loopband", "Zwaar", "THOUGHT-CAUSE-POS-1|THOUGHT-CAUSE-NEG-3", "EMOTION-WORNOUT|EMOTION-DISCOURAGED", "REACTION-NEG-3|REACTION-NEG-5", "2021-04-27T10:34:07.705Z");
        setAddedPainlogs(true);
    }

    async function unlockStijnShortcut() {
        const stijnShortcutManager = new ShortcutManager(4799179);
        stijnShortcutManager.upsertShortcut("PAINLOGBOOK", "MAIN", "DEFAULT");
        stijnShortcutManager.upsertShortcut("PAINLOGBOOK", "PAINEDUCATION", "DEFAULT");
        stijnShortcutManager.upsertShortcut("ACTIVITYLOGBOOK", "MAIN", "DEFAULT");
        stijnShortcutManager.upsertShortcut("ACTIVITYLOGBOOK", "ACTIVITYWORK", "DEFAULT");

        const maxwellShortcutManager = new ShortcutManager(4557583);
        maxwellShortcutManager.resetUserShortcuts()
        maxwellShortcutManager.upsertShortcut("ACTIVITYLOGBOOK", "MAIN", "DEFAULT");
        maxwellShortcutManager.upsertShortcut("ACTIVITYLOGBOOK", "ACTIVITYWORK", "DEFAULT");
        maxwellShortcutManager.upsertShortcut("VALUES", "MAIN", "DEFAULT");
        maxwellShortcutManager.upsertShortcut("PAINLOGBOOK", "MAIN", "DEFAULT");
        maxwellShortcutManager.upsertShortcut("PAINLOGBOOK", "PAINEDUCATION", "DEFAULT");
        setUnlockedShortcuts(true);
    }

    return (<div>
        <NavigationBar title="Settings" back={`/${FlowRouter.getParam('language')}/mycoach/${FlowRouter.getParam('token')}`}/>
        <div className="settings-body">
            <div className="settings-explanation">Dit zijn admin-settings die gewone gebruikers niet te zien krijgen. Ga hier zorgvuldig mee om.</div>
            <h3>Help-acties</h3>
            <Button width="100%" color="blue" disabled={unlockedPainlogbook} onClick={() => unlockPainLogbook()}>{unlockedPainlogbook ? "Pijnlogboek ontgrendeld" : "Ontgrendel pijnlogboek"}</Button>
            <Button width="100%" color="blue" disabled={addedPainlogs} onClick={() => addExamplePainlogs()}>{addedPainlogs ? "Voorbeeldlogs toegevoegd" : "Voeg voorbeeld-pijnlogs toe"}</Button>
            <hr/>
            <Button width="100%" color="blue" disabled={copiedRRNR} 
                onClick={() => {navigator.clipboard.writeText(jwt_decode(FlowRouter.getParam('token')).rrnr); setCopiedRRNR(true); setCopiedDeelnemerID(false); setCopiedJWT(false);}}>
                    {copiedRRNR ? `RRNR-nummer gekopieerd: ${jwt_decode(FlowRouter.getParam('token')).rrnr}` : `Kopieer RRNR-nummer: ${jwt_decode(FlowRouter.getParam('token')).rrnr}`}
            </Button>
            {jwt_decode(FlowRouter.getParam('token')).deelnemerId && <Button width="100%" color="blue" disabled={copiedDeelnemerID} 
                onClick={() => {navigator.clipboard.writeText(jwt_decode(FlowRouter.getParam('token')).deelnemerId); setCopiedRRNR(false); setCopiedDeelnemerID(true); setCopiedJWT(false);}}>
                    {copiedDeelnemerID ? `Deelnemer ID gekopieerd: ${jwt_decode(FlowRouter.getParam('token')).deelnemerId}` : `Kopieer deelnemer ID: ${jwt_decode(FlowRouter.getParam('token')).deelnemerId}`}
            </Button>}
            <Button width="100%" color="blue" disabled={copiedJWT} 
                onClick={() => {navigator.clipboard.writeText(FlowRouter.getParam('token')); setCopiedRRNR(false); setCopiedDeelnemerID(false); setCopiedJWT(true);}}>
                    {copiedJWT ? `JWT token gekopieerd` : `Kopieer JWT token`}
            </Button>
            <hr/>
            <h3>Reset-acties</h3>
            <Button width="100%" color="red" disabled={deletedProgress} onClick={() => deleteProgress()}>{deletedProgress ? "Progressie gewist" : "Wis mijn progressie"}</Button>
            <Button width="100%" color="red" disabled={deletedPainlogs} onClick={() => deletePainlogs()}>{deletedPainlogs ? "Pijnlogs gewist" : "Wis mijn pijnlogs"}</Button>
            <hr/>
            <h3>Questions</h3>
            <div style={{display: "flex", alignItems: "center"}}>
                <Input style={{display:"flex", flex:2}} type="text" placeholder={"Vraag-ID"} value={questionID} onChange={updateQuestionID}/>
                <Button width="fit" color="blue" onClick={() => { deleteQuestion() }}>Wis</Button>
            </div>
            { questionStatus?.status === 200 && <b style={{color:"var(--idewe-green)"}}>Succesvol verwijderd!</b>}
            { questionStatus?.status === 400 && <b style={{color:"var(--idewe-red)"}}>Niets verwijderd</b>}
            <hr/>
            <div style={{display: "flex", alignItems: "center"}}>
                <Dropdown items={MODULES} multiselect selectedItems={modules} onChange={updateModules} style={{marginRight: "10px", flex: 2}}/>
                <Button width="fit" color="blue" onClick={() => { deleteModuleQuestions() }}>Wis</Button>
            </div>
            <hr/>
            <h3>Admin-Specifiek</h3>
            <Button width="100%" color="blue" onClick={() => unlockStijnShortcut()}>{unlockedShortcuts ? "Ontgrendeld" : "Ontgrendel Shortcuts"}</Button>
        </div>
    </div>)
}