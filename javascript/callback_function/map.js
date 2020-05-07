//square root of elements in array by using map

const map1 = (array, call) => {
  let a=[];
  for(var i=0;i<array.length;i++){
    a.push(call(array[i]));
  }
  return a
}
const mapfun =(value)=>Math.sqrt(value);
map1([2,3,5], mapfun) 
