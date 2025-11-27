/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let prod = nums.reduce((acc, crr) => acc * crr)
    if(prod > 0 ){
        return 1
    }if(prod < 0){
        return -1
    }
    return 0
};