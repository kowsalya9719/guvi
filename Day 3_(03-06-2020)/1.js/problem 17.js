Write a function called “isSameLength”.
Given two words, “isSameLength” returns whether the given words have the same length.
Input:
isSameLength(“GUVI”, “GEEK”);
Output:
true

function isSameLength(word1, word2){
 var count1=word1.length;
 var count2=word2.length;
 if(count1==count2)
 {
 return true
 }
 else
 {
 return false
 }
}
var res= isSameLength(word1, word2)
console.log(res);
