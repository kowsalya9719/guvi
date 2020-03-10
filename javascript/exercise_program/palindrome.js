//to find palindrome in a string
var a='mom';
var s='';
for(i=(a.length)-1;i>=0;i--)
{
s+=a[i]+'';
}
if(s==a)
{
    console.log("palindrome");
}
else
{
    console.log("not a palindrome");
}
