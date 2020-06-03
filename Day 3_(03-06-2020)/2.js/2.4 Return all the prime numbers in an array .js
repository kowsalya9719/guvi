//Return all the prime numbers in an array 
var n=10;
var arr=function(n)
{
var count=0;
b=[];
for(i=2;i<n;i++)
{
var count=0;
for(j=1;j<=i;j++)
{
if(i%j==0)
{
count=count+1;
}
}
if(count==2)
{
b.push(i);
}
}
console.log(b.join(" "));
}
arr(n);
