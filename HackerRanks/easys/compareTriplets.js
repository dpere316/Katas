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

// https://www.hackerrank.com/challenges/compare-the-triplets/problem

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].
// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// return [alicePoints, bobPoints]