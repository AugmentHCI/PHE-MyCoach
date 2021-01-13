import React, { Component } from 'react';
import MomentUtils from '@date-io/moment';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from "moment";
import "moment/locale/nl-be";
import "moment/locale/fr";
import "moment/locale/en-gb";
import './MuiInput.css';

export default class DayPicker extends Component {
  constructor(props){
    super(props);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.state = {
      locale: this.props.locale,
    };
  }

  componentDidMount(){
    moment.locale(this.props.locale);
  }

  handleDateChange(e) {
    this.props.onDateChange(e._d);
  }
  
  render() {
    const selectedDate = this.props.selectedDate
    return (
      <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={this.state.locale}>
        <DatePicker 
          value={selectedDate} 
          onChange={this.handleDateChange} 
          format="dd D MMM YYYY" />
      </MuiPickersUtilsProvider>
    );
  }
}