
def bsearch(arr, target)
  return nil if arr.length == 0

  mid_idx = arr.length / 2
  mid = arr[mid_idx]

  if mid == target
    return mid_idx
  elsif mid > target
    return bsearch(arr[0...mid_idx], target)
  else
    res = bsearch(arr[mid_idx + 1..-1], target)
    return res ? res + mid_idx + 1 : nil
  end
end

def bsearch_findall(arr, target)
  idx = bsearch(arr, target)
  result = []

  curr_idx = idx
  while target == arr[curr_idx] && curr_idx >= 0
    result.unshift(curr_idx)
    curr_idx -= 1
  end

  curr_idx = idx + 1
  while target == arr[curr_idx] && curr_idx < arr.length
    result.push(curr_idx)
    curr_idx += 1
  end

  result
end

if __FILE__ == $0
  a1 = [1, 2, 2, 2, 3, 4, 6, 8, 12, 35]
  a2 = [1, 2, 2, 2, 3, 4, 6, 8, 12, 12, 12, 35]
  # a3 = [1,2,2,2,3,4,6,8,12,35,35,35,35,40]
  a3 = [1, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4]

  a4 = [1, 2, 3, 4]
  p bsearch_findall(a1, 2)
  p bsearch_findall(a2, 12)
  p bsearch_findall(a3, 4)

  # p bsearch_findall(a4,1)
  # p bsearch_findall(a4,2)
  # p bsearch_findall(a4,3)
  # p bsearch_findall(a4,4)
end
