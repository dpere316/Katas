function oddNumbers(l, r) {
    let arr = []

    for(let i = l; i <= r; i++)
    {
        if(i % 2 !== 0)
        {
          arr.push(i)
        }
    }
    return arr

}

// For given range between l = left side and r = ride return an array of all odds numbers
// between the given range.
