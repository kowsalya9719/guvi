//Given a number N and an array of N integers, predict if the product of all elements would be even or odd(actual multiplication may lead to overflows ai <= 100000000).If there is only one element present in the array print whether that number is odd or even.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
var a=userInput[0];
var n=userInput[1].split(" ");
 var product=1;
  for(i=0;i<n.length;i++)
  {
    product=product+n[i];
  }
 var c=product;
  if(c%2==0)
  {
    console.log("even");
  }
  else
  {
    console.log("odd");
  }
});


