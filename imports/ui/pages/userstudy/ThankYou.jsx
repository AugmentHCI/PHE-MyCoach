import React from 'react';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';
import Illustration from '../../components/Illustrations/Illustration';

const Content = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: safe center;
    align-items: center;
    overflow-y: scroll;
    background: var(--idewe-blue);
    color: var(--idewe-white);
    font-family: var(--main-font);
    padding: 15px 45px;
    text-align: center;
`

const Title = styled.div`
    color: var(--idewe-white);
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 2em;
`

const Text = styled.div`
    color: var(--idewe-white);
    font-size: 18px;
    font-weight: 400;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    text-align: center;
`

const Code = styled.div`
    color: var(--idewe-white);
    font-size: 20px;
    font-weight: 600;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    text-align: center;
`

export default function ThankYou() {

    const language = localStorage.getItem('language') ? localStorage.getItem('language') : "nl-BE";
    const prolificID = localStorage.getItem('prolificID');
    const code = "8B0AA833";

    return (<Content>
        <Title>{localization.title[language]}</Title>
        <FadeIn>
            <Illustration image="thankyou" width="300px"/>
            <Text>{localization.text[language]}</Text>
            <Text>{prolificID && localization.useCode[language]}</Text>
            <Code>{code}</Code>
            <Text>{localization.closeTab[language]}</Text>
        </FadeIn>

    </Content>)
}

const localization = {
    title: {
        "nl-BE": "Bedankt!",
        "en-EN": "Thank you!"
    },
    text: {
        "nl-BE": "Hiermee heb jij de gebruikersstudie afgerond. We bedanken je voor je deelname aan de studie, en wensen je nog een prettige dag verder!",
        "en-EN": "This is the end of the study! We thank you for your coöperation during this user study, and we wish you a nice day!"
    },
    useCode: {
        "nl-BE": "Plak deze code om je deelname met de Prolific studie te vervolledigen:",
        "en-EN": "Paste this code in the Prolific tab to finalise your user study:"
    },
    closeTab: {
        "nl-BE": "Je mag dit tabblad gerust sluiten als je klaar bent!",
        "en-EN": "You can close this tab once you're finished!"
    }
}