import React, { useEffect, useState } from 'react';
import { getActivityData } from '../../../../api/processors/MyProgressProcessor';
import i18n from 'meteor/universe:i18n';
import "../../../../../i18n/nl.i18n.json";
import "../../../../../i18n/fr.i18n.json";
import "../../../../../i18n/en.i18n.json";
import moment from 'moment';

const T = i18n.createComponent("Common");

const answerToValue = {
  "Absoluut niet": 0,
  "Een beetje": 1,
  "Middelmatig": 2,
  "Veel": 3,
  "Heel veel": 4
}

const emotionToString = {
  "poms1a": "Angstig",
  "poms2s": "Somber",
  "poms3k": "Kwaad",
  "poms4v": "Vermoeid",
  "poms5b": "Vrolijk",
  "stress": "Stress"
}

function Circle({tint, isEmpty}) {
    const circleStyle = {
      backgroundColor: isEmpty ? "transparant" : `var(--idewe-blue-dark-tint${tint})`,
      borderStyle: "solid", 
      borderWidth: "1.5px",
      borderColor: isEmpty ? "var(--idewe-blue-tint3)" : `var(--idewe-blue-dark-tint${tint})`,
      borderRadius: "50%",
      width: "20px",
      height: "20px",
      margin: "2px"
    };

    return (
      <div style={circleStyle}></div>
    );
}

export default function ActivityGraph({data, locale}) {
  
  useEffect(() => { 
    i18n.setLocale(locale);
    setPomsData(parsePomsData(data));
  }, [] );

  const [pomsData, setPomsData] = useState({});

  function parsePomsData(questionnaireData) {
    const week = {1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: ""}
    const poms = {
      "poms1a": JSON.parse(JSON.stringify(week)),
      "poms2s": JSON.parse(JSON.stringify(week)),
      "poms3k": JSON.parse(JSON.stringify(week)),
      "poms4v": JSON.parse(JSON.stringify(week)),
      "poms5b": JSON.parse(JSON.stringify(week)),
      "stress": JSON.parse(JSON.stringify(week)),
    }
    /* If no questionnaire data available */
    if (!questionnaireData) return poms;
    /* If questionnaire data available */
    questionnaireData.forEach(question => {
      if (Object.keys(poms).includes(question.vraag)) {
        const answer = answerToValue[question.antwoord.replace("\n", "")];
        // poms[question.vraag][moment(question.datum).isoWeekday()] = question.vraag === "stress" ? answer : answer;
        poms[question.vraag][moment(question.datum).isoWeekday()] = answer;
      }
    });
    return poms;
  }

  parsePomsData();

  /* Render Functions */
  function renderVariableColumn() {
    return (<div style={{display: 'flex', flexDirection: 'column', marginRight: "1em", marginLeft: "7%"}}>
      <div className='small-text' style={{height: "24px", textAlign: 'right'}}/>
      {Object.keys(pomsData).map((variable) => {
          return <div key={variable} className='small-text' style={{height: "24px", textAlign: 'right'}}>{emotionToString[variable]}</div>
        })}
    </div>);
  }

  function renderCircles() {
    return (<div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: "flex", flexDirection: "row"}}>
        {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) =>
          <div className='small-text' style={{width: '24px', textAlign: 'center'}} key={day}>{<T>{`myProgress.axes.${day}`}</T>}</div>
        )}
      </div>
    {Object.keys(pomsData).map((variable) => {
      return <div key={variable + "-row"} style={{display: "flex", flexDirection: "row"}}>
        { Object.keys(pomsData[variable]).map((day) => {
            if (pomsData[variable][day] !== "") return  <Circle key={variable + day} tint={pomsData[variable][day]+1}/>
            return <Circle key={variable + day}  isEmpty/>
        })}
      </div>
    })}
    </div>);
  }

  function renderLegend() {
    return (<div style={{display: 'flex', flexDirection: 'row', width: "80%", marginLeft: "10%"}}>
      <div className='small-text' style={{height: "24px"}}>Legende:</div>
      <div style={{flex: 1, height: "16px", marginTop: "4px", backgroundColor: "var(--idewe-blue-dark-tint1", borderRadius: "20px 0 0 20px", marginLeft: "1em", display: "flex", justifyContent:"center", alignItems: "center", color: "var(--idewe-blue-dark-tint4)"}}>-</div>
      <div style={{flex: 1, height: "16px", marginTop: "4px", backgroundColor: "var(--idewe-blue-dark-tint2"}}/>
      <div style={{flex: 1, height: "16px", marginTop: "4px", backgroundColor: "var(--idewe-blue-dark-tint3"}}/>
      <div style={{flex: 1, height: "16px", marginTop: "4px", backgroundColor: "var(--idewe-blue-dark-tint4"}}/>
      <div style={{flex: 1, height: "16px", marginTop: "4px", backgroundColor: "var(--idewe-blue-dark-tint5", borderRadius: "0 20px 20px 0", display: "flex", justifyContent:"center", alignItems: "center", color: "var(--idewe-white)"}}>+</div>
    </div>)
  }
    
  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        { renderVariableColumn() }
        { renderCircles() }
      </div>
      <hr style={{width: "80%"}}/>
      { renderLegend() }
    </div>
  );
}
