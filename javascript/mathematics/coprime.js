//Assume your brother studies in class 2. He has to  complete his homework on co-primes. As an elder sibling help him in finding whether the given two numbers is co-prime or not.
const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
inp.on("line",(data)=>{
  var A=parseInt(data);
  var count=0;
    for(j=1;j<=A;j++)
    {
      if(A%j==0)
      {
        count=count+1;
      }
    }
    if(count>=2)
    {
      console.log("1");
    }
    else
    {
      console.log("0");
    }
});
