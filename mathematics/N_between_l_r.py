#Given 3 numbers N , L and R. Print 'yes' if N is between L and R else print 'no'.
N=int(input())
L,R=map(int,input().split())
if(L<N and N<R):
    print("yes")
else:
    print("no")
