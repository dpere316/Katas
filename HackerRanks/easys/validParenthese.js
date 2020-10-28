var isValid = function(s) {
  
    let map = new Map([['(',')'],['{','}'],['[',']']]);
    let b=[];
  
  for(let i=0;i<s.length;i++){
     if(map.has(s.charAt(i))){
         b.push(s.charAt(i));
     }
     else{
         let pop=b.pop();
         if(map.get(pop)!==s.charAt(i)){
             return false;
         }
     }
  }
  return b.length===0;
    
  };;
  
  console.log(isValid('(])'))

//   https://leetcode.com/problems/valid-parentheses/

//   Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
