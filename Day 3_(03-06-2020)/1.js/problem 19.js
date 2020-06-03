Problem:
Write a function called “getNthElement”.
Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
Input:
getNthElement([1, 3, 5], 1);
Output:
3
function getNthElement(array,n){

for(i=0;i<array.length;i++)
 {
 if(array[i]==n)
 {
 console.log(array[n]);
 }
 
 else if(array.length==0)
 {
 console.log("undefined");
 }
}}
getNthElement([1, 3, 5], 1);
