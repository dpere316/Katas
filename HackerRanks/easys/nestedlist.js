function  nestedList (list)
{
    const obj = Object.fromEntries(list);
    // converts nested array into a objecy of key value pairs
   
    const nums = Object.values(obj)
   
    let lowest = nums.sort((a,b) => a-b)[1]
   
    let ans = []
   
   for (const [key, value] of Object.entries(obj))
   {
       
        if(value === lowest)
        {
            ans.push(key)
        }
   }
     return ans.sort().join('\r\n')
     
}

// https://www.hackerrank.com/challenges/nested-list/problem

console.log(nestedList([['Harry', 37.21], ['Berry', 37.21], ['Tina', 37.2], ['Akriti', 41], ['Harsh', 39]]))