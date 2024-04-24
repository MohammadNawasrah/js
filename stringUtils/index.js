/**
 * @class StringsUtils
 */
/* The StringUtils class provides a static method to remove non-word characters from a given string. */
class StringUtils {
/**
 * @author Asma Rasheed
 * The function `removeNonWord` removes all non-alphanumeric characters from a given string.
 * @param string - The `removeNonWord` function takes a string as input and removes any characters that
 * are not alphanumeric, spaces, hyphens, or accented characters. The regular expression
 * `/[^0-9a-zA-Z\xC0-\xFF \-]/g` is used to match any character that
 * @returns The `removeNonWord` function is returning a new string where all characters that are not
 * alphanumeric, spaces, hyphens, or accented characters are removed from the input `string`.
 */
  static removeNonWord(string) {
    return string.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, "");
  }
}


/* The code block `if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = {
    StringUtils,
  };
}` is a common pattern used in Node.js environments to export modules for use in other files. */

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = {
    StringUtils,
  };
}
