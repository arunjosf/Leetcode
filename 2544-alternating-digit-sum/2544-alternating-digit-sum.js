/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
        let s = n.toString()
    let sp = s.split("")
    let sign = "+"
    let res = []
    for(let v of sp){
        res.push(sign + v)
        if(sign === "+"){
            sign = "-"
        }
        else if(sign === "-"){
            sign = "+"
        }
    }
    let total = res.reduce((acc, curr) => acc + Number(curr), 0)
    return total
};