//Array with elements at the even indexes sorted in ascending order.
const readline=require('readline')
const inp=readline.createInterface({
    input:process.stdin
});
var user=[];
inp.on("line",(data)=>{
  user.push(data)
});
inp.on("close",()=>{
var a=[];
var b=[];
  a=user[0];
  b=user[1].split(" ");
 var even=[];
 var odd=[];
  for(var i=0;i<b.length;i=i+2)
  {
    even.push(parseInt(b[i]));

  }
  var even1=[];
  even1=even.sort();
  // console.log(even1);
    for(var j=1;j<b.length;j=j+2)
  {
    odd.push(parseInt(b[j]));

  }
// console.log(odd);
 var s=[];
 for(var k=0;k<even1.length;k++)
 {
     s+=even1[k]+" "+odd[k]+" ";
 }
 console.log(s);
});
