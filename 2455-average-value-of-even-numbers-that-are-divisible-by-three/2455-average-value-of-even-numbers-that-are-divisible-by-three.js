/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
  let res = nums.filter(s => s % 2 === 0 && s % 3 === 0);
  if(res.length ===0){
    return 0;
  }
  let sum = res.reduce((s,x) => s + x, 0);
  return Math.floor( sum / res.length);
};