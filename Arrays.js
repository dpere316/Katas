// Given an array of integers, find the sum of its elements.
// For example, if the array  [1 2 3 4 10 11], , so return 31.

function simpleArraySum(ar) 
{
    return ar.reduce((acc,val)=>{
        return acc + val
    })

}

console.log(simpleArraySum([1,2,3,4,10,11]))