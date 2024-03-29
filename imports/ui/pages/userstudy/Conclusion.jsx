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

    const language = localStorage.getItem('language') ? localStorage.getItem('language') : "nl-BE";

    const text1 = {
        0: {"nl-NL": "deze", "en-EN": "this"},
        "vis": {"nl-NL": "het visuele", "en-EN": "the visual"},
        "text": {"nl-NL": "het tekstuele", "en-EN": "the textual"},
        "hyb": {"nl-NL": "het visuele + tekstuele", "en-EN": "the visual + textual"}
    }

    const text2 = {
        0: {"nl-NL": "de andere", "en-EN": "the other"},
        "vis": {"nl-NL": "het visuele + tekstuele", "en-EN": "the visual + textual"},
        "text": {"nl-NL": "het visuele + tekstuele", "en-EN": "the visual + textual"},
        "hyb": {"nl-NL": "de andere", "en-EN": "the other"}
    }

    const option1 = {
        "textualhybrid": {"nl-NL": "Textueel", "en-EN": "Textual"},
        "visualhybrid": {"nl-NL": "Visueel", "en-EN": "Visual"}
    }

    const localization = {
        title: {
            "nl-BE": "Laatste vragen",
            "en-EN": "Last questions"
        },
        information: {
            "nl-BE": "Je bent nu klaar met het pijnlogboek. Hieronder krijg je nog enkele vragen die peilen naar het verschil in de explanations (uitleg) die je te zien kreeg.",
            "en-EN": "You are now finished with the pain logbook. Below you see some questions regarding the differences in both types of explanations that you received."
        },
        preference: {
            "nl-BE": "Welk van de types explanation (uitleg) verkies je?",
            "en-EN": "Which of the explanations did you prefer?"
        },
        reasonPrefer: {
            "nl-BE": `Wat is de reden dat je ${text1[preference][language]} verkiest?`,
            "en-EN": `What is the reason that you prefer ${text1[preference][language]}?`
        },
        reasonDislike: {
            "nl-BE": `En wat is de reden dat je ${text2[preference][language]} niet verkiest?`,
            "en-EN": `And what is the reason that you don't prefer ${text2[preference][language]}?`
        },
        vistext: {
            "nl-BE": "Visueel + Text",
            "en-EN": "Visual + Textual"
        },
        send: {
            "nl-BE": "Verstuur",
            "en-EN": "Confirm"
        },
        fillin: {
            "nl-BE": "(vul eerst alles in)",
            "en-EN": "(fill everything in first)"
        },
        typehere: {
            "nl-BE": "Typ hier",
            "en-EN": "Type here"
        },
    }

    function isCompleted() {
        return (like.length > 0 && dislike.length > 0 & preference !== 0 );
    }

    function saveAndProceed() {
        if (localStorage.getItem('prolificID')) {
            Meteor.callPromise('prolificstudy.insert', {
                id: localStorage.getItem('prolificID'), 
                settings: localStorage.getItem('studysettings'), 
                type: 'conclusion-preference', 
                content: preference});
            Meteor.callPromise('prolificstudy.insert', {
                id: localStorage.getItem('prolificID'), 
                settings: localStorage.getItem('studysettings'), 
                type: 'conclusion-like', 
                content: like});
            Meteor.callPromise('prolificstudy.insert', {
                id: localStorage.getItem('prolificID'), 
                settings: localStorage.getItem('studysettings'), 
                type: 'conclusion-dislike', 
                content: dislike});
        }
        else {
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
        }
        localStorage.removeItem("preference");
        localStorage.removeItem("like");
        localStorage.removeItem("dislike");
        FlowRouter.go("/mycoach/userstudy/thankyou")
    }
    
    useEffect(() => {
        if (localStorage.getItem("preference")) updatePreference(localStorage.getItem("preference"));
        if (localStorage.getItem("like") && localStorage.getItem("like").length > 0) updateLike(localStorage.getItem("like"));
        if (localStorage.getItem("dislike") && localStorage.getItem("dislike").length > 0) updateDislike(localStorage.getItem("dislike"));
    }, []);

    useEffect(() => { localStorage.setItem("preference", preference) }, [preference]);
    useEffect(() => { localStorage.setItem("like", like) }, [like]);
    useEffect(() => { localStorage.setItem("dislike", dislike) }, [dislike]);

    return (<Content>
        <Title>{localization.title[language]}</Title>
        <FadeIn>
            <Text>{localization.information[language]}</Text>
            <Photo>
                <img src={`/images/userstudy/${localStorage.getItem('studysettings')}.jpg`} width="590px"/>
            </Photo>
            <Text>{localization.preference[language]}</Text>
            <div className="whiteoptions">
                <Radio.Group onChange={(e) => updatePreference(e.target.value)} value={preference} style={{marginTop:"0", fontFamily:"var(--main-font)", display: "inline-block", flexDirection: "row", gap: "1em", color: "var(--idewe-white)", fontWeight: 500, fontSize: "18px"}}>
                    <Radio value={localStorage.getItem('studysettings') === "textualhybrid" ? "text" : "vis"}>{option1[localStorage.getItem('studysettings')][language]}</Radio>
                    <Radio value={"hyb"}>{localization.vistext[language]}</Radio>
                </Radio.Group>
            </div>
            <Text>{localization.reasonPrefer[language]}</Text>
            <Input type="text" placeholder={localization.typehere[language]} style={{width:"500px"}} onChange={updateLike} value={like}/>
            <Text>{localization.reasonDislike[language]}</Text>
            <Input type="text" placeholder={localization.typehere[language]} style={{width:"500px"}} onChange={updateDislike} value={dislike}/>
            <Button width="fit" onClick={() => saveAndProceed()} disabled={!isCompleted()}>{localization.send[language]} {!isCompleted() && <P>{localization.fillin[language]}</P>}</Button>
        </FadeIn>
    </Content>)
}