var shuffle = function(nums, n) {
    
    let x = nums.slice(0, nums.length - n )
    let y = nums.slice(n, nums.length )
    
    let shuffled = []
  
    for(let i = 0; i < n; i++)
    {
      shuffled.push(x[i])
      shuffled.push(y[i])
    }
      
    return shuffled
      
  };

// https://leetcode.com/problems/shuffle-the-array/

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Example

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

// Psuedo Code
// Split the array into n times an X and Y
// Loop through both separate arrays returning an X,Y pair