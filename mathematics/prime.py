#Given a number N, check whether it is prime or not.Print 'yes' if it is prime else print 'no
n=int(input())
if(n>>1):
	for i in range(2,n):
		if(n%i==0):
			print("no")
			break
	else:
		print("yes")
else:
	print("yes")
