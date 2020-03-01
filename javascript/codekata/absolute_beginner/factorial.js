//You are provided with a number, "N". Find its factorial.
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
var fact=1
for(i=1;i<=data;i++)
{
fact=fact*i;
}
console.log(fact);
});
