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

export function getDistanceData(data) {
    let days = getWeekdaysTranslation();
    let distances = [];
    let distancesByDay = [];
    console.log("FIT DATA:")
    console.log(data);
    data.fitData.forEach(day => {
        const date = new Date(day.datum);
        const dateNumber = date.getDay()-1 < 0 ? 6 : date.getDay()-1;
        distances.push(day.distance);
        distancesByDay.push({x: days[dateNumber], y: day.distance})
    })
    return {
        id: "distance",
        measure: "Distance",
        color: "--idewe-blue",
        min: 0,
        max: Math.max.apply(Math, distances),
        data: distancesByDay
    }
}

export function convertToChartData(data) {
    let newData = [];
    Object.keys(data).forEach(function(key) {
        newData.push({"hour": key, "steps": data[key]})
    })
    return newData;
}