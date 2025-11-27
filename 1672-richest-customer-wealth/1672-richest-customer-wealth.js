/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let res = 0
    for(let v of accounts){
       let sum = v.reduce((acc,crr) => acc + crr, 0)
       res = Math.max(res, sum)
    }
    return res
};