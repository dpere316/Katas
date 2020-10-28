function aVeryBigSum(ar) {
    return ar.reduce((acc, val) => {
      return acc + val;
    });
  }
  
  console.log(
    aVeryBigSum([5, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
  );

// https://www.hackerrank.com/challenges/a-very-big-sum/problem

// In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.