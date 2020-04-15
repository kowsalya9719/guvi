//Given 2 strings S,X. Print 'yes' if their lengths are co-prime otherwise print 'no'.
const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var M=m[0].split(" ");
  var S=M[0];
  var X=M[1];
  var s=S.length;
  var x=X.length;
  var count=0;
  for(i=1;i<=s;i++)
  {
    if(s%i===0 && x%i===0)
    {
      count=count+1;
    }
  }
  if(count==1)
  {
    console.log("yes")
  }
  else
  {
    console.log("no");
  }
});
© 2020 GitHub, Inc.
