// 876. Middle of the Linked List
// Problem Source:  https://leetcode.com/problems/middle-of-the-linked-list/

var middleNode = function (head) {
  let slow = head; // Create a slow pointer
  let fast = head; // Create a fast pointer
  while (fast && fast.next) {
    // While the fast pointer and the next node of the fast pointer are not null
    slow = slow.next; // Move the slow pointer to the next node
    fast = fast.next.next; // Move the fast pointer to the next node of the next node
  }
  return slow; // Return the slow pointer
};

// Time Complexity: O(n)
// Space Complexity: O(1)

//  approach using set
var middleNode = function (head) {
  let set = new Set();
  let node = head;
  while (node) {
    set.add(node);
    node = node.next;
  }
  return [...set][Math.floor(set.size / 2)];
};

//  approach using map
var middleNode = function (head) {
  let map = new Map();
  let node = head;
  let i = 0;
  while (node) {
    map.set(i, node);
    node = node.next;
    i++;
  }
  return map.get(Math.floor(map.size / 2));
};
