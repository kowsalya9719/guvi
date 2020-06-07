// if the given number is prime
function prime(num,call)
{
var n=num;
var count=0;
for(i=1;i<=n;i++)
{
if(n%i==0)
{
count=count+1;
}
}
if(count==2)
{
call();
}
else
{
console.log("not a prime number");
}
}
prime(5,function(){console.log("prime number");})

    
