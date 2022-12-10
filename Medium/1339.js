// 1339. Maximum Product of Splitted Binary Tree

// Problem Source https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxProduct = function (root) {
  if (root == null) {
    return 0; // If the root is null, return 0
  }

  let subSums = []; // Initialize the subSums array
  let totalSum = (function dfs(node) {
    // Initialize the totalSum variable with the dfs function
    if (node == null) {
      // If the node is null
      return 0;
    }

    let sum = node.val + dfs(node.left) + dfs(node.right); // Set the sum to the node value plus the dfs function with the node left and the dfs function with the node right
    subSums.push(sum); // Push the sum to the subSums array
    return sum; // Return the sum
  })(root);

  let maxProd = 0; // Initialize the maxProd variable
  for (let subSum of subSums) {
    // For each subSum in the subSums array
    maxProd = Math.max(maxProd, subSum * (totalSum - subSum)); // Set the maxProd to the max of the maxProd and the subSum times the totalSum minus the subSum
  }

  return maxProd % (1e9 + 7); // Return the maxProd modulo 1e9 plus 7
};
