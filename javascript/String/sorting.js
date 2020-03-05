//First Line contains positive integer N denoting the length of string.The second line of input contains the string S.
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
    var B=userInput[1];
    var D=B.split("");
    var C=D.sort();
    console.log(C.join(""));
});

