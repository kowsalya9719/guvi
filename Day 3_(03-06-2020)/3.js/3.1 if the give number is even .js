//if the give number is even 
function findeven(n,call)
{
if(n%2==0)
{
call();
}
else
{
console.log("not a even number");
}
}
findeven(2,function(){console.log("even number");})
