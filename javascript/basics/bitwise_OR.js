//Given a number N and an array of N elements, find the Bitwise OR of the array elements.

const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	var A =userInput[0];
    var B=(userInput[1].split(" "));
    var C=B[0];
    var D=B[1];
  console.log(B[0]|B[1]);
});

