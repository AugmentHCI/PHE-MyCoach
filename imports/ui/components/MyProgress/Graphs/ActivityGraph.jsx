import React, { Component } from 'react';
import { getActivityData } from '../../../../api/dataparser';
import i18n from 'meteor/universe:i18n';
import "../../../../../i18n/nl.i18n.json";
import "../../../../../i18n/fr.i18n.json";
import "../../../../../i18n/en.i18n.json";

const T = i18n.createComponent("Common");

const blue = getComputedStyle(document.documentElement).getPropertyValue('--idewe-blue-dark');
const grey = getComputedStyle(document.documentElement).getPropertyValue('--idewe-gray-light');

//circle component for when an activity was completed that day
class FullCircle extends Component {
  render() {
    const circleStyle = {
      backgroundColor: blue,
      borderStyle: "solid", 
      borderWidth: "1.5px",
      borderColor: blue,
      borderRadius: "50%",
      width: "20px",
      height: "20px",
      margin: "2px"
    };
    return (
      <div style={circleStyle}></div>
    );
  }
}

//circle component for when an activity wasn't completed that day
class EmptyCircle extends Component {
  render() {
    const circleStyle = {
      backgroundColor: "transparant",
      borderStyle: "solid", 
      borderWidth: "1.5px",
      borderColor: blue,
      borderRadius: "50%",
      width: "20px",
      height: "20px",
      margin: "2px"
    };
    return (
      <div style={circleStyle}></div>
    );
  }
}

//circle component for when no data was recorded that day (currently this isn't implemented, EmptyCircle is used for this)
class GreyCircle extends Component {
  render() {
    const circleStyle = {
      backgroundColor: grey,
      borderStyle: "solid", 
      borderWidth: "1.5px",
      borderColor: grey,
      borderRadius: "50%",
      width: "20px",
      height: "20px",
      margin: "2px"
    };
    return (
      <div style={circleStyle}></div>
    );
  }
}

export default class ActivityGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.getData()
    };
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
    return getActivityData(this.props.data);
  }

  //sort activities based on how often they were completed that week (activity at the top = most often completed)
  sortActivities = (unsortedActivities) => {
    let sortable = [];
    let sortedActivities = [];
  
    Object.keys(unsortedActivities).forEach(activity => {
      let amountOfDays = this.countDays(Object.values(unsortedActivities[activity]));
      sortable.push([activity, amountOfDays])
    });
  
    sortable.sort(function(a, b) {
      if (a[1] < b[1]) return 1;
      if (a[1] > b[1]) return -1;
      return 0;
    })
  
    sortable.forEach(activity => {
      sortedActivities.push(activity[0]);
    });
    return sortedActivities;
  }
  
  //helper function for sortActivities function above
  countDays = (days) => {
    let count = 0;
    for(var i = 0; i < days.length; ++i){
        if(days[i] == true)
            count++;
    }
    return count;
  }

  render() {
    const activities = this.state.data;
    
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{width:'45%', paddingRight: '10px'}}></div>
          {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) =>
              <div className='small-text' style={{width: '24px', textAlign: 'center'}} key={day}>{<T>{`myProgress.axes.${day}`}</T>}</div>
            )}
        </div>
        {this.sortActivities(activities).map((activity) => //unsorted: Object.keys(activities)
          <div style={{display: 'flex', flexDirection: 'row', margin: "5px"}} key={activity}>
            <div className='small-text' style={{width:'45%', paddingRight: '10px', textAlign: 'right'}}>{activity}</div>
            {Object.keys(activities[activity]).map((day) =>
              <div key={day}>
                {activities[activity][day] ? (
                  <FullCircle />
                ) : (
                  //TODO: if the data says "null" for an activity this means no data was recorded that day
                  //currently this type of data is registered as "false" instead of "null" in the dataparser
                  (activities[activity][day] == null) ? (
                    <GreyCircle/>
                  ) : (
                    <EmptyCircle />
                  )
                )}
              </div>
            )} 
          </div>
        )}
        </div>
    );
  }
}