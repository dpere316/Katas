var intersection = function (nums1, nums2) {
    let arr = nums1.filter((value) => nums2.includes(value));
    return [...new Set(arr)];
  };
  
  // Solution 2
  var intersection = function (nums1, nums2) {
    return nums1
      .filter((ele) => nums2.includes(ele)) // First find the subset of num1 & num2 (with duplicate)
      .filter((ele, index, arr) => arr.indexOf(ele) === index); // Then deduplicate the subset by only keeping the first element appears
  };

// https://leetcode.com/problems/intersection-of-two-arrays-ii/

// Given two arrays, write a function to compute their intersection.