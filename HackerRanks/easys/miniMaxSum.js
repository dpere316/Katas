function miniMaxSum(arr) {
    let large = Math.max(...arr);
    let smallest = Math.min(...arr);
  
    let sum = arr.reduce((acc, val) => {
      return acc + val;
    });
  
    console.log(`${sum - large} ${sum - smallest}`);
  }
  
  // Solution 2 - alternative with a helper function
  
  function miniMaxSum(arr) {
    let sortedArray = arr.sort();
  
    let minSum, maxSum;
  
    let addAllNumbers = function (total, num) {
      return total + num;
    };
  
    maxSum = sortedArray.slice(1).reduce(addAllNumbers);
    minSum = sortedArray.slice(0, 4).reduce(addAllNumbers);
  
    console.log(minSum + " " + maxSum);
  }
  

// https://www.hackerrank.com/challenges/mini-max-sum/problem

// Find the minimum and maximum sum of Array
// arr = [1,3,5,7,9]
// Ex: The minimum sum is 1 + 3 + 5+ 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24