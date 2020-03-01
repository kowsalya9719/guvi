//Print the First 3 multiples of the given number "N". (N is a positive integer)
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(data,data*2,data*3);
});
