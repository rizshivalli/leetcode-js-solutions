// 1657. Determine if Two Strings Are Close

// Problem source : https://leetcode.com/problems/determine-if-two-strings-are-close/

var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    // If the two words are not the same length
    return false; // Return false
  }
  let word1Map = new Map(); // Create a map for word1
  let word2Map = new Map(); // Create a map for word2

  for (let i = 0; i < word1.length; i++) {
    // Iterate through word1
    if (word1Map.has(word1[i])) {
      // If the map has the current character
      word1Map.set(word1[i], word1Map.get(word1[i]) + 1); // Increment the count by 1
    } else {
      word1Map.set(word1[i], 1); // Otherwise, set the count to 1
    }
  }

  for (let i = 0; i < word2.length; i++) {
    // Iterate through word2
    if (word2Map.has(word2[i])) {
      // If the map has the current character
      word2Map.set(word2[i], word2Map.get(word2[i]) + 1); // Increment the count by 1
    } else {
      word2Map.set(word2[i], 1); // Otherwise, set the count to 1
    }
  }

  let word1MapValues = Array.from(word1Map.values()).sort((a, b) => a - b); // Create an array of the values of word1Map sorted in ascending order
  let word2MapValues = Array.from(word2Map.values()).sort((a, b) => a - b); // Create an array of the values of word2Map sorted in ascending order

  if (word1MapValues.length !== word2MapValues.length) {
    // If the two arrays are not the same length
    return false; // Return false
  }

  for (let i = 0; i < word1MapValues.length; i++) {
    // Iterate through the arrays
    if (word1MapValues[i] !== word2MapValues[i]) {
      // If the values at the current index are not the same
      return false; // Return false
    }
  }

  let word1MapKeys = Array.from(word1Map.keys()).sort(); // Create an array of the keys of word1Map sorted in ascending order
  let word2MapKeys = Array.from(word2Map.keys()).sort(); // Create an array of the keys of word2Map sorted in ascending order

  if (word1MapKeys.length !== word2MapKeys.length) {
    // If the two arrays are not the same length
    return false; // Return false
  }

  for (let i = 0; i < word1MapKeys.length; i++) {
    // Iterate through the arrays
    if (word1MapKeys[i] !== word2MapKeys[i]) {
      // If the keys at the current index are not the same
      return false; // Return false
    }
  }

  return true;
};
