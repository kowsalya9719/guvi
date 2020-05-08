//Given a binary number convert it to hexadecimal.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var A=parseInt(data,2);
var X=A.toString(16);
console.log(X);
});
