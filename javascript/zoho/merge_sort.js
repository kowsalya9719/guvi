//Given k sorted arrays of possibly different sizes, merge them and print the sorted output.
const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const m=[]
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var a=m[0];
  var b=[];
  for(var i=1;i<m.length;i++){
      var c=m[i].split(" ")
      for(var j=0;j<c.length;j++){
          b.push(c[j])
      }
  }
  console.log(b.sort((a,b) => a-b).join(" "))
});
