#First Line contains positive integer N denoting the length of string.The second line of input contains the string S.
N=int(input())
str=input()
result=''.join(sorted(str))
print(result)
