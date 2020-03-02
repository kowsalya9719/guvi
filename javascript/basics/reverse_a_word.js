//Given a string S consisting of 2 words reverse the order of two words 
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
var A=(userInput[0].split(" "));
var B=A[0];
var C=A[1];
  console.log(C,B);
});
