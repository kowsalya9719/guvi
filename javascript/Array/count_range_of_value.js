/*You are given a number N and followed by an array of N numbers and followed by two elements U and V, find the minimum distance between the elements in the array. The array may have duplicates.
For example, if the array is (1, 5, 3, 7, 2, 8, 3, 4, 5, 9, 9, 3, 1, 3, 2, 9)
Min Distance (U=4, V= 7): 4*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
var N=userInput[0];
var A=userInput[1].split(" ");
var C=userInput[2].split(" ");
    var u=C[0];
    var v=C[1];
    var count=0;
  for(j=u;j<=v;j++)
  {
    count+=1;
  }
 console.log(count);
});



