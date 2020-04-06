//You are given a task to tell whether the number is pure or not. A pure number is a number whose sum of digits is multiple of 3.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var N=data;
    var sum=0;
  while(N>0)
  {
    dig=N%10;
    sum=sum+dig;
    N=Math.floor(N/10);
  }
if(sum%3==0)
{
  console.log("yes");
}
  else
  {
    console.log("not");
  }
});
