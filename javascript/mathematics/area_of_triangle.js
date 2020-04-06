//Given base(B) and height(H) of a triangle find its area.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var N=data.split(" ");
  var B=N[0];
  var H=N[1];
  console.log(0.5*B*H);
});
