//Given 2 numbers N and K followed by elements of N .Print 'yes' if K exists else print 'no'.
const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var a=m[0].split(" ");
  var k=parseInt(a[1]);
  var b=m[1].split(" ");
  var count=0;
  for(i=0;i<b.length;i++)
  {
    if(k==b[i].split(" "))
    {
      count=1;
    }
  }
  if(count==1)
  {
      console.log("yes");
  }
  else
  {
      console.log("no");
  }
});
