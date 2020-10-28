function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length; i++) {
      let num1 = array[i];
  
      for (let j = 1; j < array.length; j++) {
        let num2 = array[j];
  
        if (num1 + num2 == targetSum && num1 !== num2) {
          return [num2, num1];
        }
      }
    }
    return [];
  }

// https://leetcode.com/problems/two-sum/
// Write a function that returns a pair of numbers that sum up to the target sum