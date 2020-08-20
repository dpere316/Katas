// Given an array of integers, find the sum of its elements.
// For example, if the array  [1 2 3 4 10 11], , so return 31.

function simpleArraySum(ar) {
  return ar.reduce((acc, val) => {
    return acc + val;
  });
}
console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].
// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// return [alicePoints, bobPoints]

function compareTriplets(a, b) {
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      count1 += 1;
    }
    if (a[i] < b[i]) {
      count2 += 1;
    }
  }

  return [count1, count2];
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));

// return the sum of all elements in an array
function aVeryBigSum(ar) {
  return ar.reduce((acc, val) => {
    return acc + val;
  });
}

console.log(
  aVeryBigSum([5, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
);

// return the proportion of pos,neg, and zeros in an array with a percision 6 decimal places.
function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos += 1;
    }
    if (arr[i] < 0) {
      neg += 1;
    }
    if (arr[i] === 0) {
      zero += 1;
    }
  }
  return (
    (pos / arr.length).toFixed(6) +
    "\n" +
    (neg / arr.length).toFixed(6) +
    "\n" +
    (zero / arr.length).toFixed(6)
  );
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));

// Find the minimum and maximum sum of Array
// arr = [1,3,5,7,9]
// Ex: The minimum sum is 1 + 3 + 5+ 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24
function miniMaxSum(arr) {
  let large = Math.max(...arr);
  let smallest = Math.min(...arr);

  let sum = arr.reduce((acc, val) => {
    return acc + val;
  });

  console.log(`${sum - large} ${sum - smallest}`);
}

// alternative with a helper function

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

// Complete the birthdayCakeCandles function below.
// It must return an integer representing the number of candles she can blow out.
// birthdayCakeCandles has the following parameter(s):
// ar: an array of integers representing candle heights
// ex: [3,2,1,3] largest equal 3 she can blow out 2

function birthdayCakeCandles(ar) {
  let largest = Math.max(...ar);

  let count = ar.filter((num) => num === largest);

  return count.length;
}

// Write a function that returns a pair of numbers that sum up to the target sum
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

// Complete the divisibleSumPairs function below.
// n: the integer length of array
// k: the integer to divide the pair sum by
// ar: an array of integers
// return the number of pairs that are evenly divisble by K

function divisibleSumPairs(n, k, ar) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        count++;
      }
    }
  }
  return count;
}

// Given two arrays, write a function to compute their intersection.
var intersection = function (nums1, nums2) {
  let arr = nums1.filter((value) => nums2.includes(value));
  return [...new Set(arr)];
};

//  Similar Solution
var intersection = function (nums1, nums2) {
  return nums1
    .filter((ele) => nums2.includes(ele)) // First find the subset of num1 & num2 (with duplicate)
    .filter((ele, index, arr) => arr.indexOf(ele) === index); // Then deduplicate the subset by only keeping the first element appears
};

//Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

// Example:

// Input: 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

var isHappy = function (n) {
  let happy = false;

  while (n !== 1) {
    let nums = n
      .toString()
      .split("")
      .map((num) => {
        let total = Math.pow(Number(num), 2);
        return total;
      });

    n = nums.reduce((acc, val) => {
      return acc + val;
    });
    console.log(n);

    happy = true;
  }
  return happy;
};

console.log(isHappy(19));
