function BracketMatcher(str) {

  const open = new RegExp("\\(", "g");
  const close = new RegExp("\\)", "g");

  // Using a stack data structure
  let stack = [];

  for (let i = 0; i < str.length; i++) {

    if (str[i].match(open)) 
    {
      // Pushes the opening bracket to the stack
      stack.push(str[i]);
    } 
    // This checks if the parentehesis is a close and the stack is empty
    // then there is no matching pair so stop the loop by returning 0
    else if (str[i].match(close)) {

      if (stack.length === 0) 
      {
        return 0;
      } 
      else str[i].match(close);
      {
        // pop the top of the stack
        stack.pop();
      }

    }
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(BracketMatcher("hello())")) // 0

// Have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.

// https://coderbyte.com/results/dpere316:Bracket%20Matcher:JavaScript