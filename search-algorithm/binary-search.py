def binarySearch(arr, value):
    left = 0
    right = len(arr) - 1

    while left <= right:
        middle = (left + right) // 2

        if arr[middle] == value:
            return middle
        elif arr[middle] < value:
            left = middle + 1
        elif arr[middle] > value:
            right = middle - 1
        
result = binarySearch([1,2,3,4,5,6,7,8,9,10], 7)
print(result)