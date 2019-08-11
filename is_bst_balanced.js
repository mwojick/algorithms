class Node {
  constructor(value = 0, right = null, left = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

const isBSTBalanced = root => {
  if (!root) {
    return true;
  } else if (getDepth(root) === -1) {
    return false;
  } else {
    return true;
  }
};

const getDepth = node => {
  if (!node) {
    return 0;
  } else {
    let left = getDepth(node.left);
    let right = getDepth(node.right);

    if (left === -1 || right === -1) {
      return -1;
    }

    if (Math.abs(left - right) > 1) {
      return -1;
    }

    let maxDepth = left > right ? left : right;
    return maxDepth + 1;
  }
};

let four = new Node(4, null, null);

let three = new Node(3, null, four);

let one = new Node(1, three, null);
let two = new Node(2, null, null);

let root = new Node(0, one, two);

console.log(isBSTBalanced(root));
