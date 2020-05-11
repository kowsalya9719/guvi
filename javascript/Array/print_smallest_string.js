//Given a number N and an array of N strings, find the lexicographically smallest string.
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
var C=userInput[2];
var D=userInput[3];
var b=B.length;
var c=C.length;
var d=D.length;
 if((b<c)|(b<d))
 {
   console.log(B);
 }
  else if((c<b)|(c<d))
  {
    console.log(C);
  }
  else
  {
    console.log(D);
  }
});
