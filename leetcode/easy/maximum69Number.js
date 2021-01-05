var maximum69Number  = function(num) {
    
    let arr = num.toString().split('')
    let empty = []
    
    for(let i = 0; i < arr.length; i++)
    {

      if(arr[i] == 9)
      {
        arr[i] = 6
        arr.join()
        empty.push(Number(arr.join('')))
     
      }
      else
      {
        arr[i] = 9
        arr.join()
        empty.push(Number(arr.join('')))
        
      }
        
      arr = num.toString().split('')
    }
    return num > Math.max(...empty) ? num : Math.max(...empty)
    
};

// https://leetcode.com/problems/maximum-69-number/

// Given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

// Input: num = 9669
// Output: 9969
// Explanation: 
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666. 
// The maximum number is 9969.