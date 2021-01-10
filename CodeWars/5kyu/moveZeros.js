// My Solution

var moveZeros = function (arr) {

    let arrN = []
  
    for(let i = 0; i < arr.length; i++)
    {
      if(arr[i] !== 0)
      {
        arrN.push(arr[i])
      }
    }
  
    let diff = arr.length - arrN.length
  
    for(let j = 0; j < diff ; j++)
    {
      arrN.push(0)
    }
  
   return arrN
  
  }
  
console.log(moveZeros([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]))

// Similar Solution

var moveZeros = function (arr) {
    for(var i = arr.length - 1; i >= 0; i--) {
      if(arr[i] === 0) {
        arr.splice(i, 1);
        arr.push(0);
      }
    }
    return arr;
  }


//   https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

//   Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//   Example moveZeros([false,1,0,1,2,0,1,3,"a"]) => returns[false,1,1,2,1,3,"a",0,0]