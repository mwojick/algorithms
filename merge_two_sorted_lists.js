// Merge Two Sorted Lists
// LeetCode (Easy)
// Amazon, Google, Facebook, Uber

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const mergeTwoLists = (l1, l2) => {
  let dummy = new Node(-1);
  let head = dummy;
  while (l1 && l2) {
    if (l1.value < l2.value) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }

  if (l1) {
    dummy.next = l1;
  } else {
    dummy.next = l2;
  }

  return head.next;
};

let node1 = new Node(1);
node1.next = new Node(2);
node1.next.next = new Node(4);

let node2 = new Node(1);
node2.next = new Node(5);
node2.next.next = new Node(6);

let test1 = mergeTwoLists(node1, node2);
while (test1) {
  console.log(test1.value);
  test1 = test1.next;
}
