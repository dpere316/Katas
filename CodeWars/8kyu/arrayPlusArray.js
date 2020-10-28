function arrayPlusArray(arr1, arr2) {
  
    let sumArr = arr1.concat(arr2)
    
    let sum = sumArr.reduce((accumulator,currentValue) => 
    {
    
      return accumulator + currentValue
    
    })
    
    return sum
  }
//   https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.