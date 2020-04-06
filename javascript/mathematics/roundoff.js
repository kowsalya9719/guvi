//Given a floating point number with 1 decimal place round it off to nearest greater integer and print it
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  var N= parseFloat(data);
 var c= Math.round(N);
	console.log(c);
});
