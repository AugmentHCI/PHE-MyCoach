import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in';
import styled, { css } from 'styled-components';

import Question from "./Question.jsx";
import { questionnaires } from './QuestionnaireData.jsx';

const QuestionnaireContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5em;
`

const QuestionnaireTitle = styled.div`
    font-family: var(--main-font);
    font-size: 20px;
    font-weight: 500;
    color: var(--idewe-blue);

    ${props => props.isCompleted && css`
        color: var(--idewe-gray-dark);
    `};
`

const QuestionnaireText = styled.div`
    font-family: var(--main-font);
    font-size: 18px;
    font-weight: 400;
    color: var(--idewe-black);
`

const QuestionnaireTip = styled.div`
    font-family: var(--main-font);
    display: inline;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    color: var(--idewe-gray-dark);
`


export default function Questionnaire({id, title, questions, changeCallback}) {

    const [answers, setAnswers] = useState({});

    function isCompleted() {
        for (const question of Object.keys(answers)) {
            if (answers[question] === 0) return false;
        }
        return true;
    }

    function updateQuestion(key, answer) {
        let newAnswers = JSON.parse(JSON.stringify(answers));
        newAnswers[key] = answer;
        setAnswers(newAnswers);
        changeCallback(id, newAnswers);
    }

    useEffect(() => {
        let answerTemplate = {};
        Object.keys(questions).forEach(question => { answerTemplate[question] = 0 })
        setAnswers(answerTemplate);
    }, []);

    return (<QuestionnaireContent>
        <QuestionnaireTitle isCompleted={isCompleted()}>{title}</QuestionnaireTitle>
        <FadeIn>
            { Object.keys(questions).map(question => { return <Question 
                key={question}
                changeCallback={updateQuestion}
                isCompleted={isCompleted()}
                number={question} 
                en={questions[question].en} 
                nl={questions[question].nl} 
                optionType={questions[question].optionType} /> }) }
        </FadeIn>
    </QuestionnaireContent>)
}

export function AcceptanceQuestionnaire({id, changeCallback}) {

    const [answers, setAnswers] = useState({});

    const type = FlowRouter.getParam('type');

    const text = {
        "visual": "balkjes",
        "textual": "bovenste tekstje",
        "hybrid": "balkjes + bovenste tekstje"
    }

    function isCompleted() {
        for (const question of Object.keys(answers)) {
            if (answers[question] === 0) return false;
        }
        return true;
    }

    function updateQuestion(key, answer) {
        let newAnswers = JSON.parse(JSON.stringify(answers));
        newAnswers[key] = answer;
        setAnswers(newAnswers);
        changeCallback(id, newAnswers);
    }

    useEffect(() => {
        let answerTemplate = {};
        Object.keys(questionnaires.acceptance.questions).forEach(question => { answerTemplate[question] = 0 })
        setAnswers(answerTemplate);
    }, []);

    return (<QuestionnaireContent>
        <QuestionnaireTitle isCompleted={isCompleted()}>{questionnaires.acceptance.title}</QuestionnaireTitle>
        <QuestionnaireText>Ik vond de <b>uitleg</b> <i>({text[type]})</i> eerder ... <QuestionnaireTip>(Ga met je muis over de woorden om de vertaling te zien.)</QuestionnaireTip></QuestionnaireText>
        <FadeIn>
            { Object.keys(questionnaires.acceptance.questions).map(question => { return <Question 
                acceptance
                key={question}
                changeCallback={updateQuestion}
                number={question} 
                from={questionnaires.acceptance.questions[question].from}
                fromNL={questionnaires.acceptance.questions[question].fromNL}
                to={questionnaires.acceptance.questions[question].to}
                toNL={questionnaires.acceptance.questions[question].toNL} /> }) }
        </FadeIn>
    </QuestionnaireContent>);
}
