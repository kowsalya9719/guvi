//Given 2 numbers N and K.check if N is a power of K.Print 'yes' if it is a power of k otherwise print 'no'.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var C=data.split(" ");
    var N=C[0];
    var K=C[1];
 K=Math.pow(K,2);
 if(N==K)
 {
   console.log("yes");
 }
 else
 {
      console.log("no");
 }
  
     
});
