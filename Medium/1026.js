// 1026. Maximum Difference Between Node and Ancestor

// Problem Source https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/

var maxAncestorDiffUsingMap = function (root) {
  if (root == null) {
    return 0;
  } // If the root is null, return 0

  let result = 0; // Initialize the result variable
  helper(root, root.val, root.val); // Call the helper function with the root, the root value, and the root value

  function helper(root, max, min) {
    // Initialize the helper function with the root, the max, and the min
    if (root === null) {
      result = Math.max(result, max - min); // Set the result to the max of the result and the max minus the min
      return; // Return
    }

    max = Math.max(max, root.val); // Set the max to the max of the max and the root value
    min = Math.min(min, root.val); // Set the min to the min of the min and the root value

    helper(root.left, max, min); // Call the helper function with the root left, the max, and the min
    helper(root.right, max, min); // Call the helper function with the root right, the max, and the min
  }

  return result; // Return the result
};
