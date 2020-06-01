//2.3 Insert a new reader in the readers array for Nodejs. 
function newreader()
{
var library = [
        {    title:"javascript", 
            price:"500", 
            readers:[
            {
               name:"person 1",
               count:"300"
            },
            {
            name:"person 2",
            count:"400"
            }
         ],
         authordetails:{
              name:"raj",
               age:"40"
         }
     },
     {
            title:"nodejs", 
            price:"600", 
            readers:[],
            authordetails:{
                  name:"raj",
                  age:"40"
          }
      }
   ]
//Insert a new reader in the readers array 
library[1].readers=[{name:"person 1",count:800},{name:"person 2",count:900}];
console.log(library);
}
newreader();
