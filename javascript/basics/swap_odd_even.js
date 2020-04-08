//Given a string 'S' swap the even and odd characters starting from index 1(Assume the index starts from 0).
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var N=data.split("");
    for(i=0;i<N.length;i=i+2)
    {
      temp=N[i];
      N[i]=N[i+1];
      N[i+1]=temp;
    }
  c=N.join("");
  console.log(c);
});
