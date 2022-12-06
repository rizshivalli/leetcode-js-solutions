// 328. Odd Even Linked List

// Problem Source:  https://leetcode.com/problems/odd-even-linked-list/

var oddEvenList = function (head) {
  if (!head) return null; // If the head is null, return null
  let odd = head; // Create an odd pointer
  let even = head.next; // Create an even pointer
  let evenHead = even; // Create an evenHead pointer
  while (even && even.next) {
    // While the even pointer and the next node of the even pointer are not null
    odd.next = even.next; // Set the next node of the odd pointer to the next node of the even pointer
    odd = odd.next; // Move the odd pointer to the next node
    even.next = odd.next; // Set the next node of the even pointer to the next node of the odd pointer
    even = even.next; // Move the even pointer to the next node
  }
  odd.next = evenHead; // Set the next node of the odd pointer to the evenHead pointer
  return head; // Return the head pointer
};

// Time Complexity: O(n)
// Space Complexity: O(1)
