Problem
Create a function that takes a string and returns it as an integer.
Examples
toInteger(“6”) ➞ 6
toInteger(“1000”) ➞ 1000
toInteger(“12”) ➞ 12

var mystr = "5";
function toInteger(mystr) {
return Number(mystr)
}
var myint = toInteger(mystr)
console.log(myint)
