#Given 2 numbers N,M. Print 'yes' if their product is a perfect square else print 'no'.


import math

n,m=map(float,input().split())
p=n*m
sr=math.sqrt(p)
d=sr-math.floor(sr)
if(d==0):
    print("yes")
else:
    print("no")
