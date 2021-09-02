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

const P = styled.p`
    display: inline;
`

export default function ProlificInformation() {
    

    const [prolificID, updateProlificID] = useState(FlowRouter.getQueryParam("PROLIFICID"));
    const [studyID, updateStudyID] = useState(FlowRouter.getQueryParam("STUDYID"));
    const [sessionID, updateSessionID] = useState(FlowRouter.getQueryParam("SESSIONID"));
    const [year, updateYear] = useState("");
    const [pain, updatePain] = useState("");
    const [gender, updateGender] = useState("");
    const [treatment, updateTreatment] = useState("");
    const [language, setLanguage] = useState("en-EN");

    function updateLanguage(language) {
        setLanguage(language);
        localStorage.setItem('language', language);
    }

    useEffect(() => {
        const language = localStorage.getItem('language');
        if (!language) {
            localStorage.setItem('language', 'en-EN');
            setLanguage("en-EN");
        }
        else setLanguage(language);
    }, [])

    function isCompleted() {
        const intYear = parseInt(year);
        if (isNaN(intYear) || intYear > 2015 || intYear < 1900) return false;
        if (pain === "" || (pain === "yes" && treatment === "")) return false;
        return !(gender === "" || year.length !== 4)
    }

    function saveAndProceed() {
        localStorage.setItem('prolificID', prolificID);
        localStorage.setItem('studyID', studyID);
        localStorage.setItem('sessionID', sessionID);
        localStorage.setItem('year', year);
        localStorage.setItem('gender', gender);
        Meteor.callPromise('prolificstudy.insert', {id: prolificID, settings: localStorage.getItem('studysettings'), type: 'sessionID', content: sessionID});
        Meteor.callPromise('prolificstudy.insert', {id: prolificID, settings: localStorage.getItem('studysettings'), type: 'studyID', content: studyID});
        Meteor.callPromise('prolificstudy.insert', {id: prolificID, settings: localStorage.getItem('studysettings'), type: 'year', content: year.toString()});
        Meteor.callPromise('prolificstudy.insert', {id: prolificID, settings: localStorage.getItem('studysettings'), type: 'pain', content: pain});
        Meteor.callPromise('prolificstudy.insert', {id: prolificID, settings: localStorage.getItem('studysettings'), type: 'gender', content: gender});
        if (pain === "yes") Meteor.callPromise('prolificstudy.insert', {id: prolificID, settings: localStorage.getItem('studysettings'), type: 'treatment', content: treatment});
        FlowRouter.go("/mycoach/userstudy/explanation");
    }
    
    useEffect(() => {
        /* Randomly assign study settings */
        const settingsOptions = ['textualhybrid', 'visualhybrid'];
        if (!localStorage.getItem('studysettings')) {
            const setting = Math.round(Math.random());
            localStorage.setItem('studysettings', settingsOptions[setting]);
        }
    }, []);

    return (<Content>
        <Title>{localization.title[language]}</Title>
        <FadeIn>
            <Text>{localization.information[language]}</Text>
            <Group>
                <Button width="fit" color={language==="en-EN" ? "blue-dark-tint5" : ""} onClick={() => updateLanguage("en-EN")}> 🇺🇸 English </Button>
                <Button width="fit" color={language==="nl-BE" ? "blue-dark-tint5" : ""} onClick={() => updateLanguage("nl-BE")}> 🇳🇱 Dutch </Button>
            </Group>
            <Text>{localization.prolificID[language]}</Text>
            <Input type="text" disabled={prolificID ? true : false} value={prolificID} placeholder="Your prolific ID" onChange={updateProlificID} style={{width:"200px"}}/>
            <Text>{localization.birthyear[language]}</Text>
            <Input type="text" placeholder="1980" style={{width:"70px"}} onChange={updateYear}/>
            <Text>{localization.gender[language]}</Text>
            <div className="whiteoptions">
                <Radio.Group onChange={(e) => updateGender(e.target.value)} value={gender} style={{marginTop:"0", fontFamily:"var(--main-font)", display: "inline-block", flexDirection: "row", gap: "1em", color: "var(--idewe-white)", fontWeight: 500, fontSize: "18px"}}>
                    <Radio value={"f"}>{localization.female[language]}</Radio>
                    <Radio value={"m"}>{localization.male[language]}</Radio>
                    <Radio value={"o"}>{localization.other[language]}</Radio>
                    <Radio value={"x"}>{localization.notspecify[language]}</Radio>
                </Radio.Group>
            </div>
            <Text>{localization.experiencepain[language]}</Text>
            <div className="whiteoptions">
                <Radio.Group onChange={(e) => updatePain(e.target.value)} value={pain} style={{marginTop:"0", fontFamily:"var(--main-font)", display: "inline-block", flexDirection: "row", gap: "1em", color: "var(--idewe-white)", fontWeight: 500, fontSize: "18px"}}>
                    <Radio value={"no"}>{localization.no[language]}</Radio>
                    <Radio value={"yes"}>{localization.yes[language]}</Radio>
                </Radio.Group>
            </div>
            {pain === "yes" && <Text>{localization.treatment[language]}</Text>}
            {pain === "yes" && <div className="whiteoptions">
                <Radio.Group onChange={(e) => updateTreatment(e.target.value)} value={treatment} style={{marginTop:"0", fontFamily:"var(--main-font)", display: "inline-block", flexDirection: "row", gap: "1em", color: "var(--idewe-white)", fontWeight: 500, fontSize: "18px"}}>
                    <Radio value={"no"}>{localization.no[language]}</Radio>
                    <Radio value={"yes"}>{localization.yes[language]}</Radio>
                </Radio.Group>
            </div>}
            <Text>{localization.byparticipating[language]}</Text>
            <ul>
                <li>{localization.agree1[language]}</li>
                <li>{localization.agree2[language]}</li>
                <li>{localization.agree3[language]}</li>
            </ul>
        <Group>
            <Button width="fit" color="blue-dark" onClick={() => history.back()}>{localization.disagree[language]}</Button>
            <Button width="fit" onClick={() => saveAndProceed()} disabled={!isCompleted()}>{localization.agree[language]} {!isCompleted() && <P>{localization.fillin[language]}</P>}</Button>
        </Group>
        </FadeIn>

    </Content>)
}


const localization = {
    title: {
        "nl-BE": "Jouw informatie",
        "en-EN": "Your information"
    },
    information: {
        "nl-BE": "We hebben eerst wat algemene demografische informatie nodig, alsook de taal waarin jij de studie wilt afleggen.",
        "en-EN": "We first need some general demographic information, as well as the language you prefer to use during this user study."
    },
    prolificID: {
        "nl-BE": "Wat is jouw prolific ID? (Deze zou automatisch overgenomen moeten zijn).",
        "en-EN": "What is your prolific ID? (This should be filled in automatically)."
    },
    birthyear: {
        "nl-BE": "Wat is jouw geboortejaar?",
        "en-EN": "What is your birth year?"
    },
    gender: {
        "nl-BE": "Wat is jouw geslacht?",
        "en-EN": "What is your gender?"
    },
    female: {
        "nl-BE": "Vrouw",
        "en-EN": "Female"
    },
    male: {
        "nl-BE": "Man",
        "en-EN": "Male"
    },
    other: {
        "nl-BE": "Anders",
        "en-EN": "Other"
    },
    notspecify: {
        "nl-BE": "Specifieer liever niet",
        "en-EN": "Rather not specify"
    },
    experiencepain: {
        "nl-BE": "Heb je momenteel last of last gehad in de afgelopen 3 jaar van chronische en/of muskuloskeletale (spieren, botten, gewrichten) pijn?",
        "en-EN": "Have you had pain or issues in the last 3 years related to chronic and/or musculoskeletal (muscles, bones, joints) pain?"
    },
    treatment: {
        "nl-BE": "Ben je hiervoor in behandeling geweest of momenteel in behandeling voor?",
        "en-EN": "Are you or have you been in treatment for this issue?"
    },
    yes: {
        "nl-BE": "Ja",
        "en-EN": "Yes"
    },
    no: {
        "nl-BE": "Nee",
        "en-EN": "No"
    },
    byparticipating: {
        "nl-BE": "Door deel te nemen aan de studie, stem je ook in dat:",
        "en-EN": "By participating in this user study, you agree that:"
    },
    agree1: {
        "nl-BE": "Je data achteraf anoniem wordt verwerkt door de KULeuven voor onderzoeksdoeleinden.",
        "en-EN": "Your data will be processed anonymously by the Compt. Science dept. KULeuven for research purposes."
    },
    agree2: {
        "nl-BE": "Je de studie op elk moment kan beëindigen. Een financiele verloning is enkel mogelijk wanneer de studie is afgerond.",
        "en-EN": "You can end the study at any time. A financial compensation is only possible if the full study is completed however."
    },
    agree3: {
        "nl-BE": "Er enkel de data wordt verzameld dat jij ingeeft tijdens de studie, en er geen extra data wordt verzameld.",
        "en-EN": "Only data that is explicitly entered by you will be collected, and no extra data will be monitored or saved."
    },
    disagree: {
        "nl-BE": "Niet akkoord, ga terug",
        "en-EN": "Disagree, return"
    },
    agree: {
        "nl-BE": "Akkoord",
        "en-EN": "Agree"
    },
    fillin: {
        "nl-BE": "(vul eerst alles in)",
        "en-EN": "(first fill in all info)"
    },

}
/*
{
    "nl-BE": "",
    "en-EN": ""
},
*/
