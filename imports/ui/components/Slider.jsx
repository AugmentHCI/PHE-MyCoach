import React, { useState, useEffect } from 'react';
import { Slider as SemanticSlider } from "react-semantic-ui-range";
import Button from "./Button.jsx";
import "./Slider.scss";

export default function Slider(props) {

  const [value, updateValue] = useState(props.value ? props.value : 1);
  const [saved, updateSaved] = useState(false);

  async function save() {
    if (!props.questionManager) return;
    updateSaved(true);
    await props.questionManager.setModuleQuestion(props.module, props.id, value); 
    props.callback();
  }

  const settings = {
    start: value ? value : Math.round((props.to - props.from)/2),
    min: props.from,
    max: props.to,
    step: 1,
    onChange: newValue => {
      updateValue(newValue); 
      if (props.onChange) props.onChange(newValue);
      window.onscroll = function () {
        window.scrollTop = 0;
    }}
  };

  useEffect(() => {
    async function fetchStatus() {
      if (!props.questionManager) return;
      const answer = await props.questionManager.getLatestAnswerOnQuestion(props.id);
      if (answer) { updateValue(answer); updateSaved(true); }
    }
    fetchStatus();
  }, []);

  const boxStyle = props.noBackground ? {} : {backgroundColor: "var(--idewe-background-solid)", padding: "10px"}
  return (
    <div className="slider-box" style={{boxStyle}}>
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
      {props.showValue && !props.mapping && <div className={"slider-value" + (saved ? "-saved" : "")}>{props.valueText ? props.valueText + ": " : ""}{value}</div>}
      {props.showValue && props.mapping && <div className={"slider-value" + (saved ? "-saved" : "")}>{mappings[props.mapping][value]}</div>}
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
  "5-AGREE": {1: "Helemaal niet akkoord", 2: "Niet akkoord", 3: "Neutraal", 4: "Akkoord", 5: "Helemaal akkoord"},
  "6-WEEK": {2: "2 Weken", 3: "3 Weken", 4: "4 Weken", 5: "5 Weken", 6: "6 Weken"},
  "5-AMOUNT": {1: "Helemaal geen", 2: "Niet veel", 3: "Een beetje", 4: "Vrij veel", 5: "Zeer veel"},
  "10-IMPACT": {1: "Heel negatieve impact", 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: "Geen negatieve impact"},
}