
// Solution 1

var merge = function(nums1, m, nums2, n) {
    
    for(let i = 0; i < m + n; i++)
     {
          nums1.splice(m,n,...nums2)
     }
     
     return nums1.sort((a,b)=> a-b)
     
 };

//  Solution 2

var merge = function(nums1, m, nums2, n) {

    for(let i=0;i<n;i++)
    {
       nums1[m+i]=nums2[i]; // start at the index m + i => 3 in this case
      
    }
    return nums1.sort((a,b)=> a-b)
};

// https://leetcode.com/problems/merge-sorted-array/

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

// EXAMPLE
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// => nums1=[1,2,2,3,5,6]