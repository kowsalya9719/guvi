//You are given three numbers A, B & C. Print the largest amongst these three numbers.
const readline=require('readline');
const inp=readline.createInterface({input: process.stdin});
const userInput=[];
inp.on("line",(data)=>{userInput.push(data);});
inp.on("close",()=>{
	var A=userInput[0];
    var B=userInput[1];
    var C=userInput[2];
if(A>B && A>C)
{
  console.log(A);
}
 else if(B>A && B>C)
 {
  console.log(B);
 }
  else
  {
    console.log(C);
  }
  
});
