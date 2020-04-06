//Given 2 numbers N,M. Find their difference and check whether it is even or odd.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var N=parseInt(data);
  var A=N[0];
  var B=N[1];

d=A-B
if(d%2==0)
{
  onsole.log("even");
}
else{
	console.log("odd");
}
  });
