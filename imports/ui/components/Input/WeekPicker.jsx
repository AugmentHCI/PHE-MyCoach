import React, { Component } from 'react';
import MomentUtils from '@date-io/moment';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from "moment";
import "moment/locale/nl-be";
import clsx from "clsx";
import { createStyles } from "@material-ui/styles";
import { IconButton, withStyles } from "@material-ui/core";
import './MuiInput.css';

import i18n from 'meteor/universe:i18n';
import "../../../../i18n/nl.i18n.json"
import "../../../../i18n/fr.i18n.json"
import "../../../../i18n/en.i18n.json"

//this code is based on https://material-ui-pickers.dev/demo/datepicker#customization

class WeekPicker extends Component {
  constructor(props){
    super(props);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.state = {
      locale: this.props.locale
    };
  }

  componentDidMount(){
    moment.locale(this.props.locale);
    i18n.setLocale(this.props.locale);
  }

  handleDateChange(e) {
    this.props.onDateChange(e._d);
  }

  formatWeekSelectLabel = (date, invalidLabel) => {
    let dateClone = moment(date);
    let translation = i18n.getTranslation('Common', "myProgress.weekOf");

    return dateClone && dateClone.isValid()
      ? `${translation} ${dateClone.startOf('week').format("D MMMM")}`
      : invalidLabel;
  };

  renderWrappedWeekDay = (date, selectedDate, dayInCurrentMonth) => {
    const { classes } = this.props;
    let dateClone = moment(date);

    const start = moment(selectedDate).startOf('week');
    const end = moment(selectedDate).endOf('week');

    const dayIsBetween = dateClone.isBetween(start, end, 'days', '[]')
    const isFirstDay = dateClone.isSame(start, 'day');
    const isLastDay = dateClone.isSame(end, 'day');

    const wrapperClassName = clsx({
      [classes.highlight]: dayIsBetween,
      [classes.firstHighlight]: isFirstDay,
      [classes.endHighlight]: isLastDay,
    });

    const dayClassName = clsx(classes.day, {
      [classes.nonCurrentMonthDay]: !dayInCurrentMonth,
      [classes.highlightNonCurrentMonthDay]: !dayInCurrentMonth && dayIsBetween,
    });

    return (
      <div className={wrapperClassName}>
        <IconButton className={dayClassName}>
          <span> {dateClone.format("D")} </span>
        </IconButton>
      </div>
    );
  };

  render(){
    const selectedDate = this.props.selectedDate
    return (
      <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={this.state.locale}>
        <DatePicker 
          value={selectedDate} 
          onChange={this.handleDateChange}
          renderDay={this.renderWrappedWeekDay}
          labelFunc={this.formatWeekSelectLabel}
          format={"DD"} />
      </MuiPickersUtilsProvider>
    );
  }
  
}

const blue = getComputedStyle(document.documentElement).getPropertyValue('--idewe-dark-blue');

const styles = createStyles(theme => ({
  dayWrapper: {
    position: "relative",
  },
  day: {
    width: 36,
    height: 36,
    fontSize: theme.typography.caption.fontSize,
    margin: "0 2px",
    color: "inherit",
  },
  customDayHighlight: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "2px",
    right: "2px",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "50%",
  },
  nonCurrentMonthDay: {
    color: theme.palette.text.disabled,
  },
  highlightNonCurrentMonthDay: {
    color: "#676767",
  },
  highlight: {
    background: blue,
    color: theme.palette.common.white,
  },
  firstHighlight: {
    extend: "highlight",
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
  },
  endHighlight: {
    extend: "highlight",
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
  },
}));


export default withStyles(styles)(WeekPicker)