//You are given with a number A i.e. the temperature in Celcius. Write a program to convert this into Fahrenheit.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	C=((data*1.8)+32);
    D=C.toFixed(2);
	console.log(D);

});
 

