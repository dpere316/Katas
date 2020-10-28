function modifiedSum(a, n) {
   
    let arrPower = a.map(num => {
    
      let total =  Math.pow(num,n)
      
      return total
     })
     
      let arrPowerSum = arrPower.reduce((accumulator,currentValue) => 
   {
   
     return accumulator + currentValue
   
   })
     
      let sum = a.reduce((accumulator,currentValue) => 
   {
   
     return accumulator + currentValue
   
   })
     
     return arrPowerSum - sum
   
 }

//  https://www.codewars.com/kata/58aed2cafab8faca1d000e20

// You are provided with array of positive non-zero ints and int n representing n-th power (n >= 2).

// For the given array, calculate the sum of each value to the n-th power. Then subtract the sum of the original array.

// Example 1: Input: {1, 2, 3}, 3 --> (1 ^ 3 + 2 ^ 3 + 3 ^ 3 ) - (1 + 2 + 3) --> 36 - 6 --> Output: 30

// Example 2: Input: {1, 2}, 5 --> (1 ^ 5 + 2 ^ 5) - (1 + 2) --> 33 - 3 --> Output: 30

