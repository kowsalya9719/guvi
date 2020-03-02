//You are given with Principle amount($), Interest Rate(%) and Time (years) in that order. Find Simple Interest
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
var P=parseInt(A[0]);
var N=parseInt(A[1]);
var R=parseInt(A[2]);
  
Simple=parseInt((P*N*R)/100);
si=Simple.toFixed(2);
console.log(si);
  
});
