//You are given A = Length of a rectangle & B = breadth of a rectangle. Find its area “C”.
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
    var B=userInput[1];
    console.log(A*B);
});
