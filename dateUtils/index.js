/**
 * @author Mohammad Ayman Nawasrah
 * A utility class for working with dates.
 * @class DateUtils
 */
class DateUtils {
    /**
     * @author Mohammad Ayman Nawasrah
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
     * @author Mohammad Ayman Nawasrah
     * The function `stringToDate` converts a string representation of a date into a Date object in
     * JavaScript.
     * @param {string} dateString - A string representing a date in a specific format, such as "2022-10-15".
     * @returns {Date} A new Date object created from the input dateString.
     */
    static stringToDate(dateString) {
        return new Date(dateString);
    }

    /**
     * @author Mohammad Ayman Nawasrah
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
     * @author Mohammad Ayman Nawasrah
     * The static getNow() function returns the current date and time.
     * @returns {Date} An instance of the Date object representing the current date and time.
     */
    static getNow() {
        return new Date();
    }

    /**
     * @author Mohammad Ayman Nawasrah
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
     * @author Mohammad Ayman Nawasrah
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
        if (isNaN(date1) || isNaN(date2)) {
            throw new Error("Invalid date string");
        }
        return date1.getTime() === date2.getTime();
    }

    /**
     * @author Mohammad Ayman Nawasrah
     * The `compareDates` function in JavaScript compares two dates based on their time values.
     * @param {Date} date1 - A Date object representing a specific date and time.
     * @param {Date} date2 - A Date object representing a specific date and time.
     * @returns {boolean} A boolean value indicating whether the time values of `date1` and `date2` are equal.
     */
    /**
     * @author Mohammad Ayman Nawasrah
     * The `compareDates` function in JavaScript compares two dates based on their time values.
     * @param {Date} date1 - A Date object representing a specific date and time.
     * @param {Date} date2 - A Date object representing a specific date and time.
     * @returns {boolean} A boolean value indicating whether the time values of `date1` and `date2` are equal.
     */
    static compareDates(date1, date2) {
        if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
            throw new Error("Invalid date parameter");
        }
        return date1.getTime() === date2.getTime();
    }

    /**
     * @author Mohammad Ayman Nawasrah
     * The function `getHoursFromDate` returns the hour component of a given date.
     * @param {Date} date - A Date object representing a specific date and time.
     * @returns {number} The hour component of the input date.
     */
    static getHoursFromDate(date) {
        if (!(date instanceof Date)) {
            throw new Error("Invalid date parameter");
        }
        return date.getHours();
    }

    /**
     * @author Mohammad Ayman Nawasrah
     * The function `getMinutesFromDate` returns the minutes component of a given date.
     * @param {Date} date - A Date object representing a specific date and time.
     * @returns {number} The minutes component of the input date.
     */
    static getMinutesFromDate(date) {
        if (!(date instanceof Date)) {
            throw new Error("Invalid date parameter");
        }
        return date.getMinutes();
    }

    /**
     * @author Mohammad Ayman Nawasrah
     * The function `getSecondsFromDate` returns the seconds component of a given date.
     * @param {Date} date - A Date object representing a specific date and time.
     * @returns {number} The seconds component of the input date.
     */
    static getSecondsFromDate(date) {
        if (!(date instanceof Date)) {
            throw new Error("Invalid date parameter");
        }
        return date.getSeconds();
    }

    /**
     * @author Mohammad Ayman Nawasrah
     * The function `getTimeFromDate` returns the timestamp of a given date.
     * @param {Date} date - A Date object representing a specific date and time.
     * @returns {number} The number of milliseconds since January 1, 1970, 00:00:00 UTC.
     */
    static getTimeFromDate(date) {
        if (!(date instanceof Date)) {
            throw new Error("Invalid date parameter");
        }
        return date.getTime();
    }

    /**
     * @author Mohammad Ayman Nawasrah
    * Check if a given value is a valid Date object.
    * @param {*} value - The value to check.
    * @returns {boolean} Returns true if the value is a valid Date object, otherwise false.
    */
    static isDate(value) {
        return value instanceof Date && !isNaN(value);
    }
    /**
     * @author Mohammad Ayman Nawasrah
 * Check if a given value is a valid Date object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is a valid Date object, otherwise false.
 */
    static isDate(value) {
        return value instanceof Date && !isNaN(value);
    }

    /**
     * @author Mohammad Ayman Nawasrah
     * Check if a given value is a valid time string in the format "HH:mm:ss".
     * @param {Date} value - The value to check.
     * @returns {boolean} Returns true if the value is a valid time, otherwise false.
     */
    static isTime(value) {
        if (!(value instanceof Date)) {
            throw new Error("Invalid date parameter");
        }
        const hours = value.getHours();
        const minutes = value.getMinutes();
        const seconds = value.getSeconds();
        return (
            Number.isInteger(hours) && hours >= 0 && hours < 24 &&
            Number.isInteger(minutes) && minutes >= 0 && minutes < 60 &&
            Number.isInteger(seconds) && seconds >= 0 && seconds < 60
        );
    }

    /**
     * @author Mohammad Ayman Nawasrah
     * Check if a given value is a valid date-time string in the format "YYYY-MM-DDTHH:mm:ss".
     * @param {Date} value - The value to check.
     * @returns {boolean} Returns true if the value is a valid date-time, otherwise false.
     */
    static isDateTime(value) {
        if (!(value instanceof Date)) {
            throw new Error("Invalid date parameter");
        }
        return !isNaN(value);
    }

    /**
     * @author Mohammad Ayman Nawasrah
     * Check if a given value is a valid date string in the format "YYYY-MM-DD".
     * @param {Date} value - The value to check.
     * @returns {boolean} Returns true if the value is a valid date, otherwise false.
     */
    static isDateOnly(value) {
        if (!(value instanceof Date)) {
            throw new Error("Invalid date parameter");
        }
        return value.toISOString().slice(0, 10) === value.toISOString().slice(0, 10);
    }

    /**
     * @author Mohammad Ayman Nawasrah
     * Get the name of the month in English from the month number (1 for January, 2 for February, etc.).
     * @param {number} monthNumber - The month number (1-12).
     * @returns {string} The name of the month in English.
    */
    static getMonthName(monthNumber) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        if (monthNumber < 1 || monthNumber > 12 || !Number.isInteger(monthNumber)) {
            throw new Error("Invalid month number");
        }
        return months[monthNumber - 1];
    }
    /**
     * @author Mohammad Ayman Nawasrah
     * Get the name of the day in English from the day number (0 for Sunday, 1 for Monday, etc.).
     * @param {number} dayNumber - The day number (0-6).
     * @returns {string} The name of the day in English.
     */
    static getDayName(dayNumber) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        if (dayNumber < 0 || dayNumber > 6 || !Number.isInteger(dayNumber)) {
            throw new Error("Invalid day number");
        }
        return days[dayNumber];
    }

    /**
     * @author Mohammad Ayman Nawasrah 
     * Check if a value is a valid timestamp.
     * @param {*} value - The value to check.
     * @returns {boolean} Returns true if the value is a valid timestamp, otherwise false.
     */
    static isTimestamp(value) {
        return Number.isInteger(value) && value >= 0 && value <= 8640000000000000; // Maximum valid timestamp value
    }
    /**
     * @author Mohammad Ayman Nawasrah 
     * Convert a timestamp to a Date object representing the corresponding date and time.
     * @param {number} timestamp - The timestamp to convert.
     * @returns {Date} A Date object representing the corresponding date and time.
     */
    static timestampToDateTime(timestamp) {
        return new Date(timestamp);
    }
}


/* This code block is a common pattern used in Node.js environments to export modules for use in other
files. */
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        DateUtils
    };
}
