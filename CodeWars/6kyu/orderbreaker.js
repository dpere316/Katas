function orderBreaker(input) {

  for (let i = 0; i < input.length; i++) 
  {
    console.log(i)
    if (input[i - 1] > input[i + 1]) 
    {
      console.log(input[i-1],input[i+1])
      return input[i + 1]; 
    }
    if (input[i] > input[i + 1]) 
    { 
      console.log(input[i],input[i+1])
      return input[i]; 
      
    }
  }

}

// console.log(orderBreaker([1,2,3,4,0,5,6,7,8])) => 0
// // 1,2,3,4,17,5,6,7,8

// https://www.codewars.com/kata/5fc2a4b9bb2de30012c49609/train/javascript

// In this kata, you have an integer array which was ordered by ascending except one number.

// For Example: [1,2,3,4,17,5,6,7,8]
// For Example: [19,27,33,34,112,578,116,170,800]
// You need to figure out the first breaker. Breaker is the item, when removed from sequence, sequence becomes ordered by ascending.

// For Example: [1,2,3,4,17,5,6,7,8] => 17 is the only breaker.

// For Example: [19,27,33,34,112,578,116,170,800] => 578 is the only breaker.