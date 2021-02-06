import React from 'react';
import i18n from 'meteor/universe:i18n';
import "../../i18n/nl.i18n.json"
import "../../i18n/fr.i18n.json"
import "../../i18n/en.i18n.json"

const T = i18n.createComponent("Common");

//taal instellen
export function setDataParserLocale(locale){
  i18n.setLocale(locale);
}

//define color, min, max and measure (= title shown on the axis when plotted) for each parameter
//code = key that is used for this parameter by the JSON that is returned by the API
const parameters = [
  /*{
    "id": "Beweging",
    "measure": "Aantal stappen",
    "color": '--idewe-blue'
  },*/
  {
    "id": "satisfaction",
    "measure": "satisfaction",
    "color": '--idewe-yellow',
    "min": 0,
    "max": 100,
    "code": "phe.dagelijks.tevredenheid.dag"
  },
  {
    "id": "painIntensity",
    "measure": "painIntensity",
    "color": '--idewe-red',
    "min": 0,
    "max": 100,
    "code": "phe.dagelijks.pijn.intensiteit"
  },
  {
    "id": "physicalTiredness",
    "measure": "physicalTiredness", //"physicalTiredness",
    "color": '--idewe-purple',
    "min": 1,
    "max": 4,
    "code": "phe.dagelijks.lichamelijke.vermoeidheid"
  },
  {
    "id": "mentalTiredness",
    "measure": "mentalTiredness", //"mentalTiredness",
    "color": '--idewe-green-dark',
    "min": 1,
    "max": 4,
    "code": "phe.dagelijks.mentale.vermoeidheid"
  }
]

//array om NL data (zoals het wordt opgevraagd) om te zetten naar codes uit i18n files
const activities = {
  "Werken": "work", 
  "Huishouden": "domesticChores", 
  "Relaxatie oefeningen": "relaxationExercises", 
  "Lichamelijke oefeningen": "physicalExercises", 
  "Tijd spenderen met familie of vrienden": "familyOrFriends",  
  "Iets wat ik leuk vind": "somethingIEnjoy", 
  "TV/Computer/Lezen": "TV", 
  "Rusten": "resting", 
  "Overig": "other"
}

//array om ordinale data om te zetten naar discrete schaal (om te kunnen plotten)
const ordinalData = {
  "Niet vermoeid": 1, 
  "Enigszins vermoeid": 2, 
  "Tamelijk vermoeid": 3, 
  "Erg vermoeid": 4}

//array om data die niet als int wordt teruggegeven door API om te zetten van string naar int
const stringData = {
  "0 (Geen pijn)": 0,
  "100 (Ergste pijn voorstelbaar)": 100,
  "Zeer ontevreden": 0,
  "Zeer tevreden": 100
}

//get data from daily questionnaire + fix non-int data
function preFilterData(data){
  let preFiltered = data.filter(function(el){
    return el.vragenlijstNaam=="phe-dagelijks";
  })
  preFiltered.forEach(function(el){
    if (Object.keys(stringData).includes(el.antwoord)){
      el.antwoord = stringData[el.antwoord]
    }
  })

  return preFiltered;
}

//translation functions
function getMeasureTranslation(measure){
  return i18n.getTranslation('Common', `myProgress.parameters.${measure}`);
}

function getWeekdaysTranslation(){
  let weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  translatedWeekdays = weekdays.map( day =>
    i18n.getTranslation('Common', `myProgress.axes.${day}`))
  return translatedWeekdays;
}

function getActivityTranslation(activity){
  return i18n.getTranslation('Common', `myProgress.activities.${activity}`);
}

// main functie die gebruikt wordt door data visualisatie componenten (LineGraph, CalendarGraph)
// output data format van deze functie: {id: ..., measure: ..., ..., data: [weekly/monthly data]}
// input: data = data from API, parameter = id of selected parameter, timePeriod = "week" or "month"
export function getParameterData(data, parameter, timePeriod){
  paramData = [];
  let fullParamData = parameters.filter(function(param){
    return param.id == parameter;
  })
  fullParamData = fullParamData[0];
  if(fullParamData.measure == fullParamData.id){
    fullParamData.measure = getMeasureTranslation(fullParamData.measure);
  }

  let preFiltered = preFilterData(data);
  let filtered = preFiltered.filter(function(el){
    return el.vraag==fullParamData.code;
  })
  if(timePeriod == "week"){
    paramData = getDataForWeek(filtered);
  }else{
    paramData = getDataForMonth(filtered);
  }
  
  fullParamData.data = paramData;
  return fullParamData;
}

// weekly output data format van deze functie: [{x: "ma", y: 35}, {x:"di", y: 15}, ...]
// afhankelijk van locale: "ma", "mo" of "lu" etc (NL, ENG, FR)
function getDataForWeek(data){
  let paramData = [];
  const weekdays = getWeekdaysTranslation();
  let addedWeekdays = [];
  let day;
  let value;
  let weekday;

  //link data to weekday
  data.forEach(function(el){
    day = new Date(el.datum).getDay();
    day = (day===0) ? 7 : day;
    if(!isNaN(+el.antwoord)){
      value = +el.antwoord;
    }else{
      value = ordinalData[el.antwoord];
    }
    weekday = weekdays[day-1]
    paramData.push({x: weekday, y: value});
    addedWeekdays.push(weekday);
  });

  //add weekdays without data
  weekdays.forEach(function(weekday){
    if(!addedWeekdays.includes(weekday)){
      paramData.push({x: weekday, y: null});
    }
  });

  //sort array by weekday
  paramData.sort(function(a, b){  
    return weekdays.indexOf(a.x) - weekdays.indexOf(b.x);
  });
  return paramData;
}

// montlhy data format = output van deze functie: {1: 50, 2: 95, ..., 31: 52}
function getDataForMonth(data){
  let paramData = {};
  let addedDays = [];
  let date;
  let value;

  let currentDate;
  if(data[0]!=undefined){
    currentDate = new Date(data[0].datum);
  } else {
    currentDate = new Date();
  }
  const amountOfDays = new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 0).getDate();
  let daysOfMonth = Array.from(Array(amountOfDays+1).keys());
  daysOfMonth.shift();

  //link data to day
  data.forEach(function(el){
    date = new Date(el.datum).getDate();
    if(!isNaN(+el.antwoord)){
      value = +el.antwoord;
    }else{
      value = ordinalData[el.antwoord];
    }
    paramData[date] = value;
    addedDays.push(date);
  });

  //add days of month without data
  daysOfMonth.forEach(function(day){
    if(!addedDays.includes(day)){
      paramData[day] = null;
    }
  });

  return paramData;
}



// data format output: {"werken": {ma: true, ... zo: false}, "huishouden": {...}, ...}
// taal activiteiten en dagen in output format afhankelijk van locale
//TODO: wat als niet ingevuld? is momenteel ook false -> geen onderscheid tussen activiteit niet gedaan en vragenlijst niet ingevuld
export function getActivityData(data){
  const weekdays = getWeekdaysTranslation();

  let preFiltered = preFilterData(data);
  let filtered = preFiltered.filter(function(el){
    return el.vraag=="phe.dagelijks.welke.activiteiten.gedaan";
  })

  let day;
  let weeklyActivities = {};
  let nameOfActivity;
  Object.keys(activities).forEach(function(activity){
    unsortedActivityData = {};
    addedWeekdays = [];
    activityData = filtered.filter(function(el){
      return el.antwoord==activity;
    })

    activityData.forEach(function(el){
      day = new Date(el.datum).getDay();
      day = (day===0) ? 7 : day;
      unsortedActivityData[weekdays[day-1]] = true;
      addedWeekdays.push(weekdays[day-1]);
    });

    //add weekdays without data
    weekdays.forEach(function(weekday){
      if(!addedWeekdays.includes(weekday)){
        unsortedActivityData[weekday] = false;
      };
    });

    //sort by weekday
    sortedActivityData = {};
    weekdays.forEach(function(key) {
      sortedActivityData[key] = unsortedActivityData[key];
    });

    nameOfActivity = getActivityTranslation(activities[activity])
    weeklyActivities[nameOfActivity] = sortedActivityData;
  });

  return weeklyActivities;
}

//data format output: [{key: "werken", sum: 19}, {key: "huishouden", sum: 6}, {key: "relaxatie oefeningen", sum: 3}, ...]
//taal activiteiten in output format afhankelijk van locale
export function getMonthlyActivityData(data) {
  let monthlyActivityData = [];

  let preFiltered = preFilterData(data);
  let filtered = preFiltered.filter(function(el){
    return el.vraag=="phe.dagelijks.welke.activiteiten.gedaan";
  })

  Object.keys(activities).forEach(function(activity){ 
    let barData = {}
    barData["key"] = getActivityTranslation(activities[activity]);
    let activityData = filtered.filter(function(el){
      return el.antwoord==activity;
    })
    barData["sum"] = activityData.length;
    monthlyActivityData.push(barData);
  })

  return monthlyActivityData;

}