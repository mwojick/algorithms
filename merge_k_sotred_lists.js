// Merge K Sorted Lists
// LeetCode (Hard)
// Amazon, Google, Facebook, LinkedIn

let Heap = require("./heap");

function Node(x) {
  this.val = x;
  this.next = null;
}

const mergeKLists = lists => {
  let minHeap = new Heap();
  for (let head of lists) {
    while (head !== null) {
      minHeap.add(head.val);
      head = head.next;
    }
  }
  let dummy = new Node(-1);
  let head = dummy;
  while (!minHeap.isEmpty()) {
    head.next = new Node(minHeap.pop());
    head = head.next;
  }
  return dummy.next;
};

let node1 = new Node(5);
node1.next = new Node(3);
node1.next.next = new Node(4);

let test1 = mergeKLists([node1]);
console.log(test1.val);
console.log(test1.next.val);
console.log(test1.next.next.val);
