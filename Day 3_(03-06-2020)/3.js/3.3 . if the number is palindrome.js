// if the number is palindrome.
function palindrome(str,call)
{
 var a=str;
 var s="";
for(i=(a.length)-1;i>=0;i--)
{
s=s+a[i]+"";
}
if(s==a)
{
call();
}
else
{
console.log("not a palindrome");
}
}
palindrome('mom',function(){console.log("palindrome");});
