//Given a number N, check whether it is a power of 2.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var N=data;
var C=N**2;
var R=N%C;
if(R%2==0)
{
  console.log("yes");
}
else
{
	console.log("no");
}
});
