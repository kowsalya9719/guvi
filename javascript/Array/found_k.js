//Given 2 numbers N and K followed by N elements, find the Kth smallest element.If the element cannot be found then print -1
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
var K=A[1];
var B=userInput[1].split(" ");
var count=0;
 for(i=0;i<B.length;i++)
 {
   if(B[i]==K)
   {
     count=count+1;
   }
 }
if(count>0)
{
  console.log(K);
}
 else
 {
   console.log("-1");
 }
});
