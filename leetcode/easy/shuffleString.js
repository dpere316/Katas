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