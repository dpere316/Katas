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