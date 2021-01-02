var rotateString = function(A, B) {

    let a = A.split('')
    
     for(let i = 0; i < B.length;i++)
        {
            if(a.join('') !== B)

                {
                  let temp = a.shift()
                  a.push(temp)
                  
                }

        }
        
      return a.join('') === B ? true  : false
     
};

console.log(rotateString('abcde','cdeab'))

// https://leetcode.com/problems/rotate-string/

// We are given two strings, A and B.

// A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

// Iteration 0 [ 'a', 'b', 'c', 'd', 'e' ] !== B
// Iteration 1 [ 'b', 'c', 'd', 'e', 'a' ] !== B 
// Iteration 2 [ 'c', 'd', 'e', 'a', 'b' ] === B 