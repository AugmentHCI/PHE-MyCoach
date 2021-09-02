import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in';
import styled, { css } from 'styled-components';
import Button from '../../components/Button';

const Content = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: safe center;
    overflow-y: scroll;
    background: var(--idewe-blue);
    color: var(--idewe-white);
    font-family: var(--main-font);
    padding: 15px 45px;
    `

    const Title = styled.div`
    color: var(--idewe-white);
    font-size: 24px;
    font-weight: 500;
`

const Text = styled.div`
    color: var(--idewe-white);
    font-size: 18px;
    font-weight: 400;
    opacity: 0%;
    margin-top: .75em;
    margin-bottom: .75em;
    max-width: 70%;
`

const Group = styled.div`
    display: flex;
    flex-direction: row;
    opacity: 0%;
`

const language = localStorage.getItem('language') ? localStorage.getItem('language') : "nl-BE";

export default function ProlificIntroduction() {
    
    return (<Content>
        <FadeIn>
        <Title>{localization.title[language]}</Title>
            {localization.intro[language]}
            {localization.detail[language]}
            {localization.consent[language]}
            <Group>
                <Button width="fit" color="blue-dark" onClick={() => history.back()}>{localization.no[language]}</Button>
                <Button width="fit" onClick={() => FlowRouter.go("/mycoach/userstudy/information")}>{localization.yes[language]}</Button>
            </Group>
        </FadeIn>
    </Content>)
}

const localization = {
    title: {
        "nl-BE": "Welkom bij de HealthEmpower gebruikersstudie!", 
        "en-EN": "Welcome to the HealthEmpower userstudy!"},
    intro: {
        "nl-BE": <Text>Bedankt dat je mee wilt doen aan de gebruikersstudie van HealthEmpower, een Europees project in samenwerking met de KULeuven en IDEWE. Hierbij ontwikkelen wij een slimme applicatie voor gebruikers die te kampen hebben met chronische en muskuloskeletale (spieren, botten, gewrichten) pijn. Zij worden door deze applicatie opgevolgd met behulp van een gepersonaliseerde coaching, zodat ze beter kunnen omgaan met hun klachten.</Text>,
        "en-EN": <Text>Thank you for wanting to participate in the HealthEmpower userstudy, a European project in collaboration with the university of KULeuven, and IDEWE. In this project, we develop a smart application for users with chronic and/or muskuloskeletal (muscles, bones and joints) pain. They receive follow-up treatment and information using personalised coaching, in order to better cope with their pain.</Text>},
    detail: {
        "nl-BE": <Text>In deze gebruikersstudie gaan wij een klein onderdeel bekijken van de coaching, namelijk het <b>pijnlogboek</b>. Dit is een applicatie dat gebruikers kunnen invullen wanneer ze last hebben van een pijn-opstoot, en met behulp van hun inputs worden er gepersonaliseerde aanbevelingen gegeven de de gebruiker in de toekomst zouden kunnen helpen.</Text>,
        "en-EN": <Text>In this user study, we will look at a small component of the coaching application: the <b>pain logbook</b>. This is a component that users need to fill in when they experiance an increase in pain or a pain flare-up, and receive personalised recommendations based on their inputs.</Text>},
    consent: {
        "nl-BE": <Text>Deze studie zou hoogstens een <b>half uurtje</b> in beslag nemen, en hierbij verzamelen wij enkel geanonomiseerde data. Ben je bereid om mee te doen?</Text>,
        "en-EN": <Text>This study takes <b>30-40 minutes</b>, in which we only collect anonymised data. Are you willing to participate?</Text>},
    yes: {
        "nl-BE": "Ja, begin er aan!",
        "en-EN": "Yes, start the study!"},
    no: {
        "nl-BE": "No, toch niet",
        "en-EN": "No, return"},
}