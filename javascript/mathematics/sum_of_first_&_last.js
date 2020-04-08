//Given a number N, print the sum of its first and last digit.
const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  var number =parseInt(data);
  var firstdigit=number;
    while (firstdigit>=10){
      firstdigit=Math.floor(firstdigit/10);
    }
    var lastdigit = number % 10;
    console.log(firstdigit+lastdigit);
});
