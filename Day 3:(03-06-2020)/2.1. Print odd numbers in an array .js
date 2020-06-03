//2.1. Print odd numbers in an array 
odd=[];
var arr=function(numbers)
{
for(i=1;i<=numbers;i++)
{
if(i%2!==0)
{
odd.push(i);
}
}
console.log(odd);
}
arr(5);
