//A number is given as input. Find the odd digits in the number, add them and find if the sum is odd or not. If even print E, if odd print O.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var N=data;
var sum=0;
while(N>0)
{
    n=N%10;
    sum=sum+n;
    N=Math.floor(N/10);
}
if(sum%2==0)
{
    console.log("E");
}
else
{
    console.log("O");
}
});
    
