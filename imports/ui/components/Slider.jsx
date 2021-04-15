import React, { useState, useEffect } from 'react';
import { Slider as SemanticSlider } from "react-semantic-ui-range";
import Button from "./Button.jsx";
import "./Slider.scss";

export default function Slider(props) {

  const [value, updateValue] = useState(5);
  const [saved, updateSaved] = useState(false);

  async function save() {
    updateSaved(true);
    await props.questionManager.setModuleQuestion(props.module, props.id, value); 
    props.callback();
  }

  const settings = {
    start: Math.round((props.to - props.from)/2),
    min: props.from,
    max: props.to,
    step: 1,
    onChange: newValue => {
      updateValue(newValue); 
      window.onscroll = function () {
        window.scrollTop = 0;
    }}
  };

  useEffect(() => {
    async function fetchStatus() {
        const answer = await props.questionManager.getLatestAnswerOnQuestion(props.id);
        if (answer) { updateValue(answer); updateSaved(true); }
    }
    fetchStatus();
  }, []);

  return (
    <div className="slider-box">
      <div className="slider-text">{props.text}</div>
      <div className="slider-container">
        {props.startValue && <div style={{flexShrink:1}}>{props.startValue}</div>}
          <div style={{flexGrow:2}}>
            <SemanticSlider 
              disabled={saved}
              value={value} 
              settings={settings} 
              style={{width: "100%", trackFill: { backgroundColor: "var(--idewe-blue)"}}}/>
          </div>
        {props.endValue && <div style={{flexShrink:1}}>{props.endValue}</div>}
      </div>
      {props.show && <div className={"slider-value" + (saved ? "-saved" : "")}>{props.valueText ? props.valueText + ": " : ""}{value}</div>}
      {props.save && !saved && 
        <div className="selection-button-container">
          <Button width="fit" color="blue" onClick={() => save()} style={{}}>
            Bevestig
          </Button>
        </div>}
    </div>
  );
}

const mappings = {
  "3-ITEM": {1: "Heel"}
}