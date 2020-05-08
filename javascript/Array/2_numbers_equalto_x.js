//Given 2 numbers N,X and an array of N elements, check if there exists any 2 numbers in the array with sum equal to X.If found print 'yes' otherwise print 'no'
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
var X=A[1];
var B=userInput[1].split(" ");
  for(i=0;i<B.length;i++)
  {
    for(j=i+1;j<B.length;j++)
    {
      if((parseInt(B[i])+parseInt(B[j]))==X)
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
  
  


