import React, { useState, useEffect } from 'react';
import { FlowRouter } from "meteor/kadira:flow-router";
import NavigationBar from '../../components/NavigationBar';
import styled from 'styled-components';
import Icon from '../../components/Illustrations/Icon';
import ProgressManager from '../../../api/managers/ProgressManager';
import jwt_decode from "jwt-decode";
import FadeIn from "react-fade-in";

const ExerciseContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    gap: 1rem;
`

const Exercise = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: safe center;
    font-weight: 500;
    overflow-y: scroll;
    background: var(--idewe-blue);
    color: var(--idewe-white);
    font-family: var(--main-font);
    border-radius: 15px;
    box-shadow: var(--card-shadow);
`

const ExerciseText = styled.div`
    line-height: 1.2em;
    display: flex;
    height: 100%;
    align-items: center;
    word-wrap: anywhere;
    font-size: 13px;
    flex: 2;
`

const ExerciseTitle = styled.div`
    font-family: var(--main-font);
    font-size: 20px;
    font-weight: 500;
    color: var(--idewe-blue-dark);
    margin-bottom: 10px;
`

const ExerciseIcon = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 3em;
    width: 3em;
    background-color: var(--idewe-white);
    border-radius: 15px;
    align-items: center;
`

const ExerciseExplanation = styled.div`
    background-color: var(--idewe-white);
    color: var(--idewe-blue-dark);
    font-family: var(--main-font);
    font-size: 14px;
    font-weight: 500;
    padding: 10px 15px;
    margin: 20px 0 10px;
    border-radius: 15px;
    box-shadow: var(--card-shadow);
`


const Exercises = {
    thoughts: {icon: "writing", text: "Stilstaan bij gedachten", link: "thoughtsemotions/TE_MOD_2/TE-MOD2-CARD1"},
    road: {icon: "video", text: "Drukke baan", link: "thoughtsemotions/TE_MOD_2/TE-MOD2-CARD2"},
    ihaveathought: {icon: "sound", text: "Ik heb de gedachte dat...", link: "thoughtsemotions/TE_MOD_2/TE-MOD2-CARD3"},
    neighbour: {icon: "video", text: "Buurman", link: "thoughtsemotions/TE_MOD_2/TE-MOD2-CARD4"},
    mindfulness: {icon: "idea", text: "Mindfulness", link: "thoughtsemotions/TE_MOD_3/TE-MOD3-CARD3"},
    mindfulnessAudio: {icon: "sound", text: "Mindfulness Audio", link: "thoughtsemotions/TE_MOD_3/TE-MOD3-CARD4"},
}

export default function ExercisePage() {

    const userID = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr) : 1111111;
    const language  = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";
    const userToken = FlowRouter.getParam('token') ? FlowRouter.getParam('token') : "demo";

    const [thoughtExercises, updateThoughtExercises] = useState([]);


    useEffect(() => {
        async function getExercises() {
            const progressManager = new ProgressManager({userID: userID, userToken: userToken});
            const progress = await progressManager.getUserProgress();
            const userExercises = parseAvailableThoughtExercises(progress);
            updateThoughtExercises(userExercises);
        }
        getExercises();
    }, [])
    
    function parseAvailableThoughtExercises(progress) {
        let newExercises = [];
        progress?.THOUGHTSEMOTIONS?.["TE_MOD_2"] === "COMPLETED" && newExercises.push(Exercises.thoughts);
        progress?.THOUGHTSEMOTIONS?.["TE_MOD_2"] === "COMPLETED" && newExercises.push(Exercises.ihaveathought);
        progress?.THOUGHTSEMOTIONS?.["TE_MOD_2"] === "COMPLETED" && newExercises.push(Exercises.road);
        progress?.THOUGHTSEMOTIONS?.["TE_MOD_2"] === "COMPLETED" && newExercises.push(Exercises.neighbour);
        progress?.THOUGHTSEMOTIONS?.["TE_MOD_3"] === "COMPLETED" && newExercises.push(Exercises.mindfulness);
        progress?.THOUGHTSEMOTIONS?.["TE_MOD_3"] === "COMPLETED" && newExercises.push(Exercises.mindfulnessAudio);
        return newExercises;
    }

    return (<React.Fragment>
        <NavigationBar title="Oefeningen"/>
        <div className="container" style={{paddingTop: "85px"}}>
            <FadeIn>
                <ExerciseExplanation>
                    Hier krijg je een handig overzicht van oefeningen die jij hebt vrijgespeeld in de module 'Gedachten en Emoties'. Naarmate jij de coaching meer vrijspeelt, komen hier ook meer oefeningen te staan.
                </ExerciseExplanation>
                <ExerciseTitle>Jouw gedachten-oefeningen</ExerciseTitle>
                <ExerciseContainer>
                    { thoughtExercises.map(exercise => {return (<Exercise 
                        key={exercise.text} 
                        onClick={() => {FlowRouter.go(`/${language}/mycoach/${userToken}/exercise/${exercise.link}`)}}>
                            <div style={{display:"flex", alignItems: "center", margin: ".5em .5em"}}>
                                <ExerciseIcon>
                                    <Icon image={exercise.icon} color="blue" width="24px" style={{display:"inline"}}/>
                                </ExerciseIcon>
                            </div>
                            <ExerciseText>{exercise.text}</ExerciseText>
                            <Icon image="next" color="white" style={{display:"inline", margin:".5em .5em"}}/>
                        </Exercise>)}) }
                </ExerciseContainer>
            </FadeIn>
        </div>
    </React.Fragment>)
}