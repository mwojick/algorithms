// Path Sum II
// LeetCode (Medium)
// Amazon, LinkedIn, Quora

function Node(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

const pathSum = (root, sum) => {
  let paths = [];
  findPaths(root, sum, [], paths);
  return paths;
};

const findPaths = (root, sum, current, paths) => {
  if (!root) return;

  current.push(root.val);
  if (root.val === sum && !root.left && !root.right) {
    paths.push(current);
    return;
  }
  findPaths(root.left, sum - root.val, current.slice(), paths);
  findPaths(root.right, sum - root.val, current.slice(), paths);
};

let root = new Node(5);
root.right = new Node(3);
root.left = new Node(3);

let test1 = pathSum(root, 8);
console.log("test1:", test1);
