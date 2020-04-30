//Given a number N in decimal, print the length of the corresponding binary digit.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var num=parseInt(data);
    var b = num.toString(2);
    c=b.length;
  console.log(c);
});
