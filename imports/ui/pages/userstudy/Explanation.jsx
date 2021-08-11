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

export default function Explanation() {

    const text1 = {
        "visualhybrid": "visuele uitleg",
        "textualhybrid": "tekstuele uitleg"
    }

    const text2 = {
        "visualhybrid": "extra tekstuele uitleg",
        "textualhybrid": "extra visuele uitleg in de vorm van balkjes"
    }

    return (<Content>
        <Title>Korte uitleg voor we er aan beginnen</Title>
        <FadeIn>
            <Text>Je gaat twee keer een pijnlogboek moeten invullen, waarbij jij je een situatie voorhaalt waarin je pijn ervaarde (hetzij een pijn-opstoot van chronische pijn, acute pijn doordat jij je knie stootte, etc...). Wanneer jij je pijnlogboek hebt ingevuld, ga je ook enkele aanbevelingen krijgen die afgestemd zijn op de emoties, gedachten of reacties die je hebt ingevuld.</Text>
            <Text>De aanbevelingen zijn verwijzingen naar coaching-modules die je daar meer info rond geven a.d.h.v. interactieve oefeningen en informatie. Voor deze studie is het echter voldoende dat je de aanbeveling leest en beslist of je er mee akkoord gaat of niet, je hoeft niet naar de aanbevolen module te gaan om het door te nemen.</Text>
            <Text>Je gaat bij je aanbevelingen twee soorten <i>uitleg</i> te zien krijgen van waarom je de aanbeveling krijgt: eerst een <b>{text1[localStorage.getItem('studysettings')]}</b> dat jouw input samenvat, de tweede keer dezelfde {text1[localStorage.getItem('studysettings')]} maar met wat <b>{text2[localStorage.getItem('studysettings')]}</b> er bij. Deze twee gaan we dan achteraf vergelijken.</Text>
            <Photo>
                <img src={`/images/userstudy/textualvisual.jpg`} width="590px"/>
            </Photo>
            <Group>
                <Button width="fit" onClick={() => FlowRouter.go("/mycoach/userstudy/information")} color="blue-dark">Vorige</Button>
                <Button width="fit" onClick={() => FlowRouter.go("/mycoach/userstudy/studyflow")}>Volgende</Button>
            </Group>
        </FadeIn>

    </Content>)
}
