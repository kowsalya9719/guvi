//Given a number N and an array of N elements, every number is repeated except for one. Print that one number.
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
  var N=userInput[1].split(" ");
  for(i=0;i<N.length;i++)
  {
    if(parseInt(N[i])!=parseInt(N[i+1]))
    {
      console.log(N[i]);
    }
  }
});


