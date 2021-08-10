import React from 'react';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';
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

export default function StudyFlow() {

    return (<Content>
        <Title>Verloop van de studie</Title>
        <FadeIn>
            <Text>Hieronder tonen wij je nog kort het verloop van de studie. Deze zal bestaan uit twee delen: 
                <ul>
                    <li>in het eerste deel ga je aan de slag met het pijnlogboek, waarbij je aanbevelingen gaat krijgen met <b>een eerste soort uitleg</b> van waarom je de aanbevelingen krijgt.</li>
                    <li>in het tweede deel ga je met hetzelfde pijnlogboek aan de slag, en krijg je aanbevelingen die <b>op een andere manier uitgelegd gaan worden.</b></li>
                </ul></Text>
            <Text>Elk pijnlogboek wordt gevolgd door een vragenlijst die je bevindingen gaat peilen van de types uitleg. Ten slotte gaan we je nog een paar laatste vragen stellen om de studie af te ronden, en dan ben je klaar!</Text>
            <Text><b>Tip:</b> zet je browser wel eerst op volledig scherm!</Text>
            <Photo>
                <img src={`/images/userstudy/flow.png`} width="590px"/>
            </Photo>
            <Group>
                <Button width="fit" onClick={() => FlowRouter.go("/mycoach/userstudy/explanation")} color="blue-dark">Vorige</Button>
                <Button width="fit" onClick={() => FlowRouter.go("/mycoach/userstudy/questionnaire/profile")}>Volgende</Button>
            </Group>
        </FadeIn>

    </Content>)
}
