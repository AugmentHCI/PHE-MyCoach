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

export default function QuestionnairePage() {

    const type = FlowRouter.getParam('type');

    const [answers, setAnswers] = useState({});

    const text1 = {
        "visual": "de balkjes die je uitleggen  waarom je de aanbeveling krijgt",
        "textual": "de tekst die je uitleg geeft waarom je de aanbeveling krijgt",
        "hybrid": "zowel de balkjes als de tekst, die je uitleg geven waarom je de aanbeveling krijgt"
    }

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
        /* TODO: implement saving. */
        Meteor.callPromise('userstudy.insert', {
            mail: localStorage.getItem('mail'), 
            settings: localStorage.getItem('studysettings'), 
            type: 'questionnaire-' + type, 
            content: JSON.stringify(answers)});
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
        <QuestionnaireTitle>Vragenlijst</QuestionnaireTitle>
        <Row>
            <PillButton contentColor="white" fillColor="blue" icon="time">3 minuten</PillButton>
            <PillButton contentColor="white" fillColor="blue" icon="information">Invullen</PillButton>
        </Row>
        <InfoContainer>We beginnen deze gebruikersstudie met een korte vragenlijst. De vragen zijn in het Engels, maar er staat telkens een Nederlandse vertaling bij. Vul deze in en klik op <i>"Volgende"</i> onderaan wanneer je klaar bent.<br/> De eerste vragen hieronder gaan over <b>algemene problemen in het dagelijks leven</b> (werk, thuis, etc.), en zijn dus niet pijn-gerelateerd.</InfoContainer>
        <Questionnaire id={"ncs"} title={questionnaires.ncs.title} questions={questionnaires.ncs.questions} changeCallback={updateQuestionnaire}/>
        <hr style={{width:"80%"}}/>
        <Questionnaire id={"eos"} title={questionnaires.eos.title} questions={questionnaires.eos.questions} changeCallback={updateQuestionnaire}/>
        <hr style={{width:"80%"}}/>
        <Button width="fit" center color="blue" disabled={!isCompleted()} onClick={() => saveAndProceed()}>Volgende</Button>
    </PageContainer>);

    return (<PageContainer>
        <QuestionnaireTitle>Vragenlijst</QuestionnaireTitle>
        <Row>
            <PillButton contentColor="white" fillColor="blue" icon="time">5 minuten</PillButton>
            <PillButton contentColor="white" fillColor="blue" icon="information">Invullen</PillButton>
        </Row>
        <InfoContainer>Je krijgt nu een vragenlijst dat gaat over de aanbevelingen en de uitleg (explanations) die je net te zien kreeg. Ga door de vragen, en vul ze in. Hieronder zie je een afbeelding dat je kort toont wat er bedoeld wordt met 'aanbeveling' en 'uitleg/explanation'.</InfoContainer>
        <Photo>
            <img src={`/images/userstudy/${type}.jpg`} width="390px"/>
        </Photo>
        <InfoContainer>
        Het is belangrijk om een onderscheid te maken tussen (zie foto):
        <ul>
            <li><b>Uitleg (explanation):</b> hiermee bedoelen wij {text1[type]}</li>
            <li><b>Aanbeveling (recommendation):</b> hiermee bedoelen wij het kort tekstje onderaan dat je een tip of aanbeveling geeft.</li>
        </ul>
        Maak hier een goed onderscheid tussen wanneer je de vragen invult!
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
        <Button width="fit" center color="blue" disabled={!isCompleted()} onClick={() => saveAndProceed()}>Volgende</Button>
    </PageContainer>)
}
