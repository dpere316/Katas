function multiples(num1, num2)
{

  let arr = new Array(1000);

  let total = 0;

  for(let i = 0; i < arr.length -1; i++)
  {
    arr[i] = i + 1;

    if(arr[i] % num1 !== 0 && arr[i] % num2 !== 0)

    {
      let v  = 0;
      arr[i] = v;
    }

    total += arr[i]
  }

  console.log(total)
  console.log(arr)

}

console.log(multiples(3,5))

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. I have the following code but the answer does not match.

