// Solution 1 Mine
function count (string) {  

    let arr = string.split('')
    let obj = {}
  
    for(let i = 0; i < arr.length; i++)
    {
      obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
    }
    return obj
  }
  
  console.log(count("aba"))

// Other Solutions
  function count (string) {
    var result = {};
    
    for(let i = 0; i < string.length; i++) {
      if(result.hasOwnProperty(string[i])){
        result[string[i]] += 1;
      } else {
        result[string[i]] = 1;
      }
    }
    
    return result;
  }

  function count (string) {

    const result = {};

    for (const ch of string) 
    {
      result[ch] = result[ch] + 1 || 1;
    }
    return result;
    
  }

// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.