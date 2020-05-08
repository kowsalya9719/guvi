//Given a binary number convert it into octal format.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var A=parseInt(data,2);
var X=A.toString(8);
console.log(X);
});
