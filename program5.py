# To find prime number and non prime number:

#taking inputs from user
number =int(input("enter any number:"))
primenumber=[]
nonprimenumber=[]
for i in range(0,number):
    a=int(input("enter : "))
    if(a>1):
        for i in range(2,a//2+1):
            if((a%i)==0):
               nonprimenumber.append(a)
               break
        else:
            primenumber.append(a)

print("prime number list : ",primenumber)
print("non prime number list : ",nonprimenumber)
