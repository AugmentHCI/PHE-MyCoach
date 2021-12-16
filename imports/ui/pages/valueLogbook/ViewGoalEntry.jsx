import React, { useState, useEffect } from 'react';


/* External API */
import styled, { css } from 'styled-components';
import FadeIn from "react-fade-in";
import jwt_decode from "jwt-decode";
import { Column } from '@ant-design/charts';
import moment from 'moment';

/* Internal API */
import BuildupScheme from '../../../api/BuildupScheme';
import { values as valueCodes } from "../../../api/scripts/ThoughtsEmotionsScript";

/* Managers */
import GoalSettingManager from '../../../api/managers/GoalSettingManager.jsx';
import QuestionManager from '../../../api/managers/QuestionManager';

/* UI Components */
import NavigationBar from '../../components/NavigationBar';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Icon from '../../components/Illustrations/Icon';

/* Styles */
import "./ValueLogbook.scss";
import LoadingScreen from '../../components/LoadingScreen';
import { DAYS, QUANTITIES_ARRAY, TRUSTSCORE } from '../../../api/data/GoalsActivities';

const B = styled.b`
    font-family: var(--main-font);
    font-size: 16px;
    font-weight: 500;
    color: var(--idewe-blue-dark);
`
const TitleCard = styled.div`
    margin: 20px 0;
    width: 100%;
    justify-content: center;
    text-align: center;
    background-color: white;
    box-shadow: var(--card-shadow);
    padding: 10px;
    border-radius: 10px;

`
const Title = styled.h1`
    font-size: 26px;
    color: var(--idewe-blue);
    text-decoration: underline;
    margin-bottom: 0;
`
const Description = styled.p`
    font-size: 16px;
    color: var(--idewe-blue);
    font-weight: 400;
    text-decoration: none !important;
    margin-bottom: 0;
    margin-top: 3px;
`
const Subtitle = styled.h3`
    font-family: var(--main-font);
    font-size: 18px;
    font-weight: 500;
    color: var(--idewe-blue-dark);
    text-transform: uppercase;
`
const P = styled.p`
    font-family: var(--main-font);
    font-size: 16px;
    font-weight: 400;
    color: var(--idewe-blue);
    display: inline;
`
const Ul = styled.ul`
    padding-left: 1em;
    margin-bottom: 0;
`
const Measure = styled.ul`
    padding: 3px 10px;
    background-color: var(--idewe-blue);
    color: var(--idewe-white);
    font-weight: 500;
    border-radius: 20px;
    font-size: 12px;
    display: inline;
    margin-right: .5em;
`
const Day = styled.div`
    color: var(--idewe-gray);
    padding: 0 4px;
    height: 25px;
    text-align: center;
    font-weight: 500;

    ${props => props.selected && css`
        color: var(--idewe-blue);
        text-decoration: underline;
        font-weight: 600;
    `};
`

 export default function GoalEntryScreen() {

     const userID = FlowRouter.getParam('token') ? parseInt(jwt_decode(FlowRouter.getParam('token')).rrnr) : 1111111;
     const goalSettingManager = new GoalSettingManager(userID);
     const questionManager = new QuestionManager(userID);
     const language = FlowRouter.getParam('language') ? FlowRouter.getParam('language') : "nl-BE";

     const goalID = FlowRouter.getParam('id');

     const [values, setValues] = useState([]);

     const [goal, setGoal] = useState(undefined);
     const [buildupScheme, updateBuildupScheme] = useState(undefined);
     const [goalQuantifier, updateGoalQuantifier] = useState(undefined);
     const [measurements, updateMeasurements] = useState({0: 0, 1: 0, 2: 0});
     const [loadingGoals, setLoadingGoals] = useState(true);
     const [loadingValues, setLoadingValues] = useState(true);

      /* Initialising component - Fetching and initialising data */
      useEffect(() => { 
        async function fetchValues() {
            const fetchedValues = await questionManager.getLatestAnswerOnQuestion("TE-MOD-5-SELECT-5");
            const parsedValues = fetchedValues ? JSON.parse(fetchedValues) : [];
            const valueList = [];
            Object.keys(parsedValues).forEach(value => {
                if (parsedValues[value]) {
                    const foundValues = valueCodes.filter(valueCode => valueCode.id === value);
                    if (foundValues.length > 0) valueList.push({id: value, value: foundValues[0].text});
                    else valueList.push({id: value, value: value});
                }
            });
            setValues(valueList);
            setLoadingValues(false);
        }
        async function fetchGoal() {
            if (goalID) {
                const goal = await goalSettingManager.getUserGoal(goalID);
                const newBuildupScheme = goal.buildupScheme ? new BuildupScheme({schemeString:goal.buildupScheme}) : undefined;
                setGoal(goal);
                updateGoalQuantifier(QUANTITIES_ARRAY.filter(item => item.id === goal.quantifier));
                updateBuildupScheme(newBuildupScheme);
                updateMeasurements(newBuildupScheme ? newBuildupScheme.measurements : {0: 0, 1: 0, 2: 0})
                setLoadingGoals(false);
            }
        }
        fetchValues();
        fetchGoal();
    }, []);

    function renderInformation() {
        if (!goal) return <React.Fragment/>;
        return <Ul>
            <li><B>Drempel: </B><P>{goal.threshold}</P></li>
            <li><B>Oplossing: </B><P>{goal.thresholdDescription}</P></li>
            <li><B>Beloning: </B><P>{goal.reward}</P></li>
            <li><B>Vertrouwen: </B><P>{TRUSTSCORE[goal.trust]}</P></li>
        </Ul>
    }

    function removeGoal() {
        goalSettingManager.removeGoal(goalID);
        history.back();
    }

    function renderGoal() {
        if (!goal) return <React.Fragment/>;
        return <React.Fragment>
            <Ul>
                {goalQuantifier && <li><B>Doel: </B><P>{goal.quantity + " " + goalQuantifier[0].value}</P></li>}
                {goal.wholeDay && <li><B>Gedurende heel de dag</B></li>}
                {buildupScheme &&  <li><B>Deze week: </B><P>{buildupScheme.getGoal(moment().format("W-YYYY")) + " " + goalQuantifier[0].value}</P></li>}
                <div style={{display:"flex", flexDirection: "row", justifyContent:"space-between", marginTop: "1em"}}>
                    {Object.keys(JSON.parse(goal.days)).map(day => {
                        return (<Day key={day} selected={JSON.parse(goal.days)[day]}>{DAYS[day]}</Day>)})}
                </div>
            </Ul>
            {buildupScheme && <React.Fragment>
                <hr/>
                <Subtitle>Opbouwschema</Subtitle>
                <Ul>
                    <li><B>Duur: </B><P>{buildupScheme.scheme?.length} weken</P></li>
                    <li><B>Metingen: </B>
                        {measurements[0] && <Measure>{measurements[0] + " " + goalQuantifier[0].short}</Measure>}
                        {measurements[1] && <Measure>{measurements[1] + " " + goalQuantifier[0].short}</Measure>}
                        {measurements[2] && <Measure>{measurements[2] + " " + goalQuantifier[0].short}</Measure>}
                    </li>
                </Ul>
                {renderChart()}
                </React.Fragment>}
        </React.Fragment>
    }

    const getColor = (bar) => {
        if (bar.data.date === moment().format("W-YYYY")) return 'var(--idewe-blue-dark)'
        return 'var(--idewe-blue)'
    }

    function renderChart() {
        if (!buildupScheme || !buildupScheme?.scheme) return <React.Fragment/>
        console.log(moment(new Date()).format("WW-YYYY").toString())
        var config = {
            data: buildupScheme.scheme,
            xField: 'week',
            yField: 'goal',
            legend: false,
            seriesField: 'date',
            color: ({ date }) => {
              if(moment(new Date()).format("WW-YYYY").toString() === date){
                return '#01426A';
              }
              return '#0086BF';
            },
            columnStyle: { radius: [5, 5, 0, 0] },
            label: {
              position: 'middle',
              style: { fill: '#FFFFFF' },
            },
            tooltip: {
                showTitle: false,
                formatter: (week) => {
                  return { name: "Week " + week.week, value: week.goal + " " + goalQuantifier[0].short };
                },
            },
            xAxis: {
              label: {
                autoRotate: false,
              },
            },
          };
        return <div style={{height: "200px", width: "100%", marginTop:"1.5em"}}>  
            <Column {...config} />
        </div>
    }

    return (<React.Fragment>
        <NavigationBar title="Details doel"/>
        <div className="valuelogbook">
            { (loadingGoals || loadingValues) && <LoadingScreen/>}
            {!(loadingGoals || loadingValues) && <FadeIn>
                <TitleCard>
                    <Title>{goal ? goal.title : "Doel" }</Title>
                    <Description>{goal?.description}</Description>
                    <div style={{display:"flex", "flexDirection": "row", marginTop:".5em", justifyContent: "center", marginBottom: "3px"}}>
                        {goal?.values && JSON.parse(goal.values).map(value => { return (<div key={value.id} className="valuelogbook-entry-value"><Icon image="goal" color="white" width="14px" style={{margin: "-3px 7px 1px 0"}}/>{value.value}</div>)})}
                    </div>
                </TitleCard>
                <Card title="Informatie">
                    {renderInformation()}
                </Card>
                <Card title="Doel">
                    {renderGoal()}
                </Card>
                {<Button width="100%" color="blue" center onClick={() => FlowRouter.go(`/${language}/mycoach/${FlowRouter.getParam('token')}/values/edit/${goal._id}`)}>Wijzig doel</Button>}
                {goalID && <Button width="100%" center color="red" onClick={() => removeGoal()}>Verwijder doel</Button>}
            </FadeIn>}
        </div>
    </React.Fragment>);
}