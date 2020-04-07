//Rampal is a number in which the sum of last two digits of that number is multiple of 4.Your teacher has given you the task to make a list of rampal numbers.Your task is to tell whether the number is rampal or not.

const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var N=data;
    var sum=0;
  while(N>0)
  {
    dig=N%10;
    sum=sum+dig;
    N=Math.floor(N/10);
  }
 if(sum%4===0)
 {
   console.log("yes");
 }
  else
  {
     console.log("no");
 }
    
});
