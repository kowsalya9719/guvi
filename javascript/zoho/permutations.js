//Given a string S of length N, print all permutations of the string in a separate line.
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
var user=[];
inp.on("line",(data)=>{
  user.push(data)
});
inp.on("close",()=>{
    var a=user[0];
    function permut(string) {
  if (string.length < 2) 
    return string; 

  var permutations = []; 
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
 
    if (string.indexOf(char) != i) 
      continue;

    var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS

    for (var subPermutation of permut(remainingString))
      permutations.push(char + subPermutation)
  }
  return permutations;
}
var b=[];
b=permut(a);
//console.log(b);
for(var i=0;i<b.length;i++)
{
    console.log(b[i])
}
});
