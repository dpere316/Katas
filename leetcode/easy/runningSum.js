var runningSum = function(nums) {
    
    let runningSum = []
    let sum = 0
  
    for(let i = 0; i < nums.length; i++)
    {
      sum += nums[i]
    
      runningSum.push(sum)
    }
  
    return runningSum
  };

// https://leetcode.com/problems/running-sum-of-1d-array/

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Solution 2 using Array Map 

var runningSum = function(nums) {
    let sum = 0 
  
    let runningSum = nums.map((total) => {
      sum += total
      
      return sum
    })
    return runningSum
  };


//   [1,2,3,4] =>   Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4] =>
//   Ans: [ 1, 3, 6, 10 ]