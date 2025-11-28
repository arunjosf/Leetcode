/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let alpha = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversed = alpha.split('').reverse().join('');
    return alpha === reversed;
};
