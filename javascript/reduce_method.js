=}sum of all numbers
var a=[1,3,5,7,9,2,4,6,8,10]
var sum=a.reduce(function(accumulator,currentvalue,index){
return accumulator+currentvalue;
});
console.log(sum)

=}sum of odd numbers
var a=[1,3,5,7,9,2,4,6,8,10]
var odd=a.reduce(function(accumulator,currentvalue,index){
if(currentvalue%2!=0){
return accumulator+currentvalue;}
return accumulator
});
console.log(odd)
