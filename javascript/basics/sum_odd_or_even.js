//Given 2 numbers N and M add both the numbers and check whether the sum is odd or even.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const m = [];

inp.on("line", (data) => {
	m.push(data);
});

inp.on("close", () => {
var	T=m[0].split(" ");
var A=(parseInt(T[0])),B=(parseInt(T[1]));  
c=A+B
if(c%2==0)
{
  console.log("even");
}
else
{
    console.log("odd");
}
});

