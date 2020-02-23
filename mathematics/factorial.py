#Given a number N, find the factorial of N.
num1=int(input())
fact=1
for i in range(1,num1+1):
    fact=fact*i
print(fact)
