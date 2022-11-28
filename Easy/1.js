// 1. Two Sums

// Problem Source: https://leetcode.com/problems/two-sum/

const twoSums = (nums, target) => {
  const n = nums.length; // Length of nums

  const map = {}; // Map of nums

  for (let i = 0; i < n; ++i) {
    // Loop through nums
    const num = nums[i]; // Current num

    if (map[target - num] != null) return [map[target - num], i]; // If target - num exists in map, return indices

    map[num] = i; // Add num to map
  }

  return []; // Return empty array
};

// Time Complexity: O(n) - Loop through nums
// Space Complexity: O(n) - Create map
