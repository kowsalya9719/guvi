#First line contains the number of entries in the attendance register, followed by space separated values of attendance (‘P’ or ‘A’
def function(n,s):
	count=0
	for i in range(len(s)):
		if(s[i]=="P"):
			count+=1
	a=float(count/n)*100
	return(a)


n=int(input())
s=list(map(str,input().split()))
c=function(n,s)
if(c>25):
	print("Not Blacklisted")
else:
	print("Blacklisted")
