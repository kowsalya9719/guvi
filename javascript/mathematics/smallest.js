//Shapur has to find weaknesses in the roman army to defeat them. So he gives the army a weakness number. In Shapur's opinion the weakness of an army is equal to the number of triplets i, j, k such that i < j < k and ai > aj > ak where ax is the power of man standing at position x. The Roman army has one special trait — powers of all the people in it are distinct. Help Shapur find out how weak the romans are.
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
      for(j=i+1;j<N.length;j++)
      {
    if(N[i]>N[j])
    {
      temp=N[i];
      N[i]=N[j];
      N[j]=temp;
    }
  }
  }
  C=N.join(" ");
  console.log(C[0]);
})



