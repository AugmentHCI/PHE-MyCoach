import React, { Component } from 'react';
import { getParameterData } from '../../../../api/dataparser';
import { getDistanceDataMonthly } from '../../../../api/steps_dataparser';
import i18n from 'meteor/universe:i18n';
import "../../../../../i18n/nl.i18n.json";
import "../../../../../i18n/fr.i18n.json";
import "../../../../../i18n/en.i18n.json";

const T = i18n.createComponent("Common");

const grey = getComputedStyle(document.documentElement).getPropertyValue('--idewe-background-solid');

//component for one calender cell of the visualisation
class Cell extends Component {
  //color is based on parameter color, tint/intensity is based on color scale
  getColor = (value, comparison) => {
    let max;
    let color;
    if(!comparison){
      max = this.props.data.max;
      color = this.props.data.color;
    } else {
      max = this.props.comparisonData.max;
      color = this.props.comparisonData.color;
    }

    if(value == null || value == 0){
      return grey;
    }

    let tint = color;

    if (max !== 4 || max !== 100) {
      tint = color + "-tint" + Math.round(value/max * 5);
      return getComputedStyle(document.documentElement).getPropertyValue(tint);
    }

    let interval = 1; 
    let step;
    if(max == 4){
      step = 1;
    }else if (max == 100){
      step = 25;
    }
    else {step = 1;}

    for (let i = 0; i < max; i+=step) {
      if(i<=value && value<=i+step){
        tint = color + "-tint" + interval;
      }
      interval++;
    }
    return getComputedStyle(document.documentElement).getPropertyValue(tint);
  }

  //height based on scale
  getHeight = (value, comparison) => {
    let max;
    if(!comparison){
      max = this.props.data.max;
    } else {
      max = this.props.comparisonData.max;
    }

    if(value == null){
      return '1.5px';
    }

    let height = 0;
    let interval = 1;
    let step;
    if(max == 4){
      step = 1;
    }else if (max == 100){
      step = 25;
    }
    else {step = 1;}

    for (let i = 0; i < max; i=i+step) {
      interval++;
      if(i<value && value<=i+step){
        height = (1+(interval*2.5)).toString()+"px";
      }
    }
    return (Math.round(14 * (value/max)) + 2) + "px";
  }

  getBarStyle = (value, comparison) => {
    const barStyle = {
      backgroundColor: this.getColor(value, comparison),
      height: this.getHeight(value, comparison),
      width: '8px',
    }

    return barStyle;
  }

  render() {
    return(
      <div style={{display: 'flex', justifyContent: 'space-between', width: "13%", minHeight: "55px", flexDirection: "column", alignItems: 'center', padding: "4px", borderStyle: "solid", borderWidth: '1px', borderColor: grey}}>
        <div className='small-text'>{this.props.day}</div>
        {this.props.comparison !== "" && 
          <div style={{display: 'flex', width: '20px', justifyContent: 'space-between', flexDirection: 'row', alignItems: "flex-end"}}>
            <div style={this.getBarStyle(this.props.data.data[this.props.day], false)}></div>
            <div style={this.getBarStyle(this.props.comparisonData.data[this.props.day], true)}></div>
          </div>
        }
        {this.props.comparison === "" && 
          <div style={this.getBarStyle(this.props.data.data[this.props.day], false)}></div>
        }
      </div>
    ) 
  }
}

class ColorLegend extends Component {
  //amount = 4 for physical and mental tiredness, amount = 5 for satisfaction and pain intensity
  getAmountOfCategories = () => {
    if(this.props.max == 4){
      return [1,2,3,4];
    } else {
      return [1,2,3,4];
    }
  }

  getWidth = () => {
    if(this.props.max == 4){
      return "180px";
    } else {
      return "180px";
    }
  }

  render() {
    return(
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px'}}>
        <div className='small-text'>{<T>{`myProgress.parameters.${this.props.parameter}`}</T>}</div>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
          {this.getAmountOfCategories().map((d) => {
            return <div key={d} style={{backgroundColor: getComputedStyle(document.documentElement).getPropertyValue(this.props.color + "-tint" + (d+1).toString()), height: "8px", width: "40px"}}></div>;
          })}
        </div>
        <div style={{width: this.getWidth(), display: 'flex', justifyContent: 'space-between'}}>
          <div className='small-text'>{this.props.min}</div>
          <div className='small-text'>{this.props.parameter === "distance" ? Math.ceil(this.props.max) + " km" : this.props.max}</div>
        </div>
      </div>
    )
  } 
}

export default class CalendarGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parameter: "painIntensity",
      comparisonParameter: "satisfaction",
      data: this.getData("painIntensity"),
      comparisonData: this.getData("satisfaction"),
      month: 1,
      year: 2020
    };
  }

  componentDidMount(){
    this.updateData(this.props.parameter, false);
    //if this.props.comparison = true -> graph for the insights tab, this one contains two parameters to compare
    if(this.props.comparison !== ""){
      this.updateData(this.state.comparisonParameter, true);
    }
    i18n.setLocale(this.props.locale);
  }

  //check if data in MyProgress parent component has changed -> if so: update this component with new data
  componentDidUpdate(prevProps) {
    if (prevProps.parameter != this.props.parameter) {
      this.updateData(this.props.parameter, false);
    }
    else if (prevProps.comparison != this.props.comparison && this.props.comparison !== "") {
      this.updateData(this.props.comparison, true);
    }
    /*
    if(this.props.data !== prevProps.data){
      this.updateData(this.props.parameter, false);
      if(this.props.comparison !== ""){
        this.updateData(this.props.comparison, true);
      }
    }*/
  } 

  //parameter meegeven ipv uit state te halen, want state werkt asynchroon -> is soms te laat geupdate
  getData = (parameter) => {
    if (parameter === "distance") return getDistanceDataMonthly(this.props.fitData);
    let dataArray = getParameterData(this.props.data, parameter, "month");
    return dataArray;
  }

  updateData = (parameter, comparison) => {
    if(!comparison){
      this.setState({parameter: parameter, data: this.getData(parameter)});
    } else {
      this.setState({comparisonParameter: parameter, comparisonData: this.getData(parameter)});
    }
    this.setState({year: new Date(this.props.date).getFullYear()});
    this.setState({month: new Date(this.props.date).getMonth()+1});
  }

  //called when a different parameter is selected in dropdown
  updateParameter = (newParameter, comparison) => {
    if(!comparison){
      this.setState({parameter: newParameter})
    } else {
      this.setState({comparisonParameter: newParameter})
    }
    this.updateData(newParameter, comparison);
  }

  // Calculate on which day of the week the given month starts (first = true) or ends (first = false)
  getDayOfWeek = (year, month, first) => {
    let day = 0;
    if(first) {
      day = new Date(year, month-1, 1).getDay()
    } else {
      day = new Date(year, month, 0).getDay()
    }
    day = (day===0) ? 7 : day;
    //1 = maandag, 7 = zondag

    return day;
  }

  getAmountOfDays = (year, month) => {
    return new Date(year, month, 0).getDate();
  }

  //called in render function to render cells dynamically
  getCells = (year, month) => {
    const blankStyle = {width: "13%", padding: "2px", borderStyle: "solid", borderWidth: '1px', borderColor: grey};

    let blanksBefore = [];
    for (let i = 1; i < this.getDayOfWeek(year, month, true); i++) {
      blanksBefore.push(
        <div key={"before"+i.toString()} style={blankStyle}></div>
      );
    }

    let daysInMonth = [];
    for (let day = 1; day <= this.getAmountOfDays(year, month); day++) {
      daysInMonth.push(
        <Cell 
          key={day} 
          day={day} 
          parameter={this.props.parameter} 
          data={this.state.data}
          comparison={this.props.comparison}
          comparisonParameter={this.state.comparisonParameter} 
          comparisonData={this.state.comparisonData}
        />
      );
    }

    let blanksAfter = [];
    for (let i = this.getDayOfWeek(year, month, false); i < 7; i++) {
      blanksAfter.push(
        <div key={"after"+i.toString()} style={blankStyle}></div>
      );
    }

    var totalSlots = [...blanksBefore, ...daysInMonth, ...blanksAfter];
    let rows = [];
    let cells = [];

    totalSlots.forEach((cell, i) => {
      if (i % 7 !== 0) {
        cells.push(cell); 
      } else {
        rows.push(cells); 
        cells = []; 
        cells.push(cell); 
      }
      if (i === totalSlots.length - 1) { 
        rows.push(cells);
      }
    });

    let calCells = 
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {rows.map((d, i) => {
          return <div key={i} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>{d}</div>;
        })}
      </div>
        

    return calCells;
  }
  
  render() {
    return(
      <div>
        <div style={{display: 'flex', width: "device-width", justifyContent: 'center', flexDirection: 'column', marginTop: '10px'}}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) =>
              <div className='small-text' style={{width: '13%', textAlign: 'center', backgroundColor: grey, padding: "2px"}} key={day}>{<T>{`myProgress.axes.${day}`}</T>}</div>
            )}
          </div>

          {this.getCells(this.state.year,this.state.month)}

          <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <ColorLegend 
              parameter={this.props.parameter}
              measure={this.state.data.measure}
              color={this.state.data.color}
              min={this.state.data.min}
              max={this.state.data.max}/>

            {this.props.comparison !== "" && 
              <ColorLegend 
              parameter={this.state.comparisonParameter}
              measure={this.state.comparisonData.measure}
              color={this.state.comparisonData.color}
              min={this.state.comparisonData.min}
              max={this.state.comparisonData.max}/>
            }  
          </div>
        </div>
      </div>
    );
  }
}