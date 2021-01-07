var canBeEqual = function(target, arr) {

    target.sort()
    arr.sort()
  
    if(target.length !== arr.length)
    {
      return false
    }
    if(arr.toString() == target.toString())
    {
      return true
    }
    if(arr.toString() !== target.toString())
    {
      return false
    }
    
    return true
  };

//   https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/

// Given two integer arrays of equal length target and arr.

// In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps.

// Return True if you can make arr equal to target, or False otherwise.

 