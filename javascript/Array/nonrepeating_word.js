//Given a number N followed by N numbers. All the numbers in the given input appear twice except for one number(ie one number appears only once in the given input). Find the number which appears only once.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
    var A=userInput[0];
    var N=userInput[1].split(" ");
    var n = N.length;
var result = '';

function nonrep() {
  for (var i = 0; i < n; i++) {
    var j;
    for (j = 0; j < n; j++)
      if (i != j && N[i] == N[j]) {
        result = N[i];
        break;
      }
    if (j == n)
      return N[i];
  }
  return result;
}
console.log(nonrep()); 
});
