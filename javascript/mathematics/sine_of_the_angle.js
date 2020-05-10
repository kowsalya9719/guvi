//Given an angle A, print the sine of the given angle.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
    var N=parseInt(data);
	console.log(Math.sin(N* Math.PI / 180).toFixed(1)); 

});
