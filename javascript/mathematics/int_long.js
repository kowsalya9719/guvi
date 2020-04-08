//Given a number N, print 'INT' if it is integer range or print 'LONG' if it is greater.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var N=data;
  if(N<=100000)
  {
	console.log("INT");
  }
else{
  	console.log("LONG");
}
});

