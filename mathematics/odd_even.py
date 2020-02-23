#Given 2 numbers N,M. Find their difference and check whether it is even or odd.
A,B=map(float,input().split())
d=A-B
if(d%2==0):
	print("even")
else:
	print("odd")
