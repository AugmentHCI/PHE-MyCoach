import React, { useState, useEffect } from 'react';
import Radio from 'antd/lib/radio';
import FadeIn from 'react-fade-in';
import styled, { css } from 'styled-components';
import Button from '../../components/Button';
import Input from '../../components/Input';

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
    font-size: 18px;
    font-weight: 400;
    margin-top: .75em;
    max-width: 70%;
`

const Group = styled.div`
    display: flex;
    flex-direction: row;
`

const Photo = styled.div`
    width: 600px;
    border: 5px solid var(--idewe-white);
    box-shadow: var(--card-shadow);
    margin-top: 20px;
    margin-bottom: 20px;
`

const P = styled.p`
    display: inline;
`

export default function Conclusion() {

    const [preference, updatePreference] = useState(0);
    const [like, updateLike] = useState("");
    const [dislike, updateDislike] = useState("");

    const text1 = {
        0: "deze",
        "vis": "het visuele",
        "text": "het textuele",
        "hyb": "het visuele + tekstuele"
    }

    const text2 = {
        0: "de andere",
        "vis": "het visuele + tekstuele",
        "text": "visuele + tekstuele",
        "hyb": "het visuele"
    }

    const option1 = {
        "textualhybrid": "Textueel",
        "visualhybrid": "Visueel"
    }

    function isCompleted() {
        return (like.length > 0 && dislike.length > 0 & preference !== 0 );
    }

    function saveAndProceed() {
        Meteor.callPromise('userstudy.insert', {
            mail: localStorage.getItem('mail'), 
            settings: localStorage.getItem('studysettings'), 
            type: 'conclusion-preference', 
            content: preference});
        Meteor.callPromise('userstudy.insert', {
            mail: localStorage.getItem('mail'), 
            settings: localStorage.getItem('studysettings'), 
            type: 'conclusion-like', 
            content: like});
        Meteor.callPromise('userstudy.insert', {
            mail: localStorage.getItem('mail'), 
            settings: localStorage.getItem('studysettings'), 
            type: 'conclusion-dislike', 
            content: dislike});
        localStorage.removeItem("preference");
        localStorage.removeItem("like");
        localStorage.removeItem("dislike");
        FlowRouter.go("/mycoach/userstudy/thankyou")
    }
    
    useEffect(() => {
        console.log(localStorage.getItem("preference"))
        if (localStorage.getItem("preference")) updatePreference(localStorage.getItem("preference"));
        if (localStorage.getItem("like") && localStorage.getItem("like").length > 0) updateLike(localStorage.getItem("like"));
        if (localStorage.getItem("dislike") && localStorage.getItem("dislike").length > 0) updateDislike(localStorage.getItem("dislike"));
    }, []);

    useEffect(() => { localStorage.setItem("preference", preference) }, [preference]);
    useEffect(() => { localStorage.setItem("like", like) }, [like]);
    useEffect(() => { localStorage.setItem("dislike", dislike) }, [dislike]);

    return (<Content>
        <Title>Laatste vragen</Title>
        <FadeIn>
            <Text>Je bent nu klaar met het pijnlogboek. Hieronder krijg je nog enkele vragen die peilen naar het verschil in de explanations (uitleg) die je te zien kreeg.</Text>
            <Photo>
                <img src={`/images/userstudy/${localStorage.getItem('studysettings')}.jpg`} width="590px"/>
            </Photo>
            <Text>Welk van de types explanation (uitleg) verkies je?</Text>
            <div className="whiteoptions">
                <Radio.Group onChange={(e) => updatePreference(e.target.value)} value={preference} style={{marginTop:"0", fontFamily:"var(--main-font)", display: "inline-block", flexDirection: "row", gap: "1em", color: "var(--idewe-white)", fontWeight: 500, fontSize: "18px"}}>
                    <Radio value={localStorage.getItem('studysettings') === "textualhybrid" ? "text" : "vis"}>{option1[localStorage.getItem('studysettings')]}</Radio>
                    <Radio value={"hyb"}>Visueel + Text</Radio>
                </Radio.Group>
            </div>
            <Text>Wat is de reden dat je {text1[preference]} verkiest?</Text>
            <Input type="text" placeholder="Typ hier" style={{width:"500px"}} onChange={updateLike} value={like}/>
            <Text>En wat is de reden dat je {text2[preference]} niet verkiest?</Text>
            <Input type="text" placeholder="Typ hier" style={{width:"500px"}} onChange={updateDislike} value={dislike}/>
            <Button width="fit" onClick={() => saveAndProceed()} disabled={!isCompleted()}>Verstuur {!isCompleted() && <P>(vul eerst alles in)</P>}</Button>
        </FadeIn>

    </Content>)
}
