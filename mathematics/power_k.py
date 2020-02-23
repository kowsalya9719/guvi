#Given 2 numbers N and K.check if N is a power of K.Print 'yes' if it is a power of k otherwise print 'no'
N,K=map(int,input().split())
K=K**2
if(K==N):
 	print("yes")
else:
	print("no")

