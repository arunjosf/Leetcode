/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
  const range = Array.from({length: n}, (_, i) => i + 1)  
  const divisible = range.filter(v => v % 3 === 0 || v % 5 === 0 || v % 7 === 0)
  if(divisible.length > 0){
  const sum = divisible.reduce((acc, crr) => acc + crr)
  return sum
  }
return 0
};