// Reverse Linked List
// LeetCode (Easy)
// Amazon, Google

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const reverse = head => {
  let prev = null;
  let next = null;
  while (head !== null) {
    next = head.next;
    head.next = prev;

    prev = head;
    head = next;
  }

  return prev;
};
