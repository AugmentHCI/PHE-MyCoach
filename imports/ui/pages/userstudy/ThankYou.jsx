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
`

const Text = styled.div`
    color: var(--idewe-white);
    font-size: 18px;
    font-weight: 400;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    text-align: center;
`

export default function ThankYou() {

    return (<Content>
        <Title>Bedankt!</Title>
        <FadeIn>
            <Text>Hiermee heb jij de gebruikersstudie afgerond. We bedanken je voor je deelname aan de studie, en wensen je nog een prettige dag verder!</Text>
            <Illustration image="thankyou" width="350px"/>
            <Text>Je mag dit tabblad gerust sluiten!</Text>
        </FadeIn>

    </Content>)
}
