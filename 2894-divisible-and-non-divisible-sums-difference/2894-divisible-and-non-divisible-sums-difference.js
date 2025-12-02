/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let range = Array.from({length: n}, (_, i) => i + 1)
    let notdiv = range.filter(v => v % m !== 0)
    let notdivsum = notdiv.reduce((acc, crr) => acc + crr, 0)
    let divs = range.filter(v => v % m === 0)
    let divsum = divs.reduce((acc, crr) => acc + crr, 0)
    let diff = notdivsum - divsum
    return diff

};