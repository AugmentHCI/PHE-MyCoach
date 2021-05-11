import React, { useState } from 'react';

import NavigationBar from "../components/NavigationBar";
import Button from '../components/Button';

import ProgressManager from '../../api/ProgressManager';
import QuestionManager from '../../api/QuestionManager';

import jwt_decode from "jwt-decode";
import "./AdminSettings.scss";
import PainLogbookManager from '../../api/PainLogbookManager';
import ShortcutManager from '../../api/ShortcutManager';

export default function AdminSettings(props) {

    const progressManager = new ProgressManager(parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr));
    const questionManager = new QuestionManager(parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr));
    const shortcutManager = new ShortcutManager(parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr));
    const painLogbookManager = new PainLogbookManager(parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr));

    const [deletedProgress, setDeletedProgress] = useState(false);
    const [deletedPainlogs, setDeletedPainlogs] = useState(false);
    const [unlockedPainlogbook, setUnlockedPainlogbook] = useState(false);
    const [addedPainlogs, setAddedPainlogs] = useState(false);

    async function deletePainlogs() {
        await painLogbookManager.deleteUserLogs();
        setDeletedPainlogs(true);
    }

    async function deleteProgress() {
        await progressManager.resetUserProgress();
        await questionManager.deleteUserQuestions();
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

    return (<div>
        <NavigationBar title="Settings" back={`/${FlowRouter.getParam('language')}/mycoach/${FlowRouter.getParam('token')}`}/>
        <div className="settings-body">
            <div className="settings-explanation">Dit zijn admin-settings die gewone gebruikers niet te zien krijgen. Ga hier zorgvuldig mee om.</div>
            <h3>Help-acties</h3>
            <Button color="blue" disabled={unlockedPainlogbook} onClick={() => unlockPainLogbook()}>{unlockedPainlogbook ? "Pijnlogboek ontgrendeld" : "Ontgrendel pijnlogboek"}</Button>
            <Button color="blue" disabled={addedPainlogs} onClick={() => addExamplePainlogs()}>{addedPainlogs ? "Voorbeeldlogs toegevoegd" : "Voeg voorbeeld-pijnlogs toe"}</Button>
            <h3>Reset-acties</h3>
            <Button color="blue" disabled={deletedProgress} onClick={() => deleteProgress()}>{deletedProgress ? "Progressie gewist" : "Wis mijn progressie"}</Button>
            <Button color="blue" disabled={deletedPainlogs} onClick={() => deletePainlogs()}>{deletedPainlogs ? "Pijnlogs gewist" : "Wis mijn pijnlogs"}</Button>
        </div>
    </div>
    )
}