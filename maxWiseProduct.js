maxWiseProduct = (arr) => {

    let product = 0;
    let n = arr.length

    for(let i = 0 ; i < n; i++)
    {
        for(let j = i + 1; j < n; j++)
        {
            
            product = Math.max(product,arr[i]*arr[j])
            
        }
    }
    return product
}


sortMaxWiseProduct = (arr) => 
{
    arr.sort((a,b) => a - b)
    return arr[arr.length - 2] * arr[arr.length -1]
}

console.log(sortMaxWiseProduct([7,5,14,2,8,8,10,1,2,3]))

fibRecurs = (n) =>
{
    if (n <= 1)
        return n
    else
        return fibRecurs(n-1) + fibRecurs(n-2)
}


fibList = (n) => {
    f = []
    f[0] = 0;
    f[1] = 1;
    
    for(let i = 2; i <= n; i++)
    {
        f[i] = f[i-1] + f[i-2]
       
    }
    return f[n]

}

console.log(fibList(3))

 factorial = (n) => {

    let result = 1;
    for(let i = 1; i <= n; i++)
    {
        result = result*i;
    }

    return result;
};

factorial = function(n) {
    if(n === 0){
        return 1;
    }
        return factorial(n-1) * n;
    };

console.log(factorial(1))

function partsSums(ls) {

    let res = new Array(ls.length + 1);
    res[ls.length] = 0;
    
    for (let i = ls.length - 1; i >= 0; i--) 
      res[i] = res[i + 1] + ls[i];
    
    return res;
    
  }

  function partsSums(ls) {
    let r = [0];
    for(let i in ls.reverse()){
     r.push(ls[i]+r[i]);
    }
    return r.reverse();
}

function partsSums(ls) {
    const res = []
    let sum = ls.reduce((acc,cur) => acc+cur, 0)
    for(let i=0; i<=ls.length; i++){
      res.push(sum)
      sum -= ls[i]
    }
    return res
  }