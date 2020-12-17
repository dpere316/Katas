function almostSorted(arr) {

    // deep copy arr in increasing ascending order
    
    let sortedArr = arr.slice(0).sort((a,b)=> a-b) 
    
    if(sortedArr.toString() === arr.toString())
    {
      console.log('yes')
      return
    }
    
    // If arr can be sorted
    
    let l; // index of left 
    let r; // index of right
    
    // left index
    for(let i=0; i < arr.length; i++)
    {
      if(arr[i] > arr[i+1])
      {
        l = i
        break
      }
    
    } 
    
    // right index
    for(let i = arr.length -1; i >= 0 ; i--)
    {
      if(arr[i] < arr[i-1])
      {
        r = i 
        break
      }
    
    } 
    
    // check for swap
    let tempArr = [...arr]
    
    tempArr[l] = arr[r]
    tempArr[r] = arr[l]
    
    if(tempArr.toString() == sortedArr.toString())
    {
      console.log('yes')
      console.log(`swap ${l+1} ${r+1}`)
      return
    }
    
    tempArr = [...arr]
    
    // check for  reverse 
    tempArr = arr.slice(0,l).concat(arr.slice(l,r+1).reverse().concat(arr.slice(r+1,arr.length)))
    if(tempArr.toString() == sortedArr.toString())
    {
      console.log('yes')
      console.log(`reverse ${l+1} ${r+1}`)
      return
    }
    
    // can not be sorted 
    console.log('no')
    
    }
    
    console.log(almostSorted([3,1,2]))

// https://www.hackerrank.com/challenges/almost-sorted/problem

// Given an array of integers, determine whether the array can be sorted in ascending order using only one of the following operations one time.

// Swap two elements.
// Reverse one sub-segment.
