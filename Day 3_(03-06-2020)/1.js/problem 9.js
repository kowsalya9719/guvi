Problem
Less Than 100?
Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
Examples
lessThan100(22, 15) ➞ true
// 22 + 15 = 37
lessThan100(83, 34) ➞ false
// 83 + 34 = 117

function lessThan100(num1,num2) {
if((num1+num2)<100)
{
return true
}
else
{
return false
}
}
var res = lessThan100(22,15)
console.log(res);
