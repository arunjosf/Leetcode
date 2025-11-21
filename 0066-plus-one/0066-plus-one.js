/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length -1] = digits[digits.length -1] +1;
    return digits;
};