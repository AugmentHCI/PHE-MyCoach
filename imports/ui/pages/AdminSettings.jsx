import React, { useState } from 'react';

import NavigationBar from "../components/NavigationBar";
import Button from '../components/Button';

import ProgressManager from '../../api/ProgressManager';
import QuestionManager from '../../api/QuestionManager';

import jwt_decode from "jwt-decode";
import "./AdminSettings.scss";
import PainLogbookManager from '../../api/PainLogbookManager';
import ShortcutManager from '../../api/ShortcutManager';
import InteractionManager from '../../api/InteractionManager';

export default function AdminSettings(props) {

    const progressManager = new ProgressManager(parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr));
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
            <Button color="blue" disabled={unlockedPainlogbook} onClick={() => unlockPainLogbook()}>{unlockedPainlogbook ? "Pijnlogboek ontgrendeld" : "Ontgrendel pijnlogboek"}</Button>
            <Button color="blue" disabled={addedPainlogs} onClick={() => addExamplePainlogs()}>{addedPainlogs ? "Voorbeeldlogs toegevoegd" : "Voeg voorbeeld-pijnlogs toe"}</Button>
            <hr/>
            <Button color="blue" disabled={copiedRRNR} 
                onClick={() => {navigator.clipboard.writeText(jwt_decode(FlowRouter.getParam('token')).rrnr); setCopiedRRNR(true); setCopiedDeelnemerID(false); setCopiedJWT(false);}}>
                    {copiedRRNR ? `RRNR-nummer gekopieerd: ${jwt_decode(FlowRouter.getParam('token')).rrnr}` : `Kopieer RRNR-nummer: ${jwt_decode(FlowRouter.getParam('token')).rrnr}`}
            </Button>
            {jwt_decode(FlowRouter.getParam('token')).deelnemerId && <Button color="blue" disabled={copiedDeelnemerID} 
                onClick={() => {navigator.clipboard.writeText(jwt_decode(FlowRouter.getParam('token')).deelnemerId); setCopiedRRNR(false); setCopiedDeelnemerID(true); setCopiedJWT(false);}}>
                    {copiedDeelnemerID ? `Deelnemer ID gekopieerd: ${jwt_decode(FlowRouter.getParam('token')).deelnemerId}` : `Kopieer deelnemer ID: ${jwt_decode(FlowRouter.getParam('token')).deelnemerId}`}
            </Button>}
            <Button color="blue" disabled={copiedJWT} 
                onClick={() => {navigator.clipboard.writeText(FlowRouter.getParam('token')); setCopiedRRNR(false); setCopiedDeelnemerID(false); setCopiedJWT(true);}}>
                    {copiedJWT ? `JWT token gekopieerd` : `Kopieer JWT token`}
            </Button>
            <hr/>
            <h3>Reset-acties</h3>
            <Button color="red" disabled={deletedProgress} onClick={() => deleteProgress()}>{deletedProgress ? "Progressie gewist" : "Wis mijn progressie"}</Button>
            <Button color="red" disabled={deletedPainlogs} onClick={() => deletePainlogs()}>{deletedPainlogs ? "Pijnlogs gewist" : "Wis mijn pijnlogs"}</Button>
            <h3>Admin-Specifiek</h3>
            <Button color="blue" onClick={() => unlockStijnShortcut()}>{unlockedShortcuts ? "Ontgrendeld" : "Ontgrendel Shortcuts"}</Button>
        </div>
    </div>)
}