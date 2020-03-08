//You are given an integer N, find if the number is divisible by 4.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var N=data;
if(N%4==0)
{
  console.log("YES");
}
 else
 {
   console.log("NO")
 }
});
