import React, { useState, useEffect } from 'react';
import { FlowRouter } from "meteor/kadira:flow-router";
import FadeIn from 'react-fade-in';
import styled from 'styled-components';

import { questionnaires } from "./QuestionnaireData.jsx";

import Questionnaire, { AcceptanceQuestionnaire } from "./Questionnaire.jsx";
import Button from '../../components/Button.jsx';
import PillButton from '../../components/PillButton.jsx';


const PageContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100w;
    height: 100vh;
    overflow-y: scroll;
    padding: 2em 4em;
    background-color: var(--idewe-background-solid);
    box-shadow: var(--card-shadow);
`

const QuestionnaireTitle = styled.div`
    font-family: var(--main-font);
    font-size: 24px;
    font-weight: 500;
    color: var(--idewe-blue);
    text-decoration: underline;
`

const InfoContainer = styled.div`
    font-family: var(--main-font);
    width: 50vw;
    font-size: 16px;
    color: var(--idewe-blue);
    padding: 15px 25px;
    margin: 10px 0;
`

const Photo = styled.div`
    width: 400px;
    border: 5px solid var(--idewe-white);
    box-shadow: var(--card-shadow);
    margin-bottom: 20px;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
`

const language = localStorage.getItem('language') ? localStorage.getItem('language') : "nl-BE";

export default function QuestionnairePage() {

    const type = FlowRouter.getParam('type');

    const [answers, setAnswers] = useState({});

    function isCompleted() {
        if (Object.keys(answers).length === 0) return false;
        for (const questionnaire of Object.keys(answers)) {
            if (Object.keys(answers[questionnaire]).length === 0) return false;
            for (const question of Object.keys(answers[questionnaire])) {
                if (answers[questionnaire][question] === 0) return false;
            }
        }
        return true;
    }

    function saveAndProceed() {
        if (localStorage.getItem('prolificID')) {
            Meteor.callPromise('prolificstudy.insert', {
                id: localStorage.getItem('prolificID'), 
                settings: localStorage.getItem('studysettings'), 
                type: 'questionnaire-' + type, 
                content: JSON.stringify(answers)});
        }
        else {
            Meteor.callPromise('userstudy.insert', {
                mail: localStorage.getItem('mail'), 
                settings: localStorage.getItem('studysettings'), 
                type: 'questionnaire-' + type, 
                content: JSON.stringify(answers)});
        }
        switch (type) {
            case "textual":
            case "visual":
                FlowRouter.go(`/mycoach/userstudy/hybrid`);
                break;
            case "hybrid":
                FlowRouter.go(`/mycoach/userstudy/conclusion`);
                break;
            case "profile":
                if (localStorage.getItem('studysettings') === "textualhybrid") FlowRouter.go(`/mycoach/userstudy/textual`);
                else { FlowRouter.go(`/mycoach/userstudy/visual`) }
                break;
        }
    }

    useEffect(() => {
        if (localStorage.getItem('questionnaire-' + type)) {
            setAnswers(JSON.parse(localStorage.getItem('questionnaire-' + type)));
        }
        else {
            let answerTemplate = type === "profile" ? {ncs: {}, eos: {}} : {use: {}, trust: {}, transparency: {}, persuasiveness: {}, acceptance: {}};
            setAnswers(answerTemplate);
        }
    }, []);

    function updateQuestionnaire(id, updatedAnswers) {
        let newAnswers = JSON.parse(JSON.stringify(answers));
        newAnswers[id] = updatedAnswers;
        setAnswers(newAnswers);
    }

    if (type === "profile") return (<PageContainer>
        <QuestionnaireTitle>{localization.questionnaire[language]}</QuestionnaireTitle>
        <Row>
            <PillButton contentColor="white" fillColor="blue" icon="time">{localization.time3[language]}</PillButton>
            <PillButton contentColor="white" fillColor="blue" icon="information">{localization.task[language]}</PillButton>
        </Row>
        {localization.intro[language]}
        <Questionnaire id={"ncs"} title={questionnaires.ncs.title} questions={questionnaires.ncs.questions} changeCallback={updateQuestionnaire}/>
        <hr style={{width:"80%"}}/>
        <Questionnaire id={"eos"} title={questionnaires.eos.title} questions={questionnaires.eos.questions} changeCallback={updateQuestionnaire}/>
        <hr style={{width:"80%"}}/>
        <Button width="fit" center color="blue" disabled={!isCompleted()} onClick={() => saveAndProceed()}>{localization.next[language]}</Button>
    </PageContainer>);

    return (<PageContainer>
        <QuestionnaireTitle>{localization.questionnaire[language]}</QuestionnaireTitle>
        <Row>
            <PillButton contentColor="white" fillColor="blue" icon="time">{localization.time5[language]}</PillButton>
            <PillButton contentColor="white" fillColor="blue" icon="information">{localization.task[language]}</PillButton>
        </Row>
        {localization.info[language]}
        <Photo>
            <img src={`/images/userstudy/${type}.jpg`} width="390px"/>
        </Photo>
        <InfoContainer>
        {localization.distinction1[language]}
        <ul>
            <li><b>{localization.explanation[language]}</b> {localization.explanationText[language]} {localization.explanationDetail[type][language]}</li>
            <li><b>{localization.recommendation[language]}</b> {localization.recommendationText[language]}</li>
        </ul>
        {localization.distinction2[language]}
        </InfoContainer>
        <Questionnaire id={"use"} title={questionnaires.use.title}          questions={questionnaires.use.questions} changeCallback={updateQuestionnaire}/>
        <hr style={{width:"80%"}}/>
        <Questionnaire id={"trust"} title={questionnaires.trust.title}          questions={questionnaires.trust.questions} changeCallback={updateQuestionnaire}/>
        <hr style={{width:"80%"}}/>
        <Questionnaire id={"transparency"} title={questionnaires.transparency.title}   questions={questionnaires.transparency.questions} changeCallback={updateQuestionnaire}/>
        <hr style={{width:"80%"}}/>
        <Questionnaire id={"persuasiveness"} title={questionnaires.persuasiveness.title} questions={questionnaires.persuasiveness.questions} changeCallback={updateQuestionnaire}/>
        <hr style={{width:"80%"}}/>
        <AcceptanceQuestionnaire id={"acceptance"} changeCallback={updateQuestionnaire}/>
        <hr style={{width:"80%"}}/>
        <Button width="fit" center color="blue" disabled={!isCompleted()} onClick={() => saveAndProceed()}>{localization.next[language]}</Button>
    </PageContainer>)
}

const localization = {
    questionnaire: {
        "nl-BE": "Vragenlijst", 
        "en-EN": "Questionnaire"},
    distinction1: {
        "nl-BE": "Het is belangrijk om een onderscheid te maken tussen (zie foto):", 
        "en-EN": "It's important to make a distinction between (see photo):"},
    distinction2: {
        "nl-BE": "Maak hier een goed onderscheid tussen wanneer je de vragen invult!", 
        "en-EN": "Please be aware of this distinction while answering the questions!"},
    explanation: {
        "nl-BE": "Uitleg (explanation):", 
        "en-EN": "Explanation:"},
    recommendation: {
        "nl-BE": "Aanbeveling (recommendation):", 
        "en-EN": "Recommendation:"},
    explanationText: {
        "nl-BE": " hiermee bedoelen wij ", 
        "en-EN": " hearby we mean "},
    recommendationText: {
        "nl-BE": " hiermee bedoelen wij het kort tekstje onderaan dat je een tip of aanbeveling geeft.", 
        "en-EN": " hearby we mean the short text below that gives you a tip or recommendation"},
    intro: {
        "nl-BE": <InfoContainer>We beginnen deze gebruikersstudie met een korte vragenlijst. De vragen zijn in het Engels, maar er staat telkens een Nederlandse vertaling bij. Vul deze in en klik op <i>"Volgende"</i> onderaan wanneer je klaar bent.<br/> De eerste vragen hieronder gaan over <b>algemene problemen in het dagelijks leven</b> (werk, thuis, etc.), en zijn dus niet pijn-gerelateerd.</InfoContainer>,
        "en-EN": <InfoContainer>We start this userstudy with a short questionnaire. Please fill these in and click <i>"Next"</i> below when you are finished.<br/> The first questions are related to <b>general problems in daily life</b> (work, home, etc.), and are thus not pain-related.</InfoContainer>},
    info: {
        "nl-BE": <InfoContainer>Je krijgt nu een vragenlijst dat gaat over de aanbevelingen en de uitleg (explanations) die je net te zien kreeg. Ga door de vragen, en vul ze in. Hieronder zie je een afbeelding dat je kort toont wat er bedoeld wordt met 'aanbeveling' en 'uitleg/explanation'.</InfoContainer>,
        "en-EN": <InfoContainer>You will now get a questionnaire regarding the recommendations and explanations that you just received. Please fill these in. Below you see an image that briefly summarises what is meant by 'recommendation' and 'explanation'.</InfoContainer>},
    time5: {
        "nl-BE": "5 minuten", 
        "en-EN": "5 minutes"},
    time3: {    
        "nl-BE": "3 minuten", 
        "en-EN": "3 minutes"},
    task: {
        "nl-BE": "Invullen", 
        "en-EN": "Fill in"},
    next: {
        "nl-BE": "Volgende", 
        "en-EN": "Next"},
    explanationDetail: {
            "visual": {"nl-BE": "de balkjes die je uitleggen  waarom je de aanbeveling krijgt", "en-EN": "the bars that explain why you receive the recommendation"},
            "textual": {"nl-BE": "de tekst die je uitleg geeft waarom je de aanbeveling krijgt", "en-EN": "the text that explains why you receive the recommendation"},
            "hybrid": {"nl-BE": "zowel de balkjes als de tekst, die je uitleg geven waarom je de aanbeveling krijgt", "en-EN": "both the bars and text, that explain why you receive the recommendation."}
    }

}

