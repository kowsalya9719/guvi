//2.2 Insert a new key called email and assign a value email1@gmail.com and email2@gmail.com respectively in both authorDetails object;
function newkey()
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
//Insert a new key and  and assign a value
library[0].authordetails[2]={email:"email1@gmail.com"};
library[1].authordetails[2]={email:"email2@gmail.com"};
console.log(library);
}
newkey();
