//A sequence is given by: 2, 6, 11, 17, 24,....
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const m = [];

inp.on("line", (data) => {
	var N=parseInt(data);
    var a=2;
    var b=3;
  for(i=1;i<N;i++)
  {
    b=b+1;
    a+=b;
  }
  console.log(a);
});
