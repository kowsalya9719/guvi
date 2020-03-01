//Let "A" be a year, write a program to check whether this year is a leap year or not.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
if(data%4==0)
{
 console.log("Y");
}
else
{
console.log("N");
}
});

