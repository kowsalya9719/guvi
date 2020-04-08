//Kabali is a brave warrior who with his group of young ninjas moves from one place to another to fight against his opponents. Before Fighting he just calculates one thing, the difference between his ninja number and the opponent's ninja number. From this difference he decides whether to fight or not. Kabali's ninja number is never greater than his opponent.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var N=data.split(" ");
   var A=N[0];
   var B=N[1];
  console.log(B-A);
  
});
