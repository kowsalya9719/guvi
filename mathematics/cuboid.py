#Write a program to calculate the total surface area and volume of cuboid. Input contains three space separated positive integers L, B, H denoting the length, width and height of cuboid respectively
L,B,H=map(int,input().split())
area=2*L*H+2*L*B+2*B*H
volume=L*B*H
print(area,volume)
