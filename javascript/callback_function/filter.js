//even numbers in array 
const filter1 = (array, call) => {
  let a=[];
  for(var i=0;i<array.length;i++){
    if(call(array[i]))
      {
        a.push(array[i]);
      }
  }
  return a
}
const fun =(value)=>value%2==0
filter1([2,3,5,8,12],fun) 
