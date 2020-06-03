//Convert all the strings to title caps in a string array 
var s=["kows","guvi"];
var arr=function(s)
{
var p=[]
for(i=0;i<s.length;i++)
{
var c=s[i];
var d=(c[0].toUpperCase()+c.slice(1));
p.push(d);
}
console.log(p);

}
arr(s);
