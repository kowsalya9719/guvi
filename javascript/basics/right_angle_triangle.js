//Given 3 numbers A,B,C print 'yes' if they can form the sides of a right angled triangle,otherwise 'no'.
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
var c=A**2+B**2;
var d=C**2;
if(c==d)
{
	console.log("yes");
}
else
{
console.log("no");
}
});
