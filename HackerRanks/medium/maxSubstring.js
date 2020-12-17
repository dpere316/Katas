function maxSubstring(str)
{
  let word = ''
  let empty = []

  for(let i = 0; i < str.length; i++)
  {
    word = str.substring(i)
    empty.push(word)
  }

  return empty.sort()[empty.length-1]

}

console.log(maxSubstring('banana'))

