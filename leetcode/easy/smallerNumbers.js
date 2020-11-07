// Solution 1

var smallerNumbersThanCurrent = function(nums) {
    var ans=[]; //declare a new array

    var i=0;

    var count=0;

    for(i=0;i<nums.length;i++){

        for(var j=0;j<nums.length;j++)
        {
            if(nums[i]>nums[j]) //compare to count
                count++;
        }
        ans.push(count); //insert the value & make count Zero...
        
        count=0;
    }
    return ans;
};


// Solution 2

// Explain : Sorting an array the index number will represent the position but it also tells you have many numbers are smaller than it if the array is sorted. 

// For Example [8,8,1,2,2,3] => Sorted => [4, 5, 6, 8, 8 ] 
// Answer => [0,1,2,3,3]

var smallerNumbersThanCurrent = function(nums) {

    const sortedNums = Array.from(nums).sort((a, b) => a - b);

    let res = nums.map(x => sortedNums.indexOf(x));

        return res
};

// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/


// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.