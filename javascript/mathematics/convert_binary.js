//Given a number N in decimal convert it into binary value.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var N=parseInt(data);
var b=N.toString(2);
console.log(b);
});
