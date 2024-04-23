/**
 * A utility class for working with strings.
 * @class StringsUtils
 */
class stringUtils {
  /**
   * @param {string} string
   * @returns {string}
   */

  //Remove non-word chars.
  static removeNonWord(string) {
    return string.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, "");
  }
}

/* This code block is a common pattern used in Node.js environments to export modules for use in other
files. */
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = {
    stringUtils,
  };
}
