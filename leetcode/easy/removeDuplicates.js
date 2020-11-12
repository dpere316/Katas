// Solution 1 My solution

var removeDuplicates = function(nums) {
  
    for(let i = 0; i < nums.length; i++ )
  {
    if(nums[i] === nums[i+1])
    {
      nums.splice(i,1)
        i--
    }
  }
  console.log(nums.length, nums)
};


// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.


// [1,1,2] -> [1,2]

// [0,0,1,1,1,2,2,3,3,4] -> [0,1,2,3,4]

// Solution 2 from online

// Since the array is already sorted, we can keep two pointers i and j, where i is the slow-runner while j is the fast-runner. As long as nums[i] = nums[j], we increment j to skip the duplicate.

// When we encounter nums[j]!== nums[i], the duplicate run has ended
// so we must copy its value to nums[i + 1]. i is then incremented and we repeat the same process again until j reaches the end of array.

var removeDuplicates2 = function(nums) {

    if (nums.length == 0) 
    return 0;
  
      let i = 0;
  
      for (let j = 1; j < nums.length; j++) {
  
          if (nums[j] != nums[i]) 
          {
              i++;
              nums[i] = nums[j];
          }
      }
      return i+1;
      
  };

  