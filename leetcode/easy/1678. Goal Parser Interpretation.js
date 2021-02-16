var interpret = function (command) {
  let G = /G/g;
  let O = /\(\)/g;
  let AL = /\(al\)/g;

  command = command.replace(G, "G"); // G()()(al)
  command = command.replace(O, "o"); // Goo(al)
  command = command.replace(AL, "al"); // Gooal

  return command;
};

console.log(interpret("G()()(al)"))

// https://leetcode.com/problems/goal-parser-interpretation/

// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Example:
// Input: command = "G()()()()(al)"
// Output: "Gooooal"