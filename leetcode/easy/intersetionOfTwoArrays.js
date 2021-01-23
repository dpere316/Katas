var intersection = function(nums1, nums2) 
{

    let unique1 = new Set(nums1) // removes any duplicates
    let unique2 = new Set(nums2) // removes any duplicates
    
    let intersection = new Set([...unique1].filter(x => unique2.has(x))) // Check if there is an intersection
    
    return [...intersection] // using spread to convert Set into an Array
    
    };

var intersection = function(nums1, nums2) {
    const numSet = new Set();
    for(item of nums1){
        if(nums2.includes(item)) numSet.add(item);
    }
    return Array.from(numSet);
};

// https://leetcode.com/problems/intersection-of-two-arrays/


// Given two arrays, write a function to compute their intersection.

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]