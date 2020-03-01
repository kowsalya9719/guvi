//You are given Two Numbers, A and B. If C = A + B. Find C.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	var A=parseInt(userInput[0]);
  	var B=parseInt(userInput[1]);
    console.log(A+B);
});
