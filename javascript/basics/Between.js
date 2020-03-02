//Given 3 numbers N , L and R. Print 'yes' if N is between L and R else print 'no'.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const m = [];

inp.on("line", (data) => {
	m.push(data);
});

inp.on("close", () => {
var	N=parseInt(m[0]);
var A=m[1].split(" ");
var L=parseInt(A[0]);
var R=parseInt(A[1]);

if(L<N && N<R)
{
    console.log("yes");
}
else
{
    console.log("no");
}
});
