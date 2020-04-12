//You have been given stock prices for next N days. Find out: max profit in buying and selling 1 share Condition: Share must be sold any day after buying date. Given a number N followed by N integers print the maximum profit.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
var N=userInput[0];
var B=userInput[1].split(" ");
for(i=0;i<B.length;i++)
{
    for(j=i+1;j<B.length;j++)
    {
        if(parseInt(B[i])<parseInt(B[j]))
        {
            temp=B[i];
            B[i]=B[j];
            B[j]=temp;
        }
    }
}
 console.log(B[0]-1);
});
