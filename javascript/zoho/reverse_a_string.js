//You are provided with a string ‘s’. Your task is to reverse the string using stack Data Structure.
const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const n=[]
inp.on("line",(data)=>{
    var m=data.split(" ");
    var d=m.reverse()
    console.log(d.join(" "));
});
