// My solution
var reverseWords = function(s) 
{
    let arr = s.split(' ')
    return arr.reverse().join(' ').replace(/\s+/g, ' ').trim()
};

// This solution uses replace and regular expressions (regex)
// \s: matches any whitespace symbol: spaces, tabs, and line breaks
// +: match one or more of the preceding tokens (referencing \s)
// g: the g at the end indicates iterative searching throughout the full string

// Other Solution

var reverseWords = function(s) {

    let arr = s.split(" ").filter(elem => elem !== "");
    return arr.reverse().join(" ");

};


// https://leetcode.com/problems/reverse-words-in-a-string/

// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

