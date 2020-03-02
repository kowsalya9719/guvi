//Write a program to print the sum of the first K natural numbers
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var n=data;
var sum = 0;

for(i=1;i<=n;i++)
  {
   sum = sum + i ;
  }
 console.log(sum);
 });
  
