//sorting using for loop
var arr=[1,2,4,9,3,5];
for(i=0;i<(arr.length);i++)
{
    for(j=i+1;j<(arr.length);j++)
    {
        if(arr[i]>arr[j])
        {
          temp=arr[i];
          arr[i]=arr[j];
          arr[j]=temp;
          
        }
    }
}
console.log(arr);
