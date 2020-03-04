//Given base(B) and height(H) of a triangle find its area
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var	A=(data[0].split(" "));
var B=parseInt(A[0]);
var H=parseInt(A[1]);
console.log(0.5*B*H)    
});
