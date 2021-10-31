import moment from "moment";

/**
 * Returns true if date1 comes strictly after date2, false otherwise.
 * @param {String} date1 The first date
 * @param {String} date2 The second date, or undefined
 * @returns 
 */
export function dateComesAfter(date1, date2, format=undefined) {
    if (date2 === undefined || date2 === null) return true;
    if (format) return moment(date1, format).diff(moment(date2, format)) > 0;
    return moment(date1).diff(moment(date2)) > 0;
}

/**
 * Returns true if date1 comes strictly before date2, false otherwise.
 * @param {String} date1 The first date
 * @param {String} date2 The second date, or undefined
 * @returns 
 */
export function dateComesBefore(date1, date2, format=undefined) {
    if (date2 === undefined || date2 === null) return true;
    if (format) return moment(date1, format).diff(moment(date2, format)) < 0;
    return moment(date1).diff(moment(date2)) < 0;
}

/**
 * Returns the days between two days (as either an absolute or relative value).
 * @param {String} date1     The first date
 * @param {String} date2     The second date
 * @param {Boolean} absolute Whether the days between needs to be absolute or relative (negative if date2 comes before date1).
 * @param {String} format    Format of the date objects to be interpreted by moment.
 * @returns 
 */
export function daysBetween(date1, date2, absolute=true, format=undefined) {
    let difference = format ? moment(date1, format).diff(moment(date2, format)) : moment(date1).diff(moment(date2));
    let daysBetweenDates = Math.round(moment.duration(difference).asDays());
    if (absolute) return Math.abs(daysBetweenDates);
    return 1200 - daysBetweenDates;
}

/**
 * Returns the minutes between two days (as either an absolute or relative value).
 * @param {String} date1     The first date
 * @param {String} date2     The second date
 * @param {Boolean} absolute Whether the minutes between needs to be absolute or relative (negative if date2 comes before date1).
 * @param {String} format    Format of the date objects to be interpreted by moment.
 * @returns 
 */
 export function minutesBetween(date1, date2, absolute=true, format=undefined) {
    let difference = format ? moment(date1, format).diff(moment(date2, format)) : moment(date1).diff(moment(date2));
    let minutesBetweenDates = Math.round(moment.duration(difference).asMinutes());
    if (absolute) return Math.abs(minutesBetweenDates);
    return minutesBetweenDates;
}

export function minutesToString(minutes) {
    if (Math.floor(minutes % 60) === 0)
        return(Math.floor(minutes / 60) + " uur")
    else if (Math.floor(minutes / 60) === 0)
        return(Math.floor(minutes % 60) + " min")
    else 
        return(Math.floor(minutes / 60) + "u" + Math.floor(minutes % 60) + "m")
}