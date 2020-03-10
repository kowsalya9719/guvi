//factorial of a number
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var N=data;
var fact=1;
for(i=1;i<=N;i++)
{
  fact=fact*i;
}
 console.log(fact);
});

