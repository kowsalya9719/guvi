// if the given number is prime
var n=10;
function function1(n)
{
var count=0;
b=[];
for(i=2;i<n;i++)
{ 
    var count=0;
    for(j=1;j<=i;j++)
    {
       
     if(i%j===0)
    {
        count=count+1;
    }
    }
{

        if(count==2)
        {
            b.push(i);
        }

} 

}
return (b.join(" "));
function function2(res)
{
console.log(res);
}
function2(function1)
    
