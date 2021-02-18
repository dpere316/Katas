var findRelativeRanks = function(score) {
  
    let ans = []
  
      for(let i = 0; i < score.length; i++ )
      {
        if(i == 0)
        {
          ans.push('Gold Medal')
        }
        else if(i == 1)
        {
          ans.push('Silver Medal')
        }
        else if(i == 2)
        {
          ans.push('Bronze Medal')
        }
        else{
        ans.push((i+1).toString())
        }
      }
  
      return ans
  };
  
  console.log(findRelativeRanks([5,4,3,2,1,6,7,8]))

  // https://leetcode.com/problems/relative-ranks/