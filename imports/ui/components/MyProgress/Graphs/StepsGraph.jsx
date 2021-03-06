import React from 'react';
import i18n from 'meteor/universe:i18n';
import "../../../../../i18n/en.i18n.json";
import "../../../../../i18n/fr.i18n.json";
import "../../../../../i18n/nl.i18n.json";

import { ResponsiveBar } from '@nivo/bar';
import { aggregateStepsByHour, convertToChartData } from '../../../../api/steps_dataparser.jsx';

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
    return <div style={{height: "250px", width: "100%"}}><ResponsiveBar
        data={convertToChartData(data)}
        indexBy="hour"
        keys={["steps"]}
        colors={{ scheme: 'category10' }}
        margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
        padding={0.35}
        minValue={0}
        borderRadius={2}
        tooltip={function (props){return "Stappen: " + props.value}}
        axisTop={null}
        axisRight={null}
        enableLabel={false}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            tickValues: [0, 3, 6, 9, 12, 15, 18, 21],
            legend: 'uur',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            tickValues: 6,
            legend: i18n.getTranslation('Common', `myProgress.parameters.steps`),
            legendPosition: 'middle',
            legendOffset: -40
        }}>
    </ResponsiveBar></div>
}