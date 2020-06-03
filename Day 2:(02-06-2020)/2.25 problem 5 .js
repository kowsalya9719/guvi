//Parsing a list of lists and convert into a JSON object:
var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 for(var i=0;i<arr.length;i++)
 {
     var value=arr[i];
     var j=0
    newObject[value[j]]=value[j+1]   
     
 }
 return newObject;
}
console.log(fromListToObject(arr))
