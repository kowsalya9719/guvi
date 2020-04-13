//Given a number N and a number K, check if it has all digits from 0 to k in it.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var N=data.split(" ");
 var n=N[0].split(" ");
  var K=N[1];
  var count=0;
  for(i=0;i<n.length;i++)
  {
    if(i<=K)
    {
      count=count+1;
    }
  }
  if(count>0)
  { 
      console.log("yes");
  }
  
});
