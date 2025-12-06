/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = nums.filter((v) => nums.indexOf(v) === nums.lastIndexOf(v))
    return Number(res)
};