import Radio from 'antd/lib/radio';
import Tooltip from 'antd/lib/tooltip';
import React, { useState } from 'react';

import styled, { css }  from 'styled-components';

const QuestionContent = styled.p`
    font-family: var(--main-font);
    font-size: 15px;
    font-weight: 500;
    color: var(--idewe-blue);
    margin: 0;

    ${props => props.isCompleted && css`
        color: var(--idewe-gray-dark);
    `};
`

const QuestionTranslation = styled.p`
    font-family: var(--main-font);
    font-size: 14px;
    font-weight: 400;
    font-style: italic;
    color: var(--idewe-gray-dark);
    margin: 0;
    margin-bottom: 1em;
`

const QuestionContainer = styled.div`
    @keyframes colorChange {
        0% { background: var(--idewe-white); box-shadow: var(--card-shadow);}
        100% { background: var(--idewe-background-solid); box-shadow: none;}
    }

    background: var(--idewe-white);
    box-shadow: var(--card-shadow-light);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px 25px;
    border-radius: 15px;
    margin: 10px 0;
    width: 100%;
    transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;

    &:hover {
        box-shadow: var(--card-shadow);
    }

    ${props => props.value !== 0 && css`
        animation: colorChange 0.2s 1;
        animation-fill-mode: forwards;
    `};
`

export default function Question(props) {
    
    const [value, setValue] = useState(0);

    function onChange(e) {
        setValue(e.target.value);
        if (props.changeCallback) props.changeCallback(props.number, e.target.value);
    }

    /* Acceptance Questionnaire */
    if (props.acceptance) {
        return (<QuestionContainer value={value} style={{flexDirection: "row"}}>
            <Tooltip title={props.fromNL}>
                <p style={{display: "inline-block", fontFamily: "var(--main-font)", marginRight: "1em"}}>{props.from}</p>
            </Tooltip>
            <Radio.Group onChange={onChange} value={value} style={{marginTop:"0", fontFamily:"var(--main-font)", display: "inline-block", flexDirection: "row", gap: "1em"}}>
                <Radio value={1}></Radio>
                <Radio value={2}></Radio>
                <Radio value={3}></Radio>
                <Radio value={4}></Radio>
                <Tooltip title={props.toNL}>
                <Radio value={5}>{props.to}</Radio>
                </Tooltip>
            </Radio.Group>
            </QuestionContainer>);
    }

    /* Other Questionnaires */
    return (<QuestionContainer value={value}>
        <QuestionContent isCompleted={props.isCompleted}>{props.number.toUpperCase() + ": " + props.en}</QuestionContent>
        <QuestionTranslation>{props.nl}</QuestionTranslation>
        <Radio.Group onChange={onChange} value={value} style={{marginTop:"0", fontFamily:"var(--main-font)", display: "inline-block", flexDirection: "row", gap: "1em"}}>
            { renderOptions(props.optionType) }
        </Radio.Group>
    </QuestionContainer>)
}


function renderOptions(option) {
    return (<React.Fragment>
        <Radio value={1}>Sterk mee oneens</Radio>
        <Radio value={2}>Oneens</Radio>
        <Radio value={3}>Neutraal</Radio>
        <Radio value={4}>Eens</Radio>
        <Radio value={5}>Sterk mee eens</Radio>
    </React.Fragment>);
}