def sum(arr):
    if len(arr) == 1:
        return arr[0]
    else:
        return arr[0] + sum(arr[1:])

def countElem(arr):
    if arr == []:
        return 0
    else:
        return 1 + countElem(arr[1:])

def searchMax(arr):
    if len(arr) == 2:
        return arr[0] if arr[0] > arr[1] else arr[1]
    subMax = searchMax(arr[1:])
    return arr[0] if arr[0] > subMax else subMax

def quicksort(arr):
    if len(arr) < 2:
        return arr
    else:
        pivot = arr[0]
        less = [i for i in arr[1:] if i < pivot]
        greater = [i for i in arr[1:] if i > pivot]
        return quicksort(less) + [pivot] + quicksort(greater)

testArr = [2, 8, 4, 3]
print(sum(testArr))
print(countElem(testArr))
print(searchMax(testArr))
print(quicksort(testArr))
