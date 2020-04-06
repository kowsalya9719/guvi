//Given length L and breadth B of a farm, print the area of the farm upto 5 decimal decimals.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  var N=data.split(" ");
  var L=N[0];
  var B=N[1];
  area=L*B;
  res=area.toFixed(5);
	console.log(res);
});
