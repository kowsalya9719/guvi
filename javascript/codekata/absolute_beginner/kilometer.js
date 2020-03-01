//You are given a number A in Kilometers. Convert this into B: Meters and C: Centi-Metres.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(data*1000)
    console.log(data*100000)
});



