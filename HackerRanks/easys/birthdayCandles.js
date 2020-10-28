function birthdayCakeCandles(ar) {
    let largest = Math.max(...ar);
  
    let count = ar.filter((num) => num === largest);
  
    return count.length;
  }
  

// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

// Complete the birthdayCakeCandles function below.
// It must return an integer representing the number of candles she can blow out.
// birthdayCakeCandles has the following parameter(s):
// ar: an array of integers representing candle heights
// ex: [3,2,1,3] largest equal 3 she can blow out 2