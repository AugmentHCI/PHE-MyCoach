import React, { Component } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { getMonthlyActivityData } from '../../../api/dataparser';
import i18n from 'meteor/universe:i18n';
import "../../../../i18n/nl.i18n.json";
import "../../../../i18n/fr.i18n.json";
import "../../../../i18n/en.i18n.json";

const T = i18n.createComponent("Common");

const blue = getComputedStyle(document.documentElement).getPropertyValue('--idewe-dark-blue');

export default class MonthlyActivityGraph extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: this.getData()
    }
  }

  componentDidMount(){
    this.updateData();
    i18n.setLocale(this.props.locale);
  }

  //check if data in MyProgress parent component has changed -> if so: update this component with new data
  componentDidUpdate(prevProps) {
    if(this.props.data !== prevProps.data){
      this.updateData();
    }
  } 

  updateData = () => {
    this.setState({data: this.getData()});
  }

  getData = () => {
    return getMonthlyActivityData(this.props.data);
  }

  //sort activities based on how often they were completed that week (activity at the top = most often completed)
  sortActivityData = (unsortedActivities) => {
    let sortable = [];
    let sortedActivities = [];
  
    unsortedActivities.forEach(activity => {
      sortable.push([activity.key, activity.sum])
    });

    sortable.sort(function(a, b) {
      if (a[1] > b[1]) return 1;
      if (a[1] < b[1]) return -1;
      return 0;
    })
  
    sortable.forEach(activity => {
      sortedActivities.push({"key": activity[0], "sum": activity[1]});
    });

    return sortedActivities;
  }
  
  getAxisTitleTranslation = () => {
    return i18n.getTranslation('Common', 'myProgress.axes.amountOfDays');
  }

  render() {
    return(
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{height: "300px", width: "device-width"}}>
          <ResponsiveBar
            data={this.sortActivityData(this.state.data)} //unsorted: data={this.state.data}
            keys={["sum"]}
            indexBy="key"
            margin={{ top: 10, right: 50, bottom: 50, left: 150 }}
            padding={0.3}
            layout="horizontal"
            colors={blue}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 0,
              legend: this.getAxisTitleTranslation(),
              legendPosition: 'start',
              legendOffset: 2,
              "format": () => null,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
            }}
            enableGridY = {false}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={"white"}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        </div>
      </div>
    )
  }
}