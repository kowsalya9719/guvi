//Given the values of a,b and x in the equation ax + b = y. Find the value of y.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var N=data.split(" ");
    var a=N[0];
    var b=N[1];
    var x=N[2];
    var y=(a*x)+b;
  console.log(y);
   
});
