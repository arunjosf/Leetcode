/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
     let res = []

    for (let v of operations) {

        if (!isNaN(v)) {  
            res.push(Number(v))
        }

        else if (v === "C" || v === "c") {
            res.pop()
        }

        else if (v === "+") {
            let a = res[res.length - 1]
            let b = res[res.length - 2]
            res.push(a + b)
        }

        else if (v === "D" || v === "d") {
            let last = res[res.length - 1]
            res.push(last * 2)
        }
    }

    return res.reduce((acc, crr) => acc + crr, 0)
};