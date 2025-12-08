/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
   let count = 0
    let f = grid.flat()
    for(let v of f){
        if(v < 0)
        count++
    }
    return count
    
};