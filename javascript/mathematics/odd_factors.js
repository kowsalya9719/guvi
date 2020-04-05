//Given a number N, print the odd factors for the N.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var N=data;
var a=[];;
for(var i=1;i<=N;i++)
{
    if(N%i===0)
    {  
        if(i%2!==0)
        {
        a.push(i);
        } 

    }
}

console.log(a.join(" "));
  });
