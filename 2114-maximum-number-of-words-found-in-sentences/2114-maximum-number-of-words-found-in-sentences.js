/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let longword = 0;
    for (let value of sentences ){
         let words = value.split(" ").length;
         longword = Math.max(longword, words)
    }

    return longword

};