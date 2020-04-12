//You are given with arrays containing some non negative integers.Your task is to make the largest number out of it.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
 var N=userInput[0].split(" ");
 var A=userInput[1].split(" ");
 s=" ";
 for(i=(A.length-1);i>=0;i--)
 {
    s=s+A[i]; 
 }
 console.log(s);
 });
