//Given a number N followed by an unsorted array of N numbers and a number K, find if there exists a pair of elements in the array whose difference is K. Return count of such pairs.
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
    for(j=0;j<B.length;j++)
    {
      if((parseInt(B[i])-parseInt(B[j]))==parseInt(K))
      {
        count=count+1;
      }
    }
  }
 console.log(count);
}); 
