import moment from "moment";

export default class BuildupScheme {

    constructor({schemeString, goal, unit, measurements, values, scheme}) {
        /* BuildupScheme, generated by BuildupScheme.toString(): { measurements: { 1: 10.1, ... }, goal: 14, unit: "km" , scheme: {week:1, date:"34-2021", goal:14}, ... }, values: {"27-02-2021": 8} */
        if (schemeString) {
            const schemeObject = JSON.parse(schemeString);
            this.measurements = schemeObject.measurements;
            this.goal = schemeObject.goal;
            this.unit = schemeObject.unit;
            this.values = schemeObject.values ? schemeObject.values : {};
            this.startValue = this.measuresComplete() ? this.calculateStartValue(schemeObject.measurements) : undefined;

            if (schemeObject.scheme && Object.keys(schemeObject.scheme).length > 0) this.scheme = schemeObject.scheme;
            /* Generate scheme if 3 measurements are present and no scheme exists */
            else if (this.measuresComplete()) this.scheme = this.updateScheme(); 
            else this.scheme = undefined;
        }
        else {
            this.measurements = measurements;
            this.goal = goal;
            this.unit = unit;
            this.values = values;
            this.startValue = this.measuresComplete() ? this.calculateStartValue(measurements) : undefined;

            if (scheme && Object.keys(scheme).length > 0) this.scheme = scheme;
            /* Generate scheme if 3 measurements are present and no scheme exists */
            else if (!scheme && Object.values(measurements).length === 3) this.scheme = this.updateScheme();
            else this.scheme = undefined;
        }
    }

    calculateStartValue(measurements) {
        return Math.round(Object.values(measurements).reduce((a, b) => a + b) / Object.values(measurements).length * 8 ) / 10;
    }

    updateGoal(newGoal) {
        this.goal = newGoal;
        this.scheme = this.updateScheme();
    }

    isTooMuch() {
        return this.scheme?.length > 12;
    }

    updateMeasurement(id, measure) {
        if (!id) return;
        if (measure === "0") this.measurements[id] = undefined;
        else this.measurements[id] = parseInt(measure);
        this.scheme = this.updateScheme();
    }

    addValue({date=undefined, value}) {
        const valueDate = date ? date : moment(new Date()).format("DD-MM-YYYY");
        this.values[valueDate] = value;
    }

    getValue({day}) {
        const value = this.values[day];
        if (!value) return undefined;
        const goal = this.getGoal(moment(day, "DD-MM-YYYY").format("WW-YYYY"));
        return {value: value, achieved: goal <= value}
    }

    needsMeasurement() {
        if (!this.measurements || !this.measurements[0] || !this.measurements[1] || !this.measurements[2]) return true;
        return false;
    }

    getNextMeasurementIdNeeded() {
        if (!this.measurements || !this.measurements[0]) return 0;
        if (!this.measurements[1]) return 1;
        if (!this.measurements[2]) return 2;
        return undefined;
    }

    toString() {
        return JSON.stringify({
            measurements: this.measurements,
            goal: this.goal,
            unit: this.unit,
            scheme: this.scheme,
            values: this.values
        })
    }

    measuresComplete() {
        if (!this.measurements) return false;
        return Object.values(this.measurements).reduce((acc, val) => acc && val > 0, true);
    }

    updateScheme() {
        if (this.measuresComplete()) this.startValue = this.calculateStartValue(this.measurements);
        else {this.startValue = undefined; return undefined;}
        if (this.startValue > this.goal) return [];
        let value = this.startValue;
        let week = 1;
        let newScheme = [];
        do {
            newScheme.push({week: week.toString(), date: moment().add(week-1, "week").format("W-YYYY"), goal: value})
            value = Math.round(this.startValue * (1 + week / 10)*10)/10;
            week++;
        } while (value <= this.goal);
        if (newScheme.length > 0 && newScheme[newScheme.length-1].goal !== this.goal) 
             newScheme.push({week: week.toString(), date: moment().add(week-1, "week").format("W-YYYY"), goal: this.goal})
        return newScheme;
    }

    delayScheme(isoWeekYear) {
        let newScheme = [];
        const weekNumber = this.scheme.filter(week => week.date === isoWeekYear)[0]?.week;
        this.scheme.forEach(week => {
            /* Copy over all previous weeks */
            if (week.week < weekNumber) newScheme.push(week);
            /* Duplicate week that needs to be delayed */
            if (week.week === weekNumber) {
                newScheme.push(week);
                let newWeek = JSON.parse(JSON.stringify(week));
                newWeek.week += 1;
                newWeek.date = moment(newWeek.date, "W-YYYY").add(1, "week").format("W-YYYY");
                newScheme.push(newWeek);
            }
            /* Copy over and adjust all consecutive weeks */
            if (week.week > weekNumber) {
                let newWeek = JSON.parse(JSON.stringify(week));
                newWeek.week += 1;
                newWeek.date = moment(newWeek.date, "W-YYYY").add(1, "week").format("W-YYYY");
                newScheme.push(newWeek);
            }
        })
        this.scheme = newScheme;
    }

    isDelayable(isoWeekYear) {
        /* Second week of delayment */
        const prevIsoWeekYear = moment(isoWeekYear, "W-YYYY").subtract(1, "week").format("W-YYYY");
        let weeks = this.scheme.filter(week => week.date === isoWeekYear || week.date === prevIsoWeekYear);
        if (weeks.length <= 1) return true;
        if (weeks[0].goal === weeks[1].goal) return false;
        /* First week of delayment */
        const nextIsoWeekYear = moment(isoWeekYear, "W-YYYY").add(1, "week").format("W-YYYY");
        weeks = this.scheme.filter(week => week.date === isoWeekYear || week.date === nextIsoWeekYear);
        if (weeks.length <= 1) return true;
        if (weeks[0].goal === weeks[1].goal) return false;
        return true;
    }

    getGoal(isoWeekYear) {
        if (!isoWeekYear) return undefined;
        if (!this.scheme) return this.goal;
        let weekPos = -1;
        for (const week of this.scheme) {
            if (moment(week.date, "W-YYYY").isSame(moment(isoWeekYear, "W-YYYY"), "week")) return week.goal;
            if (moment(week.date, "W-YYYY").isBefore(moment(isoWeekYear, "W-YYYY"), "week")) weekPos = 1;
        }
        if (weekPos === -1) return this.startValue;
        return this.goal;
    }
}