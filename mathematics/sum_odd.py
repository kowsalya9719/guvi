#A number is given as input. Find the odd digits in the number, add them and find if the sum is odd or not. If even print E, if odd print O.
N=int(input())
sum=0
while(N>0):
    n=N%10
    sum=sum+n
    N=N//10
c=sum
if(c%2==0):
    print("E")
else:
    print("O")

    
