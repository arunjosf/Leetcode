/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let arr = x.toString().split("").map(Number)
    let sum = arr.reduce((acc, crr) => acc + crr, 0)
    if(x % sum === 0){
        return sum
    }
    return -1
};