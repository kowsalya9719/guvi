//Given 3 numbers A,B,C print 'yes' if they can form the sides of a scalene triangle else print 'no'
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
var A=(parseInt(T[0])),B=(parseInt(T[1])),C=(parseInt(T[2]));   
if(A!=B && B!=C && C!=A)
{
    console.log("yes");
}
else
{
	console.log("no");
}
});  
