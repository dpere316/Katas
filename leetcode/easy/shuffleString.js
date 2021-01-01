// Solution 1
var restoreString = function(s, indices) {
    
    let string = ''
 
   for(let i =0; i < s.length; i++)
   {
     string += s[indices.indexOf(i)]
   
   }
 
   return string
 
     
 };


//  https://leetcode.com/problems/shuffle-string/

//  Given a string s and an integer array indices of the same length.

//  The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
 
//  Return the shuffled string.


// Solution 2

var restoreString = function(s, indices) {

  let word = []


  for(let i = 0; i < indices.length; i++)
  {
  
    word[indices[i]] = s[i]

  } 

return word.join('')


};

console.log(restoreString('codeleet',[4,5,6,7,0,2,1,3]))

// first iteration indices[i] = 4 , so word[4] = s[0] == 'c'  [0,0,0,0,C,0,0,0]
// second iteration indices[i] = 5 , so word[5] = s[1] == 'c' [0,0,0,0,C,O,0,0]
// third iteration indices[i] = 6 , so word[6] = s[2] == 'c'  [0,0,0,0,C,O,D,0]
// fourth iteration indices[i] = 7 , so word[7] = s[3] == 'c' [0,0,0,0,C,O,D,E]
// fifth iteration indices[i] = 0 , so word[0] = s[4] == 'c'  [L,0,0,0,C,O,D,E]
// sixth iteration indices[i] = 2 , so word[2] = s[5] == 'c'  [L,E,0,0,C,O,D,E]
// seventh iteration indices[i] = 1 , so word[1] = s[6] == 'c'[L,E,E,0,C,O,D,E]
// eighth iteration indices[i] = 3 , so word[3] = s[7] == 'c' [L,E,E,T,C,O,D,E]



// This Solution does not work because HashMaps What you want to achieve is not possible as in a map the keys are unique and duplicates are not possible.
// However it allows to have duplicate values.

var restoreString = function(s, indices) {

    let hashMap = {}
  
    for(let i = 0; i < s.length; i ++)
    {
      // key = value
      hashMap[s[i]] = indices[i]
  
    }
    
    console.log(hashMap)
  
    // const sortable = Object.fromEntries(
    //   Object.entries(hashMap).sort(([,a],[,b]) => a-b)
    // );
  
    // return Object.keys(sortable).join('')
    
  };
  
  console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]))
  
  // 4 5 6 7 0 2 1 3
  // C O D E L E E T
  
  // 0 1 2 3 4 5 6 7
  // L E E T C O D E
  
  // 3 1 4 2 0
  // a i o h n
  // 0 1 2 3 4
  
  // 0 1 2 3 4
  // n i h a o