# DateUtils

# A utility class for working with dates.

No requirements


const { DateUtils } = require('@your-username/date-utils');

// Example usage of the functions

// Convert Date to String
console.log(DateUtils.dateToString(new Date())); // Output: Current date in the format "YYYY-MM-DD"

// Convert String to Date
console.log(DateUtils.stringToDate('2024-04-23')); // Output: Date object for "2024-04-23"

// Format Date
console.log(DateUtils.formatDate(new Date())); // Output: Formatted date string in the format "YYYY-MM-DD"

// Get current date
console.log(DateUtils.getNow()); // Output: Current date and time

// Get the name of the month
console.log(DateUtils.getMonthFromDate(new Date())); // Output: Full name of the current month

// Compare two date strings
console.log(DateUtils.compareDateStrings('2024-04-23', '2024-04-23')); // Output: true

// Compare two dates
console.log(DateUtils.compareDates(new Date(), new Date())); // Output: true

// Get the hour component of a date
console.log(DateUtils.getHoursFromDate(new Date())); // Output: Current hour

// Get the minutes component of a date
console.log(DateUtils.getMinutesFromDate(new Date())); // Output: Current minutes

// Get the seconds component of a date
console.log(DateUtils.getSecondsFromDate(new Date())); // Output: Current seconds

// Get the timestamp of a date
console.log(DateUtils.getTimeFromDate(new Date())); // Output: Current timestamp

// Check if a value is a valid Date object
console.log(DateUtils.isDate(new Date())); // Output: true

// Check if a value is a valid time string
console.log(DateUtils.isTime(new Date())); // Output: true

// Check if a value is a valid date-time string
console.log(DateUtils.isDateTime(new Date())); // Output: true

// Check if a value is a valid date string
console.log(DateUtils.isDateOnly(new Date())); // Output: true

// Get the name of the month from the month number
console.log(DateUtils.getMonthName(1)); // Output: January

// Get the name of the day from the day number
console.log(DateUtils.getDayName(0)); // Output: Sunday

const timestamp = 1617242400000; // Example timestamp
const dateTime = DateUtils.timestampToDateTime(timestamp);
console.log(dateTime); // Output: Date object representing the corresponding date and time

console.log(DateUtils.isTimestamp(1617242400000)); // Output: true
console.log(DateUtils.isTimestamp('2021-04-01')); // Output: false



API
dateToString(date, format)

Convert a date object to a string with a specified format.

    date: The date object that you want to convert to a string.
    format: A string that specifies the format in which the date should be returned. By default, it is set to "YYYY-MM-DD", but you can pass a different format string to customize the output.
    Returns: A formatted string representation of the input date according to the specified format.

============================================================================================

javascript

console.log(DateUtils.dateToString(new Date())); // Output: Current date in the format "YYYY-MM-DD"

stringToDate(dateString)

Convert a string representation of a date into a Date object.

    dateString: A string representing a date in a specific format, such as "2022-10-15".
    Returns: A new Date object created from the input dateString.

============================================================================================

javascript

console.log(DateUtils.stringToDate('2024-04-23')); // Output: Date object for "2024-04-23"

formatDate(date, format)

Format a date according to the specified format.

    date: The date object that you want to format.
    format: A string that specifies the desired format for the date output. By default, it is set to "YYYY-MM-DD", but you can provide a different format string if needed.
    Returns: The formatted date string based on the format parameter provided. The default format is "YYYY-MM-DD".

============================================================================================

javascript

console.log(DateUtils.formatDate(new Date())); // Output: Formatted date string in the format "YYYY-MM-DD"

getNow()

Get the current date and time.

    Returns: An instance of the Date object representing the current date and time.

============================================================================================

javascript

console.log(DateUtils.getNow()); // Output: Current date and time

getMonthFromDate(date)

Get the full name of the month from the provided date.

    date: A Date object representing the date for which you want to retrieve the month.
    Returns: The full name of the month from the provided date.

============================================================================================

javascript

console.log(DateUtils.getMonthFromDate(new Date())); // Output: Full name of the current month

compareDateStrings(dateString1, dateString2)

Compare two date strings and return true if they represent the same date and time.

    dateString1: A string representing a date in a specific format, such as "2022-10-15".
    dateString2: A string representing a date that will be converted to a Date object.
    Returns: A boolean value indicating whether the two input date strings represent the same date and time.

============================================================================================

javascript

console.log(DateUtils.compareDateStrings('2024-04-23', '2024-04-23')); // Output: true

compareDates(date1, date2)

Compare two dates based on their time values.

    date1: A Date object representing a specific date and time.
    date2: A Date object representing a specific date and time.
    Returns: A boolean value indicating whether the time values of date1 and date2 are equal.

============================================================================================

javascript

console.log(DateUtils.compareDates(new Date(), new Date())); // Output: true

getHoursFromDate(date)

Get the hour component of a given date.

    date: A Date object representing a specific date and time.
    Returns: The hour component of the input date.

============================================================================================

javascript

console.log(DateUtils.getHoursFromDate(new Date())); // Output: Current hour

getMinutesFromDate(date)

Get the minutes component of a given date.

    date: A Date object representing a specific date and time.
    Returns: The minutes component of the input date.

============================================================================================

javascript

console.log(DateUtils.getMinutesFromDate(new Date())); // Output: Current minutes

getSecondsFromDate(date)

Get the seconds component of a given date.

    date: A Date object representing a specific date and time.
    Returns: The seconds component of the input date.

============================================================================================

javascript

console.log(DateUtils.getSecondsFromDate(new Date())); // Output: Current seconds

getTimeFromDate(date)

Get the timestamp of a given date.

    date: A Date object representing a specific date and time.
    Returns: The number of milliseconds since January 1, 1970, 00:00:00 UTC.

============================================================================================

javascript

console.log(DateUtils.getTimeFromDate(new Date())); // Output: Current timestamp

isDate(value)

Check if a given value is a valid Date object.

    value: The value to check.
    Returns: true if the value is a valid Date object, otherwise false.

============================================================================================

javascript

console.log(DateUtils.isDate(new Date())); // Output: true

isTime(value)

Check if a given value is a valid time string in the format "HH:mm:ss".

    value: The value to check.
    Returns: true if the value is a valid time string, otherwise false.

============================================================================================

javascript

console.log(DateUtils.isTime(new Date())); // Output: true

isDateTime(value)

Check if a given value is a valid date-time string in the format "YYYY-MM-DDTHH:mm:ss".

    value: The value to check.
    Returns: true if the value is a valid date-time string, otherwise false.

============================================================================================

javascript

console.log(DateUtils.isDateTime(new Date())); // Output: true

isDateOnly(value)

Check if a given value is a valid date string in the format "YYYY-MM-DD".

    value: The value to check.
    Returns: true if the value is a valid date string, otherwise false.

============================================================================================

javascript

console.log(DateUtils.isDateOnly(new Date())); // Output: true

getMonthName(monthNumber)

Get the name of the month in English from the month number (1 for January, 2 for February, etc.).

    monthNumber: The month number (1-12).
    Returns: The name of the month in English.

============================================================================================

javascript

console.log(DateUtils.getMonthName(1)); // Output: January

getDayName(dayNumber)

Get the name of the day in English from the day number (0 for Sunday, 1 for Monday, etc.).

    dayNumber: The day number (0-6).
    Returns: The name of the day in English.

============================================================================================

javascript

console.log(DateUtils.getDayName(0)); // Output: Sunday

============================================================================================

============================================================================================

javascript

const timestamp = 1617242400000; // Example timestamp
const dateTime = DateUtils.timestampToDateTime(timestamp);
console.log(dateTime); // Output: Date object representing the corresponding date and time

============================================================================================

javascript

console.log(DateUtils.isTimestamp(1617242400000)); // Output: true
console.log(DateUtils.isTimestamp('2021-04-01')); // Output: false

============================================================================================

