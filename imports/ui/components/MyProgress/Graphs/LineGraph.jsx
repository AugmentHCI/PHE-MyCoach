import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { getParameterData } from '../../../../api/dataparser';
import { getDistanceData } from '../../../../api/steps_dataparser';
import i18n from 'meteor/universe:i18n';
import "../../../../../i18n/nl.i18n.json";
import "../../../../../i18n/fr.i18n.json";
import "../../../../../i18n/en.i18n.json";

const T = i18n.createComponent("Common");

//null = niet ingevuld die dag
//const ordinalData = {"Niet vermoeid": 1, "Enigszins vermoeid": 2, "Tamelijk vermoeid": 3, "Erg vermoeid": 4}
//const ordinalData = {"Niet": 1, "Enigszins": 2, "Tamelijk": 3, "Zeer": 4}
const ordinalData = {"0": 1, "+": 2, "++": 3, "+++": 4}
export default class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parameter: this.props.parameter,
      comparisonParameter: "satisfaction",
      data: this.getData(this.props.parameter),
      comparisonData: this.getData("satisfaction"),
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
      this.setState({data: this.getData(this.props.parameter)})
    }
    if (prevProps.comparison != this.props.comparison && this.props.comparison !== "") {
      this.setState({comparisonData: this.getData(this.props.comparison)})
    }
    if(this.props.data !== prevProps.data){
      this.updateData(this.props.parameter, false);
      if(this.props.comparison){
        this.updateData(this.state.comparisonParameter, true);
      }
    }
  } 

  getData = (parameter) => {
    if (parameter === "distance") return getDistanceData(this.props.fitData, "week");
    let dataArray = getParameterData(this.props.data, parameter, "week");
    return dataArray;
  }

  updateData = (parameter, comparison) => {
    if(!comparison){
      this.setState({parameter: parameter, data: this.getData(parameter)});
    } else {
      this.setState({comparisonData: this.getData(parameter)});
    }
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

  //values = [1,2,3,4] for physical and mental tiredness, values = [0, ..., 100] for satisfaction and pain intensity
  getGridYValues = (data) => {
    if(data.max===100) { return [0,10,20,30,40,50,60,70,80,90,100] } 
    else if (data.max===4) { return [1,2,3,4] }
    else { return [data.min, 2, data.max] }
  }

  getLineData = () => {
    if(!this.props.comparison){
      return [this.state.data]
    } else {
      return [this.state.data, this.state.comparisonData]
    }
  }

  //when two parameters are compared: color corresponding axes and titles in the color of the parameter
  getColor = (data) => {
    if(!this.props.comparison){
      return "rgb(51,51,51)"
    } else {
      return getComputedStyle(document.documentElement).getPropertyValue(data.color)
    }
  }

  getAxisTitleTranslation = () => {
    return i18n.getTranslation('Common', 'myProgress.axes.day');
  }

  render() {
    return(
      <div style={{height: "250px", width: "device-width"}}>
        <div style={{position: "relative", height: "100%"}}>
          <div style={{position: "absolute", zIndex: 0, top: 0, left: 0, right: 0, bottom: 0}}>
            <ResponsiveLine
              //bottom axis
              data={[this.state.data]}
              margin={{ top: 10, right: 50, bottom: 50, left: 70 }}
              xScale={{ type: 'point' }}
              yScale={{ type: 'linear', min: this.state.data.min, max: this.state.data.max, stacked: false, reverse: false }}
              curve="monotoneX"
              axisBottom={{
                orient: 'bottom',
                tickSize: 3,
                tickPadding: 5,
                tickRotation: 0,
                legend: this.getAxisTitleTranslation(), 
                legendOffset: 40,
                legendPosition: 'middle'
              }}
              axisLeft={null}
              enableGridX={false}
              enableGridY={false}
              theme={{
                axis: {
                  domain: {
                    line: {
                      stroke: "lightgrey"
                    }
                  },
                }
              }}
            />
          </div>

          <div style={{position: "absolute", zIndex: 1, top: 0, left: 0, right: 0, bottom: 0}}>
            <ResponsiveLine
              //line graph parameter one
              data={[this.state.data]}
              margin={{ top: 10, right: 50, bottom: 50, left: 70 }}
              xScale={{ type: 'point' }}
              yScale={{ type: 'linear', min: this.state.data.min, max: this.state.data.max, stacked: false, reverse: false }}
              curve="monotoneX"
              axisBottom={null}
              axisLeft={{
                orient: 'left',
                tickSize: 3,
                tickPadding: 5,
                tickRotation: 0,
                legend: this.state.data.measure,
                legendOffset: -40,
                legendPosition: 'middle',
                format: value => {
                    if(this.state.data.max==100){
                      return value;
                    }else if (this.state.data.max==4){
                      return Object.keys(ordinalData).find(key => ordinalData[key] === value);
                    }
                    else {return value;}
                  },
              }}
              enableGridX={false}
              enableGridY={false}
              gridYValues={this.getGridYValues(this.state.data)}
              colors={d => getComputedStyle(document.documentElement).getPropertyValue(d.color)}
              isInteractive={false}
              theme={{
                grid: {
                  line: {
                    stroke: "lightgrey",
                    strokeWidth: 1,
                    strokeDasharray: "2 4"
                  }
                },
                axis: {
                  domain: {
                    line: {
                      stroke: "lightgrey"
                    }
                  },
                  ticks: {
                    line: {
                      stroke: this.getColor(this.state.data)
                    },
                    text: {
                      fill: this.getColor(this.state.data)
                    }
                  },
                  legend: {
                    text: {
                      fill: this.getColor(this.state.data)
                    }
                  }
                }
              }}
            />
          </div>

          <div style={{position: "absolute", zIndex: 2, top: 0, left: 0, right: 0, bottom: 0}}>
            {this.props.comparison &&
            <ResponsiveLine
              //linegraph parameter two
              data={[this.state.comparisonData]}
              margin={{ top: 10, right: 50, bottom: 50, left: 70 }}
              xScale={{ type: 'point' }}
              yScale={{ type: 'linear', min: this.state.comparisonData.min, max: this.state.comparisonData.max, stacked: false, reverse: false }}
              curve="monotoneX"
              axisBottom={null}
              axisLeft = {null}
              axisRight={{
                orient: 'right',
                tickSize: 3,
                tickPadding: 5,
                tickRotation: 0,
                legend: this.state.comparisonData.measure,
                legendOffset: 40,
                legendPosition: 'middle',
                format: value => {
                    if(this.state.comparisonData.max==100){
                      return value;
                    }else{
                      return Object.keys(ordinalData).find(key => ordinalData[key] === value);
                    }
                  },
              }}
              enableGridX={false}
              enableGridY={false}
              gridYValues={this.getGridYValues(this.state.comparisonData)}
              colors={d => getComputedStyle(document.documentElement).getPropertyValue(d.color)}
              isInteractive={false}
              theme={{
                grid: {
                  line: {
                    stroke: "lightgrey",
                    strokeWidth: 1,
                    strokeDasharray: "2 4"
                  }
                },
                axis: {
                  domain: {
                    line: {
                      stroke: "lightgrey"
                    }
                  },
                  ticks: {
                    line: {
                      stroke: this.getColor(this.state.comparisonData)
                    },
                    text: {
                      fill: this.getColor(this.state.comparisonData)
                    }
                  },
                  legend: {
                    text: {
                      fill: this.getColor(this.state.comparisonData)
                    }
                  }
                }
              }}
            />
            } 
          </div>
        </div>
      </div>
    )
  }
}
