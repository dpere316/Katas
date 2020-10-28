function reverseNumber(n) {

    let revNum = n.toString();
  
    if(n >= 0)
    {
      return Number(revNum.split('').reverse().join(''))
    }
    if(n <=0)
    {
      let firstChar = revNum.slice(0,1)
      return revNum = Number(firstChar + revNum.split('').slice(1).reverse().join(''))
      
    }
  }


//   https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5

//   Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.