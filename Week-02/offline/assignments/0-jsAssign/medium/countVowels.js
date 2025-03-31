/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'], count = 0;
    newStr = str.toLowerCase().split("").forEach((str) => {
      if(vowels.includes(str)){
        count++
      }
    })
    return count;
}

module.exports = countVowels;