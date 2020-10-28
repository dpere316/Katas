function capitalize(s){ 

    let evenStr = s.split('')
    let oddStr = s.split('')
    let emptyArr = []
    let secondArr = []
  
    for(let i = 0; i < evenStr.length; i++)
    {
      if(i % 2 == 0)
      {
        emptyArr += evenStr[i].toUpperCase();
        secondArr += oddStr[i];
      }
      else
      {
        emptyArr += evenStr[i]
        secondArr += oddStr[i].toUpperCase();
      }
  
      
    }
    return [emptyArr , secondArr]
  
  };


//   https://www.codewars.com/kata/59cfc000aeb2844d16000075

//   Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.