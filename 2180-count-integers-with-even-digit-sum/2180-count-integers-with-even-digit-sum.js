/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count = 0
    for(let i=1; i <=num; i++){
    if(i > 0 && i < 10 && i % 2 ===0){
        count++
     }else if(i >=10){
       let s = i.toString().split("")
       let sum = s.reduce((acc, crr) => acc + Number(crr), 0)
       if(sum % 2 === 0){
        count++
       }
     }
    }
    return count
};