//find a vowels in a string
var a1='kowsalya';
var b1='aeiou';
var a='kowsalya'.split("");
var b='aeiou'.split("");
v=[];
for(i=0;i<=(a.length-1);i++)
{
    for(j=0;j<=(b.length-1);j++)
    {
        if(a[i]==b[j])
        {
            v.push(a[i]);
        }
    }
}
console.log(v);
