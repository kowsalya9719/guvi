const findindex1 = (array, call) => {
  for(var i=0;i<array.length;i++){
    if(call(array[i]))
      {
        return i
      }
  }
}
const func =(value)=>value==5
findindex1([2,3,5,8,12], func) 
