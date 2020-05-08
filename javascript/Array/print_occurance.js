//Given 2 numbers N and K.Print the number of occurrences of K in N.If K is not found print '-1'.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var A=data.split(" ");
var n=A[0];
var K=A[1];
var count=0;
 for(i=0;i<n.length;i++)
 {
   if(n[i]==K)
   {
     count=count+1;
   }
 }
 if(count>0)
 {
   console.log(count);
 }
  else
  {
    console.log("-1");
  }
});
