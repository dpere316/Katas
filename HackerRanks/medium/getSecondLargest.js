// Uses Set to eliminate duplicates
function getSecondLargest(nums) {
    let largest = Math.max(...nums)
     let sorted = new Set(nums.sort((a,b) => a - b))
        for(let num of sorted)
        {
          return largest - 1
        }
 }

 // Uses for loop and Max to compare to largest
 function getSecondLargest(nums) {
    let largest = Math.max(...nums)
    let second;
    let sorted = nums.sort((a,b) => a - b)
       for(let i = 0; i < sorted.length; i++)
       {
         if(sorted[i] !== largest)
         {
           second = Math.max(sorted[i])
         }
       }
       return second
}

//  complete the getSecondLargest function in the editor below. It has one parameter: an array, nums , of n numbers. The function must find and return the second largest number in nums .
 

// https://www.hackerrank.com/challenges/js10-arrays/problem