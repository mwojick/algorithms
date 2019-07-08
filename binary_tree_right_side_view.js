// Binary Tree Right Side View
// LeetCode (Medium)
// Facebook, Amazon, Google, Adobe, Microsoft

function Node(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

const rightSideView = root => {
  let visibleValues = [];
  if (!root) return visibleValues;

  let queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let current = queue.shift();
      if (i === length - 1) {
        visibleValues.push(current.val);
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  return visibleValues;
};

let root = new Node(5);
root.right = new Node(6);
root.left = new Node(7);
root.left.left = new Node(9);

let test1 = rightSideView(root);
console.log("test1:", test1);
