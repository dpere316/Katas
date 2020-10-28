

// Given two strings, write a method to decide if one is a permutation of the other

  function permutationString(str1,str2)
{
  if(str1.length !== str2.length)
  {
    return false
  }
  else
  {
    let count = 0
    let arr1 = str1.split('').sort()
    let arr2 = str2.split('').sort()

    for(let i = 0; i < str1.length; i++)
    {
      if(arr1[i] === arr2[i])
      {
        count++
        
      }
    }

    if(count === str1.length)
    {
      return true
    }
  }
  return false

}

function permutationString(str1,str2)
{
   if(str1.length !== str2.length)
  {
    return false
  }
  else{
    
    let arr1 = str1.split('').sort().toString()
    let arr2 = str2.split('').sort().toString()
    return arr1.includes(arr2)

  }
}

console.log(permutationString('god', 'dos'))


// Implement an algorithm to determine if a string has all unique characters.

function unique(str)
{
  let count = 0

  let arr1 = str.split('').sort()

  console.log(arr1)

  for(let i = 0; i < arr1.length; i++)
  {
   if(arr1[i] !== arr1[i+1])
   {
    count++
   } 
   
  }
  return true ? count === arr1.length : false
 
}

function unique(str)
{
  let set1 = new Set(str)

  if(set1.size !== str.length)
  {
    return false
  }
  return true
  
}


console.log(unique('abcd10jk'))

// First, print each vowel in S on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in S .
// Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in S.

function vowelsAndConsonants(s) {

  var newArr = new Array();

  for(var i = 0;i < s.length; i++){

      var char = s.charAt(i);

      if (char =='a' || char =='e'||char =='i'||char =='o'||char =='u')
      {
          console.log(char);
      }
      else{
          
          newArr.push(char);
      } 
  }

  for(var i = 0;i < newArr.length; i++)
  {
    console.log(newArr[i]);
  }
}

console.log(vowelsAndConsonants('javascriptloops'))

