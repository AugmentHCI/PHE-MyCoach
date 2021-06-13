import React, { useState, useEffect } from "react";

import Button from "./components/Button.jsx";

import './AdminScreen.scss';

import { userDataLong, userProgressParser } from "../api/dummydata.jsx";
import { parseUserQuestions, groupUserQuestions } from "../api/QuestionnaireProcessor";
import Input from "./components/Input"

export default function AdminScreen(props) {

  const [sentSMSCode, toggleSentSMSCode] = useState(false);
  const [smsCode, updateSMSCode] = useState("");
  /* Analist token */
  const [analistToken, setAnalistToken] = useState("");
  const [analistMessage, setAnalistMessage] = useState(undefined);
  /* UserIDs */
  const [userIdsMessage, setUserIdsMessage] = useState(undefined);
  const [userIds, setUserIds] = useState([]);
  const [fetchCount, updateFetchCount] = useState(0);

  /* Data retrieval functions */
  async function getAnalistToken() {
    const result = await Meteor.callPromise('getAnalistToken', {smsCode: smsCode});
    updateSMSCode("");
    toggleSentSMSCode(false);
    if (result.statusCode === 200 || result.response?.statusCode === 200) {
      setAnalistToken(result.headers.authorization.split(" ")[1]);
      setAnalistMessage({status:"success", message: "Analist-token succesvol opgehaald!"});
    }
    else {
      const statusCode = result.response?.statusCode ? result.response?.statusCode : result.statusCode;
      setAnalistMessage({status:"error", message: `Fout bij het ophalen van code [Error ${statusCode}]`});
    }
  }

  async function getUserData() {
    const result = await Meteor.callPromise('getUserIds', {analistToken: analistToken});
    if (result.statusCode === 200 || result.response?.statusCode === 200) {
      setUserIdsMessage({status:"success", message: `GebruikerIDs succesvol opgehaald! Aantal gebruikers: ${result.data.length}`});
      setUserIds(result.data);
    }
    else {
      const statusCode = result.response?.statusCode ? result.response?.statusCode : result.statusCode;
      setUserIdsMessage({status:"error", message: `Fout bij het ophalen van gebruikerIDs [Error ${statusCode}]`});
    }
  }

  async function fetchUserData(limit) {
    const userIdSlice = userIds.slice(0, limit)
    const fetchPromises = [];
    for (const user of userIdSlice) {
      fetchPromises.push(Meteor.callPromise('getUserData', {userId: user.gebruikerId, analistToken: analistToken})
        .then((result) => {console.log(`Done for user ${user.gebruikerId}`); updateFetchCount(prevState => (prevState+1)); return groupUserQuestions(parseUserQuestions(result.data))})
        .catch(error => console.log(error)))
    }
    Promise.all(fetchPromises).then((results) => {
      console.log(results);
    });
  }

  /* Render functions */
  function renderStepOne() {
    return (<React.Fragment>
      <h3>Stap 1: Vraag SMS code op</h3>
        <p style={{maxWidth:"500px"}}>Vraag eerst een SMS code op. Deze zal gebruikt worden om een data-analist token op te halen zodat je de gebruikergegevens op kan vragen.</p>
        <Button width="300px" disabled={sentSMSCode} color="blue" center onClick={() => { Meteor.call('getSMSCode'); toggleSentSMSCode(true) }}>{ sentSMSCode ? "Verstuurd" : "Stuur SMS code"}</Button>
    </React.Fragment>)
  }

  function renderStepTwo() {
    return (<React.Fragment>
      <h3>Stap 2: Vul je SMS code in</h3>
        <p style={{maxWidth:"500px"}}>Je zou nu een SMS code moeten ontvangen op nummer +32 473 55 70 38. Vul deze code in om de data-analist token op te halen.</p>
        <div style={{display: "flex", flexDirection:"row", maxWidth:"300px"}}>
          <Input type="text" style={{flex: 2}} placeholder="Vul SMS code in" onChange={updateSMSCode}/>
          <Button width="fit" style={{marginTop: "10px", marginBottom: "10px"}} color="blue" center onClick={() => getAnalistToken() }>Verstuur</Button>
        </div>
        {analistMessage && <p className={analistMessage.status}>{analistMessage.message}</p>}
    </React.Fragment>)
  }

  function renderStepThree() {
    return (<React.Fragment>
      <h3>Stap 3: Haal gebruikergegevens op</h3>
        <p style={{maxWidth:"500px"}}>Je kan nu alle gebruikergegevens ophalen.</p>
        <Button width="300px" color="blue" center onClick={() => getUserData() }>Haal gegevens op</Button>
        {userIdsMessage && <p className={userIdsMessage.status}>{userIdsMessage.message}</p>}
        {userIds.length > 0 && <Button width="300px" color="blue" center onClick={() => fetchUserData(300) }>Verwerk gebruikers</Button>}
        {userIds.length > 0 && fetchCount < userIds.length && <p className="info">Data opgehaald van {fetchCount} van {userIds.length} gebruikers.</p>}
        {userIds.length > 0 && fetchCount === userIds.length && <p className="success">Data opgehaald van alle {userIds.length} gebruikers!</p>}
    </React.Fragment>)
  }

  return (<div className="control-panel">
      <h1>MyCoach - Settings</h1>
      <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
        { renderStepOne() }
        { renderStepTwo() }
        { renderStepThree() }
      </div>
    </div>)
}
