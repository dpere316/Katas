function compressedString(message) {

    let word=[]
    let count = 1
  
    for(let i = 0; i < message.length; i++)
    {
      if(message[i] === message[i+1])
      {
        count++
      }
      else if(count >= 2){
        word.push(message[i],String(count))
        count = 1
      }
      else{
        word.push(message[i])
      }
  
    }
     return word
}

// Given an array of characters chars, compress it using the following algorithm:
// ["a","a","b","b","c","c","c"] => ["a","2","b","2","c","3"]
