function getCount(str) {
  
    let vowelsCount = 0;
    
    let arr = str.split('')
  
    console.log(arr)
  
    for(let i = 0; i<arr.length; i++)
      {
        if(arr[i] === 'a')
          {
            vowelsCount++
          }
           if(arr[i] === 'e')
          {
            vowelsCount++
          }
           if(arr[i] === 'i')
          {
            vowelsCount++
          }
           if(arr[i] === 'o')
          {
            vowelsCount++
          }
           if(arr[i] === 'u')
          {
            vowelsCount++
          }
      }
    
    return vowelsCount;
  }

// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.