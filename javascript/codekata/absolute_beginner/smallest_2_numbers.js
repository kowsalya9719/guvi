//smallest between 2 numbers
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
    var A=(data[0].Split(" "));
    var B=A[0];
    var C=A[1];
if(B<C)
{
    console.log(B);
}
else
{
  console.log(C) ;
}
});
