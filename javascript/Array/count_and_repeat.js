//Given an array of numbers and another number k. Find whether K exists and the number of time k repeats. If it does not exist just print no.
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
    if((parseInt(B[i]))==K)
    {
      count=count+1;
    }
  }
  if(count>0)
  {
    console.log("Yes",count);
  }
  else
  {
  console.log("no");
  }

});
