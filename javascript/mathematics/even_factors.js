//Given a number N, print the even factors of N.If the even factor does not exists for N print '-1'.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	
var n=data;

b=[];
for(j=0;j<=n;j++)
{   
    if((n%j)===0)
    {
        if(j%2===0)
        {
            b.push(j);
        }
     
    }
    
}

console.log(b.join(" "));
 });
