//Given 2 numbers N and K and followed by an array of N integers. The given element K is removed from the array and new array is printed. If after removing every occurance of K the array becomes empty, print 'empty' without quotes.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
var A=userInput[0].split(" ");
var B=userInput[1].split(" ");
var N=A[0];
var K=A[1];
var count=0;
var b=[];
for(i=0;i<B.length;i++)
{
  if(parseInt(B[i])==parseInt(K))
  {
    count=count+1;
  }
  else
  {
    b.push(B[i]);
  }
}
console.log(b.join(" "));
});
