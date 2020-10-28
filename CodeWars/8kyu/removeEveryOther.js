function removeEveryOther(arr){

    const newArr = arr.filter((item,index) => {
  
        if(index % 2 === 0)
        {
          return item
        }
    })
    
    return newArr    
  }
//   https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
//   Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

//   Example:
  
//   myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];  