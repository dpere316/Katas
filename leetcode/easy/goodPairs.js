var numIdenticalPairs = function(nums) {
    let numOfGoodPairs = 0
    
    for(let i = 0; i<= nums.length+1; i++)
    {
      for(let j = 0; j<= nums.length; j++)
      {
        if(nums[i] === nums[j] && i < j)
        {
          console.log({i,j},nums[i],nums[j])
          numOfGoodPairs++
        }
      }
    }
    return numOfGoodPairs

};

// https://leetcode.com/problems/number-of-good-pairs/

// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.