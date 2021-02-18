var countConsistentStrings = function(allowed, words) {

    // This regex is used to check if it contains specfic characters
    
    let pattern = allowed.split('').join('|')
    let re = new RegExp(`^[${pattern}]*$`, 'g');

    let count = 0

    for(let i = 0; i < words.length; i++)
    {
      if(words[i].match(re))
      {
        count++
      }
    }
    return count
};

// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain   characters 'a' and 'b'.