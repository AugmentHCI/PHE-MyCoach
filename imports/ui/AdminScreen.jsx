import React, { useState, useEffect } from "react";

import MyProgress from "./Pages/MyProgress.jsx";
import MyCoach from "./Pages/MyCoach.jsx";
import Button from "./components/Button.jsx";
import Slider from "./components/Slider.jsx";

/* AntDesign Components */
import Switch from 'antd/lib/switch';
import Select from 'antd/lib/select';
import Collapse from 'antd/lib/collapse';
import Radio from 'antd/lib/radio';

import './AdminScreen.scss';

import { userDataLong, UserData } from "../api/dummydata.jsx";
import { processBaselineQuestionnaires, getLatestBaselineQuestionnaire } from "../api/userdataparser.jsx";

const { Option } = Select;
const { Panel } = Collapse;

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

  function handleProgressChange(module, progress) {
    let newUserData = JSON.parse(JSON.stringify(userData));
    let moduleLength = Object.keys(newUserData.progress[module]).length;
    for (const [submodule, status] of Object.entries(newUserData.progress[module])) {
      if (submodule === "OVERALL" && progress === 0) {newUserData.progress[module][submodule] = "NOT_STARTED"} 
      else if (submodule === "OVERALL" && progress < moduleLength) {newUserData.progress[module][submodule] = "IN_PROGRESS"} 
      else if (submodule === "OVERALL" && progress === moduleLength) {newUserData.progress[module][submodule] = "COMPLETED"} 
      else if (submodule.slice(-1) < progress) {newUserData.progress[module][submodule] = "COMPLETED"} 
      else if (submodule.slice(-1) === progress) {newUserData.progress[module][submodule] = "IN_PROGRESS"} 
      else if (submodule.slice(-1) > progress) {newUserData.progress[module][submodule] = "NOT_STARTED"} 
    }
    setUserData(newUserData);
  }

  function handleChange(id, value, subId) {
    let newUserData = JSON.parse(JSON.stringify(userData));
    subId ? newUserData[id][subId] = value : newUserData[id] = value;
    setUserData(newUserData);
  }

  function renderUserData() {
    let controlPanelHtml = [];
    for (const [field, value] of Object.entries(userData)) {
      switch (field) {
        case "PROFILE":
          controlPanelHtml.push(<div>Coaching-profiel: <Select defaultValue={value} style={{ width: 120 }} onChange={handleProfileChange}>
          <Option value={1}>Profiel 1</Option>
          <Option value={2}>Profiel 2</Option>
          <Option value={3}>Profiel 3</Option>
          <Option value={4}>Profiel 4</Option>
          <Option value={5}>Profiel 5</Option>
          <Option value={6}>Profiel 6</Option></Select></div>)
          break;
        case "RECENT_PAIN":
          controlPanelHtml.push(<div>Recentelijk pijn gehad: <Switch checked={userData.RECENT_PAIN} onChange={() => handleChange("RECENT_PAIN", !userData.RECENT_PAIN)}></Switch></div>)
          break;
        case "interactions":
          controlPanelHtml.push(<h4>Interactions</h4>)
          for (const [interaction, didInteract] of Object.entries(userData.interactions)) 
            { controlPanelHtml.push(<div>{interaction}: <Switch checked={didInteract} onChange={() => handleInteractionChange(interaction)}></Switch></div>) }
          break;
        case "progress":
          controlPanelHtml.push(<h4>Progress</h4>)
          let collapseHtml = [];
          for (const [module, submodules] of Object.entries(userData.progress)) {
            let panelHtml = [];
            let current = userData.progress[module].OVERALL === "COMPLETED" ? 6 : 0;
            for (const [submodule, status] of Object.entries(userData.progress[module])) {
              if (status === "IN_PROGRESS") current = submodule.slice(-1);
              panelHtml.push( <div><Radio value={submodule.slice(-1) === "L" ? 0 : submodule.slice(-1)}>{submodule === "OVERALL" ? "Geen": submodule}</Radio></div>);
            }
            panelHtml.push( <div><Radio value={Object.keys(userData.progress[module]).length}>Alle</Radio></div>);
            collapseHtml.push(<Panel header={module}><Radio.Group onChange={(e) => handleProgressChange(module, e.target.value)} value={current}>{panelHtml}</Radio.Group></Panel>) 
          }
          controlPanelHtml.push(<div style={{width:"300px"}}><Collapse accordion>{collapseHtml}</Collapse></div>);
          break;
      }
    }
    return controlPanelHtml;
  }

  return (<div className="control-panel" width={"100%"}>
      <h1>MyCoach - Settings</h1>
      {renderUserData()}
      <Button width={"fit"} onClick={() => props.updateData(JSON.parse(JSON.stringify(userData)))}>Pas toe</Button>
      <Button width={"fit"} onClick={() => getLatestBaselineQuestionnaire(userDataLong)}>Test</Button>
    </div>)
}
