import i18n from 'meteor/universe:i18n';
import "../../i18n/nl.i18n.json";
import "../../i18n/fr.i18n.json";
import "../../i18n/en.i18n.json";

const T = i18n.createComponent("Common");

//taal instellen
export function setDataParserLocale(locale){
  i18n.setLocale(locale);
}

// Example: {"time":"00:10:11","value":3}
export function aggregateStepsByHour(data) {
    let hourly = {}
    for (let i = 0; i < 24; i++) { hourly[i] = 0; }
    if (data === null) return hourly;
    data.dataset.forEach(minute => {
        let hour = minute.time.split(":")[0];
        if (hour[0] === "0") hour = hour[1];
        hourly[hour] += minute.value;
    })
    return hourly;
}

function getWeekdaysTranslation(){
    let weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    translatedWeekdays = weekdays.map( day =>
      i18n.getTranslation('Common', `myProgress.axes.${day}`))
    return translatedWeekdays;
  }


/**
 * Returns the standard data representation used for the LineGraph of either steps or distances from FitBit-data.
 * @param {JSON} data Array of FitBit-data containing steps and distances per day
 * @param {String} type Either "distance" or "steps"
 */
export function getFitBitDataWeekly(data, type) {
    let days = getWeekdaysTranslation(), result = [], resultByDay = [], iterData = [];

    try {iterData = data.fitData === undefined ? data : data.fitData;}
    catch {console.log("getDistanceData - Empty user data");}
    days.forEach((dayInstance, index) => {
        let found = false;
        iterData.forEach(day => {
            if (!found) {
                const date = new Date(day.datum);
                const dateNumber = date.getDay()-1 < 0 ? 6 : date.getDay()-1;
                if (dateNumber === index) {
                    result.push(day[type]);
                    resultByDay.push({x: days[dateNumber], y: day[type]})
                    found = true;
                }
            }
        })
        if (!found) {
            result.push(0);
            resultByDay.push({x: dayInstance, y: 0})
        }
    })
    const max_value = Math.max.apply(Math, result) < 1 ? 1 : Math.max.apply(Math, result);
    return {
        id: type,
        measure: i18n.getTranslation('Common', `myProgress.parameters.${type}`),
        color: "--idewe-blue",
        min: 0,
        max: max_value,
        data: resultByDay
    }
}

/**
 * Returns the standard data representation used for the CalendarGraph of either steps or distances from FitBit-data.
 * @param {JSON} data Array of FitBit-data containing steps and distances per day
 * @param {String} type Either "distance" or "steps"
 */
export function getFitBitDataMonthly(data, type) {
    let currentDate = new Date();
    try {currentDate = data[0]!=undefined ? new Date(data[0].datum) : new Date();}
    catch {console.log("getDistanceDataMonthly - Empty user data")}
    let results = [], resultsByDay = [], iterData = [];
    const amountOfDays = new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 0).getDate();
    let daysOfMonth = Array.from(Array(amountOfDays+1).keys());
    daysOfMonth.shift();
    try {iterData = data.fitData === undefined ? data : data.fitData;}
    catch {console.log("getDistanceDataMonthly - Empty user data");}
    for (let i = 1; i <= amountOfDays; i++) {
        let found = false;
        iterData.forEach(day => {
            if (!found) {
                const date = new Date(day.datum);
                if (date.getDate() === i) {
                    results.push(day[type]);
                    resultsByDay[i] = day[type];
                    found = true;
                }
            }
        })
        if (!found) {
            results.push(0);
            resultsByDay[i] = 0;
        }
    };
    const max_value = Math.max.apply(Math, results) < 1 ? 1 : Math.max.apply(Math, results);
    return {
        id: "distance",
        measure: i18n.getTranslation('Common', `myProgress.parameters.${type}`),
        color: "--idewe-blue",
        min: 0,
        max: max_value,
        data: resultsByDay
    }
}

export function convertToChartData(data) {
    let newData = [];
    Object.keys(data).forEach(function(key) {
        newData.push({"hour": key, "steps": data[key]})
    })
    return newData;
}