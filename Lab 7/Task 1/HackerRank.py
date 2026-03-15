# # 1
# a = int(input())

# def is_leap_year(year):
#   return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

# print(is_leap_year(a))


# # 2
# s = input()

# for i in s:
#     if i.islower():
#         print(i.upper(), end="")
#     else:
#         print(i.lower(),end="")


# # 3
# s = input()
# a = int(input())
# c = 0

# for i in s:
#     print(i, end="")
#     c += 1
#     if c == a:
#         c = 0
#         print()


# # 4
# a = input()
# b = input()
# n = list(map(int, a.split()))
# m = list(map(int, b.split()))


# for i in n:
#     for j in m:
#         print(f"({i}, {j})", end=" ")



# # 5
# a = input()
# n = set(map(int, a.split()))
# cnt = 0

# for i in n:
#     cnt += i

# print(cnt/len(n))


# # 6
# a = int(input())
# di = {}

# for i in range(1, a + 1):
#     b = input()
#     n = list(b.split())
#     di[n[0]] = n[1]

# print(di)


# # 7
# a = int(input())
# b = int(input())
# c = int(input())

# print(pow(a, b, c))


# # 8
# a = input()
# b = input()

# n = set(map(int, a.split()))
# m = set(map(int, b.split()))

# print(n.symmetric_difference(m))


# # 9
# a = input()
# n = list(map(int, a.split()))

# print(any(i < 0 for i in n))
# print(all(i < 0 for i in n))

# # 10
# a = input()
# b = input()

# n = set(map(int, a.split()))
# m = set(map(int, b.split()))

# print(n.union(m))