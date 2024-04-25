/**
 * @author Asma Rasheed
 * A utility class for working with string.
 * @class StringUtils
 */
/* The StringUtils class provides static methods for manipulating strings in JavaScript. */
class StringUtils {
  /**
   * @author Asma Rasheed
   * The function isString checks if a given input is a string in JavaScript.
   * @param string - The `string` parameter in the `isString` function is a variable that is being
   * checked to determine if its type is a string. The function will return `true` if the type of the
   * `string` variable is a string, and `false` otherwise.
   * @returns The function `isString` is returning a boolean value indicating whether the input `string`
   * is of type "string" or not.
   */
  static isString(string) {
    return typeof string === "string";
  }

  /**
   * @author Asma Rasheed
   * The function `isEmpty` checks if a given string is empty.
   * @param string - The `string` parameter in the `isEmpty` function is expected to be a string value.
   * The function first checks if the input is a valid string using `StringUtils.isString(string)` and
   * then returns `true` if the string is empty (has a length of 0), otherwise it returns `
   * @returns The `isEmpty` function is returning a boolean value indicating whether the input string is
   * empty or not. If the input string is empty, the function will return `true`, otherwise it will
   * return `false`.
   */
  static isEmpty(string) {
    if (!StringUtils.isString(string)) {
      throw new Error("Value is not a string");
    }
    return string.length === 0;
  }
  /**
   * @author Asma Rasheed
   * The function `removeWhitespace` removes all whitespace characters from a given string.
   * @param string - The `removeWhitespace` method takes a string as input and removes all whitespace
   * characters (such as spaces, tabs, and newlines) from the string. If the input string is empty, it
   * will throw an error with the message "Empty string".
   * @returns The `removeWhitespace` method is returning the input string with all whitespace characters
   * removed.
   */

  static removeWhitespace(string) {
    if (StringUtils.isEmpty(string)) {
      throw new Error("Empty string");
    }
    return string.replace(/\s/g, "");
  }

  /**
   * @author Asma Rasheed
   * The function `removeSpaceFromStartAndEnd` removes leading and trailing spaces from a given string.
   * @param string - The `string` parameter in the `removeSpaceFromStartAndEnd` function is the input
   * string from which you want to remove any leading and trailing spaces.
   * @returns The `removeSpaceFromStartAndEnd` function returns the input string with any leading and
   * trailing spaces removed.
   */
  static removeSpaceFromStartAndEnd(string) {
    if (StringUtils.isEmpty(string)) {
      throw new Error("Empty string");
    }
    return string.trim();
  }

  /**
   * @author Asma Rasheed
   * The function `lowerCase` converts a given string to lowercase, throwing an error if the string is
   * empty.
   * @param string - The `lowerCase` function takes a `string` parameter as input. If the input string
   * is empty, it throws an error with the message "Empty string". Otherwise, it converts the input
   * string to lowercase using the `toLowerCase` method and returns the result.
   * @returns The `lowerCase` function is returning the input string converted to lowercase using the
   * `toLowerCase` method.
   */
  static lowerCase(string) {
    if (StringUtils.isEmpty(string)) {
      throw new Error("Empty string");
    }
    return string.toLowerCase();
  }

  /**
   * @author Asma Rasheed
   * The function `upperCase` takes a string as input and returns the uppercase version of the string,
   * throwing an error if the input string is empty.
   * @param string - The `upperCase` function takes a string as a parameter and converts it to uppercase
   * using the `toUpperCase` method. If the input string is empty, it throws an error with the message
   * "Empty string".
   * @returns The `upperCase` function is returning the input string converted to uppercase using the
   * `toUpperCase` method.
   */
  static upperCase(string) {
    if (StringUtils.isEmpty(string)) {
      throw new Error("Empty string");
    }
    return string.toUpperCase();
  }

  /**
   * @author Asma Rasheed
   * The function `convertToString` converts a value to a string and throws an error if the input is an
   * empty string.
   * @param value - The `value` parameter in the `convertToString` function is the value that you want
   * to convert to a string.
   * @returns The `value` converted to a string is being returned.
   */
  static convertToString(value) {
    if (StringUtils.isEmpty(string)) {
      throw new Error("Empty string");
    }
    return value.toString();
  }

  /**
   * @author Asma Rasheed
   * The function `firstLetterToLower` takes a string as input and returns the same string with the first
   * letter converted to lowercase.
   * @param string - The `firstLetterToLower` function takes a string as a parameter and converts the
   * first letter of the string to lowercase. If the input string is empty, it will throw an error with
   * the message "Empty string".
   * @returns The `firstLetterToLower` function is returning the input string with the first letter
   * converted to lowercase.
   */
  static firstLetterToLower(string) {
    if (StringUtils.isEmpty(string)) {
      throw new Error("Empty string");
    }

    return string[0].toLowerCase() + string.slice(1);
  }

}

/* This code block is a common pattern used in Node.js environments to export modules for use in other
files. */
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = {
    StringUtils,
  };
}
