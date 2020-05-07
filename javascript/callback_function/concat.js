//concatenation 
const con1 = (a1,a2) => {
  let a=a1;
  for(var i=0;i<a2.length;i++){
    a.push(a2[i]);
  }
  return a
}
con1([1,2,3,4],[5,6,7,8])
