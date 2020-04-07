//Given a number N followed by N numbers. Find the largest number which can be formed from the given numbers and print it.
NOTE: Each number should be used exactly once.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	X=userInput[0];
    N=userInput[1].split(" ");
  for(i=0;i<N.length;i++)
  {
      for(j=i+1;j<N.length;j++)
      {
    if(N[i]<N[j])
    {
      temp=N[i];
      N[i]=N[j];
      N[j]=temp;
    }
  }
  }
  console.log(N.join(""));
});
