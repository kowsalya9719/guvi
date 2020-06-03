
//Parsing a list and transform the first and last elements of it:
var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
    var newObject={}
    var key=arr[0];//key
    var value=arr[arr.length-1];//value
    newObject[key]=value;
    return newObject;
  
}
console.log(transformFirstAndLast(arr));
