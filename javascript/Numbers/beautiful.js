//you are given with array of numbers.you have to find whether array is beautiful or not. A beautiful array is an array whose sum of all numbers is divisible by 2, 3 and 5
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
    var n=userInput[1].split(" ");
    var sum=0;
  for(i=0;i<n.length;i++)
  {
    sum=sum+parseInt(n[i]);
  }
  if(sum%2==0 && sum%3==0 && sum%5==0)
  {
    console.log("1");
  }
  else
  {
    console.log("0");
  }
  
});


