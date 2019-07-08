// K Closest Points to Origin
// LeetCode (Easy)
// Amazon, Google, Facebook

let Heap = require("./heap");

const kClosest = (points, k) => {
  let maxHeap = new Heap(
    (a, b) => a[0] * a[0] + a[1] * a[1] > b[0] * b[0] + b[1] * b[1]
  );
  for (let point of points) {
    maxHeap.add(point);
    if (maxHeap.size() > k) {
      maxHeap.pop();
    }
  }

  let result = [];
  while (k-- > 0) {
    result[k] = maxHeap.pop();
  }
  return result;
};

let test1 = kClosest([[1, 3], [-2, 2]], 1);
console.log("test1:", test1);
