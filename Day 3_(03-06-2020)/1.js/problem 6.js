Problem
Create a function that takes an array and returns the first element.
Examples
getFirstElement([1, 2, 3]) ➞ 1
getFirstElement([80, 5, 100]) ➞ 80
getFirstElement([-500, 0, 50]) ➞ -500

var arr = [1, 2, 3];
function getFirstElement(arr) {
return arr[0]
}
var data = getFirstElement(arr)
console.log(data);
