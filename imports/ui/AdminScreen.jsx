import React, { useState, useEffect } from "react";

import MyProgress from "./Pages/MyProgress.jsx";
import MyCoach from "./Pages/MyCoach.jsx";

/* AntDesign Components */
import Switch from 'antd/lib/switch';
import Select from 'antd/lib/select';


import UserData from "../api/userdata_dummy.js";
import './AdminScreen.scss';

const { Option } = Select;

export default function AdminScreen(props) {

  const [userData, setUserData] = useState(UserData);

  function handleProfileChange(value) {
    handleChange("profile", value);
  }

  function handleInteractionChange(interaction) {
    const value = !UserData.interactions[interaction];
    handleChange("interactions", value, interaction);
  }

  function handleChange(id, value, subId) {
    console.log("UPDATING STATE")
    let newUserData = userData;
    console.log("LOL STATE")
    subId ? newUserData[id][subId] = value : newUserData[id] = value;
    console.log("GOING TO UPDATE STATE")
    setUserData(newUserData);
    console.log("UPDATED STATE")
  }

  function renderUserData() {
    controlPanelHtml = [];
    console.log(userData);
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
            { console.log(didInteract); controlPanelHtml.push(<div>{interaction}: <Switch checked={userData.interactions[interaction]} onChange={() => handleInteractionChange(interaction)}></Switch></div>) }
      }
    }
    return controlPanelHtml;
  }

  function renderControlPanel() {
    console.log("Rerendering")
      return (<div className="control-panel" width={"100%"}>
          <h1>MyCoach - Settings</h1>
          {renderUserData()}
          <div className="phone-screen" style={{transform: `scale(${952/952})`, transformOrigin: "top right"}}>
              <MyCoach token="demo"/>
        </div>
      </div>)
  }

  return (<div>
      {renderControlPanel()}
      </div>
  )
}