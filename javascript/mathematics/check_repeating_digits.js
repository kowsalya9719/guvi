//Given a number N,check whether it has repeating digits in it.print 'yes' if it has repeating digits otherwise print 'no'.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	
	var A=data.split("");
    var count=0;
   for(i=0;i<A.length;i++)
   {
     for(j=i+1;j<A.length;j++)
     {
       if(A[i]==A[j])
          {
           count=count+1;
          }
     }}
    
     if(count>0)
     {
       console.log("yes");
     }
     else
     {
       console.log("no");
     }
});
