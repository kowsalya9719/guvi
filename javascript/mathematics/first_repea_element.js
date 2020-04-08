//Given a number N followed by N numbers. Out of these N numbers some of them are repeated. Write a program to find the first number which is repeated. If no numbers are repeated print 'unique'.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
    var A=userInput[0];
    var N=userInput[1].split(" ");
    b=[];
    for(i=0;i<N.length;i++)
    {
        for(j=i+1;j<N.length;j++)
        {
            if(parseInt(N[i])===parseInt(N[j]))
            {
                b.push(N[i]);
                break;
            }
          else
          {
            console.log("unique");
          }
        }
    }
    c=b.join(" ");
    console.log(c[0]);
});
