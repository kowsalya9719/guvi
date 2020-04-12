//Given 2 numbers N and M followed by 2 arrays A an B of sizes N and M. Check if array B is a subset of array A. if yes print 'yes' else print 'no'.
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
var C=userInput[2].split(" ");
 var t=A[0];
 var u=A[1];
 var count=0;
 for(i=0;i<B.length;i++)
 {
   for(j=0;j<C.length;j++)
   {
     if(B[i]==C[j])
     {
       count=count+1;
     }
   }
 }
  if(count==u)
  {
    console.log("yes");
  }
  else
  {
    console.log("no");
  }
    
});



