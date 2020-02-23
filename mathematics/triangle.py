#Given 3 numbers A,B,C process and print 'yes' if they can form the sides of a triangle otherwise print 'no'.
def checkValidity(a, b, c):  
      
    # check condition  
    if (a + b <= c) or (a + c <= b) or (b + c <= a) : 
        return False
    else: 
        return True        
  
# driver code  
a,b,c=input().split()
a,b,c=[int(a),int(b),int(c)]

if checkValidity(a, b, c): 
    print("yes")  
else: 
    print("no")
