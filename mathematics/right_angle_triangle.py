#Given 3 numbers A,B,C print 'yes' if they can form the sides of a right angled triangle,otherwise 'no'.
A,B,C=map(int,input().split())
c=A**2+B**2
d=C**2
if(c==d):
	print("yes")
else:
	print("no")

