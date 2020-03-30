//Given a number N, print the sum of squares of all its digits.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var n=data;
    var sum=0;
 while(n>0)
 {
   var dig=n%10;
   sum=sum+Math.pow(dig,2);
   n=Math.floor(n/10);
 }
 console.log(sum);
});
