/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
   if (new Set(sentence).size === 26){
    return true;
   } return false
};