//Given 3 numbers A,B,C find the sum of Arithmetic Series with a=A, d=B and n=C
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var N=data.split(" ");
    var a=N[0];
    var d=N[1];
    var n=N[2];
  x=(n/2)*((2*a)+(n-1)*d)
  console.log(x);
});


                  
                  
                  
                  
                  
