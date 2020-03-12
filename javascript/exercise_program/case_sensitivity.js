//first letter capital rest of the letters are small.
var N='casesensitive';
s="";
for(i=0;i<=(N.length)-1;i++)
{
    if(N[i]==N[0])
    {
    C=N[0].toUpperCase();
    s+=C+"";
    }
    else
    {
    var D= N[i];
    s+=D+"";
    }
}
console.log(s);
