//Given a number N, print yes if the number is a multiple of 7 else print no.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var N=data;
if(N%7===0)
{
console.log("yes");
}
else
{
console.log("no");
}
});
