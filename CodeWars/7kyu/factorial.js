const factorial = n => {
    if (n < 1)
    {
      return 1
    }
    
    else
    {
      return n * factorial(n - 1 )  
    };
    
  };
//   https://www.codewars.com/kata/5694cb0ec554589633000036
//   You have to create the function factorial that receives n and returns n!. You have to use recursion.
//   5! = 5 * 4 * 3 * 2 * 1 = 120.

