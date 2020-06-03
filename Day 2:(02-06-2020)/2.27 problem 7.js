 //Parsing two JSON objects and Compare:
   var expected = {foo: 5, bar: 6};
   var actual = {foo: 6, bar: 5}
   function assertObjectsEqual(actual, expected, test){
  var actual1=JSON.stringify(actual);
  var expect1=JSON.stringify(expected);
  var testCase=test;
  if(actual1===expect1)
   {
     console.log("Passed");
   }
    else
    {
     console.log("FAILED [my test] Expected"+expect1+"but got"+actual1)
    }
    }
     assertObjectsEqual(actual,expected,"case1")
