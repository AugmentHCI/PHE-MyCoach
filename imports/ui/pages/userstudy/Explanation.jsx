import React from 'react';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';
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
    font-size: 16px;
    font-weight: 400;
    margin-top: .75em;
    max-width: 85%;
`

const Group = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: .75em;
`

const Photo = styled.div`
    width: 600px;
    border: 5px solid var(--idewe-white);
    box-shadow: var(--card-shadow);
    margin-top: 20px;
    margin-bottom: 20px;
`

const language = localStorage.getItem('language') ? localStorage.getItem('language') : "nl-BE";

export default function Explanation() {

    return (<Content>
        <Title>{localization.title[language]}</Title>
        <FadeIn>
            <Text>{localization.information1[language]}</Text>
            <Text>{localization.information2[language]}</Text>
            {localization.information3[language]}
            <Photo>
                <img src={`/images/userstudy/textualvisual.jpg`} width="590px"/>
            </Photo>
            <Group>
                <Button width="fit" onClick={() => history.back()} color="blue-dark">{localization.back[language]}</Button>
                <Button width="fit" onClick={() => FlowRouter.go("/mycoach/userstudy/studyflow")}>{localization.next[language]}</Button>
            </Group>
        </FadeIn>

    </Content>)
}


const text1 = {
    "visualhybrid": {"nl-BE": "visuele uitleg", "en-EN": "visual explanation"},
    "textualhybrid": {"nl-BE": "tekstuele uitleg", "en-EN": "textual explanation"}
}

const text2 = {
    "visualhybrid": {"nl-BE": "extra tekstuele uitleg", "en-EN": "extra textual explanation"},
    "textualhybrid": {"nl-BE": "extra visuele uitleg in de vorm van balkjes", "en-EN": "extra visual explanation in the form of bars"}
}

const localization = {
    title: {
        "nl-BE": "Korte uitleg voor we er aan beginnen",
        "en-EN": "Brief description before we start"
    },
    information1: {
        "nl-BE": "Je gaat twee keer een pijnlogboek moeten invullen, waarbij jij je een situatie voorhaalt waarin je pijn ervaarde (hetzij een pijn-opstoot van chronische pijn, acute pijn doordat jij je knie stootte, etc...). Wanneer jij je pijnlogboek hebt ingevuld, ga je ook enkele aanbevelingen krijgen die afgestemd zijn op de emoties, gedachten of reacties die je hebt ingevuld.",
        "en-EN": "You will have to fill in the painlogbook twice, where you will imagine a situation in which you experienced pain (be it a pain flare-up from chronic pain, acute pain from hitting your knee, etc...). When you have filled in your painlogbook, you will receive some recommendations that are tailored to the emotions, thoughts and reactions you filled in."
    },
    information2: {
        "nl-BE": "De aanbevelingen zijn verwijzingen naar coaching-modules die je daar meer info rond geven a.d.h.v. interactieve oefeningen en informatie. Voor deze studie is het echter voldoende dat je de aanbeveling leest en beslist of je er mee akkoord gaat of niet, je hoeft niet naar de aanbevolen module te gaan om het door te nemen.",
        "en-EN": "The recommendations are referrals to coaching-modules that will give more information using interactive exercises and information. For this study, it is sufficient to just read the recommendations and decide whether it speaks to you or not (you will not actually be referred to the coaching modules)."
    },
    information3: {
        "nl-BE": <Text>Je gaat bij je aanbevelingen twee soorten <i>uitleg</i> te zien krijgen van waarom je de aanbeveling krijgt: eerst een <b>{text1[localStorage.getItem('studysettings')][language]}</b> dat jouw input samenvat, de tweede keer dezelfde {text1[localStorage.getItem('studysettings')]} maar met wat <b>{text2[localStorage.getItem('studysettings')][language]}</b> er bij. Deze twee gaan we dan achteraf vergelijken.</Text>,
        "en-EN": <Text>You will receive two types of <i>explanation</i> of why the recommendation is shown to you: first a <b>{text1[localStorage.getItem('studysettings')][language]}</b> that summarises your input, and second the same {text1[localStorage.getItem('studysettings')][language]} but with some <b>{text2[localStorage.getItem('studysettings')][language]}</b>. We will compare these two types of explanations afterwards.</Text>
    },
    back: {
        "nl-BE": "Terug",
        "en-EN": "Back"
    },
    next: {
        "nl-BE": "Volgende",
        "en-EN": "Next"
    },
}