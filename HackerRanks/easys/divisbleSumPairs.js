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

// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

// Complete the divisibleSumPairs function below.
// n: the integer length of array
// k: the integer to divide the pair sum by
// ar: an array of integers
// return the number of pairs that are evenly divisble by K