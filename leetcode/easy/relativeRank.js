var findRelativeRanks = function(nums) {
  
  let sortArray = nums.slice()
  sortArray.sort((a,b) => (b-a))
 let result = []

 for(let i = 0; i < nums.length; i++) {

     const j = sortArray.indexOf(nums[i])

     if(j === 0){
         result.push("Gold Medal")
     } else if(j === 1) {
         result.push("Silver Medal")
     } else if(j === 2) {
         result.push("Bronze Medal")
     } else {
         result.push((j + 1).toString())
     }
 }

 return result
  };
  
  console.log(findRelativeRanks([5,4,3,2,1,6,7,8]))

  // https://leetcode.com/problems/relative-ranks/