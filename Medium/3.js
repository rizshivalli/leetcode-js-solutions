// 3. Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function (s) {
  let max = 0; // Initialize the max variable
  let start = 0; // Initialize the start variable
  let end = 0; // Initialize the start and end variables
  let map = new Map(); // Initialize the map
  while (end < s.length) {
    // While the end is less than the length of the string
    if (map.has(s[end])) {
      // If the map has the character at the end index
      start = Math.max(start, map.get(s[end]) + 1); // Set the start to the max of the start and the value of the character at the end index plus 1
    }
    map.set(s[end], end); // Set the character at the end index to the end index
    max = Math.max(max, end - start + 1); // Set the max to the max of the max and the end minus the start plus 1
    end++; // Increment the end
  }
  return max; // Return the max
};
