//Given numbers A,B find A^B
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var A=(data[0].split(" "));
    var B=A[0];
    var C=A[1];
  console.log(B**C);   
});
