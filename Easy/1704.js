// //1704. Determine if String Halves Are Alike

// Problem source : https://leetcode.com/problems/determine-if-string-halves-are-alike/

var halvesAreAlikeUsingArray = function (s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]; // Create an array of vowels
  let count = 0; // Create a count variable

  for (let i = 0; i < s.length / 2; i++) {
    // Iterate through the first half of the string
    if (vowels.includes(s[i])) {
      // If the array of vowels includes the current character
      count++; // Increment the count by 1
    }
  }

  for (let i = s.length / 2; i < s.length; i++) {
    // Iterate through the second half of the string
    if (vowels.includes(s[i])) {
      // If the array of vowels includes the current character
      count--; // Decrement the count by 1
    }
  }

  return count === 0;
};

// solve using set
var halvesAreAlikeUsingSet = function (s) {
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]); // Create a set of vowels
  let count = 0;

  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.has(s[i])) {
      // If the set of vowels has the current character
      count++;
    }
  }

  for (let i = s.length / 2; i < s.length; i++) {
    if (vowels.has(s[i])) {
      // If the set of vowels has the current character
      count--;
    }
  }

  return count === 0;
};

// solve using regex
var halvesAreAlikeUsingRegex = function (s) {
  let count = 0;

  for (let i = 0; i < s.length / 2; i++) {
    if (/[aeiou]/i.test(s[i])) {
      // If the current character is a vowel
      count++;
    }
  }

  for (let i = s.length / 2; i < s.length; i++) {
    if (/[aeiou]/i.test(s[i])) {
      // If the current character is a vowel
      count--;
    }
  }

  return count === 0;
};
