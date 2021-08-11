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

export default function Information() {

    const [mail, updateMail] = useState("");
    const [year, updateYear] = useState("");
    const [pain, updatePain] = useState("");
    const [gender, updateGender] = useState("");
    const [treatment, updateTreatment] = useState("");

    function isCompleted() {
        const intYear = parseInt(year);
        if (isNaN(intYear) || intYear > 2015 || intYear < 1900) return false;
        if (pain === "" || (pain === "yes" && treatment === "")) return false;
        return !(gender === "" || mail.length === 0 || year.length !== 4 || !mail.includes("@") || !mail.includes("."))
    }

    function saveAndProceed() {
        localStorage.setItem('mail', mail);
        localStorage.setItem('year', year);
        localStorage.setItem('gender', gender);
        Meteor.callPromise('userstudy.insert', {mail: mail, settings: localStorage.getItem('studysettings'), type: 'year', content: year.toString()});
        Meteor.callPromise('userstudy.insert', {mail: mail, settings: localStorage.getItem('studysettings'), type: 'pain', content: pain});
        Meteor.callPromise('userstudy.insert', {mail: mail, settings: localStorage.getItem('studysettings'), type: 'gender', content: gender});
        if (pain === "yes") Meteor.callPromise('userstudy.insert', {mail: mail, settings: localStorage.getItem('studysettings'), type: 'treatment', content: treatment});
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
        <Title>Jouw informatie</Title>
        <FadeIn>
            <Text>We hebben eerst wat informatie nodig. Dit om er voor te zorgen dat wij jou geen herinneringsmail sturen indien jij de gebruikersstudie al hebt voltooid! Op welk e-mailadres heb jij de mail ontvangen?</Text>
            <Input type="text" placeholder="john.doe@gmail.com" style={{width:"400px"}} onChange={updateMail}/>
            <Text>Wat is jouw geboortejaar?</Text>
            <Input type="text" placeholder="1980" style={{width:"70px"}} onChange={updateYear}/>
            <Text>Wat is jouw geslacht</Text>
            <div className="whiteoptions">
                <Radio.Group onChange={(e) => updateGender(e.target.value)} value={gender} style={{marginTop:"0", fontFamily:"var(--main-font)", display: "inline-block", flexDirection: "row", gap: "1em", color: "var(--idewe-white)", fontWeight: 500, fontSize: "18px"}}>
                    <Radio value={"f"}>Vrouw</Radio>
                    <Radio value={"m"}>Man</Radio>
                    <Radio value={"o"}>Anders</Radio>
                    <Radio value={"x"}>Specifieer liever niet</Radio>
                </Radio.Group>
            </div>
            <Text>Heb je momenteel last of last gehad in de afgelopen 3 jaar van chronische en/of muskuloskeletale (spieren, botten, gewrichten) pijn?</Text>
            <div className="whiteoptions">
                <Radio.Group onChange={(e) => updatePain(e.target.value)} value={pain} style={{marginTop:"0", fontFamily:"var(--main-font)", display: "inline-block", flexDirection: "row", gap: "1em", color: "var(--idewe-white)", fontWeight: 500, fontSize: "18px"}}>
                    <Radio value={"no"}>Nee</Radio>
                    <Radio value={"yes"}>Ja</Radio>
                </Radio.Group>
            </div>
            {pain === "yes" && <Text>Ben je hiervoor in behandeling geweest of momenteel in behandeling voor?</Text>}
            {pain === "yes" && <div className="whiteoptions">
                <Radio.Group onChange={(e) => updateTreatment(e.target.value)} value={treatment} style={{marginTop:"0", fontFamily:"var(--main-font)", display: "inline-block", flexDirection: "row", gap: "1em", color: "var(--idewe-white)", fontWeight: 500, fontSize: "18px"}}>
                    <Radio value={"no"}>Nee</Radio>
                    <Radio value={"yes"}>Ja</Radio>
                </Radio.Group>
            </div>}
            <Text>Door deel te nemen aan de studie, stem je ook in dat:</Text>
            <ul>
                <li>Je data achteraf anoniem wordt verwerkt door de KULeuven voor onderzoeksdoeleinden.</li>
                <li>Je de studie op elk moment kan beëindigen, en jouw data dan niet gebruikt zal worden.</li>
                <li>Er enkel de data wordt verzameld dat jij ingeeft tijdens de studie, en er geen extra data wordt verzameld.</li>
            </ul>
        <Group>
            <Button width="fit" color="blue-dark" onClick={() => FlowRouter.go("/mycoach/userstudy/introduction")}>Terug</Button>
            <Button width="fit" onClick={() => saveAndProceed()} disabled={!isCompleted()}>Akkoord {!isCompleted() && <P>(vul eerst alles in)</P>}</Button>
        </Group>
        </FadeIn>

    </Content>)
}
