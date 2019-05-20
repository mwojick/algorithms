// lowest common ancestor of a binary search tree
// LeetCode
// Amazon

// given a BST, find the lowest common ancestor (LCA)
// of two given nodes in the BST
const lca = (root, p, q) => {
  if (p.val < root.val && q.val < root.val) {
    return lca(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lca(root.right, p, q);
  } else {
    return root;
  }
};

let test = lca(
  { val: 5, left: { val: 2 }, right: { val: 8 } },
  { val: 2 },
  { val: 8 }
);

console.log("test:", test);

// with generic binary tree
const lcaBinaryTree = (root, p, q) => {
  if (!root || root.val === p.val || root.val === q.val) return root;
  let left = lcaBinaryTree(root.left, p, q);
  let right = lcaBinaryTree(root.right, p, q);
  if (left && right) return root;
  return left ? left : right;
};

let test2 = lca(
  { val: 11, left: { val: 21 }, right: { val: 8 } },
  { val: 21 },
  { val: 8 }
);

console.log("test2:", test2);
