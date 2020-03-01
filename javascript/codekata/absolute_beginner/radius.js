//You are provided with the radius of a circle "A". Find the length of its circumference.
const readline=require('readline');
const inp=readline.createInterface({input: process.stdin});
inp.on("line",(data)=>{
	C=Math.PI*2*data
    D=C.toFixed(2)
    console.log(D)
});

