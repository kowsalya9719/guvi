//Given 2 numbers N,K followed by a sorted array of N elements, search and tell if an element K is present in the array.print 'yes' if element is present otherwise print 'no'.
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
  if(count==1)
  {
    console.log("Yes");
  }
  else
  {
  console.log("no");
  }
  
});
