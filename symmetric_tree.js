// Symmetric Tree
// LeetCode (Easy)
// Amazon, Google, LinkedIn

function Node(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

const isSymmetric = root => {
  if (!root) return true;

  return isSym(root.left, root.right);
};

const isSym = (left, right) => {
  if (!left || !right) return left === right;
  if (left.val !== right.val) return false;
  return isSym(left.left, right.right) && isSym(left.right, right.left);
};

let root = new Node(5);
root.right = new Node(3);
root.left = new Node(3);

let test1 = isSymmetric(root);
console.log("test1:", test1);
