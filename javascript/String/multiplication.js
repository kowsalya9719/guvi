//Given two numbers S1 and S2 represented as strings, return multiplication of the numbers as a string.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var N=data.split(" ");
   var a=N[0];
   var b=N[1];
  console.log(a*b);
});

