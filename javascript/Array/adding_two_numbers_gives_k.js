//Given N, K and follwed by N of integers , find two numbers such that they add up to a specific target number K. Example Input: numbers={2, 7, 11, 15}, K=9,print 'yes' if target achieved (2,7 can be added to get 9) if there is no such pair print 'no'.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
var count=0;
var A=userInput[0].split(" ");
var N=A[0];
var K=A[1];
var B=userInput[1].split(" ");
  for(i=0;i<B.length;i++)
  {
    for(j=i+1;j<B.length;j++)
    {
      if((parseInt(B[i])+parseInt(B[j]))==K)
      {
        count=count+1;
      }
    }
  }
  if(count>0)
  {
    console.log("yes");
  }
  else
  {
    console.log("no");
  }
});
  
  


