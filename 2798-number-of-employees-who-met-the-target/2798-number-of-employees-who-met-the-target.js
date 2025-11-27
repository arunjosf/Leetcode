/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let result = 0
    for(let v of hours){
        if(v >= target) result += 1
    }
    return result
};