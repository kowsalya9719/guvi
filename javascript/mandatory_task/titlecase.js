#convert all the strings to title caps in a string array(arrow function)
var a=['harish','sam','jack','amir'];
var result=a.map(item)=>{return
item[0].toUpperCase()+item.substr(1).toLowercase()};
console.log(result);
