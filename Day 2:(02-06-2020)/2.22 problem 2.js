//Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
var obj = {name :"RajiniKanth",age : 33,hasPets : false};
b=[];
function printAllValues()
{
for(var i in obj)
{
var key =i;
var values=obj[i];
b.push(key);
}
console.log(b);
}printAllValues();
