//You are given with a queue. Your task is to reverse the queue elements and print it.
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
var N=userInput[1].split(" ");
g=[];
 for(i=N.length-1;i>=0;i--)
 {
  g.push(N[i]); 
 }
 console.log(g.join(" ")); 
});
