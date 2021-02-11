var sumOfUnique = function(nums) {
    
  // Key-value pair object 
  let obj = {}
 
  // Loop for counting the number of occurences and adding to object 
  for(let i = 0; i < nums.length; i++)
    {
      obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
    }

   // An array that containes all of the keys with a value === 1
   let res = Object.keys(obj).filter(key => obj[key] === 1);


   if(res.length === 0 )
   {
     return 0
   }
   
   // returns the sum of the keys, casting to Number
   return res.reduce((acc, reduce ) => {
     
     return Number(acc) + Number(reduce)

   }) 

};

// https://leetcode.com/problems/sum-of-unique-elements/

// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
// Return the sum of all the unique elements of nums.

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.



