//2.5 Find the datatype of author age in Nodejs Object.
function datatype()
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

var type=library[1].authordetails.age;//Finding the datatype of author age
console.log(typeof(type));
}
datatype();
