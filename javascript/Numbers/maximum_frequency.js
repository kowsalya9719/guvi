//You are given an array of digits. Your task is to print the digit with maximum frequency
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	var a=userInput[0];
    var n=userInput[1].split(" ");
     for(i=0;i<n.length;i++)
     {
       if(n[i]===n[i+1])
       {
         console.log(n[i]);
         break;
       }
     }
});


