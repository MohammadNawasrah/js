class DateUtils {
    // Convert Date to String
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

    // Convert String to Date
    static stringToDate(dateString) {
        return new Date(dateString);
    }

    // Format Date
    static formatDate(date, format = "YYYY-MM-DD") {
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        };
        const formatter = new Intl.DateTimeFormat('en', options);
        return formatter.format(date);
    }

    // Get current date
    static getNow() {
        return new Date();
    }

    // Get month from Date
    static getMonthFromDate(date) {
        const options = {
            month: 'long'
        };
        const formatter = new Intl.DateTimeFormat('en', options);
        return formatter.format(date);
    }

    // Compare two date strings
    static compareDateStrings(dateString1, dateString2) {
        const date1 = new Date(dateString1);
        const date2 = new Date(dateString2);
        return date1.getTime() === date2.getTime();
    }

    // Compare two dates
    static compareDates(date1, date2) {
        return date1.getTime() === date2.getTime();
    }

    // Get hours from Date
    static getHoursFromDate(date) {
        return date.getHours();
    }

    // Get minutes from Date
    static getMinutesFromDate(date) {
        return date.getMinutes();
    }

    // Get seconds from Date
    static getSecondsFromDate(date) {
        return date.getSeconds();
    }

    // Get time from Date
    static getTimeFromDate(date) {
        return date.getTime();
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        DateUtils
    };
}