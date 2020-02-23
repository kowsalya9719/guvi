#Given base(B) and height(H) of a triangle find its area
def triangle():
    B,H=map(int,input().split())
    area=0.5*B*H
    return area
area=triangle()
print(area)
