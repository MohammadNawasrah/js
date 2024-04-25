/**
 * @author Asma Rasheed
 * A utility class for working with string.
 * @class StringUtils
 */
/* The StringUtils class provides static methods for manipulating strings in JavaScript. */
class StringUtils {
  /**
   * @author Asma Rasheed
   * The function checks if a string is empty by comparing its length to zero.
   * @param string - The `isEmpty` function is a static method that checks if a given string is empty.
   * It returns `true` if the length of the string is 0, indicating that the string does not contain any
   * characters.
   * @returns The `isEmpty` method is returning a boolean value indicating whether the input string is
   * empty or not. If the length of the string is 0, it will return `true`, indicating that the string
   * is empty. Otherwise, it will return `false`.
   */
  static isEmpty(string) {
    return string.length === 0;
  }

  /**
   * @author Asma Rasheed
   * The function `isString` checks if a given input is a string in JavaScript.
   * @param str - The parameter `str` in the `isString` function is expected to be a value of any data
   * type. The function checks if the type of the input `str` is a string and returns `true` if it is,
   * otherwise it returns `false`.
   * @returns The `isString` function is returning a boolean value indicating whether the input `str` is
   * a string or not. If `str` is a string, the function will return `true`, otherwise it will return
   * `false`.
   */
  static isString(str) {
    return typeof str === "string";
  }

  /**
   * @author Asma Rasheed
   * The function `removeWhitespace` removes all whitespace characters from a given string.
   * @param string - The `string` parameter is the input string from which you want to remove all
   * whitespace characters.
   * @returns The `removeWhitespace` method is being returned, which takes a string as input and removes
   * all whitespace characters from it using a regular expression.
   */
  static removeWhitespace(string) {
    if (StringUtils.isEmpty(string) === true) {
      return "Empty string";
    } else if (StringUtils.isString(string) === false) {
      return "Value is not a string";
    } else {
      return string.replace(/\s/g, "");
    }
  }

  /**
   * @author Asma Rasheed
   * The function `removeSpaceFromStartAndEnd` removes leading and trailing spaces from a given string.
   * @param str - The `removeSpaceFromStartAndEnd` function takes a string `str` as a parameter and
   * removes any leading and trailing spaces from it using the `trim()` method.
   * @returns The `removeSpaceFromStartAndEnd` function is returning the input string `str` with any
   * leading and trailing spaces removed using the `trim()` method.
   */
  static removeSpaceFromStartAndEnd(str) {
    if (StringUtils.isEmpty(string) === true) {
      return "Empty string";
    } else if (StringUtils.isString(string) === false) {
      return "Value is not a string";
    } else {
      return str.trim();
    }
  }

  /**
   * @author Asma Rasheed
   * The static lowerCase function converts a string to lowercase in JavaScript.
   * @param str - The parameter `str` in the `lowerCase` function is a string that you want to convert to
   * lowercase.
   * @returns The `lowerCase` method is returning the input string `str` converted to lowercase using the
   * `toLowerCase()` method.
   */
  static lowerCase(str) {
    if (StringUtils.isEmpty(string) === true) {
      return "Empty string";
    } else if (StringUtils.isString(string) === false) {
      return "Value is not a string";
    } else {
      return str.toLowerCase();
    }
  }
  /**
   * @author Asma Rasheed
   * The static `upperCase` function converts a given string to uppercase in JavaScript.
   * @param str - The parameter `str` in the `upperCase` function is a string that you want to convert to
   * uppercase letters.
   * @returns The `upperCase` method is returning the input string `str` converted to uppercase using the
   * `toUpperCase` method in JavaScript.
   */
  static upperCase(str) {
    if (StringUtils.isEmpty(string) === true) {
      return "Empty string";
    } else if (StringUtils.isString(string) === false) {
      return "Value is not a string";
    } else {
      return str.toUpperCase();
    }
  }

  /**
   * @author Asma Rasheed
   * The function `convertToString` converts a value to a string in JavaScript.
   * @param value - The `value` parameter in the `convertToString` function is the value that you want
   * to convert to a string.
   * @returns The `convertToString` function is returning the string representation of the `value`
   * parameter by calling the `toString()` method on it.
   */
  static convertToString(value) {
    if (StringUtils.isEmpty(string) === true) {
      return "Empty string";
    } else if (StringUtils.isString(string) === false) {
      return "Value is not a string";
    } else {
      return value.toString();
    }
  }
}

/* This code block is a common pattern used in Node.js environments to export modules for use in other
files. */
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = {
    StringUtils,
  };
}
