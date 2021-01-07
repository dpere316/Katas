// My Solution 

function findOdd(A) {
  
    let hashmap = {}
  
    for(let i = 0; i < A.length;i++)
    {
      hashmap[A[i]] = hashmap[A[i]] ? hashmap[A[i]] + 1 : 1
      
  
    }
    for (const [key, value] of Object.entries(hashmap)) 
    {
    if(value % 2 !== 0)
    
      return Number(key)
    }
    
  }
  
  console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5 ]))

//   Other Solution 
function findOdd(arr) {
    var result, num = 0;
  
    arr = arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i+1]) {
        num++;
      } else {
        num++;
        if (num % 2 != 0) {
          result = arr[i];
          break;
        }
      }
    }
    return result;
  }

// https://www.codewars.com/kata/54da5a58ea159efa38000836/javascript

//   Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.