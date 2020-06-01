//2.4 Create a New Object in the library for a new Book called SQL.
function sql()
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
//Creating a New Object in the library
library[2]={title:"sql"}         
console.log(library);
}
sql();
