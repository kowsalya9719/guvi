#Size of the array followed by the elements of the array.
n=int(input())
a=list(map(int,input().split()))
b=sorted(a)
print(b[len(b)-2])
