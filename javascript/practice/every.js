//every 
var n=[1,2,3,4,5];
function prblm(n){
    var e=1;

    for(i=0;i<n.length;i++)
    {
        if(n[i]%n===0)

        e=e*1;
        
        else
         e=e*0; 
            
    } 
     if(e==1)
     {
         return true;
     }
     else
     {
         return false;
     }
        


}
console.log(prblm(2));
