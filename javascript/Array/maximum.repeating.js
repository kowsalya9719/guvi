//Given a number N followed by N numbers. Keep the count of each number and print the maximum repeating number.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
  var A=userInput[0];
  var B=userInput[1].split(" ");
  
  for(i=0;i<B.length;i++)
  {
    for(j=i+1;j<B.length;j++)
    {
      if(parseInt(B[i])==parseInt(B[j]))
      {
        console.log(B[i]);
        break;            
      }
    }
  }
  
});
