//Print the minimum element
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
  var A=userInput[0];
  var B=userInput[1].split(" ");
  var C=B.sort();
  console.log(C[0]);
});
