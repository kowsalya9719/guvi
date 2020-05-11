//sum_of_power_of_its_next_position_of_each_number.js
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var d=(data);
	var N=d.split(""); 
	var sum=0;
	for(i=0;i<N.length-1;i++)
	{
	  num=Math.pow(parseInt(N[i]),parseInt(N[i+1]));
	  sum=sum+num;
	} 
	var add=0;
	var c=0;
	 c=Math.pow(parseInt(N[N.length-1]),parseInt(N[0]));
	 add=sum+c;
	
	console.log(add);
});
