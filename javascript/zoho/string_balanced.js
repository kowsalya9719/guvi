//You are given a string of different type of brackets. Your task is to check whether the given string is balanced or not balanced.
A string is said to be balanced if the number of opening brackets are equal to the number of closing brackets where the brackets should be of same kind.
const readline=require('readline');
const imp=readline.createInterface({
    input:process.stdin
});
var userInput=[];
imp.on("line",(data)=>{
    userInput.push(data);
});
var a=[],c1=0,c2=0;
imp.on("close",()=>{
  var a=userInput[0].split("");
  for(var i=0;i<a.length;i++)
  {
  if(a[i]=='{')
  {
  c1=c1+1;
  }
  if(a[i]=='}')
  {
      c2=c2+1;
  }
  if(a[i]=='(')
  {
  c1=c1+1;
  }
  if(a[i]==')')
  {
      c2=c2+1;
  }
  if(a[i]=='[')
  {
  c1=c1+1;
  }
  if(a[i]==']')
  {
      c2=c2+1;
  }
  }
  if(c1==c2)
  {
      console.log("yes");
  }
  else
  {
      console.log("no");
  }
});
