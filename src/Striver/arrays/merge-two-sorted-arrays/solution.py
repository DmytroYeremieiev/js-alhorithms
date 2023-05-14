from typing import List

def merge(nums1: List[int], m: int, nums2: List[int], n: int) -> None:
    count = 0
    i1 = 0
    i2 = 0
    res = []
    while (count < n + m):
        count += 1

        if i2 < n and i1 < m:
            if nums2[i2] < nums1[i1]:
                res.append(nums2[i2])
                i2 += 1
            else:
                res.append(nums1[i1])
                i1 += 1
            continue

        if i2 < n:
            res.append(nums2[i2])
            i2 += 1
            continue

        if i1 < m:
            res.append(nums1[i1])
            i1 += 1
            continue

    for i in range(m + n): 
        nums1[i] = res[i]
    return res
    
res = merge(nums1 = [1,2,3], m = 3, nums2 = [2,5,6], n = 3)
if res != [1,2,2,3,5,6]:
    print('[ERROR] in ', "merge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3), instead: ", res)

    
res = merge(nums1 = [1, 4, 8, 10], m = 4, nums2 = [2, 3, 9], n = 3)
if res != [1, 2, 3, 4, 8, 9, 10]:
    print('[ERROR] in ', "merge(nums1 = [1, 4, 8, 10], m = 4, nums2 = [2, 3, 9], n = 3), instead: ", res)

res = merge(nums1 = [2, 8, 10], m = 3, nums2 = [1, 3, 4], n = 3)
if res != [1,2,3,4,8,10]:
    print('[ERROR] in ', "merge(nums1 = [1, 4, 8, 10], m = 4, nums2 = [2, 3, 9], n = 3), instead: ", res)


