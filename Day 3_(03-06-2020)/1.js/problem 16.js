Problem:
Write a function called “getLengthOfWord”.
Given a word, “getLengthOfWord” returns the length of the given word.
Input:
getLengthOfWord(“GUVI”);
getLengthOfWord(“”);
getLengthOfWord();
getLengthOfWord(9);
Output:
4
0
-1
-1

function getLengthOfWord(word1){
 if(typeof(word1)=="String")
 {
 return word1.length
 }
 else
 {
 return -1
 }
 }
 var res=getLengthOfWord(word1)
 console.log(res);
