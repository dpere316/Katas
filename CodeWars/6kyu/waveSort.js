function waveSort(arr) {

    var alt = 1; // alternate 
  
    for(var i = 0; i<arr.length-1; i++){
      
      if(alt == 1){
        if(arr[i]<arr[i+1]){
         var temp = arr[i];
         arr[i] = arr[i+1];
         arr[i+1] = temp;
        }
      }else{
        if(arr[i]>arr[i+1]){
         var temp = arr[i];
         arr[i] = arr[i+1];
         arr[i+1] = temp;
        }
      }
  
      alt*=-1;
    }
    return arr;
    
  
  }

// https://www.codewars.com/kata/596f28fd9be8ebe6ec0000c1/train/javascript

// Thus, the array [4, 1, 7, 5, 6, 2, 3] is in Wave order because 4 >= 1, then 1 <= 7, then 7 >= 5, then 5 <= 6, then 6 >= 2, 
// and finally 2 <= 3.

