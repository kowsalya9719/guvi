//2.7. Print the age of Nodejs Author in console.
function age()
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
                  age:40
          }
      }
   ] 
console.log(library[1].authordetails.age);//the age of Nodejs Author
}
age();
