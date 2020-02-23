#Given a number N check its a power of 2
n=int(input())
sum=0
for i in range(1,100):
	ans=2**i
	if(n==ans):
		sum=sum+1
if(sum>0):
	print("yes")
else:
	print("no")
