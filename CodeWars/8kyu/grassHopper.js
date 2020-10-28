function sayHello(name) {
    return `Hello, ${name}`
  }

//   https://www.codewars.com/kata/5625618b1fe21ab49f00001f

//   The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

function main (verb, noun){
    return verb + noun
  }

// https://www.codewars.com/kata/56dae9dc54c0acd29d00109a
//   A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

function greet(name){
    return `Hello, ${name} how are you doing today?`
  }

//   https://www.codewars.com/kata/55a70521798b14d4750000a4

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today ".


function litres(time) {
    let liters = 0.5
    return Math.floor(time*liters)
  }

//   https://www.codewars.com/kata/582cb0224e56e068d800003c

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5


function expressionMatter(a, b, c) {

    let exp1 = (a+b) * c
    let exp2 = a * (b + c)
    let exp3 = a * b * c
    let exp4 = a + b + c
    
    result = Math.max(exp1,exp2,exp3,exp4)
    
    return result
    }


    // https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
    // Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
    // In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained


function tripleTrouble(one, two, three){

  let str = ""
  
  for(let i = 0; i < one.length; i++)
  {
    str += one[i] + two[i] + three[i]
  }
  
  return str
 }


//  https://www.codewars.com/kata/5704aea738428f4d30000914

//  Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"
 


function dutyFree(normPrice, discount, hol)
{
  const toDecimal = 100
  let savings = normPrice * (discount / toDecimal)
  return Math.floor(hol / savings)

}
// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5

// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.

function divide(weight){

    let divisor = 2;
    
    if(weight % divisor == 0 && weight != divisor)
    {
      return true
    }
    else
    {
      return false
    }
  }


//   https://www.codewars.com/kata/55192f4ecd82ff826900089e
//   Given an integral number of watermelons w (1 ≤ w ≤ 100; 1 ≤ w in Haskell), check whether Pete and Billy can divide the melons so that each of them gets an even amount.

function getASCII(c){

    return c.charCodeAt(0)
    
  }

//   https://www.codewars.com/kata/55acfc59c3c23d230f00006d

//   Get ASCII value of a character.


function noBoringZeros(n) {

    let num = n.toString()
    
      while(num.endsWith('0')) // true
      {
       num = num.slice(0,-1)
      }
      return Number(num)
    }

// https://www.codewars.com/kata/570a6a46455d08ff8d001002
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

function xor(a, b) 
{

  if(a == false & b == false || a == true & b == true)
  {
    return false
  }
  else
  {
    return true
  }
  
}
// https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c

twoDigitSum = (a,b) => {
  return a + b
}

console.log(twoDigitSum(1,3))

// Return the sum of two digits.

