// 872. Leaf-Similar Trees

// problem source: https://leetcode.com/problems/leaf-similar-trees/

var leafSimilar = function (root1, root2) {
  let leaf1 = []; // Initialize the leaf1 array
  let leaf2 = []; // Initialize the leaf2 array

  function traverse(node, leaf) {
    // Traverse the tree
    if (node.left === null && node.right === null) {
      // If the node is a leaf
      leaf.push(node.val); // Push the node value to the leaf array
    }
    if (node.left) {
      // If the node has a left node
      traverse(node.left, leaf); // Traverse the left node
    }
    if (node.right) {
      // If the node has a right node
      traverse(node.right, leaf); // Traverse the right node
    }
  }

  traverse(root1, leaf1); // Traverse the tree
  traverse(root2, leaf2); // Traverse the tree

  return leaf1.toString() === leaf2.toString(); // Return true if the leaf1 array is equal to the leaf2 array
};

// Time Complexity: O(n)
// Space Complexity: O(n)
