var singleNumber = function(nums) {
 
let obj = {}
let count = 1;
  

  for (let i = 0; i < nums.length; i++) 
  {
  
    let num = nums[i];
    // this is a ternary if statement increasing the count
    // if name(number) exists in your object add 1, else add number with value of 1
    obj[num] = obj[num] ? obj[num] + count : 1;
  
  }
  
  return Object.keys(obj).find(key => obj[key] === 1)
  
  };

//   The Object.keys() method is used to return all the keys of the object. On this array of keys, the find() method is used to test if any of these keys match the value provided. The find() method is used to return the value of the first element that satisfies the testing function. If the value matches, then this condition is satisfied and the respective key is returned. This is the key to the value of the object.

// https://leetcode.com/problems/single-number/
// https://leetcode.com/problems/single-number-ii/

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.




