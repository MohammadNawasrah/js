/**
 * @author Mohammad Ayman Nawasrah
 * A utility class for working with string.
 * @class StringUtils
 */
class StringUtils {
    /**
     * @author Mohammad Ayman Nawasrah
     * The function checks if a string is empty by comparing its length to zero.
     * @param string - The `isEmpty` function is a static method that checks if a given string is empty.
     * It returns `true` if the length of the string is 0, indicating that the string does not contain any
     * characters.
     * @returns The `isEmpty` method is returning a boolean value indicating whether the input string is
     * empty or not. If the length of the string is 0, it will return `true`, indicating that the string
     * is empty. Otherwise, it will return `false`.
     */
    static isEmpty(string) {
        return string.length === 0
    }
    /**
     * @author Mohammad Ayman Nawasrah
     * The function `removeWhitespace` removes all whitespace characters from a given string.
     * @param string - The `string` parameter is the input string from which you want to remove all
     * whitespace characters.
     * @returns The `removeWhitespace` method is being returned, which takes a string as input and removes
     * all whitespace characters from it using a regular expression.
     */
    static removeWhitespace(string) {
        return string.replace(/\s/g, "")
    }
}

/* This code block is a common pattern used in Node.js environments to export modules for use in other
files. */
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        StringUtils
    };
}
