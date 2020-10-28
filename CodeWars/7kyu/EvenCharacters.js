function evenChars(string) {
    let arr = string.split('')
    // console.log(arr.length)
    if(arr.length < 2 || arr.length > 100)
    {
      return 'invalid string'
    }
    return arr.filter((char,index) => {
      return index % 2 
    }) 
    
    }

    // https://www.codewars.com/kata/566044325f8fddc1c000002c

    // Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

    // "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
    // "a"             --> "invalid string"