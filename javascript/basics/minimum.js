//Find the minimum among 10 numbers.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const m = [];

inp.on("line", (data) => {
	m.push(data);
});

inp.on("close", () => {
	A=(m[0].split(" "));
    C=A.sort();
    console.log(C[0]);
    });
