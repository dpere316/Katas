// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:
// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ''       => "Hello, World!" # name is an empty String

function hello(name){
    if(name)
    return `Hello, ${name.charAt(0).toUpperCase() + name.slice(1,name.length).toLowerCase()}!`
    else
      return 'Hello, World!'
  }

  console.log(hello('joHn'))

//   Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

  function greet(name){
    return `Hello, ${name} how are you doing today?`
  }

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

function roundToNext5(n){
  if (n % 5 == 0) {return n}
  while (n % 5 != 0) {
    n++
  }
  return n
}

function maxDiff(list) {
  
  let smallest = Math.min(...list);
  let largest = Math.max(...list); 
  
  if(list.length != 0)
    {
      return largest - smallest;
    }
  else{
    return 0
  }
  
};

function reject(array, predicate) {

  return array.reduce((acc, val) => {
  
  if (!predicate(val)) 
  {
    acc.push(val)
  }
  return acc
}, [])

}

function tripleTrouble(one, two, three){

  let str = ""
  
  for(let i = 0; i < one.length; i++)
  {
    str += one[i] + two[i] + three[i]
  }
  
  return str
 }