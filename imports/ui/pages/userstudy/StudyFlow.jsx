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

export default function StudyFlow() {

    return (<Content>
        <Title>{localization.title[language]}</Title>
        <FadeIn>
            <Text>{localization.information[language]} 
                <ul>
                    {localization.part1[language]}
                    {localization.part2[language]}
                </ul></Text>
            <Text>{localization.wrapup[language]}</Text>
            <Text><b>Tip:</b> {localization.fullscreen[language]}</Text>
            <Photo>
                <img src={`/images/userstudy/flow-${language}.png`} width="590px"/>
            </Photo>
            <Group>
                <Button width="fit" onClick={() => FlowRouter.go("/mycoach/userstudy/explanation")} color="blue-dark">{localization.back[language]}</Button>
                <Button width="fit" onClick={() => FlowRouter.go("/mycoach/userstudy/questionnaire/profile")}>{localization.next[language]}</Button>
            </Group>
        </FadeIn>

    </Content>)
}

const localization = {
    title: {
        "nl-BE": "Verloop van de studie",
        "en-EN": "Flow of this study"
    },
    information: {
        "nl-BE": "Hieronder tonen wij je nog kort het verloop van de studie. Deze zal bestaan uit twee delen:",
        "en-EN": "Here you see a brief overview of the study flow. This consists of two parts:"
    },
    part1: {
        "nl-BE": <li>in het eerste deel ga je aan de slag met het pijnlogboek, waarbij je aanbevelingen gaat krijgen met <b>een eerste soort uitleg</b> van waarom je de aanbevelingen krijgt.</li>,
        "en-EN": <li>in the first part, you get to interact with the painlogbook in which you will receive recommendations with <b>a first type of explanation</b> of why the recommendations are given to you.</li>
    },
    part2: {
        "nl-BE": <li>in het tweede deel ga je met hetzelfde pijnlogboek aan de slag, en krijg je aanbevelingen die <b>op een andere manier uitgelegd gaan worden.</b></li>,
        "en-EN": <li>in the second part, you'll interact with the same painlogbook, but with recommendations that <b>will be explained in a different way.</b></li>
    },
    wrapup: {
        "nl-BE": "Elk pijnlogboek wordt gevolgd door een vragenlijst die je bevindingen gaat peilen van de types uitleg. Ten slotte gaan we je nog een paar laatste vragen stellen om de studie af te ronden, en dan ben je klaar!",
        "en-EN": "Each painlogbook will be followed by a questionnaire that will gauge your reception of the explanation types. Finally, you will receive some closing questions that will wrap up this user study!"
    },
    fullscreen: {
        "nl-BE": "zet je browser wel eerst op volledig scherm!",
        "en-EN": "maximise the window of your browser!"
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
