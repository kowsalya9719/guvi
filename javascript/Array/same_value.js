//Given 2 numbers N and M followed by N numbers and M numbers, print the common numbers in sorted order.
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
var N=A[0];
var M=A[1];
var B=userInput[1].split(" ");
  p=[];
 for(i=0;i<B.length;i++)
 {
   for(j=i+1;j<B.length;j++)
   {
     if(B[i]==B[j])
     {
       p.push(B[i]);
     }
   }
 }
  console.log(p.join(" "));
  
  
});
