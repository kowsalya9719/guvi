#Given a string S, print 'yes' if it is a palindrome or 'no' if it is not a palindrome.
Sample Testcase :
S=input()
S=S.casefold()
rs=reversed(S)
if list(S)==list(rs):
	print("yes")
else:
	print("no")
