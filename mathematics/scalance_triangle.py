#Given 3 numbers A,B,C print 'yes' if they can form the sides of a scalene triangle else print 'no'

A,B,C=map(int,input().split())
if(A!=B and B!=C and C!=A):
    print("yes")
else:
	print("no")
