var canBeEqual = function(target, arr) {

    target.sort()
    arr.sort()
  
    if(target.length !== arr.length)
    {
      return false
    }
    if(arr.toString() == target.toString())
    {
      return true
    }
    if(arr.toString() !== target.toString())
    {
      return false
    }
    
    return true
  };