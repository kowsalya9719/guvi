#Given a number N and an array of N elements,sort the array in increasing order and print the original indices of the elements present in sorted array
N=int(input())
n1=list(map(int,input().split()))
n2=sorted(n1)
a=[]
for i in range(N):
    for j in range(N):
        if(n2[i]==n1[j]):
             a.append(j+1)
print(*a) 
