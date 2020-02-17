#Given 2 numbers N and M add both the numbers and check whether the sum is odd or even.

A,B=map(float,input().split())
c=A+B
if(c%2==0):
    print("even")
else:
    print("odd")

