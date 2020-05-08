//Given a number N, find the number of ones in its binary representation.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {

var count=0;
var num=parseInt(data);
var b = num.toString(2);
 for(i=0;i<b.length;i++)
 {
   if(b[i]==1)
   {
     count=count+1;
   }
 }
  console.log(count);
});
