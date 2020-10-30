function rotLeft(a, d) {

    let temp = a.splice(0,d)
    a.push(...temp)
    return a
    
  }



//   A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if 3 left rotations are performed on array , then the array would become . [1,2,3,4,5] -> [4,5,1,2,3] ...etc

// Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays