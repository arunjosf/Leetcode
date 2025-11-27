/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum = nums.reduce((acc, crr) => acc + crr, 0)
    let digit = nums.map(n => n.toString()).join("").split("").map(Number).reduce((acc, crr) => acc +   crr, 0)

    return sum - digit

};