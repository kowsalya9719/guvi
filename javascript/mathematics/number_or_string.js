//Given a string S.Validate if a given string is numeric.print 'yes' if it is a numeric otherwise print 'no'
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var n=data;
  if(n>=0)
  {
    console.log("yes");
  }
  else
  {
    console.log("no");
  }
})
