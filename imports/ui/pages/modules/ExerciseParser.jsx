import React, { useState, useEffect } from 'react';
import { FlowRouter } from "meteor/kadira:flow-router";
import jwt_decode from "jwt-decode";
import NavigationBar from '../../components/NavigationBar';
import { getSubmodule } from '../../../api/scripts/ScriptDispatcher';
import CardsParser from './CardsParser';
import Button from '../../components/Button';


export default function ExerciseParser() {

    const userID = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr) : 1111111;
    const module = FlowRouter.getParam('module');
    const submodule = FlowRouter.getParam('submodule');
    const exerciseID = FlowRouter.getParam('cardID');

    function getCards() {
        const submoduleData = getSubmodule({module: module, submoduleID: submodule});
        let cards = [];
        for (const card of submoduleData.cards) {
            if (card?.id === exerciseID) cards.push(card);
        }
        return cards;
    }

    return (<React.Fragment>
        <NavigationBar title="Gedachte-oefeningen"/>
        <div className="container" style={{paddingTop: "85px"}}>
            <CardsParser cards={getCards()} module={module} submodule={submodule} moduleStatus={"COMPLETED"} userProfile={{profile:1}} noDivider userID={userID} finishCallback={() => {console.log("Go back")}}/>
            <Button width="100%" center color="blue" style={{marginBottom:"30px"}} onClick={() => {history.back()}}>Keer terug</Button>
        </div>
    </React.Fragment>)
}