//Given a number N and array of N integers, find the number which occurs the least number of times.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
var S=userInput[0];
var arr=userInput[1];
var n = arr.length;
var result = '';

function nonrep() {
  for (var i = 0; i < n; i++) {
    var j;
    for (j = 0; j < n; j++)
      if (i != j && arr[i] == arr[j]) {
        result = arr[i];
        break;
      }
    if (j == n)
      return arr[i];
  }
  return result;
}
console.log(nonrep())
});
