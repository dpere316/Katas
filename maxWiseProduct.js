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

console.log(factorial(1))
