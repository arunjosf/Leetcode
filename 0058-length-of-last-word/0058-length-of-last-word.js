/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let res = s.trim().split(" ").pop()
    return res.length
};