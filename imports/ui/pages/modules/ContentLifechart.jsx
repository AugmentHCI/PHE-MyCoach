import React, { useState, useEffect } from 'react';
import { Radar } from '@ant-design/charts';

import QuestionManager from '../../../api/managers/QuestionManager';
import LoadingScreen from '../../components/LoadingScreen';

export default function LifeChartContent({questionManager}) {

    const [data, setData] = useState(undefined);

    useEffect(() => {
        async function fetchAnswers() {
            const workInvest = await questionManager.getLatestAnswerOnQuestion("TE-MOD-5-INVEST-WORK");
            const workImportance = await questionManager.getLatestAnswerOnQuestion("TE-MOD-5-IMPORTANCE-WORK");
            const relaxInvest = await questionManager.getLatestAnswerOnQuestion("TE-MOD-5-INVEST-RELAX");
            const relaxImportance = await questionManager.getLatestAnswerOnQuestion("TE-MOD-5-IMPORTANCE-RELAX");
            const healthInvest = await questionManager.getLatestAnswerOnQuestion("TE-MOD-5-INVEST-HEALTH");
            const healthImportance = await questionManager.getLatestAnswerOnQuestion("TE-MOD-5-IMPORTANCE-HEALTH");
            const devInvest = await questionManager.getLatestAnswerOnQuestion("TE-MOD-5-INVEST-DEVELOPMENT");
            const devImportance = await questionManager.getLatestAnswerOnQuestion("TE-MOD-5-IMPORTANCE-DEVELOPMENT");
            const socialInvest = await questionManager.getLatestAnswerOnQuestion("TE-MOD-5-INVEST-SOCIAL");
            const socialImportance = await questionManager.getLatestAnswerOnQuestion("TE-MOD-5-IMPORTANCE-SOCIAL");
            const familyInvest = await questionManager.getLatestAnswerOnQuestion("TE-MOD-5-INVEST-FAMILY");
            const familyImportance = await questionManager.getLatestAnswerOnQuestion("TE-MOD-5-IMPORTANCE-FAMILY");

            const data = [
                { domain: 'Werk', type: "Investering", value: workInvest},
                { domain: 'Werk', type: "Belang", value: workImportance},
                { domain: 'Ontspanning', type: "Investering", value: relaxInvest},
                { domain: 'Ontspanning', type: "Belang", value: relaxImportance},
                { domain: 'Gezondheid', type: "Investering", value: healthInvest},
                { domain: 'Gezondheid', type: "Belang", value: healthImportance},
                { domain: 'Ontwikkeling', type: "Investering", value: devInvest},
                { domain: 'Ontwikkeling', type: "Belang", value: devImportance},
                { domain: 'Sociaal leven', type: "Investering", value: socialInvest},
                { domain: 'Sociaal leven', type: "Belang", value: socialImportance},
                { domain: 'Familie', type: "Investering", value: familyInvest},
                { domain: 'Familie', type: "Belang", value: familyImportance},
            ];
            setData(data);
        }
        fetchAnswers();
    }, []);

    const config = {
        data: data,
        height: 240,
        xField: 'domain',
        yField: 'value',
        colorField: 'type', // or seriesField in some cases
        color: ['#0086BF', '#F0B323'],
        seriesField: 'type',
        meta: {
            value: {
            alias: 'Waarde',
            min: 0,
            max: 5,
            nice: true,
            },
        },
        xAxis: {
            line: null,
            tickLine: null,
        },
        yAxis: {
            label: false,
            grid: {
            alternateColor: 'rgba(0, 0, 0, 0.04)',
            },
        },
        point: {},
        area: {},
    };

    if (!data) return <LoadingScreen/>
    return <Radar {...config}/>;
}
