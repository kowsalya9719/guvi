#sum of all numbers in an array(anonymous function)
var a=[1,3,5,7,9,2,4,6,8,10]
var sum=a.reduce(function(accumulator,currentvalue,index){
return accumulator+currentvalue;
});
console.log(sum)
