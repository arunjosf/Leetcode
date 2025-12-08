/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let res = []
    let sp = s.split(" ")
    for(let i =0; i<k; i++){
     res.push(sp[i])
    }
    let result = res.join(" ")
    return result
};