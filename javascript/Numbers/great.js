//You are given a number ‘n’. You have to tell whether a number is great or not. A great number is a number whose sum of digits let (m) and product of digits let(j) when summed together gives the number back


const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var N=data;
var sum=0;
var sums=1;

while(N>0){
    n=N%10;
    sum=sum+n;
    sums=sums*n;
    N=Math.floor(N/10);
t=sum+sums;
}
var N=data;
if(t==N)
{
    console.log("Great");
}
else{
    console.log("no");
}
});   
    
    
