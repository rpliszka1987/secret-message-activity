// Secret message activity Code Academy

// Original Array
let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

// Logs length of the array
console.log(secretMessage.length);

// Deletes last item in the array
secretMessage.pop();

console.log(secretMessage.length);

// Added to end of array
secretMessage.push("to", "Program");

console.log(secretMessage.length);

// Finds index of 'easily' and replaces it with 'right'
secretMessage[secretMessage.indexOf("easily")] = "right";

// Deletes first item in array
secretMessage.shift();

// Adds first item to the array
secretMessage.unshift("Programming");

console.log(secretMessage.indexOf("get"));

// Removes 5 items from array after index 6 and replaces with 'know'
secretMessage.splice(6, 5, "know");

// Prints out secret message
console.log(secretMessage.join(" "));
