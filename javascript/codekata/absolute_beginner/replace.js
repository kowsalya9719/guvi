#Let "A"  be a string. Remove all the whitespaces and find it's length.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
C=data.replace(/\s+/g, "");
console.log(C.length)
});
