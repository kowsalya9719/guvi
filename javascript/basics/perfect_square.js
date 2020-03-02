//Given 2 numbers N,M. Print 'yes' if their product is a perfect square else print 'no'.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	
var n=userInput[0];
var m=userInput[1];
p=n*m;
sr=Math.sqrt(p);
d=sr-Math.floor(sr);
if(d==0)
{
  console.log("yes");
}
else
{
    console.log("no");
}
});


