// Given an array of integers, find the sum of its elements.
// For example, if the array  [1 2 3 4 10 11], , so return 31.

function simpleArraySum(ar) 
{
    return ar.reduce((acc,val)=>{
        return acc + val
    })

}
console.log(simpleArraySum([1,2,3,4,10,11]))

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].
// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// return [alicePoints, bobPoints]

function compareTriplets(a, b) {

    let count1 = 0
    let count2 = 0

   for(let i = 0; i < a.length; i++)
   {
       if(a[i] > b[i])
       {
           count1 += 1
       }
       if(a[i] < b[i])
       {
           count2 += 1
       }
   }

   return [count1,count2]
}


console.log(compareTriplets([17,28,30],[99,16,8]))

// return the sum of all elements in an array
function aVeryBigSum(ar) {
    return ar.reduce((acc,val) => {
        return acc + val
    })

}

console.log(aVeryBigSum([5,1000000001 , 1000000002 ,1000000003 ,1000000004, 1000000005]))

// return the proportion of pos,neg, and zeros in an array with a percision 6 decimal places. 
function plusMinus(arr) {
    let pos = 0
    let neg = 0
    let zero = 0
    
    for(let i = 0; i < arr.length; i++)
    {
      if(arr[i] > 0)
      {
        pos += 1
      }
      if(arr[i] < 0)
      {
        neg += 1
      }
      if(arr[i] === 0){
        zero += 1
      }
    
    }
    return (pos/arr.length).toFixed(6) + '\n' + (neg/arr.length).toFixed(6) + '\n' + (zero/arr.length).toFixed(6)
    }

    console.log(plusMinus([-4,3,-9,0,4,1]))