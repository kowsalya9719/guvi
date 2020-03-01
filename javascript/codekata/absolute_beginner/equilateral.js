//The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the triangle. You are provided with the side "a". Find the area of the equilateral triangle.
const readline=require('readline');
const inp=readline.createInterface({input: process.stdin});
inp.on("line",(data)=>{
  C=(Math.sqrt(3)/4)*(data**2);
  console.log(C.toFixed(2))
});
