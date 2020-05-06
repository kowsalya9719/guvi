//findindex
var n=[1,2,3,4,5];
function findindex(x)
{ 
    for(i=0;i<n.length;i++)
    {
    if(x==n[i])
    {
        break;
    }
    }
return i;
}
console.log(findindex(5));


