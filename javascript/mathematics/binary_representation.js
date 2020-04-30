//Print the position of first 1 from right to left, in binary representation of an Integer.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var N=parseInt(data);
    var c=N.toString(2);
   console.log(c);
});
