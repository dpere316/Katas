var numJewelsInStones = function(jewels, stones) {

    // instanctiate a variable for the regular expression
    let regexp; 
  
    if(jewels.length > 1)
    {
    // Creates a new regexp by splitting the search pattern with |
     regexp = new RegExp(jewels.split('').join('|'), 'g');
    }
    else
    {
      regexp = new RegExp(jewels, 'g');
    }
  
     let matches_array = stones.match(regexp); // finds a match and returns an array of the matching characters
  
     if(matches_array === null)
     {
       return 0
     }
     else
     {
       return matches_array.length
     }
  }; 

 console.log(numJewelsInStones("aA","aAAbbbb"))

// https://leetcode.com/problems/jewels-and-stones/

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3


const numJewelsInStones = (J, S) =>
{ 
  return S.split("").filter( a => J.includes(a)).length
}