/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let alicedoub = nums.filter( n => n >= 10 && n <= 99)
    let alicedoubsum = alicedoub.reduce((acc, crr) => acc + crr, 0)

    let bobrestdoub = nums.filter(n => n < 10)
    let bobdoubsum = bobrestdoub.reduce((acc, crr) => acc + crr, 0)

    let alicesingle = nums.filter(n => n < 10)
    let alicesinglesum = alicesingle.reduce((acc, crr) => acc + crr, 0)

    let bobrestsingle = nums.filter(n => n >= 10 && n <= 99)
    let bobsinglesum = bobrestsingle.reduce((acc, crr) => acc + crr, 0)


    if(alicedoubsum > bobdoubsum || alicesinglesum > bobsinglesum ){
        return true
    }
    return false
    
};