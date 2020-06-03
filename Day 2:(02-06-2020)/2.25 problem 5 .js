//Parsing a list of lists and convert into a JSON object:
var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 for(var k=0;k<arr.length;k++)
 {
     var values=arr[k];
     var j=0
    newObject[values[j]]=values[j+1]   
     
 }
 return newObject;
}
console.log(fromListToObject(arr))
