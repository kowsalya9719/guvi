//Given a number N, print the product of the digits.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var N=data;
    var product=1;
while(N>0)
{
  dig=N%10;
  product=product*dig;
  N=Math.floor(N/10);
}
  console.log(product);
});
