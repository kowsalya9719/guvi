/*problem 1
Creates an array of elements split into groups the length of size. If array can't be split evenly, 
the final chunk will be the remaining elements.*/
//1
function chunk(arr, value) {
  var list = []
  input = arr.slice(0)
  while (a[0]) {
    list.push(a.splice(0, value))
  }
  return list
}
var a = ['a', 'b', 'c']
console.log(chunk(a,1));

//2
function chunk(arr, value) {
  var list = []
  input = arr.slice(0)
  while (a[0]) {
    list.push(a.splice(0, value))
  }
  return list
}
var a = ['a', 'b', 'c', 'd']
console.log(chunk(a,2));

//3
function chunk(arr, value) {
  var list = []
  input = arr.slice(0)
  while (a[0]) {
    list.push(a.splice(0, value))
  }
  return list
}
var a = ['a', 'b', 'c', 'd']
console.log(chunk(a,3));

/*problem 2 - compact(array)
Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.*/
var arr = [ 1, 2, 3, undefined, 0, null ];
var list=[];
var count=0;
arr.forEach( function(value,index,newarray){
    if(value==undefined || value==null || value==0)
    {
        count=count+1;  
            
    }
    else
    {
     list.push(value);  
     } 
 
});
console.log(list);

/*problem 3 - flatconcat
Creates a new array concatenating and flattens array a single level deep. with any additional arrays and/or values.*/
var a=[1];
var b=[...a,2,[3],[[4]]];
var c=[...b];
console.log(c);

/*Problem 4 - drop
Creates a slice of array with n elements dropped from the beginning.*/

//1
function drop(arr)
{
var c=arr.slice(1);
console.log(c);
}
drop([1,2,3]);
//2
function drop(arr,n)
{
var c=arr.slice(n);
console.log(c);
}
drop([1,2,3],2);
//3
function drop(arr,n)
{
var c=arr.slice(n);
console.log(c);
}
drop([1,  2,  3],  5);
//4
function drop(arr,n)
{
var c=arr.slice(n);
console.log(c);
}
drop([1,  2,  3],  0);

/*problem 5 - dropRight
Creates a slice of array with n elements dropped from the end.*/
//1
function drop(arr)
{
var c=arr.slice(0,2);
console.log(c);
}
drop([1,  2,  3]);
//2
function drop(arr)
{
var c=arr.slice(0,1);
console.log(c);
}
drop([1,  2,  3]);
//3
function drop(arr,n)
{
var c=arr.slice(n);
console.log(c);
}
drop([1,  2,  3],5);
//4
function drop(arr,n)
{
var c=arr.slice(n);
console.log(c);
}
drop([1,  2,  3],0);

/*problem 6 - dropWhile
Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. 
The predicate is invoked with three arguments: (value, index, array).*/

//1
function dropRightWhile(arr,n)
{
var c=arr.slice(n);
console.log(c);
}
dropRightWhile([1,2,3,4,5],5);
//2
function dropRightWhile(arr){
	var array=arr.filter(function(value,index,array){
		return value%2!==0;
	});
	return array
}
console.log(dropRightWhile([1,2,3,5]));

/*problem 7 - findLastIndex
This method is like Array.prototype.findIndex except that it iterates over elements of collection from right to left.*/
function findindexof(arr)
{
var n = arr.lastIndexOf(8);
console.log(n);
}
findindexof([5, 12, 6, 130, 8]);
/*problem 8 - flattenDeep
Recursively flattens array.*/
function flattenDeep(arr)
{
console.log(arr.flat(3));
}
flattenDeep([1, [2, [3, [4]],  5]]);

/*problem 10 - fromPairs
this method returns an object composed from key-value pairs.*/
let value = [['a', 1], ['b', 2]]
let res = Object.fromEntries(value);
console.log(res);





