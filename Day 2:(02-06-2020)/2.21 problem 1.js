//Write a function called “printAllValues” which returns an newArray of all the input object’s values.
var obj = {name :"RajiniKanth",age : 33,hasPets : false};
b=[];
function printAllValues()
{
for(var i in obj)
{
var key =i;
var values=obj[i];
b.push(values);
}
console.log(b);
}printAllValues();
