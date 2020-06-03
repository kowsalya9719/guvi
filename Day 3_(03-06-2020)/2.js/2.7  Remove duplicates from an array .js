//  Remove duplicates from an array 
var arr = [-1, 2, 5, 6, 2, 9, -1, 6, 5, -1, 3];
var arr1=function(arr)
{
var n = arr.length;
var result = '';
function nonrep() {
  for (var i = 0; i < n; i++) {
    var j;
    for (j = 0; j < n; j++)
      if (i != j && arr[i] == arr[j]) {
        result = arr[i];
        break;
      }
    if (j == n)
      return arr[i];
  }
  return result;
}
console.log(nonrep())
}
arr1(arr);
