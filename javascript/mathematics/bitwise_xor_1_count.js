//Given 2 numbers, perform bitwise xor and find the number of ones in its binary representation.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var N=data.split(" ");
var A=N[0];
var B=N[1];
var count=0;
 var c=A^B;
 var d=c.toString(2);
 for(i=0;i<d.length;i++)
 {
     if(d[i]==1)
     {
         count=count+1;
     }
 }
 console.log(count);
 
});
