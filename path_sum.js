// path sum
// LeetCode
// Amazon

const hasPathSum = (root, sum) => {
  if (!root) return false;
  if (!root.left && !root.right && sum - root.val === 0) return true;
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};

let root = {
  val: 5,
  right: {
    val: 3
  },
  left: {
    val: 2
  }
};

let hasPath = hasPathSum(root, 8);
console.log(hasPath);
