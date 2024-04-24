/**
 * @author Mohammad Ayman Nawasrah
 * A utility class for working with dates.
 * @class DateTimeUtils
 */
class DateTimeUtils {
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

    /**
     * @author Mohammad Ayman Nawasrah 
     * Convert time from 24-hour format to 12-hour format.
     * @param {string} time24 - The time in 24-hour format (HH:mm:ss).
     * @returns {string} The time in 12-hour format (hh:mm:ss AM/PM).
     */
    static convert24To12(time24) {
        if (!time24.match(/^([01]\d|2[0-3]):?([0-5]\d)(:?([0-5]\d))?$/)) {
            throw new Error("Invalid 24-hour time format");
        }
        const [hours, minutes, seconds] = time24.split(":");
        let period = "AM";
        let hours12 = parseInt(hours, 10);
        if (hours12 >= 12) {
            period = "PM";
            if (hours12 > 12) {
                hours12 -= 12;
            }
        }
        if (hours12 === 0) {
            hours12 = 12;
        }
        return `${hours12}:${minutes}:${seconds || "00"} ${period}`;
    }

    /**
     * @author Mohammad Ayman Nawasrah 
     * Convert time from 12-hour format to 24-hour format.
     * @param {string} time12 - The time in 12-hour format (hh:mm:ss AM/PM).
     * @returns {string} The time in 24-hour format (HH:mm:ss).
     */
    static convert12To24(time12) {
        if (!time12.match(/^((0?[1-9]|1[0-2]):([0-5]\d):([0-5]\d) ?([AP]M))$/i)) {
            throw new Error("Invalid 12-hour time format");
        }
        const [, hours, minutes, seconds, period] = time12.match(/(0?[1-9]|1[0-2]):([0-5]\d):([0-5]\d) ?([AP]M)/i);
        let hours24 = parseInt(hours, 10);
        if (period.toUpperCase() === "PM" && hours24 < 12) {
            hours24 += 12;
        } else if (period.toUpperCase() === "AM" && hours24 === 12) {
            hours24 = 0;
        }
        return `${hours24}:${minutes}:${seconds}`;
    }
    /**
     * @author Mohammad Ayman Nawasrah 
     * Get time as a string from a Date object.
     * @param {Date} date - The Date object.
     * @returns {string} The time string in "HH:mm:ss" format.
     */
    static getTimeStringFromDate(date) {
        if (!(date instanceof Date)) {
            throw new Error("Invalid date parameter");
        }
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    }

    /**
     * Convert the name of the month to its corresponding number.
     * @param {string} monthName - The name of the month.
     * @returns {number} The corresponding month number (1-12).
     */
    static getMonthNumber(monthName) {
        const months = {
            January: 1,
            February: 2,
            March: 3,
            April: 4,
            May: 5,
            June: 6,
            July: 7,
            August: 8,
            September: 9,
            October: 10,
            November: 11,
            December: 12
        };

        const monthNumber = months[monthName];

        if (!monthNumber) {
            throw new Error("Invalid month name");
        }

        return monthNumber;
    }
    /**
     * @author Mohammad Ayman Nawasrah
     * Generate an array of dates between two given dates.
     * @param {Date} startDate - The start date.
     * @param {Date} endDate - The end date.
     * @returns {string[]} An array of date strings between the start and end dates.
     * @throws {Error} If the startDate or endDate is not a valid Date object.
     */
    static getDatesInRange(startDate, endDate) {
        if (!(startDate instanceof Date) || isNaN(startDate.getTime())) {
            throw new Error("Invalid startDate");
        }
        if (!(endDate instanceof Date) || isNaN(endDate.getTime())) {
            throw new Error("Invalid endDate");
        }

        const dates = [];
        let currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            dates.push(new Date(currentDate).toISOString().slice(0, 10));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return dates;
    }

    /**
     * @author Mohammad Ayman Nawasrah
     * Get all dates after a specified number of days from a given date.
     * @param {string} dateStr - The date string in "YYYY-MM-DD" format.
     * @param {number} days - The number of days to get dates after the given date.
     * @returns {string[]} An array of date strings.
     * @throws {Error} If the input is not a valid date string.
     */
    static getDatesAfter(dateStr, days) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
            throw new Error("Invalid date string format. Please use the 'YYYY-MM-DD' format.");
        }

        const dates = [];
        const startDate = new Date(dateStr);

        for (let i = 1; i <= days; i++) {
            const newDate = new Date(startDate);
            newDate.setDate(startDate.getDate() + i);
            dates.push(newDate.toISOString().slice(0, 10));
        }

        return dates;
    }

    /**
     * @author Mohammad Ayman Nawasrah
     * Get all dates before a specified number of days from a given date.
     * @param {string} dateStr - The date string in "YYYY-MM-DD" format.
     * @param {number} days - The number of days to get dates before the given date.
     * @returns {string[]} An array of date strings.
     * @throws {Error} If the input is not a valid date string.
     */
    static getDatesBefore(dateStr, days) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
            throw new Error("Invalid date string format. Please use the 'YYYY-MM-DD' format.");
        }

        const dates = [];
        const startDate = new Date(dateStr);

        for (let i = 1; i <= days; i++) {
            const newDate = new Date(startDate);
            newDate.setDate(startDate.getDate() - i);
            dates.push(newDate.toISOString().slice(0, 10));
        }

        return dates;
    }

    /**
     * @author Mohammad Ayman Nawasrah
     * Get the type of date from the input value.
     * @param {(string|Date)} value - The input value to check.
     * @returns {string} The type of date: "date", "time", "date-time", or "invalid".
     */
    static getDateType(value) {
        if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
            return "date";
        } else if (typeof value === 'string' && /^\d{2}:\d{2}:\d{2}$/.test(value)) {
            return "time";
        } else if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(value)) {
            return "date-time";
        } else if (value instanceof Date && !isNaN(value)) {
            return "date";
        } else {
            return "invalid";
        }
    }

    /**
     * @author Mohammad Ayman Nawasrah
     * Get the format of the date from the input value.
     * @param {(string|Date)} value - The input value to check.
     * @returns {string} The format of the date: "YYYY-MM-DD", "HH:mm:ss", "YYYY-MM-DDTHH:mm:ss", or "Invalid Date".
     */
    static getDateFormat(value) {
        if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
            return "YYYY-MM-DD";
        } else if (typeof value === 'string' && /^\d{2}:\d{2}:\d{2}$/.test(value)) {
            return "HH:mm:ss";
        } else if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(value)) {
            return "YYYY-MM-DDTHH:mm:ss";
        } else if (value instanceof Date && !isNaN(value)) {
            return "YYYY-MM-DD";
        } else {
            return "Invalid Date";
        }
    }
    /**
     * Date format constants.
     * @readonly
     * @enum {string}
     */
    static DATE_FORMAT = {
        YYYY_MM_DD: "YYYY-MM-DD",
        HH_mm_ss: "HH:mm:ss",
        YYYY_MM_DDTHH_mm_ss: "YYYY-MM-DDTHH:mm:ss"
    };

    /**
     * @author Mohammad Ayman Nawasrah
     * Convert a date to the specified format.
     * @param {Date} date - The date object to convert.
     * @param {string} format - The desired format for the date output. 
     *                          Supported formats: "YYYY-MM-DD", "HH:mm:ss", "YYYY-MM-DDTHH:mm:ss".
     * @param {boolean} [asString=false] - Whether to return the formatted date as a string or as a Date object.
     * @returns {(string|Date)} The date in the specified format.
     */
    static convertDateFormat(date, format, asString = false) {
        const options = {};
        if (format === DateTimeUtils.DATE_FORMAT.YYYY_MM_DD) {
            options.year = 'numeric';
            options.month = '2-digit';
            options.day = '2-digit';
        } else if (format === DateTimeUtils.DATE_FORMAT.HH_mm_ss) {
            options.hour = '2-digit';
            options.minute = '2-digit';
            options.second = '2-digit';
        } else if (format === DateTimeUtils.DATE_FORMAT.YYYY_MM_DDTHH_mm_ss) {
            options.year = 'numeric';
            options.month = '2-digit';
            options.day = '2-digit';
            options.hour = '2-digit';
            options.minute = '2-digit';
            options.second = '2-digit';
        } else {
            throw new Error("Invalid date format");
        }
        const formatter = new Intl.DateTimeFormat('en', options);
        const formattedDate = formatter.format(date);
        return asString ? formattedDate : new Date(formattedDate);
    }
    /**
     * @author Mohammad Ayman Nawasrah
     * Get the date part of a given date as a string in the format "YYYY-MM-DD".
     * @param {Date} date - The date object.
     * @returns {string} The date part of the input date in the format "YYYY-MM-DD".
     */
    static getDateOnly(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
}


/* This code block is a common pattern used in Node.js environments to export modules for use in other
files. */
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        DateTimeUtils
    };
}
