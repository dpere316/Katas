function toCamelCase(str){

    let regex = /\-|\_/g
    let arr = str.split(regex)
    
    for(let i = 1; i <arr.length; i++)
    {
      
      arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1)
      
      
    }
    return arr.join('')
}
console.log(toCamelCase("the_stealth_warrior")) // theStealthWarrior

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// https://www.codewars.com/kata/517abf86da9663f1d2000003/javascript