import moment from "moment";
import React from "react";

import FadeIn from "react-fade-in";
import styled from 'styled-components';
import { weeksBetween } from "../../api/Moment";
import Icon from "../components/Illustrations/Icon";
import Illustration from "../components/Illustrations/Illustration";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 100%;
    font-family: var(--main-font);
    text-align: center;
`

const TextContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--idewe-white);
    color: var(--idewe-blue-dark);
    font-family: var(--main-font);
    font-size: 14px;
    font-weight: 500;
    padding: 10px 15px;
    margin: 50px 0 10px;
    border-radius: 15px;
    box-shadow: var(--card-shadow);
    text-align: center;
`

export default function MyProgressTemp() {

    const weeksLeft = weeksBetween(moment(new Date()).format("DD-MM-YYYY"), "17-11-2021", true, "DD-MM-YYYY")
    return (<div className="container">
        <FadeIn>
            <Container>
                <h1>Jouw progressie</h1>
                <p style={{color:"var(--idewe-blue-dark)"}}>Hier ga jij een overzicht krijgen van je dagelijkse vragenlijsten. Vul ze nog enkele dagen in om jouw progressie te ontgrendelen.</p>
                <Illustration image="soc-mod-socialmedia" width="220px"/>
                <TextContainer><Icon image="time" color="blue-dark" style={{marginRight:"5px"}}/> Kom terug over {weeksLeft} {weeksLeft === 1 ? "week" : "weken"}!</TextContainer>
            </Container>
        </FadeIn>
    </div>)
}