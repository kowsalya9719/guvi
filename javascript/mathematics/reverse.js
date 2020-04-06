//Given a number N, print its reverse.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  var N=data;
  var reverse=0;
  while(N>0)
  {
    dig=N%10;
    reverse=(reverse*10)+dig;
    N=Math.floor(N/10);
  }
	console.log(reverse);
});
