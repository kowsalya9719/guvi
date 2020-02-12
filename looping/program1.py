# program for grade mark

mark=int(input("enter the mark:"))
if(mark>=90):
    print("A grade")
elif(mark>=70 and mark<=89):
    print("B grade")
elif(mark>=50 and mark<=69):
    print("c grade")
elif(mark>=30 and mark<=49):
    print("D grade")
else:
    print("Fail")
