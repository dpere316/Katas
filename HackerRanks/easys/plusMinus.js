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

// https://www.hackerrank.com/challenges/plus-minus/problem
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.