//Given a hexadecimal number convert it into decimal
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var N=parseInt(data,16);
var b=N.toString(10);
console.log(b);
});
