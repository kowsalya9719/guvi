//Given a limit N followed by N numbers, find the number of pairs which satisfies the condition of ai < aj for all i < j.
Input Size : 1 <= N <= 100000
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
  var count=0;
  for(i=0;i<B.length;i++)
  {
    for(j=i+1;j<B.length;j++)
    {
      if(parseInt(B[i])<parseInt(B[j]))
      {
        count=count+1;
      }
    }
  }
  var c=count;
  console.log(c);
});



