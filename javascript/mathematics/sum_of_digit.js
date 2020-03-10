//Given a number N, print the sum of the squares of its digits.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var N=parseInt(data);
    var sum=0;
while(N>0)
{
  dig=N%10;
  sum=sum+(dig*dig);
  N=Math.floor(N/10);
}
console.log(sum);
});
