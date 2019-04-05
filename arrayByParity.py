# Given an array A of non-negative integers,
# return an array consisting of all the even elements of
# A, followed by all the odd elements of A.

# You may return any answer array that satisfies this
# condition.


def sortArr(arr):
    even = []
    odd = []
    for item in arr:
        if item % 2 == 0:
            even.append(item)
        else:
            odd.append(item)
    return even + odd


arr = [3, 1, 2, 4]
print(sortArr(arr))
