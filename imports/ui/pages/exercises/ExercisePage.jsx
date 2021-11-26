import React, { useState, useEffect } from 'react';
import { FlowRouter } from "meteor/kadira:flow-router";
import NavigationBar from '../../components/NavigationBar';
import styled from 'styled-components';
import Icon from '../../components/Illustrations/Icon';
import ProgressManager from '../../../api/managers/ProgressManager';
import jwt_decode from "jwt-decode";
import FadeIn from "react-fade-in";
import { EXERCISES } from '../../../api/data/Exercises';

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
    margin-top: 15px;
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

export default function ExercisePage() {

    const userID = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr) : 1111111;
    const language  = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";
    const userToken = FlowRouter.getParam('token') ? FlowRouter.getParam('token') : "demo";

    const [thoughtExercises, updateThoughtExercises] = useState([]);
    const [activityExercises, updateActivityExercises] = useState([]);
    const [movementExercises, updateMovementExercises] = useState([]);
    const [socialExercises, updateSocialExercises] = useState([]);
    const [stressExercises, updateStressExercises] = useState([]);


    useEffect(() => {
        async function getExercises() {
            const progressManager = new ProgressManager({userID: userID, userToken: userToken});
            const progress = await progressManager.getUserProgress();
            const thoughtExercises = parseAvailableThoughtExercises(progress);
            const socialExercises = parseAvailableSocialExercises(progress);
            const movementExercises = parseAvailableMovementExercises(progress);
            const activityExercises = parseAvailableActivityExercises(progress);
            const stressExercises = parseAvailableStressExercises(progress);
            updateThoughtExercises(thoughtExercises);
            updateSocialExercises(socialExercises);
            updateMovementExercises(movementExercises);
            updateActivityExercises(activityExercises);
            updateStressExercises(stressExercises);
        }
        getExercises();
    }, []);
    
    function parseAvailableThoughtExercises(progress) {
        let newExercises = [];
        progress?.THOUGHTSEMOTIONS?.["TE_MOD_2"] === "COMPLETED" && newExercises.push(EXERCISES.thoughts);
        progress?.THOUGHTSEMOTIONS?.["TE_MOD_2"] === "COMPLETED" && newExercises.push(EXERCISES.ihaveathought);
        progress?.THOUGHTSEMOTIONS?.["TE_MOD_2"] === "COMPLETED" && newExercises.push(EXERCISES.road);
        progress?.THOUGHTSEMOTIONS?.["TE_MOD_2"] === "COMPLETED" && newExercises.push(EXERCISES.neighbour);
        progress?.THOUGHTSEMOTIONS?.["TE_MOD_3"] === "COMPLETED" && newExercises.push(EXERCISES.mindfulness);
        return newExercises;
    }

    function parseAvailableSocialExercises(progress) {
        let newExercises = [];
        progress?.SOCIAL?.["SOC_MOD_2"] === "COMPLETED" && newExercises.push(EXERCISES.connectingCommunication);
        progress?.SOCIAL?.["SOC_MOD_2"] === "COMPLETED" && newExercises.push(EXERCISES.elevatorPitch);
        return newExercises;
    }

    function parseAvailableMovementExercises(progress) {
        let newExercises = [];
        progress?.MOVEMENT?.["MOV_MOD_3"] === "COMPLETED" && newExercises.push(EXERCISES.wisselwerken);
        progress?.MOVEMENT?.["MOV_MOD_3"] === "COMPLETED" && newExercises.push(EXERCISES.werkoefeningen);
        progress?.MOVEMENT?.["MOV_MOD_4"] === "COMPLETED" && newExercises.push(EXERCISES.workout);
        return newExercises;
    }

    function parseAvailableActivityExercises(progress) {
        let newExercises = [];
        progress?.ACTIVITYWORK?.["ACT_MOD_4"] === "COMPLETED" && newExercises.push(EXERCISES.activitymanagement);
        progress?.ACTIVITYWORK?.["ACT_MOD_4"] === "COMPLETED" && newExercises.push(EXERCISES.goalsetting);
        return newExercises;
    }

    function parseAvailableStressExercises(progress) {
        let newExercises = [];
        progress?.STRESS?.["STR_MOD_4"] === "COMPLETED" && newExercises.push(EXERCISES.energy);
        progress?.STRESS?.["STR_MOD_5"] === "COMPLETED" && newExercises.push(EXERCISES.circle);
        progress?.STRESS?.["STR_MOD_6"] === "COMPLETED" && newExercises.push(EXERCISES.todo);
        progress?.STRESS?.["STR_MOD_6"] === "COMPLETED" && newExercises.push(EXERCISES.thankful);
        progress?.STRESS?.["STR_MOD_6"] === "COMPLETED" && newExercises.push(EXERCISES.breathing);
        return newExercises;
    }

    return (<React.Fragment>
        <NavigationBar title="Oefeningen"/>
        <div className="container" style={{paddingTop: "85px", paddingBottom:"15px"}}>
            <FadeIn>
                <ExerciseExplanation>
                    Hier krijg je een handig overzicht van oefeningen die jij hebt vrijgespeeld in de modules. Naarmate jij de coaching meer vrijspeelt, komen hier ook meer oefeningen te staan.
                </ExerciseExplanation>
                <ExerciseTiles language={language} userToken={userToken} title="Gedachten-oefeningen" exercises={thoughtExercises}/>
                <ExerciseTiles language={language} userToken={userToken} title="Sociale omgeving" exercises={socialExercises}/>
                <ExerciseTiles language={language} userToken={userToken} title="Bewegingsoefeningen" exercises={movementExercises}/>
                <ExerciseTiles language={language} userToken={userToken} title="Activiteitenmanagement" exercises={activityExercises}/>
                <ExerciseTiles language={language} userToken={userToken} title="Stress-oefeningen" exercises={stressExercises}/>
            </FadeIn>
        </div>
    </React.Fragment>)
}

function ExerciseTiles({title, exercises, language, userToken}) {
    if (!exercises || exercises.length === 0) return <React.Fragment/>;
    return (<React.Fragment>
        <ExerciseTitle>{title}</ExerciseTitle>
        <ExerciseContainer>
            { exercises.map(exercise => {return (<Exercise 
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
    </React.Fragment>)
}