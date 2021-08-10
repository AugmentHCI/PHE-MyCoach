import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Button from '../../components/Button';

const Content = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    @keyframes fade-in {
        0% { opacity: 0%;}
        100% { opacity: 100%; }
    }
    color: var(--idewe-white);
    font-size: 18px;
    font-weight: 400;
    opacity: 0%;
    margin-top: .75em;
    margin-bottom: .75em;
    max-width: 70%;

    ${props => props.delay && css`
        animation: fade-in 0.5s ease-in;
        animation-fill-mode: forwards;
        animation-delay: ${props.delay}ms
    `};
`

const Group = styled.div`
    @keyframes fade-in {
        0% { opacity: 0%;}
        100% { opacity: 100%; }
    }
    display: flex;
    flex-direction: row;
    opacity: 0%;

    ${props => props.delay && css`
        animation: fade-in 0.5s ease-in;
        animation-fill-mode: forwards;
        animation-delay: ${props.delay}ms
    `};
`

export default function Introduction() {
    
    return (<Content>
        <Title>Welkom bij de HealthEmpower gebruikersstudie!</Title>
        <Text delay={1000}>Bedankt dat je mee wilt doen aan de gebruikersstudie van HealthEmpower, een Europees project in samenwerking met de KULeuven en IDEWE. Hierbij ontwikkelen wij een slimme applicatie voor gebruikers die te kampen hebben met chronische en muskoloskeletale pijn. Zij worden door deze applicatie opgevolgd met behulp van een gepersonaliseerde coaching, zodat ze beter kunnen omgaan met hun klachten.</Text>
        <Text delay={6000}>In deze gebruikersstudie gaan wij een klein onderdeel bekijken van de coaching, namelijk het <b>pijnlogboek</b>. Dit is een applicatie dat gebruikers kunnen invullen wanneer ze last hebben van een pijn-opstoot, en met behulp van hun inputs worden er gepersonaliseerde aanbevelingen gegeven de de gebruiker in de toekomst zouden kunnen helpen.</Text>
        <Text delay={14000}>Deze studie zou hoogstens een <b>half uurtje</b> in beslag nemen, en hierbij verzamelen wij enkel geanonomiseerde data. Ben je bereid om mee te doen?</Text>
        <Group delay={14000}>
            <Button width="fit" color="blue-dark">Nee, toch niet</Button>
            <Button width="fit" onClick={() => FlowRouter.go("/mycoach/userstudy/information")}>Ja, begin er aan!</Button>
        </Group>
    </Content>)
}
