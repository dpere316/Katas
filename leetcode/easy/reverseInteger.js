var reverse = function(x) {

    const isNegative = x < 0;
    
        x = parseInt(x.toString().split('').reverse().join(''), 10);
        
        if (isNegative)
        {
          x = -x;
        } 
        if (x > Math.pow(2, 31) - 1 || x < -Math.pow(2, 31))
        {
          return 0;
        } 
        return x;
      
    
    };
    
    console.log(reverse(1534236469))

// https://leetcode.com/problems/reverse-integer/

// Given a 32-bit signed integer, reverse digits of an integer.

// Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

