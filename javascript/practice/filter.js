//filter odd numbers in an array
var n=[1,2,3,4,5];
function prblm(n){
 o=[];

    for(i=0;i<n.length;i++)
    {
        if(n[i]%2!==0)
        {
            o.push(n[i]);
        }
    }return o;

}
console.log(prblm(n));

