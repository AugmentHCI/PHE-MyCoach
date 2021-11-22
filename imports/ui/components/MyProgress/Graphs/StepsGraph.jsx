import React from 'react';
import i18n from 'meteor/universe:i18n';
import "../../../../../i18n/en.i18n.json";
import "../../../../../i18n/fr.i18n.json";
import "../../../../../i18n/nl.i18n.json";

import { Column } from '@ant-design/charts';
import { aggregateStepsByHour, convertToChartData } from '../../../../api/processors/MyProgressFitBitProcessor.jsx';

const T = i18n.createComponent("Common");

export function StepsGraph(props) {
    let iterData = [];
    /* For normal user data */
    try { iterData = props.data[0].stepsIntraday }
    catch {
        /* For demo data */
        try { iterData = props.data.stepsIntraday }
        catch { console.log("StepsGraph - No FitBit step data for this day") }}
    let data = Array.isArray(iterData) && !iterData.length ? aggregateStepsByHour(null) : aggregateStepsByHour(iterData);
    let chartData = [];
    let max = 100;
    Object.entries(data).forEach(([hour, steps]) => {
        max = steps > max ? steps : max;
        chartData.push({hour: hour, steps: steps});
    });
    
    var config = {
        data: chartData,
        xField: 'hour',
        yField: 'steps',
        color: "#01426A",
        label: {
          position: 'middle',
          style: {
            opacity: 0,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        yAxis: {
          max: max
        },
        meta: {
          hour: { alias: 'Uur' },
          steps: { alias: 'Stappen' },
        },
        theme: {
            styleSheet: {
              fontFamily: 'Avenir'
            }
          }
      };

    return (<div style={{height: "250px", width: "100%"}}>
        <Column {...config} />
    </div>);
}