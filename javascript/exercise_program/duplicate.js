function duplicate()
{
arr=[5,1,2,2,3,5,6];
var R=[];
for(i=0;i<=(arr.length)-1;i++)
{
    for(j=i+1;j<=(arr.length)-1;j++)
       {
          if(arr[i]==arr[j])
          {
            R.push(arr[i]);
          }
          
       }
}
console.log(R);
}
duplicate();
