import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { aggregateStepsByHour, convertToChartData } from '../../../../api/steps_dataparser.jsx';


export function StepsGraph(props) {
    let data = {};
    const propsmonth = props.date.getMonth() + 1 < 10 ? "0" + (props.date.getMonth() + 1) : props.date.getMonth() + 1;
    const propsday = props.date.getDate() < 10 ? "0" + props.date.getDate() : props.date.getDate();
    let dateString = props.date.getFullYear() + "-" + propsmonth + "-" + propsday;
    const iterData = [];
    try {
    console.log("STEPSGRAPH:")
    console.log(props.data);
    const testData = props.data[0];
    console.log(testData);
    console.log(testData.stepsIntraday);}
    catch {console.log("Skipping this day")}
    try {iterData = props.data[0].stepsIntraday.dataset}
    catch {console.log("StepsGraph - Empty user data");}
    let dataFound = false;
    iterData.forEach(day => {
        if (day.datum === dateString) { data = aggregateStepsByHour(day.stepsIntraday); dataFound = true;}
    })
    if (!dataFound) {data = aggregateStepsByHour(null);}
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
            tickRotation: -90,
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
            legend: 'stappen',
            legendPosition: 'middle',
            legendOffset: -40
        }}>
    </ResponsiveBar></div>
}