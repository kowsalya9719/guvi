//Given a number N followed by N numbers.Find the smallest number and largest number and print both the indices(1 based indexing).
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
var	A=userInput[0];
var B=userInput[1].split(" ");
C=B.sort();
console.log(C[0],C[C.length-1]);
});

