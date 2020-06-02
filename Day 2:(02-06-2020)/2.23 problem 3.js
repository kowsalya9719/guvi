//Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
var obj = {name: "ISRO", age: 35, role: "Scientist"};
b=[];
for(var i in obj)
{
var key =i;
var values=obj[i];
b.push([key,values]);
}
console.log(b);
//problem 4

var arr = ["GUVI", "I", "am", "a geek"];
console.log(arr[0]+":"+arr[3]);
