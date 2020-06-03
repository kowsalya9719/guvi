 //Parsing two JSON objects and Compare:
   var expected = {foo: 5, bar: 6};
   var actual = {foo: 6, bar: 5}
   function assertObjectsEqual(actual, expected, testName){
  var act=JSON.stringify(actual);
  var expect=JSON.stringify(expected);
  var testCase=testName;
  if(act===expect)
   {
     console.log("Passed");
   }
    else
    {
     console.log("FAILED [my test] Expected"+expect+"but got"+act)
    }
    }
     assertObjectsEqual(actual,expected,"case1")
