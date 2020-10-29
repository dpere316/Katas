function modifyArray(nums) {

    let mod = []

    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] % 2 == 0)
        {
            nums[i] = nums[i] * 2
            mod.push(nums[i])
        }
        else{
            nums[i] = nums[i] * 3
            mod.push(nums[i])
        }
    }

    return mod
    
}

// Solution 2 using map

function modifyArray(nums) {
    
    let mod = nums.map(num => {
        if(num % 2 == 0)
        {
          num = num * 2
          return num
        }
        else{
          num *= 3
          return num
        }
    })
    return mod

}

// https://www.hackerrank.com/challenges/js10-arrows/problem
// Complete the function in the editor. It has one parameter: an array, . It must iterate through the array performing one of the following actions on each element:
// If the element is even, multiply the element by 2.
// If the element is odd, multiply the element by 3.
