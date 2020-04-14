//Given 2 numbers N and K followed by N numbers such that sum of two pairs in the N numbers results K value, if it exist print 'yes' otherwise 'no'.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const m = [];

inp.on("line", (data) => {
	m.push(data);
});

inp.on("close", () => {
 var a=m[0].split(" ");
 var c=a[0];
 var d=a[1];
 var b=m[1].split(" ");
 var count=0;
 for(var i=0;i<b.length;i++)
 {
     for(j=i+1;j<b.length;j++)
     {
         if(parseInt(b[i])+parseInt(b[j])==parseInt(d))
         {
          count=count+1;
         }
     }
 }
 if(count>0)
 {
    console.log("yes");
 }
 else
 {
    console.log("no");
 }
 
 });
