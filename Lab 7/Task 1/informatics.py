# # Input/Output 
# # A
# import math
# a = int(input())
# b = int(input())

# c = math.sqrt(a**2 + b**2)
# print(c)


# # B
# a = int(input())

# print(f"The next number for the number {a} is {a+1}.")
# print(f"The previous number for the number {a} is {a-1}.")


# # C & D
# a = int(input())
# b = int(input())

# print(int(b/a))
# print(int(b%a))


# # E
# a = int(input())
# b = int(input())

# if a > 0:
#     print(a*b - 109)
# else:
#     print(109 + a*b)



# Conditional statements
# # A
# a = int(input())
# b = int(input())
# print(max(a,b))


# # B
# a = int(input())
# if a%4==0:
#     print("YES")
# elif a%100==0 and a%400==0:
#     print("YES")
# else:
#     print("NO")


# # D
# a = int(input())
# if a == 0:
#     print("0")
# elif a > 0:
#     print("1")
# else:
#     print("-1")


# # E
# a = int(input())
# b = int(input())
# if a == b:
#     print("0")
# elif a > b:
#     print("1")
# else:
#     print("2")



# # Loops i

# # A
# a = int(input())
# b = int(input())

# for i in range(a, b):
#     if(i % 2 == 0):
#         print(i, end=" ")


# # B
# a = int(input())
# b = int(input())
# c = int(input())
# d = int(input())

# for i in range(a, b):
#     if(i % d == c):
#         print(i, end=" ")


# # C
# import math
# a = int(input())
# b = int(input())

# for i in range(a, b):
#     c = int(math.sqrt(i))
#     if c*c==i:
#         print(i, end=" ")


# # G
# a = int(input())

# for i in range(2, a):
#     if(a % i == 0):
#         print(i)
#         break
    

# # H
# a = int(input())

# for i in range(1, a + 1):
#     if(a % i == 0):
#         print(i, end=" ")


# # I
# a = int(input())
# cnt = 0

# for i in range(1, a + 1):
#     if(a % i == 0):
#         cnt+=1
# print(cnt)    

# # J
# a = input()
# nums = list(map(int, a.split()))
# cnt = 0

# for i in nums:
#     cnt += i 
# print(cnt)


# # K
# a = int(input())
# cnt = 0

# for i in range(1, a + 1):
#     b = int(input())
#     cnt += b 
# print(cnt)



# Loops ii

# # A
# import math
# a = int(input())
# b = 1

# while b <= a:
#     c = int(math.sqrt(b))
#     if c*c==b:
#         print(b)
#     b += 1


# # B
# a = int(input())
# b = 2
# while b <= a:
#     if(a % b == 0):
#         print(b)
#         break
#     b += 1


# # C
# a = int(input())
# b = 0

# while 2**b < a:
#     print(2**b, end=" ")
#     b += 1


# # E
# a = int(input())
# b = 0

# while 2**b < a:
#     b += 1
# print(b)


# Arrays

# # A
# a = int(input())
# s = input()
# nums = list(map(int, s.split()))

# for i in range(0, a, 2):
#     print(nums[i], end=" ")


# # B
# a = int(input())
# s = input()
# nums = list(map(int, s.split()))

# for i in range(0, a):
#     if(nums[i] % 2 == 0):
#         print(nums[i], end=" ")


# # C
# a = int(input())
# s = input()
# nums = list(map(int, s.split()))
# cnt = 0

# for i in range(0, a):
#     if(nums[i] > 0):
#         cnt += 1
# print(cnt)


# # D
# a = int(input())
# s = input()
# nums = list(map(int, s.split()))
# cnt = 0

# for i in range(0, a):
#     if(nums[i + 1] > nums[i]):
#         cnt += 1
# print(cnt)
    

# # E
# a = int(input())
# s = input()
# nums = list(map(int, s.split()))


# for i in range(0, a - 1):
#     if((nums[i] > 0 and nums[i + 1] > 0) or (nums[i] < 0 and nums[i + 1] < 0)):
#         print("YES")
#         return 
# print("NO")


# # G
# a = int(input())
# s = input()
# nums = list(map(int, s.split()))


# for i in range(a - 1, 0, - 1):
#     print(nums[i])



# Functions

# # A
# def min_val(a, b, c, d):
#     return min(min(a, b), min(c, d))

# a = int(input())
# b = int(input())
# c = int(input())
# d = int(input())

# print(min_val(a, b, c, d))


# # B

# def pow(a, b):
#     return a**b

# a = int(input())
# b = int(input())

# print(pow(a, b))


# # C

# def ints(a, b):
#     return a ^ b

# a = int(input())
# b = int(input())

# print(ints(a, b))
