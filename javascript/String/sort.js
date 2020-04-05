//Given a string 'S', sort the characters based on the frequency(highest and lowest) and print the resultant string.(Note:If the frequency of different character is same then sort based on alphabetical order).
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var N=data;
    var c=N.split("");
    var e=c.sort();
    var d=e.join("");
    console.log(d)
});
