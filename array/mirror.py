#Given 2 arrays print 'yes' if they are mirror images of each other,otherwise 'no'
n=int(input())
d=list(map(int,input().split()))
c=list(map(int,input().split()))
sum=0
a=d[::-1]
for i in range(len(d)):
	if(a[i]==c[i]):
		sum+=1
if(sum==len(d)):
	print("yes")
else:
	print("no")
