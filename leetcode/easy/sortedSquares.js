
// Solution 1
var sortedSquares = function(A) {
    
    return A.sort((a,b)=>a+b).map((curr) => {
        return curr * curr
    })
    
};

// Solution 2

var sortedSquares = function(nums) {
    
    let squares = nums.map((x)=>{
        return x*x
    })
    return squares.sort((a,b)=>a-b)
};

console.log(sortedSquares([-4,-1,0,3,10]))

// https://leetcode.com/problems/squares-of-a-sorted-array/

// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]