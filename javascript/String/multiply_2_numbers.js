//You are given two numbers. Your task is to multiply the two numbers and print the answer.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var N=data.split(" ");
var A=N[0];
var B=N[1];
 console.log(A*B);
});

