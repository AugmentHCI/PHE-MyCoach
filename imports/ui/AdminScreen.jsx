import React, { useState, useEffect } from "react";

import MyProgress from "./Pages/MyProgress.jsx";
import MyCoach from "./Pages/MyCoach.jsx";
import Button from "./components/Button.jsx";

/* AntDesign Components */
import Switch from 'antd/lib/switch';
import Select from 'antd/lib/select';


import UserData from "../api/userdata_dummy.js";
import './AdminScreen.scss';

const { Option } = Select;

export default function AdminScreen(props) {

  const [myCoachData, setMyCoachData] = useState({});

  useEffect(() => { setMyCoachData(JSON.parse(JSON.stringify(UserData)))}, []);

  return (<div>
      <ControlPanel updateData={setMyCoachData}/>
      <div className="phone-screen" style={{transform: `scale(${952/952})`, transformOrigin: "top right"}}>
              <MyCoach noSplash data={JSON.parse(JSON.stringify(myCoachData))}/>
        </div>
      </div>
  )
}

function ControlPanel(props) {

  const [userData, setUserData] = useState({});

  useEffect(() => { setUserData(JSON.parse(JSON.stringify(UserData))); }, []);

  function handleProfileChange(value) {
    handleChange("profile", value);
  }

  function handleInteractionChange(interaction) {
    const value = !userData.interactions[interaction];
    handleChange("interactions", value, interaction);
  }

  function handleChange(id, value, subId) {
    console.log(userData.interactions);
    console.log(subId + " will be " + value)
    let newUserData = JSON.parse(JSON.stringify(userData));
    subId ? newUserData[id][subId] = value : newUserData[id] = value;
    console.log(newUserData.interactions)
    setUserData(newUserData);
    console.log("UPDATED STATE")
  }

  function renderUserData() {
    controlPanelHtml = [];
    for (const [field, value] of Object.entries(userData)) {
      switch (field) {
        case "profile":
          controlPanelHtml.push(<div>Coaching-profiel: <Select defaultValue={value} style={{ width: 120 }} onChange={handleProfileChange}>
          <Option value={1}>Profiel 1</Option>
          <Option value={2}>Profiel 2</Option>
          <Option value={3}>Profiel 3</Option>
          <Option value={4}>Profiel 4</Option>
          <Option value={5}>Profiel 5</Option>
          <Option value={6}>Profiel 6</Option></Select></div>)
          break;
        case "interactions":
          controlPanelHtml.push(<h4>Interactions</h4>)
          for (const [interaction, didInteract] of Object.entries(userData.interactions)) 
            { controlPanelHtml.push(<div>{interaction}: <Switch checked={didInteract} onChange={() => handleInteractionChange(interaction)}></Switch></div>) }
          break;
        case "progress":

      }
    }
    return controlPanelHtml;
  }

  return (<div className="control-panel" width={"100%"}>
      <h1>MyCoach - Settings</h1>
      {renderUserData()}
      <Button width={"fit"} action={() => props.updateData(JSON.parse(JSON.stringify(userData)))}>Update MyCoach</Button>
    </div>)
}
