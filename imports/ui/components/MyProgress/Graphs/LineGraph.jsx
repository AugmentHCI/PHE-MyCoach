import React from 'react';
import { DualAxes, Line } from '@ant-design/charts';
import { getParameterData, parameters } from '../../../../api/processors/MyProgressProcessor';
import { getFitBitDataWeekly } from '../../../../api/processors/MyProgressFitBitProcessor';

import { UserQuestions } from "../../../../api/processors/QuestionnaireProcessor";


export default function LineGraph({parameter, data, compareParameter}) {

  const userQuestions = new UserQuestions(data);
  userQuestions.parseUserQuestions().groupUserQuestions();

  const parsedData = userQuestions.getQuestionData("phe-dagelijks", questionMetadata[parameter], parameter, "22-11-2021", "29-11-2021").result;
  const data2 = compareParameter ? userQuestions.getQuestionData("phe-dagelijks", questionMetadata[compareParameter], compareParameter, "22-11-2021", "29-11-2021").result : undefined;
  if (data2) parsedData.forEach((entry, index) => {
    if (data2) entry.value2 = data2[index]?.value ? data2[index]?.value : 0;
  })

  const param1metadata = parameters.filter(param => {return param.id === parameter})[0];
  const color1 =  getComputedStyle(document.documentElement).getPropertyValue(param1metadata.color);
  const param2metadata = compareParameter ? parameters.filter(param => {return param.id === compareParameter})[0] : undefined;
  const color2 =  compareParameter ? getComputedStyle(document.documentElement).getPropertyValue(param2metadata.color) : undefined;


  const dualAxesConfig = compareParameter ? {
    data: [parsedData, parsedData],
    xField: 'date',
    yField: ['value', 'value2'],
    smooth: true,
    meta: {
      value: { alias: param1metadata.measure },
      value2: { alias: param2metadata.measure }
    },
    yAxis: {
      value: { 
        max: param1metadata.max,
        title: {
          text: param1metadata.measureFull ? param1metadata.measureFull : param1metadata.measure,
          autoRotate: true,
        }
      },
      value2: { 
        max: param2metadata.max,
        title: {
          text: param2metadata.measureFull ? param2metadata.measureFull : param2metadata.measure,
          autoRotate: true,
        }
      }
    },
    geometryOptions: [
      {
        geometry: 'line',
        smooth: true,
        color: color1,
        lineStyle: {
          lineWidth: 3,
        },
      },
      {
        geometry: 'line',
        smooth: true,
        color: color2,
        lineStyle: {
          lineWidth: 3,
        },
      },
    ],
  } : {};

  const lineConfig = {
    data: parsedData,
    xField: 'date',
    yField: 'value',
    smooth: true,
    yAxis: {
      max: param1metadata.max,
    },
  };

  console.log(dualAxesConfig)

  if (compareParameter) return (<div style={{height: "250px", padding: "0 10px"}}>
    <DualAxes {...dualAxesConfig} />
  </div>)

  return (<div style={{height: "250px", padding: "0 10px"}}>
    <Line {...lineConfig} />
  </div>)
}

const questionMetadata = {
  "t": "t",
  "stress": "stress",
  "ipaqd1": "ipaqd",
  "ipaqd2": "ipaqd",
  "ipaqd3": "ipaqd",
  "ipaqd4": "ipaqd",
  "vas": "vas"
}