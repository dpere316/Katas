var reverseWords = function(s) {
    
    let arr = s.split(' ')
    let reversedWord = []
    
    for(let i = 0; i < arr.length;i++)
    {
      reversedWord.push(arr[i].split('').reverse().join(''))
    }

    return reversedWord.join(' ').toString()
};

// https://leetcode.com/problems/reverse-words-in-a-string-iii/

// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"