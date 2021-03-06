/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {

  let charHash = {};
  let results = [];
  for (let char of string) {
    char in charHash ? charHash[char]++ : charHash[char] = 1;
  }
  
  for (let letter in charHash) {
    results.push([letter, charHash[letter]]);
  }
  
  results.sort((a,b) => b[1] - a[1]);
  results.sort(function (a, b) {
    if (a[1] === b[1] && a[0] > b[0]) {
        return 1;
    }
  }); 
  return results;
};