//Parsing a list of lists and convert into a JSON object:
var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]],
[["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]
];
function transformEmployeeData(arr) {
 var Employee = [];
 var newObject={};
  for(var i=0;i<arr.length;i++)
  {
      var first=arr[i]
            for(var j=0;j<first.length;j++)
      {
          var k=0;
          var inside=first[j];
                  
          newObject[inside[k]]=inside[k+1];
      }

      Employee.push(newObject);     
        
  } 
 return Employee;
}
console.log(transformEmployeeData(arr));
