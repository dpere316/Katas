function CodelandUsernameValidation(str) { 

    let regex = new RegExp('[a-z]|[0-9]', 'g');
    // let reg = new RegExp('([a-z]|[0-9])', 'g')
  
    if(str.length < 4 || str.length > 25)
    {
      return false
    }
    if(!str[0].match(regex))
    {
      return false
    }
    if(!str.match(regex))
    {
      return false
    }
    if(str[str.length-1] == '_')
    {
     return false
    }
   
    return true
  
  }
  
  console.log(CodelandUsernameValidation("aaa?aaa_b_")) // => false

//   Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

//   1. The username is between 4 and 25 characters.
//   2. It must start with a letter.
//   3. It can only contain letters, numbers, and the underscore character.
//   4. It cannot end with an underscore character.
  
//   If the username is valid then your program should return the string true, otherwise return the string false.