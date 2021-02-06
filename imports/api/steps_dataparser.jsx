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
    const iterData = data.fitData === undefined ? data : data.fitData;
    days.forEach((dayInstance, index) => {
        let found = false;
        iterData.forEach(day => {
            if (!found) {
                const date = new Date(day.datum);
                const dateNumber = date.getDay()-1 < 0 ? 6 : date.getDay()-1;
                if (dateNumber === index) {
                    distances.push(day.distance);
                    distancesByDay.push({x: days[dateNumber], y: day.distance})
                    found = true;
                }
            }
        })
        if (!found) {
            distances.push(0);
            distancesByDay.push({x: dayInstance, y: 0})
        }
    })
    const max_distance = Math.max.apply(Math, distances) < 1 ? 1 : Math.max.apply(Math, distances);
    return {
        id: "distance",
        measure: "Distance",
        color: "--idewe-blue",
        min: 0,
        max: max_distance,
        data: distancesByDay
    }
}

export function getDistanceDataMonthly(data) {
    let currentDate = data[0]!=undefined ? new Date(data[0].datum) : new Date();
    let distances = [];
    let distancesByDay = [];

    const amountOfDays = new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 0).getDate();
    let daysOfMonth = Array.from(Array(amountOfDays+1).keys());
    daysOfMonth.shift();
    const iterData = data.fitData === undefined ? data : data.fitData;
    for (let i = 1; i <= amountOfDays; i++) {
        let found = false;
        iterData.forEach(day => {
            if (!found) {
                const date = new Date(day.datum);
                if (date.getDate() === i) {
                    distances.push(day.distance);
                    distancesByDay[i] = day.distance;
                    found = true;
                }
            }
        })
        if (!found) {
            distances.push(0);
            distancesByDay[i] = 0;
        }
    };
    console.log(distances)
    const max_distance = Math.max.apply(Math, distances) < 1 ? 1 : Math.max.apply(Math, distances);
    return {
        id: "distance",
        measure: "Distance",
        color: "--idewe-blue",
        min: 0,
        max: max_distance,
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