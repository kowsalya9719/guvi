#Given a number N, print its reverse.
N=int(input())
reverse=0
while(N>0):
	reminder=N%10
	reverse=(reverse*10)+reminder
	N=N//10
print(reverse)
