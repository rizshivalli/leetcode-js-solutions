// 1207. Unique Number of Occurrences

// Problem Source : https://leetcode.com/problems/unique-number-of-occurrences/

var uniqueOccurrences = function (arr) {
  let map = new Map(); // Create a map
  let set = new Set(); // Create a set

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      // If the map already has the value
      map.set(arr[i], map.get(arr[i]) + 1); // Increment the value by 1
    } else {
      map.set(arr[i], 1); // Else, set the value to 1
    }
  }

  for (let [key, value] of map) {
    // Iterate through the map
    if (set.has(value)) {
      // If the set already has the value
      return false; // Return false
    } else {
      set.add(value); // Add the value to the set
    }
  }

  return true;
};
