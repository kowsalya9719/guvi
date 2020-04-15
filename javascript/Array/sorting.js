//Given a string containing a mix of upper and lowercase characters, sort the letters in ascending order such that the positions of upper and lowercase letters do not change. (eg) If the string is guVIONLineCoDIng, then the output must be  egCDIILginNnOVou
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var N=data.split("");
for(i=0;i<N.length;i++)
{
  for(j=i+1;j<N.length;j++)
  {
    if(N[i]>N[j])
    {
      temp=N[i];
      N[i]=N[j];
      N[j]=temp;
    }
  }
}console.log(N.join(""));
});
