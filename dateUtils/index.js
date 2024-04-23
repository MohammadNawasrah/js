/**
 * A utility class for working with dates.
 * @class DateUtils
 */
class DateUtils {
    /**
     * The function `dateToString` converts a date object to a string with a specified format using
     * Intl.DateTimeFormat.
     * @param {Date} date - The date object that you want to convert to a string in a specific format.
     * @param {string} [format=YYYY-MM-DD] - A string that specifies the format in which the date should
     * be returned. By default, it is set to "YYYY-MM-DD", but you can pass a different format string to
     * customize the output.
     * @returns {string} A formatted string representation of the input date according to the specified
     * format.
     */
    static dateToString(date, format = "YYYY-MM-DD") {
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        const formatter = new Intl.DateTimeFormat('en', options);
        return formatter.format(date);
    }

    /**
     * The function `stringToDate` converts a string representation of a date into a Date object in
     * JavaScript.
     * @param {string} dateString - A string representing a date in a specific format, such as "2022-10-15".
     * @returns {Date} A new Date object created from the input dateString.
     */
    static stringToDate(dateString) {
        return new Date(dateString);
    }

    /**
     * The function `formatDate` takes a date object and an optional format string, and returns the
     * formatted date according to the specified format.
     * @param {Date} date - The date object that you want to format.
     * @param {string} [format=YYYY-MM-DD] - A string that specifies the desired format for the date
     * output. By default, it is set to "YYYY-MM-DD", but you can provide a different format string if
     * needed.
     * @returns {string} The formatted date string based on the format parameter provided. The default
     * format is "YYYY-MM-DD".
     */
    static formatDate(date, format = "YYYY-MM-DD") {
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        };
        const formatter = new Intl.DateTimeFormat('en', options);
        return formatter.format(date);
    }

    /**
     * The static getNow() function returns the current date and time.
     * @returns {Date} An instance of the Date object representing the current date and time.
     */
    static getNow() {
        return new Date();
    }

    /**
     * The function `getMonthFromDate` takes a date as input and returns the full name of the month in
     * English.
     * @param {Date} date - A Date object representing the date for which you want to retrieve the month.
     * @returns {string} The full name of the month from the provided date.
     */
    static getMonthFromDate(date) {
        const options = {
            month: 'long'
        };
        const formatter = new Intl.DateTimeFormat('en', options);
        return formatter.format(date);
    }

    /**
     * The function `compareDateStrings` compares two date strings and returns true if they represent the
     * same date and time.
     * @param {string} dateString1 - A string representing a date in a specific format, such as "2022-10-15".
     * @param {string} dateString2 - A string representing a date that will be converted to a `Date` object.
     * @returns {boolean} A boolean value indicating whether the two input date strings represent the same
     * date and time.
     */
    static compareDateStrings(dateString1, dateString2) {
        const date1 = new Date(dateString1);
        const date2 = new Date(dateString2);
        return date1.getTime() === date2.getTime();
    }

    /**
     * The `compareDates` function in JavaScript compares two dates based on their time values.
     * @param {Date} date1 - A Date object representing a specific date and time.
     * @param {Date} date2 - A Date object representing a specific date and time.
     * @returns {boolean} A boolean value indicating whether the time values of `date1` and `date2` are equal.
     */
    static compareDates(date1, date2) {
        return date1.getTime() === date2.getTime();
    }

    /**
     * The function `getHoursFromDate` returns the hour component of a given date.
     * @param {Date} date - A Date object representing a specific date and time.
     * @returns {number} The hour component of the input date.
     */
    static getHoursFromDate(date) {
        return date.getHours();
    }

    /**
     * The function `getMinutesFromDate` returns the minutes component of a given date.
     * @param {Date} date - A Date object representing a specific date and time.
     * @returns {number} The minutes component of the input date.
     */
    static getMinutesFromDate(date) {
        return date.getMinutes();
    }

    /**
     * The function `getSecondsFromDate` returns the seconds component of a given date.
     * @param {Date} date - A Date object representing a specific date and time.
     * @returns {number} The seconds component of the input date.
     */
    static getSecondsFromDate(date) {
        return date.getSeconds();
    }

    /**
     * The function `getTimeFromDate` returns the timestamp of a given date.
     * @param {Date} date - A Date object representing a specific date and time.
     * @returns {number} The number of milliseconds since January 1, 1970, 00:00:00 UTC.
     */
    static getTimeFromDate(date) {
        return date.getTime();
    }
}

/* This code block is a common pattern used in Node.js environments to export modules for use in other
files. */
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        DateUtils
    };
}
