printTriangle = () => {
  
  let string = ""
  for(let i = 0; i < 7 ; i++)
  {
    string = string + "#"
    console.log(string)
  }

}

// Solution 2
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

  // print triangle