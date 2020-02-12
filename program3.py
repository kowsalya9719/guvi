#To print sum of odd number and sum of even numbers

al=[]
oddnumber=[]
evennumber=[]
l=int(input("length: "))
sumofeven=0
sumofodd=0
for i in range(0,1):
     a=int(input("enter the number: "))
     al.append(a)
     if((a%2)==0):
         evennumber.append(a)
         sumofeven=sumofeven + a
     else:
         oddnumber.append(a)
         sumofodd=sumofodd+a

print("all numbers list  : ",al)
print("odd numbers list  : ",oddnumber)
print("even numbers list  : ",evennumber)
print("all numbers list  : ",sumofeven)
print("all numbers list  : ",sumofodd)
    
