const eve1 = (array, call) => {
  Var c=0;
  for(var i=0;i<array.length;i++){
    if(call(array[i]))
      {
        c+=1;
      }
  }
  if(c==array.length){
    return true
  }
  else
    {
      return false
    }
}
const mapfun =(value)=>value>=0
eve1([2,3,5,8,12], mapfun)
