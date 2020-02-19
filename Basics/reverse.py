#Given a string S consisting of 2 words reverse the order of two words 
s = input()
words = s.split(' ') 
string =[] 
for word in words: 
    string.insert(0, word) 
print(" ".join(string)) 
