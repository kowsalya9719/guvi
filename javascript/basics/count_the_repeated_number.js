//Given 2 numbers N and K followed by N elements,print the number of repetition of K otherwise print '-1' if the element not found.
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
  var b=m[1].split(" ");
  var k=parseInt(a[1]);
  var count=-1;
  for(i=0;i<b.length;i++)
  {
    if(k==b[i])
    {
      count=count+1;
    }
  }
  console.log(count);
});
