/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
     let prod = n.toString().split("").map(Number).reduce((acc, crr) => acc * crr)
    let digit = n.toString().split("").map(Number).reduce((acc, crr) => acc + crr)
    return prod - digit
};