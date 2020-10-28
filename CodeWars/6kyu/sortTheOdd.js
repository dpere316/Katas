function sortArray(array) {
  
    for(var i=0;i<array.length-1;i++)
    {
      for(var j = i; j < array.length; j++)
      {
        if((array[i] != 0) && (array[i] % 2 != 0) &&
          (array[j] != 0) && (array[j] % 2 != 0))
          {
            if(array[i] > array[j])
            {
              var temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
          }
      }
    }
   return array
  }

//   https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.