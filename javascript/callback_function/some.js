const some1= (array, call) => {
  for(var i=0;i<array.length;i++){
    if(call(array[i]))
      {
        return true
      }
  }
  return false
}
const func =(value)=>value%2==1
some1([2,3,5,8,12],func) 
