// 451. Sort Characters By Frequency

// Problem Source : https://leetcode.com/problems/sort-characters-by-frequency/

var frequencySort = function (s) {
  let map = new Map(); // Create a map

  for (let i = 0; i < s.length; i++) {
    // Iterate through the string
    if (map.has(s[i])) {
      // If the map has the current character
      map.set(s[i], map.get(s[i]) + 1); // Increment the count by 1
    } else {
      map.set(s[i], 1); // Otherwise, set the count to 1
    }
  }

  let mapArray = Array.from(map); // Create an array of the map

  mapArray.sort((a, b) => b[1] - a[1]); // Sort the array in descending order by the count

  let result = ""; // Create a variable to store the result

  for (let i = 0; i < mapArray.length; i++) {
    // Iterate through the array
    result += mapArray[i][0].repeat(mapArray[i][1]); // Add the character repeated by the count to the result
  }

  return result;
};

// time complexity : O(n log n)

// space complexity : O(n)
