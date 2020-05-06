//Map power of 2
var n=[1,2,3,4,5];
function squ(x)
{
    for(i=0;i<n.length;i++)
    {
        n[i]=n[i]**x;
    }
return n;
}
console.log(squ(2));
