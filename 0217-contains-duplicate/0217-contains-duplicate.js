/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let newarr = new Set(nums);
    return newarr.size !== nums.length;
};