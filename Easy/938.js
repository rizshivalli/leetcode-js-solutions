// 938. Range Sum of BST

// Problem Source : https://leetcode.com/problems/range-sum-of-bst/

var rangeSumBST = function (root, L, R) {
  let sum = 0; // Initialize the sum variable
  let stack = [root]; // Initialize the stack with the root node
  while (stack.length) {
    // While the stack is not empty
    let node = stack.pop(); // Pop the last node from the stack
    if (node) {
      // If the node is not null
      if (node.val >= L && node.val <= R) {
        // If the node value is between L and R
        sum += node.val; // Add the node value to the sum
      }
      if (node.val > L) {
        // If the node value is greater than L
        stack.push(node.left); // Push the left node to the stack
      }
      if (node.val < R) {
        // If the node value is less than R
        stack.push(node.right); // Push the right node to the stack
      }
    }
  }
  return sum;
};

// Time Complexity: O(n)
// Space Complexity: O(n)

// Faster and more concise solution
var rangeSumBST = function (root, low, high) {
  if (!root) return 0; // If the root is null, return 0
  if (root.val < low) {
    // If the root value is less than low
    return rangeSumBST(root.right, low, high); // Return the rangeSumBST function with the right node as the root
  } else if (root.val > high) {
    // If the root value is greater than high
    return rangeSumBST(root.left, low, high); // Return the rangeSumBST function with the left node as the root
  } else {
    // If the root value is between low and high
    return (
      root.val +
      rangeSumBST(root.left, low, high) +
      rangeSumBST(root.right, low, high)
    ); // Return the root value plus the rangeSumBST function with the left node as the root plus the rangeSumBST function with the right node as the root
  }
};

// Time Complexity: O(n)
// Space Complexity: O(n)
