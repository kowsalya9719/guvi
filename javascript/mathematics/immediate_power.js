//Given a number N, find its next immediate greater power of 2.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  var N=data;
  C=data*2;
  console.log(C);
});
