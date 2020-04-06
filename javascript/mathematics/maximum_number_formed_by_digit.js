//A number is given as input.Find the maximum number that can be formed using the digits.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var a=data.split("");
  for(i=0;i<a.length;i++)
  {
    for(j=i+1;j<a.length;j++)
    {
      if(a[i]<a[j])
      {
        var temp=a[i];
        a[i]=a[j];
        a[j]=temp;
      }
    }
  }
  console.log(a.join(""));
});
