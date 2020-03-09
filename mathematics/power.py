//Given a number N, check whether it is a power of 2.
N=int(input())
C=N**2
R=N%C
if(R%2==0):
	print("yes")
else:
	print("no")
