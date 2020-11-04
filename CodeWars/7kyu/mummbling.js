function accum(s) {

    s = s.toLowerCase();
  
    let arr = []
  
      for(let i = 0; i < s.length; i++)
    {
      
      arr.push(s.charAt(i).toUpperCase() + s[i].repeat(i))
  
    }
  
    return String(arr.join('-'))
  
  }

  
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

// The parameter of accum is a string which includes only letters from a..z and A..Z.

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"