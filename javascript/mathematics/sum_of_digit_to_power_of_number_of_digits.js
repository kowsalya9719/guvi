//Given a number 'N' print the sum of each digit to the power of number of digits in given input.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {

var N=data;
var x=N.length;
var sum=0;
 for(i=0;i<N.length;i++)
 {
   sum=sum+(Math.pow(N[i],x));
 }
  console.log(sum);
});
