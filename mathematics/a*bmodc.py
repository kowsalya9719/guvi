#Given 3 numbers a,b,c print a*b mod c.
def Numbers():
	A,B,C=map(int, input().split())
	x=(A*B)%C
	return x
res=Numbers()
print(res)
