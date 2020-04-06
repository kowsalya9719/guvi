//Count the number of digits of a given number N.Size of the integer
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var N=data;
    var count=0;
 while(N>0)
 {
   N=Math.floor(N/10)
   count=count+1;
 }
  console.log(count);
});
